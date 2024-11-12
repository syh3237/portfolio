$(function(){
    $(function(){
        $('a').click(function(e){
            e.preventDefault();
        })
    })

    // header 
    let lastScroll = 0;
    $(window).scroll(function(){
        curr = $(window).scrollTop();
        sec2 = $('.section2').offset().top;

        if(curr > lastScroll){
            $('.header').addClass('hide');
        }else{
            $('.header').removeClass('hide');
            $('.header').addClass('on');
        }
        lastScroll = curr;

        if(curr > 0 & curr < sec2){
            $('.header').removeClass('hide');
            $(".header").addClass('on');
        }else if(curr == 0){
            $('.header').removeClass('on');
        }

    })

    // 메인 스와이퍼
    const mvSwiper = new Swiper(".mainVisual-swiper", {
        touchRatio:0,
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".tx-pagination",
            type:'fraction'
            },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    });
    
    const txSwiper = new Swiper(".mainText-swiper", {
        touchRatio:0,
        effect:'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        clickable: true,
        pagination: {
            el: ".pagination",
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    });

    txSwiper.controller.control = mvSwiper;



    const navSwiper = new Swiper(".slide1 .tabNav-swiper", {
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
    });
    const contSwiper = new Swiper(".slide1 .tabCont-swiper", {
        loop: true,
        thumbs: {
            swiper: navSwiper,
        },
    });



    const navSwiper2 = new Swiper(".slide2 .tabNav-swiper", {
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
    });
    const contSwiper2 = new Swiper(".slide2 .tabCont-swiper", {
        loop: true,
        thumbs: {
            swiper: navSwiper2,
        },
    });

    const navSwiper3 = new Swiper(".slide3 .tabNav-swiper", {
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
    });
    const contSwiper3 = new Swiper(".slide3 .tabCont-swiper", {
        loop: true,
        thumbs: {
            swiper: navSwiper3,
        },
    });

    const navSwiper4 = new Swiper(".slide4 .tabNav-swiper", {
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
    });
    const contSwiper4 = new Swiper(".slide4 .tabCont-swiper", {
        loop: true,
        thumbs: {
            swiper: navSwiper4,
        },
    });



    $('.tabNav-swiper .swiper-slide').click(function(){
        $(this).addClass('flip')
        setTimeout(() => {
            $(this).siblings().removeClass('hide flip');
            $(this).addClass('hide');
        }, 1000);
    })


    let section4Flag = 0;
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        section4Offset = $('.section4').offset().top;
        if(curr >= section4Offset){
            if(section4Flag == 0){
                $('#tab1').find('>*').addClass('on');
                section4Flag = 1;
            }
        }
    })


    // section4 탭메뉴

    $('.tabNav-item a').click(function(){
        id=$(this).data('tab');
        $('.tabNav-item a').removeClass('on'); //전체
        $(this).addClass('on') //개인
        $(id).addClass('on').siblings().removeClass('on');
        if(!$(id).find('>*').hasClass('on')){
            $('.tabCont').find('>*').removeClass('on');
            setTimeout(() => {
                $(id).find('>*').addClass('on');
            }, 100);
        }
    })
    


    gsap.from('.section5 .bg-area .icon',{
        scrollTrigger:{
            trigger:".section5",
            start:"0% 50%",
            end:'100% 0%',
        },
        scale:0,
        delay:0.5,
        stagger:{
            from:"random",
            amount:0.5,
        }
    })




    const exSwiper = new Swiper(".exSwiper", {
        slidesPerView: 'auto',
        centeredSlides:true,
        spaceBetween: 20,
        loop:true,
        pagination: {
            el: ".pagination"
        },
        breakpoints: {
            768: {
                spaceBetween: 60,
                
            }
        }
    });

    const cleintSwiper = new Swiper(".client-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: ".pagination"
        },
        breakpoints: {
            768:{
                spaceBetween: 33,
            }
        }
    });




    var slSwiper = new Swiper(".swiper1", {
        autoplay: {
            delay: 0,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        speed:8000,
        loop:true,
        loopAdditionalSlides:1,
        slidesPerView: "auto",
        loopedSlides: 5, //noSwiping : true,
        observer:true, 
        observeParents:true,
        freeMode:true,
    });




    const vtcSwiper = new Swiper(".vtcSwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        effect:'fade',
        pagination: {
            el: ".pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    });



    ScrollTrigger.matchMedia({

        "(min-width: 1280px)": function() {

            // 10
            ScrollTrigger.create({
                trigger:".section9 .sec-wrap",
                start:"0% 0%",
                end:"500%",
                markers:false,
                pin:true,
                toggleClass:{targets:".section9 .swiper",className:"on"},
                onUpdate: self => {
                    num = self.progress.toFixed(2)*100;
                    if(num >= 66.66){
                        vtcSwiper.slideTo(2)
                    }else if(num >= 33.33){
                        vtcSwiper.slideTo(1)
                    }else{
                        vtcSwiper.slideTo(0)
                    }
                }
            })

            gsap.from('.section10 .title-wrap strong',{
                scrollTrigger:{
                    trigger:".section10 .sec-wrap",
                    start:"0% 0%",
                    end:`${window.innerHeight} 0`,
                    markers:false,
                    scrub:1,
                },
                opacity:0,
                y:100,
            })

    },

    
        "(max-width: 767px)": function() {
    },
    
        "all": function() {
            $('[data-up]').each(function(i,el){
                gsap.from($(this),0.5,{
                    scrollTrigger:{
                        trigger:$(this),
                        start:"0% 80%",
                        end:'100% 0%',
                    },
                    opacity:0,
                    y:50,
                    delay:$(this).data('up')
                })
            })
        
        }
    
    });

    $('[data-sl]').each(function(i,el){
        gsap.from($(this),0.5,{
            scrollTrigger:{
                trigger:$(this),
                start:"0% 80%",
                end:'100% 0%',
            },
            opacity:0,
            x:-50,
            delay:$(this).data('sl')
        })
    })

    

    // 태블릿 swiper

    const dvSwiper = new Swiper(".sc3-deviceSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 18,
        pagination: {
            el: ".dv-pagination",
            type: "progressbar"
            }
    });


})