<?php

/*
  Plugin Name: MarcTV Video Embed
  Plugin URI: http://www.marctv.de/blog/2010/08/25/marctv-wordpress-plugins/
  Description: Loads an image with play icon instead of an embed code which is only embedded after the image has been clicked. Saves loading time and bandwidth. And it has build in google analytic tracking events and is responsive, too!
  Version: 3.5.1
  Author: MarcDK
  Author URI: http://www.marctv.de
  License: GPL2
 */

function add_marctv_video_scripts() {
  wp_enqueue_style(
      "jquery.marctv_video", WP_PLUGIN_URL . "/marctv-jquery-video-embed/jquery.marctv-video.css", false, "3.5.1");

  wp_enqueue_script(
      "jquery.marctv_video", WP_PLUGIN_URL . "/marctv-jquery-video-embed/jquery.marctv-video.js", array("jquery"), "3.5.1", true);
}

function change_video_link($html, $url, $attr) {
  if (strpos($url, 'youtube') !== false OR strpos($url, 'vimeo') !== false) {
    if (isset($attr['title'])) {
      return '<a class="embedvideo" href="' . $url . '">' . $attr['title'] . '</a>';
    } else {
      return '<a class="embedvideo" href="' . $url . '">Video</a>';
    }
  } else {
    return $html;
  }
}

if (!is_admin()) {
  add_filter('embed_oembed_html', 'change_video_link', 10, 3);
  add_action('wp_print_styles', 'add_marctv_video_scripts');
}
?>
