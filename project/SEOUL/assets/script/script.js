$(function(){

    $('#langBtn').click(function(){
        url = $('#langList').val();
        window.open(url);
    })

    const mainSwiper = new Swiper(".mainSwiper", {
        loop:true,
        touchRatio:0,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".fraction",
            type:"fraction"
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev"
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    });

    $('.main-visual .autoplay').click(function(){
        if($(this).hasClass('on')){
            mainSwiper.autoplay.start();
        }else{
            mainSwiper.autoplay.stop();
        }
        $(this).toggleClass('on');
    })

    mainSwiper.on('slideChange',function(){
        idx = this.realIndex;

        if(idx >= 2){
            $('.main-btn2').addClass('on').siblings().removeClass('on');
        }else{
            $('.main-btn1').addClass('on').siblings().removeClass('on');
        }
    })

    $('.tab-nav button').click(function(){
        idx = $(this).data('idx');
        mainSwiper.slideToLoop(idx);
        $(this).addClass('on').siblings().removeClass('on');
    })



    const bnSwiper = new Swiper(".bnSwiper", {
        slidesPerView: 3,
        touchRatio:0,
        spaceBetween: 43,
        pagination: {
            el: ".fraction",
            type: "fraction"
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev"
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    });

    $('.banner-slide .autoplay').click(function(e){
        e.preventDefault();
        if($(this).hasClass('on')){
            bnSwiper.autoplay.start();
        }else{
            bnSwiper.autoplay.stop();
        }
        $(this).toggleClass('on');
    })



    $(window).scroll(function(){
        curr = $(this).scrollTop();

        if(curr > 0){
            $('.scrollTop').addClass('on');
        }else{
            $('.scrollTop').removeClass('on');
        }
    })

    // section8 tab
    $('.tab-menu .arrow').click(function(e){
        e.preventDefault();

        if($(this).hasClass('on')){
            $('.tab-menu .arrow').removeClass('on');
            $('.tab-menu .sub').stop().slideUp();
        }else{
            $('.tab-menu .arrow').removeClass('on');
            $(this).addClass('on')

            $('.tab-menu .sub').stop().slideUp();
            $(this).siblings('.sub').stop().slideDown();
        }
    })

    $('.sub li:first-child').keydown(function(e){
        code = e.keyCode;
        if(code === 9 && e.shiftKey){
            $('.tab-menu .arrow').removeClass('on');
            $('.tab-menu .sub').stop().slideUp();
        }
    })
    
    $('.sub li:last-child').keydown(function(e){
        code = e.keyCode;
        if(code === 9 && !e.shiftKey){
            $('.tab-menu .arrow').removeClass('on');
            $('.tab-menu .sub').stop().slideUp();
        }
    })

})