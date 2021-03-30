$(document).ready(function(){
    $.localScroll({
            target: 'body',
            queue: false,
            hash: false,
            duration: 500,
            easing: 'easeOutQuad'
    });

    //$('#inpageTabs').localScroll({
    //    offset: {top:-100}
    //});


    $(".owl-carousel-slider").owlCarousel({
        items:1,
        margin:0,
        rewind:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:7000,
        autoplayHoverPause:true,
        touchDrag:true,
        mouseDrag:true,
        stopOnHover:false,
        dots:true,
        nav:true,
        navText: ["<span class='icon-arrow-back'></span>","<span class='icon-arrow-forward'></span>"],
        autoplaySpeed:2000,
        smartSpeed:1000,
        fluidSpeed:1
    });

/* move the following into model page itself 

    $(".owl-carousel").owlCarousel({
        items:2,
        margin:10,
        rewind:true,
        loop:false,
        autoplay:false,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        touchDrag:true,
        mouseDrag:true,
        stopOnHover:false,
        dots:false,
        nav:true,
        navText: ["<span class='icon-arrow-back'></span>","<span class='icon-arrow-forward'></span>"],
        autoplaySpeed:6000,
        smartSpeed:250,
        fluidSpeed:1,
        responsive: {
            0 : {
                items : 2,
                margin : 5,
                slideBy: 2                
            },
            // breakpoint from 480 up
            500 : {
                items : 3,
                margin : 10,
                slideBy: 3 
            },
            // breakpoint from 768 up
            1000 : {
                items : 5,
                margin : 20,
                slideBy: 5
            },
            // breakpoint from 768 up
            1300 : {
                items : 7,
                margin : 30,
                slideBy: 7
            }
        }
    });


*/



    $('#toTop').css('opacity','0.0');
    new Waypoint({
    element: document.getElementsByTagName('main'),
    handler: function(direction) {
        if (direction === 'down') {
            $('#toTop').fadeTo(1000,'1.0');
        }
        else {
            $('#toTop').fadeTo(1000,'0.0');
        }
    },
        offset: '-150%'
    })

    $('#showLocs').click(function(){
        $('div.availsWrapper').fadeIn(500);
        return false;
    }); 
    $('#closeLocs').click(function(){
        $('div.availsWrapper').slideUp(500);
        return false;
    });

    $('div.enquiry a.ctaButton.sales').click(function(){
        $('div.enquiry div.content').fadeIn(500); 
        $('div.enquiry div.control a').removeClass("activeLink");         
        $(this).addClass("activeLink");         
        return false;
    });
    $('div.enquiry a.ctaButton.parts').click(function(){
        $('div.enquiry div.content').fadeIn(500);   
        $('div.enquiry div.control a').removeClass("activeLink");         
        $(this).addClass("activeLink");         
        return false;
    });
    $('div.enquiry a.closeEnq').click(function(){
        $('div.enquiry div.content').slideUp(500);   
        $('div.enquiry div.control a').removeClass("activeLink");         
        return false;
    });

    // show hide with trigger outside
    $('a.enquiryTrigOne').click(function(){
        $('div.enquiryOne div.content').fadeIn(500); 
        $(this).addClass("activeLink");         
        return false;
    });
    $('div.enquiryOne a.closeEnq').click(function(){
        $('div.enquiryOne div.content').slideUp(500);   
        $('a.enquiryTrigOne').removeClass("activeLink");         
        return false;
    });
    $('a.enquiryTrigTwo').click(function(){
        $('div.enquiryTwo div.content').fadeIn(500); 
        $(this).addClass("activeLink");         
        return false;
    });
    $('div.enquiryTwo a.closeEnq').click(function(){
        $('div.enquiryTwo div.content').slideUp(500);   
        $('a.enquiryTrigTwo').removeClass("activeLink");         
        return false;
    });




    // Mobile Navigation
    $('#navClose').hide();


    $('#navClose').click(function(){
        $(this).hide();
        $('#navCart').show();
        $('#navTrigger').show();
        $("div.mblnavContainer").scrollTo(0);
        $('nav.mblnav').hide();
        $('html, body').removeClass('noscroll');
       
            //    scrollTop: 0 
        //$("div.mblnavContainer").animate({ 
        //    scrollTop: 0 
        //}, "slow");
        return false;
    });

    $('#navTrigger').click(function(){
        $(this).hide();
        $('#navCart').hide();
        $('#navClose').show();
        $('nav.mblnav').show();
        $('html, body').addClass('noscroll');
        return false;

    });

    $('.hamburger__container').click(function() {
       // $('.nav').toggleClass('open');
        //$(this).children().first().toggleClass('open');
        //$('html, body').toggleClass('noscroll');
    });


    // Slide Drawer mobile model content
    /*
    $('.mobTabCtrl').click(function() {
        $('.tabContent > article, .tabContent > div').hide();
        $(this).siblings('.tabContent > article, .tabContent > div').slideDown(500);
        //$('html, body').animate({scrollTop: $('#tabContent-4').offset().top -100 }, 'slow');
        $('html, body').animate({scrollTop: $(this).offset().top -200 }, 'fast');
        return false;
     });
     */


     $('.mobTabCtrl').click(function() {
        //$('.tabContent > article, .tabContent > div').hide();
        $(this).siblings('.tabContent > article, .tabContent > div').slideToggle(500);
        $('html, body').animate({scrollTop: $(this).offset().top -200 }, 'slow');
        return false;
     });




    /*moved the enquire stuff.*/



    

}); 