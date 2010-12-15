(function($) {
  /*
* Marc Tönsing 2010
*
* depends on toolbox.flashembed 
*
* Version 1.7.1
*/
  $.fn.embedvideo = function (options) {
    options = $.extend({
      debug		: "false",
      width               : "620",
      height              : "370",
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
      }
    }, options);

    var buildPlayer = function (thisobj,swf_url,mediatype,mediaID){
      var flashobj = flashembed.getHTML({
        allowfullScreen: true,
        id: 'vid_' + mediaID,
        src: swf_url,
        height: options.height,
        width: options.width
      }, {
        allowFullScreen: true
      });

      var title = thisobj.html();
      var caption_markup	= $(options.description_html).html('<a href="' + thisobj.attr('href') + '">' + title + '</a>');
           
      flashobj = $(flashobj).addClass(thisobj.attr('class'));
      thisobj.wrap('<div class="flashembed wp-caption" />').after(caption_markup).after(flashobj).remove();
           
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

    var isApple = function() {
      var agent = navigator.userAgent.toLowerCase();
      if(agent.match(/iPhone/i)=="iphone" || agent.match(/iPad/i)=="ipad"){
        return true;
      }
      return false;

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

      var mediatype = '';
      mediatype = getMediatyp(link);

      var mediaID = getMediaID(link ,mediatype);

      var offset = '';
      offset = getSeconds(link);

      if(flashembed.isSupported([9, 0])){
        if(mediatype){
          buildPlayer($(this),buildSWFURL(mediatype,mediaID,offset),mediatype,mediaID);
        }
      }else if(mediatype=='youtube' && isApple()) {
        flashobj=$('<object width="' + options.width + '" height="' + options.height +'"><param name="movie" value="http://www.youtube.com/v/' + mediaID + '"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/' + mediaID + '&hl=de_DE&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="' + options.width + '" height="' + options.height + '"></embed></object>');
        $(this).prepend(flashobj);
      }else{
        $(this).addClass('videoicon');
      }

    });
  };
})(jQuery);