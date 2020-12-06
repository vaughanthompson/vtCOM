    $(document).ready(function(){
        $.localScroll({
                target: 'body',
                queue: false,
                hash: false,
                duration: 500,
                easing: 'easeOutQuad'
        });

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

        $('div.cta').css('opacity','0.3');
        new Waypoint({
        element: document.getElementsByTagName('main'),
        handler: function(direction) {
            if (direction === 'down') {
                $('div.cta').fadeTo(1000,'0.05');
            }
            else {
                $('div.cta').fadeTo(1000,'0.3');
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

    }); 
