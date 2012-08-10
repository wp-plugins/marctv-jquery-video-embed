=== MarcTV Video Embed ===
Contributors: MarcDK
Tags: marctv, youtube, vimeo, jquery, google analytics, responsive, oembed
Requires at least: 3.0
Tested up to: 3.4.1
Stable tag: 2.92

== Description ==

Embeds youtube and vimeo videos complete with responsive design, google analytics events and oEmbed compatibility. Loads player after user interaction with the power of jQuery.

= HTML Embed = 

Use this in your article while the wysiwyg editor is set to HTML mode: 

`<a class="embedvideo" href="http://www.youtube.com/watch?v=TJHX52TXgm4">My Title</a>`

= oEmbed = 

Activate "Auto-embeds" under settings -> media.

Use this in your article while the wysiwyg editor is set to HTML mode: 

`http://www.youtube.com/watch?v=atVFr_RbQUI`

or specify a title:

`[embed title="My favourite Minecraft Video"]http://www.youtube.com/watch?v=vvNtvThPqKE[/embed]`

= What makes this plugin so special = 

Loads an image with play icon instead of an embed code which is only embedded after the image has been clicked. This way it saves loading time and bandwidth. And it has build in google analytic tracking events and is responsive, too!

Degrades gracefully. The biggest advantage of this plugin is that it does not alter your original markup in any way. If you (or youtube) decides that flash is not the best way to embed video you won't be stuck with embed codes in your article. I will update this plugin to keep track with this development. And if you decide to use another plugin because this plugin does not suit your requirements then you can still switch because you did just add classes to html tags. So if everything breaks you still have working links to video ressources in your content.


Feel free to contact me if you have any questions. Please use the wordpress forums and name a tag of your post after the plugin's name. Thank you.

== Installation ==

* Install plugin
* Activate it

= player size =

Both the preview image and the embedded player iframe are automatically resized.

= specify a start time =

It is also possible to link to a specific start time for youtube videos. This script converts links like

`<a class="embedvideo" href="http://www.youtube.com/watch?v=TJHX52TXgm4&t=1m20s">My Title</a>`

to the appropriate time format and starts the video at that position.  

= Google Analytics =

Events are being tracked automatically as "vimeo" and "youtube" with the video title as label.  

= Credits = 

Player icon by Font Awesome: http://fortawesome.github.com/Font-Awesome/#icon/icon-play-circle

== Changelog ==

= 2.92 = 

* corrected wrong hover image

= 2.9 = 

* Nice and smooth hover effect

= 2.8 = 

* Changes play button hover behavior  

= 2.6 = 

* Added oembed support for vimeo and youtube links

= 2.5 =

* completely rewritten from scratch
* image based embedding. No Flash, No HTML5. 
* players are embedded after user interaction
* dropped google video support (sorry)
* responsive size (reacts to dynamic measures)
* google analytics tracking events 

= 2.0 =

Added autoplay, forcehd and showinfo

= 1.8.1 =

Made jslint happy.

= 1.8 =

Added new iframe embedcode for YouTube Videos.

= 1.7 =

Changed class name to "embedvideo".

= 1.6.4 =

Added start time feature for youtube

= 1.6.2 =

Added .wp-caption class to style video embed like images.

= 1.6 =

Forgot to add a bunch of files.

= 1.4 =

New description and more examples.

= 1.2 =

Fixed filenames

= 1.1. =

Fixed folder names

= 1.0 =

First version.













