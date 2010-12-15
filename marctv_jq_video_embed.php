<?php

/*
  Plugin Name: MarcTV jQuery Video Embed
  Plugin URI: http://www.marctv.de/blog/2010/08/25/marctv-wordpress-plugins/
  Description: Embed youtube, vimeo and google videos by just adding a css class to a link which points to the url of a video page.
  Version: 1.6
  Author: Marc Tönsing
  Author URI: http://www.marctv.de
  License: GPL2
 */
if (!is_admin()) {
  wp_enqueue_style(
          "jquery.marctv_video", WP_PLUGIN_URL . "/marctv-jquery-video-embed/jquery.marctv_video.css",
          false, "1.0");

  wp_enqueue_script(
          "toolbox.flashembed", WP_PLUGIN_URL . "/marctv-jquery-video-embed/toolbox.flashembed.min.js",
          array("jquery"), "1.2.5", 0);

  wp_enqueue_script(
          "jquery.marctv_video", WP_PLUGIN_URL . "/marctv-jquery-video-embed/jquery.marctv_video.js",
          array("jquery", "toolbox.flashembed"), "1.0", 0);

  wp_enqueue_script(
          "jquery.marctv_videosetup", WP_PLUGIN_URL . "/marctv-jquery-video-embed/jquery.marctv_video_setup.js",
          array("jquery", "jquery.marctv_video", "toolbox.flashembed"), "", 1);
}
?>
