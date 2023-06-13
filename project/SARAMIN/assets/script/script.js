$(function(){
    // header 
    $(window).scroll(function(){
        lastScroll = 0;
        curr = $(window).scrollTop();
        if(curr > lastScroll){
            $('.header').addClass('up');
        }else{
            $('.header').removeClass('up');
        }
    })

    const mainSwiper = new Swiper(".mainVisual", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".fraction",
            type:'fraction'
        },
        autoplay : { 
            delay : 3000,
            disableOnInteraction : false
        }
    });

    $('.mainVisual .auto-stop').click(function(){
        mainSwiper.autoplay.stop();
        $(this).addClass('hide').siblings().removeClass('hide');
    })
    $('.mainVisual .auto-play').click(function(){
        mainSwiper.autoplay.start();
        $(this).addClass('hide').siblings().removeClass('hide');
    })

    const rcSwiper = new Swiper(".rcSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });
    const bestSwiper = new Swiper(".bestSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });
    const nowSwiper = new Swiper(".nowSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });
})