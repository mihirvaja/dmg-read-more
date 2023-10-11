import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { selectedPost, posts } = attributes;
    const [search, setSearch] = useState('');
    const blockProps = useBlockProps();

    useEffect(() => {
        if (posts.length === 0) {
            async function fetchPosts() {
                try {
                    const response = await fetch('/wp-json/wp/v2/posts');
                    if (response.ok) {
                        const data = await response.json();
                        setAttributes({ posts: data });
                    }
                } catch (error) {
                    console.error('Error fetching posts', error);
                }
            }

            fetchPosts();
        }
    }, []);

    const filteredOptions = posts.filter((post) =>
        post.title.rendered.toLowerCase().includes(search.toLowerCase())
    );

    const options = filteredOptions.map((post) => ({
        label: post.title.rendered,
        value: post.id,
    }));

    const onChangeSelect = (value) => {
        const selectedPostObject = posts.find((post) => post.id === parseInt(value));
        setAttributes({ selectedPost: selectedPostObject });
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Post Options">
                    <TextControl
                        label="Search Posts"
                        value={search}
                        onChange={(newSearch) => setSearch(newSearch)}
                    />
                    <SelectControl
                        label="Select a Post"
                        value={selectedPost ? selectedPost.id.toString() : ''}
                        options={options}
                        onChange={onChangeSelect}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
			    {selectedPost ? 
			        <p>Read More: <a href={selectedPost.link}>{selectedPost.title.rendered}</a></p> 
			        : 
			        <p>Please select an option</p>
			    }
            </div>
        </>
    );
}
