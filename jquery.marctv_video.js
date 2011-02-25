(function($) {
  /*
* Marc Tönsing 2011
*
* depends on toolbox.flashembed 
*
* Version 1.8
*/
  $.fn.embedvideo = function (options) {
    options = $.extend({
      debug		: "false",
      width               : "620",
      height              : "378",
      description_html    : '<p class="wp-caption-text"></p>',
      mediatypes	: {
        youtube		: {
          linksyntax : 'youtube.com/watch?',
          baseurl   : 'http://www.youtube.com/v/',
          idregex	:  new RegExp(/^[^v]+v.(.{11}).*/),
          timeregex	:  new RegExp(/^[^t]+t.(.{5}).*/),
          urlpostfix : '&amp;showinfo=0&amp;rel=0&amp;border=0&amp;fs=1&amp;iv_load_policy=1'
        },
        vimeo	: {
          linksyntax : 'vimeo.com',
          idregex :  new RegExp(/.*clip_id=(\d{7}).*/i),
          urlpostfix : '&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1',
          baseurl : 'http://vimeo.com/moogaloop.swf?clip_id='
        },
        gvid    : {
          linksyntax : 'video.google',
          idregex :  new RegExp(/.*docid=([\d-]+)(.*?)/i),
          urlpostfix : '',
          baseurl : 'http://video.google.com/googleplayer.swf?docId='
        }
      },
      html5 : true
    }, options);

    var buildPlayer = function (thisobj,swf_url,mediatype,mediaID,time){
      if(mediatype == 'youtube'){
        var offset = '';
        if(time){
          offset = '&start=' + time;
        }
        var vidobj = '<iframe title="YouTube video player" width="' + options.width + '" height="' + options.height + '" src="http://www.youtube.com/embed/' + mediaID + '?rel=0&showinfo=0' + offset + '" frameborder="0" allowfullscreen></iframe>';
      }else{
        var vidobj = flashembed.getHTML({
          allowfullScreen: true,
          id: 'vid_' + mediaID,
          src: swf_url,
          height: options.height,
          width: options.width
        }, {
          allowFullScreen: true
        });

      }

      var title = thisobj.html();
      var caption_markup	= $(options.description_html).html('<a href="' + thisobj.attr('href') + '">' + title + '</a>');

      var vidmarkup = $(vidobj).addClass(thisobj.attr('class'));
      thisobj.wrap('<div class="flashembed wp-caption" />').after(caption_markup).after(vidmarkup).remove();
           
    };

    var getQuerystring = function (key, url){
      key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
      var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
      var qs = regex.exec(url);
      if(qs === null){
        return false;
      }
      else {
        return qs[1];
      }
    };

    var getSeconds = function (url){
      var timestr = getQuerystring('t',url);

      if(timestr){
        var arr = (timestr.split('m'));
        var min = arr[0];
        var sec = arr[1].split('s')[0];
        var seconds = parseInt(min*60,10) + parseInt(sec,10);

        return seconds;
      }else{
        return false;
      }
    };

    
    var buildSWFURL = function (mediatype,mediaID,time){
      var timeparam = '';
      if(time){
        timeparam = '&start=' + time;
      }
      var swf_url =
      options.mediatypes[mediatype].baseurl +
      mediaID +
      options.mediatypes[mediatype].urlpostfix +
      timeparam;
      return swf_url;
    };

    var getMediaID	= function (url, mediatype) {
      var regex = options.mediatypes[mediatype].idregex;
      return url.replace(regex,"$1");
    };

    var getMediatyp = function (link){
      var mediatype = false;
      $.each(options.mediatypes, function(index, value) {
        if(link.indexOf(value.linksyntax)>0){
          mediatype = index;
        }
      });
      return mediatype;
    };

    return this.each(function () {
      var link = $(this).attr('href');
      var mediatype = getMediatyp(link);
      var mediaID = getMediaID(link ,mediatype);
      var offset = getSeconds(link);

      if(mediatype == "youtube"){
             buildPlayer($(this),buildSWFURL(mediatype,mediaID,offset),mediatype,mediaID,offset);
      }else if(flashembed.isSupported([9, 0])){
           buildPlayer($(this),buildSWFURL(mediatype,mediaID,offset),mediatype,mediaID,offset);
      }else{
         $(this).addClass('videoicon');
      }
    });
  };
})(jQuery);