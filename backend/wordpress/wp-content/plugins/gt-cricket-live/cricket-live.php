<?php
/* 
Plugin Name: Cricket Live 
Plugin URI: https://gyantech.com 
Description: Declares a plugin that will create a custom post type displaying cricket live scoreboard. 
Version: 1.0 
Author: Kamran Ghyan
Author URI: https://gyantech.com 
License: GPLv2 
*/

add_action( 'init', 'create_cricket' );

function create_cricket() {
	register_post_type( 'cricket',
		array(
			'labels' => array(
				'name' => 'Cricket Matches',
				'singular_name' => 'Cricket Matches',
				'add_new' => 'Add New',
				'add_new_item' => 'Add New Cricket Match',
				'edit' => 'Edit',
				'edit_item' => 'Edit Cricket Match',
				'new_item' => 'New Cricket Match',
				'view' => 'View',
				'view_item' => 'View Cricket Match',
				'search_items' => 'Search Cricket Match',
				'not_found' => 'No Cricket Match found',
				'not_found_in_trash' => 'No Cricket Match found in Trash',
				'parent' => 'Parent Cricket Match'
			),
            'hierarchical' => true, # set to false if you don't want parent/child relationships for the entries
            'show_in_graphql' => true, # Set to false if you want to exclude this type from the GraphQL Schema
            'graphql_single_name' => 'cricket', 
            'graphql_plural_name' => 'crickets', # If set to the same name as graphql_single_name, the field name will default to `all${graphql_single_name}`, i.e. `allDocument`.
            'public' => true, # set to false if entries of the post_type should not have public URIs per entry
            'publicly_queryable' => true, # Set to false if entries should only be queryable in WPGraphQL by authenticated requests
			'public' => true,
			'menu_position' => 15,
			// 'supports' => array( 'title', 'editor', 'comments', 'thumbnail', 'custom-fields' ),
			'taxonomies' => array( '' ),
			// 'menu_icon' => plugins_url( 'images/image.png', __FILE__ ),
			'has_archive' => true
		)
	);
}



//hook into the init action and call create_book_taxonomies when it fires
  
add_action( 'init', 'create_hierarchical_taxonomy', 0 );
  
//create a custom taxonomy name it subjects for your posts
  
function create_hierarchical_taxonomy() {
  
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
  
  $labels = array(
    'name' => _x( 'Categories', 'taxonomy general name' ),
    'singular_name' => _x( 'Category', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Categories' ),
    'all_items' => __( 'All Categories' ),
    'parent_item' => __( 'Parent Category' ),
    'parent_item_colon' => __( 'Parent Categories:' ),
    'edit_item' => __( 'Edit Categories' ), 
    'update_item' => __( 'Update Category' ),
    'add_new_item' => __( 'Add New Category' ),
    'new_item_name' => __( 'New Category Name' ),
    'menu_name' => __( 'Categories' ),
  );    
  
// Now register the taxonomy
  register_taxonomy('categories',array('cricket'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_in_rest' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'Category' ),
  ));
  
}

