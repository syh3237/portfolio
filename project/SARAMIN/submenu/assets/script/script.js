$(function(){
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        margin = 50;

        frame = $('.group-menu').offset().top;
        pos1 = $('.menu1').offset().top-margin;
        pos2 = $('.menu2').offset().top-margin;
        pos3 = $('.menu3').offset().top-margin;
        pos4 = $('.menu4').offset().top-margin;
        pos5 = $('.menu5').offset().top-margin;
        pos6 = $('.menu6').offset().top-margin;
        pos7 = $('.menu7').offset().top-margin-60;

        if(curr >= frame){
            $('.side-area a').removeClass('on');
            if(curr >= pos7){
                $('#tab7').addClass('on');
            }
            else if(curr >= pos6){
                $('#tab6').addClass('on');
            }
            else if(curr >= pos5){
                $('#tab5').addClass('on');
            }
            else if(curr >= pos4){
                $('#tab4').addClass('on');
            }
            else if(curr >= pos3){
                $('#tab3').addClass('on');
            }
            else if(curr >= pos2){
                $('#tab2').addClass('on');
            }
            else if(curr >= pos1){
                $('#tab1').addClass('on');
            }
        }else{
            $('.side-area .side-item').eq(0).find('a').addClass('on');
        }
    })
    $('.side-item a').click(function(e){
        e.preventDefault();
        x= $(this).attr('href')
        $('.side-item a').removeClass('on');
        $(this).addClass('on');
        $("html,body").stop().animate({scrollTop:$(x).offset().top-40},0);
    })

    const swiper = new Swiper(".mySwiper", {
        loop:true,
        direction: "vertical",
        autoplay : { 
            delay : 3000,
            disableOnInteraction : false
        },
    });

})
