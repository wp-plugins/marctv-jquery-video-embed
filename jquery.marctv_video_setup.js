(function ($) {
    jQuery(document).ready(function($) {
        jQuery('body').addClass('js');
        if(jQuery().embedvideo){
            jQuery('a.embedvideo').embedvideo();
        }
    }); 
})(jQuery);