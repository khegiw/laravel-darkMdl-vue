/**
 * Created by khegiw on 17/08/2016.
 */

$(document).ready(function () {
   'use strict';


    /*Header Controll */
    var height = $(window).height();
    if (height<600){
        height = 600;
    }

    $('header').css({
        'minHeight':0,
        'maxHeight': 'none',
        'height': height
    });


    $('.carousel').carousel({
        interval: 50000
    })
    /* ========================================================================
     Wow Animation
     ========================================================================== */
    var wow = new WOW({
        mobile: false
    });
    wow.init();

});

//# sourceMappingURL=app.js.map
