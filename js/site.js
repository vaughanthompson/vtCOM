﻿$(document).ready(function(){



    $.localScroll({
            target: 'body',
            queue: false,
            hash: false,
            duration: 500,
            easing: 'easeOutQuad'
    });

    // mobile top scroll
    $('#navMobile').hide();
    new Waypoint({
    element: document.getElementsByTagName('body'),
    handler: function(direction) {
        if (direction === 'down') {
            $('#navMobile').fadeTo(1000,'1.0');
        }
        else {
            $('#navMobile').hide();
        }
    },
        offset: '-50%'
    })    


    // home slider
    $(".owl-theme-slider").owlCarousel({
        items:1,
        margin:0,
        rewind:true,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        loop:true,
        autoplay:true,
        autoplayTimeout:10000,
        autoplayHoverPause:true,
        touchDrag:true,
        mouseDrag:true,
        stopOnHover:true,
        dots:true,
        dotsContainer:'#cI-hook',
        nav:true,
        navText: ["<span class='icon-arrow-left-outline'></span>","<span class='icon-arrow-right-outline'></span>"],
        autoplaySpeed:5000,
        smartSpeed:1000,
        fluidSpeed:1
    });

    // minimal slider
    $(".owl-theme-slider1").owlCarousel({
        items:1,
        margin:0,
        rewind:true,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        touchDrag:true,
        mouseDrag:true,
        stopOnHover:true,
        dots:false,
        dotsContainer:'#cI-hook',
        nav:false,
        //navText: ["<span class='icon-arrow-left-outline'></span>","<span class='icon-arrow-right-outline'></span>"],
        autoplaySpeed:5000,
        smartSpeed:1000,
        fluidSpeed:1
    });


    // mobile nav
    $('#navClose').hide();
    $('#navClose').click(function(){
        $(this).hide();
        $('#navCart').show();
        $('#navTrigger').show();
        $("div.mblnavContainer").scrollTo(0);
        $('div.mblnav').hide();
        $('html, body').removeClass('noscroll');
        return false;
    });

    $('#navTrigger').click(function(){
        $(this).hide();
        $('#navCart').hide();
        $('#navClose').show();
        $('div.mblnav').show();
        $('html, body').addClass('noscroll');
        return false;

    });


    // slideNav
    $('#omniDrop').click(function(){
        //$(this).hide();
        $(this).siblings('a').toggleClass('faded');
        $(this).find('i').toggleClass('rotateIC');
        $('#slideNav').slideToggle();
        return false;

    });




    // show random div
    var elems = $(".randomShow");
    if (elems.length) {
    var keep = Math.floor(Math.random() * elems.length);
    for (var i = 0; i < elems.length; ++i) {
        if (i !== keep) {
        $(elems[i]).hide();
        }
    }
    }



    // named anchor scrollTo and offset
    var anchorLink = $(window.location.hash);
    if ( anchorLink.length ) {
        $("html, body").animate({scrollTop: anchorLink.offset().top - 50 }, 500);
    }




    // onOff waypoints content area
    $('.onOff').each(function() {
        var inview = new Waypoint.Inview({
        element: this,
        enter: function(direction) {
            // alert('Enter triggered with direction ' + direction)
            },
            entered: function(direction) {     
                $(this[0,'element']).find('.onOffTarget').removeClass('stateInactive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateActive');
                    
            },
            exit: function(direction) {
                $(this[0,'element']).find('.onOffTarget').removeClass('stateActive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateInactive');
            },
            exited: function(direction) {
                // alert('Exited triggered with direction ' + direction)
            }
        })
    });


});




/* OLD SITE JS

mapboxgl.accessToken = 'pk.eyJ1IjoidmF1Z2hhbnRob21wc29uIiwiYSI6ImNpbHNtaG5iMTAwMWd1c2tzNW51bzZtMWkifQ.zc3CupdubTgYUxdPJgexKg';
        
$(document).ready(function(){
                // theme switcher
                var themeOverride = 'no'
                var d = new Date();
                
                var dy = d.getYear();
                var dm = d.getMonth();
                var dd = d.getDate();
                var gt = d.getTime();
                    
                var dDayStart = new Date(d.getFullYear(),d.getMonth(),d.getDate(),07,00,0,0);
                var dDayEnd = new Date(d.getFullYear(),d.getMonth(),d.getDate(),17,30,0,0);
          
                if (d.getTime() >= dDayStart.getTime() && d.getTime() < dDayEnd.getTime() && themeOverride == 'no')
                {
                    //day
                    $('body').addClass('dayTheme');
                    //document.documentElement.style.setProperty('--testNight', '#1a1a1a');
                    //document.documentElement.style.setProperty('--colorGradient', '255,255,255');
                    var map = new mapboxgl.Map({
                                container: 'map',
                                style: 'mapbox://styles/vaughanthompson/cjh2jzpau1kd32rn0liaw1cxn',
                                center: [9.233464, 46.845305],
                                pitch: 60,
                                bearing: -23,
                                zoom: 13.15
                    });   
                } else {
                    //night
                    $('body').addClass('nightTheme');
                    //document.documentElement.style.setProperty('--testNight', '#ffffff');
                    //document.documentElement.style.setProperty('--colorGradient', '26,26,26');
                    var map = new mapboxgl.Map({
                                container: 'map',
                                style: 'mapbox://styles/vaughanthompson/cjiup2xa70rfp2rqroaxba1vm',
                                center: [9.233464, 46.845305],
                                pitch: 60,
                                bearing: -23,
                                zoom: 13.15
                    });  
                }
            
});

*/