(function ($) {
    jQuery(document).ready(function($) {
        var isMobileSafari = function() {
            var agent = navigator.userAgent.toLowerCase();
            if(agent.match(/iPhone/i) !== null || agent.match(/iPad/i) !== null){
                return true;
            }
            return false;
        };
        if(isMobileSafari){
            jQuery('body').addClass('isApple');
        }
        jQuery('body').addClass('js');
        if(jQuery().embedvideo){
            jQuery('a.embedvideo').embedvideo();
        }
    });
}(jQuery));
