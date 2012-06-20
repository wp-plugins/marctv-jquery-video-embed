<?php

/*
  Plugin Name: MarcTV Video Embed
  Plugin URI: http://www.marctv.de/blog/2010/08/25/marctv-wordpress-plugins/
  Description: Loads an image with play icon instead of an embed code which is only embedded after the image has been clicked. Saves loading time and bandwidth. And it has build in google analytic tracking events and is responsive, too!
  Version: 2.5
  Author: Marc Tönsing
  Author URI: http://www.marctv.de
  License: GPL2
 */
if (!is_admin()) {
  wp_enqueue_style(
          "jquery.marctv_video", WP_PLUGIN_URL . "/marctv-jquery-video-embed/jquery.marctv-video.css", false, "2.5");

  wp_enqueue_script(
          "jquery.marctv_video", WP_PLUGIN_URL . "/marctv-jquery-video-embed/jquery.marctv-video.js", array("jquery"), "2.5", 0);
}
?>
