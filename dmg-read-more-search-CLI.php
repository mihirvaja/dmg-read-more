<?php

class dmg_read_more {

    public function search( $args, $assoc_args ) {

        $date_before = isset( $assoc_args['date-before'] ) ? $assoc_args['date-before'] : '';
        $date_after  = isset( $assoc_args['date-after'] )  ? $assoc_args['date-after']  : '';

        if ( empty( $date_before ) && empty( $date_after ) ) {
            $date_after = date( 'Y-m-d', strtotime( '-30 days' ) );
        }

        $date_query = array();

        if ( ! empty( $date_before ) ) {
            $date_query[] = array(
                'column' => 'post_date',
                'before' => $date_before,
            );
        }

        if ( ! empty( $date_after ) ) {
            $date_query[] = array(
                'column' => 'post_date',
                'after'  => $date_after,
            );
        }

        $args = array(
            'post_type'      => 'any',
            'posts_per_page' => -1,
            'post_status'    => 'publish',
            's'              => '<!-- wp:create-block/dmg-read-more',
            'date_query'     => $date_query,
        );

        $query = new WP_Query($args);
        $posts = $query->get_posts();

        if ( empty( $posts ) ) {
            WP_CLI::log( "No pages found with the 'create-block/dmg-read-more' block." );
            return;
        }

        WP_CLI::log( "Pages using the 'create-block/dmg-read-more' block:" );
        foreach ( $posts as $post ) {
            WP_CLI::line( $post->ID );
        }
    }
}

WP_CLI::add_command( 'dmg-read-more', 'dmg_read_more' );
