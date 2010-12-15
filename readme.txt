=== MarcTV jQuery Video Embed ===
Contributors: MarcDK
Tags: marctv, jquery, video, youtube, embed, ipad, iphone, vimeo, google video
Requires at least: 3.0
Tested up to: 3.0
Stable tag: 1.1

== Description ==

Embed youtube, vimeo and google videos by just adding a css class to a link which points to the url of a video page. Supports iPad/iPhone-safe embedding for YouTube. 

Syntax: `<a class="flashvideo" href="http://www.youtube.com/watch?v=TJHX52TXgm4">My Title</a>` 

Degrades gracefully.

== Installation ==

* Install plugin
* Activate it
* In the article edit mode link to a video url
* add the css class "flashvideo" to your link

e.g.: `<a class="flashvideo" href="http://www.youtube.com/watch?v=TJHX52TXgm4">My Title</a>`

= Advanced usage =

You can add classes like "big" oder "audio" to use predefined dimensions for the size of the player. Look them up in jquery.marctv-video.css and feel free to overwrite this rules with your own rules in your template's style.css.
It is also possible to link to a specific start time for youtube videos. This script converts links like <a class="flashvideo" href="http://www.youtube.com/watch?v=TJHX52TXgm4&t=1m20s">My Title</a> to the appropriate time format.

== Changelog ==

= 1.0 =

First version.

= 1.1. =

Fixed folder names