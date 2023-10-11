<?php
/**
 * Plugin Name:       Dmg Read More
 * Description:       DMG Read More block for dmg::media task
 * Version:           0.1.0
 * Author:            Mihir Vaja
 * Text Domain:       dmg-read-more
 *
 * @package           create-block
 */

if ( defined( 'WP_CLI' ) && WP_CLI ) {
    require_once dirname( __FILE__ ) . '/dmg-read-more-search-CLI.php';
}

function create_block_dmg_read_more_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_dmg_read_more_block_init' );
