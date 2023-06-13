$(function(){


    $('body').mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;

        gsap.to('.cursor',{
            x:xVal,
            y:yVal
        })
    })

    // intro

    gsap.set('.container .main-text > *',{
        opacity:0,
        yPercent:20
    })

    introMotion =  gsap.to('.container .main-text > *',{
        opacity:1,
        yPercent:0,
        paused:true
    })

    // 로딩
    loadingMotion = gsap.timeline({
        onComplete:function(){
            $('.laoding').remove();
            introMotion.play();
        }
    })
    loadingMotion
    .to('.loading svg',{
        scale:10,
        duration:3,
        opacity:0
    })
    .to('.loading',{
        opacity:0,
        display:'none',
    })

    
    $('[data-scroll]').each(function(i,el){

        yVal = $(this).data('scroll');

        gsap.to(el,{
            scrollTrigger:{
                trigger:el,
                start:'0% 0%',
                end:'100% 0%',
                markers:false,
                scrub:1,
            },
            yPercent:yVal


        })
    })


    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');

    const canvas2 = document.querySelector('.canvas2');
    const ctx2 = canvas2.getContext('2d');

    canvas.width = 1000;
    canvas.height = 375;

    canvas2.width = 1920;
    canvas2.height = 887;

    const frameCount = 91;
    const frameCount2 = 59;

    const currentFrame = (idx) => {
        return `https://d197cwgxgz2ypb.cloudfront.net/sweetpain/seq/nana-3/frame_${idx.toString().padStart(5, '0')}.png`;
    }; // 리턴 필수
    const currentFrame2 = (idx) => {
        return `https://d197cwgxgz2ypb.cloudfront.net/sweetpain/seq/home-pads/frame_${idx.toString().padStart(5, '0')}.png`;
    }; // 리턴 필수



    const images = [];
    const card = {
        frame: 0,
    };

    const images2 = [];
    const card2 = {
        frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i + 1);
        images.push(img);
    }


    for (let i = 0; i < frameCount2; i++) {
        const img2 = new Image();
        img2.src = currentFrame2(i + 1);
        images2.push(img2);
    }

    gsap.to(card, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
        trigger: '.canvas',
        scrub: 1,
        start: '0% 100%',
        end: '100% 0%',
        markers: false
        },
        onUpdate: render,
    });



    pinMotion = gsap.timeline({
        scrollTrigger: {
            trigger: '.section3',
            scrub: 1,
            start: '0% 0%',
            end: '100% 0%',
            markers: false,
            pin:true,
        },
    })
    pinMotion
    .to(card2, {
        frame: frameCount2 - 1,
        snap: 'frame',
        ease: 'none',
        onUpdate: render2,
    })
    .to('.section3 .text-area',{
        opacity:0,
    })




    images[0].onload = render;
    images2[0].onload = render2;
    
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[card.frame], 0, 0);
    }
    function render2() {
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx2.drawImage(images2[card2.frame], 0, 0);
    }





    // https://d197cwgxgz2ypb.cloudfront.net/sweetpain/seq/home-pads/frame_00000.png




    $('[data-hr]').each(function(i,item){

        xVal = $(this).data('hr');

        gsap.to(item,{
            scrollTrigger:{
                trigger:'.deco-wrap',
                start:'0% 100%',
                end:'100% 0%',
                markers:false,
                scrub:1,
            },
            xPercent:xVal


        })
    })








    let scollTop = 0;

    $(window).scroll(function(){
        
        curr = $(this).scrollTop();
        
        if(curr > scollTop){
            $('.gnb').addClass('hide');
        }else{
            $('.gnb').removeClass('hide');
        }
    })
})