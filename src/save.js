import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { selectedPost } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <RichText.Content
                tagName="p"
                className="dmg-read-more"
                value={`Read More: <a href="${selectedPost.link}">${selectedPost.title.rendered}</a>`}
            />
        </div>
    );
}
