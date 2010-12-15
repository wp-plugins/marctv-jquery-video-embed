(function ($) {
    jQuery(document).ready(function($) {
        jQuery('body').addClass('js');
        if(jQuery().flashvideo){
            jQuery('a.flashvideo').flashvideo();
        }
    }); 
})(jQuery);