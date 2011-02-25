=== MarcTV jQuery Video Embed ===
Contributors: MarcDK
Tags: marctv, jquery, video, youtube, embed, ipad, iphone, vimeo, google video
Requires at least: 3.0
Tested up to: 3.0
Stable tag: 1.8.1

== Description ==

Embed youtube, vimeo and google videos by just adding a css class to a link which points to the url of a video page. Supports iPad/iPhone-safe embedding for YouTube. 

`<a class="embedvideo" href="http://www.youtube.com/watch?v=TJHX52TXgm4">My Title</a>`

Degrades gracefully. The biggest advantage of this plugin is that it does not alter your original markup in any way. If you (or youtube) decides that flash is not the best way to embed video you won't be stuck with embed codes in your article. I will update this plugin to keep track with this development. And if you decide to use another plugin because this plugin does not suit your requirements then you can still switch because you did just add classes to html tags. So if everything breaks you still have working links to video ressources in your content.

Feel free to contact me if you have any questions. Please use the wordpress forums and name a tag of your post after the plugin's name. Thank you.

== Installation ==

* Install plugin
* Activate it
* In the article edit mode link to a video url
* add the css class "embedvideo" to your link

`<a class="embedvideo" href="http://www.youtube.com/watch?v=TJHX52TXgm4">My Title</a>`


= player size =

You can add my predefined classes to use predefined dimensions for the size of the player:

* big
* soundonly
* wide
* normal

`<a class="embedvideo soundonly" href="http://www.youtube.com/watch?v=TJHX52TXgm4">My Title</a>`

Look all of them up in jquery.marctv-video.css and feel free to overwrite this rules with your own rules in your template's style.css.

= specify a start time =

It is also possible to link to a specific start time for youtube videos. This script converts links like

`<a class="embedvideo" href="http://www.youtube.com/watch?v=TJHX52TXgm4&t=1m20s">My Title</a>`

to the appropriate time format and starts the video at that position.

== Changelog ==

= 1.0 =

First version.

= 1.1. =

Fixed folder names

= 1.2 =

Fixed filenames

= 1.4 =

New description and more examples.

= 1.6 =

Forgot to add a bunch of files.

= 1.6.2 =

Added .wp-caption class to style video embed like images.

= 1.6.4 =

Added start time feature

= 1.7 =

Changed class name to "embedvideo".

= 1.8 =

Added new iframe embedcode for YouTube Videos.

= 1.8.1 =

Made jslint happy.