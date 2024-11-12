$(function(){
    // 로딩화면
    const loading = gsap.timeline({
        onComplete:function(){
            $('.loading').remove();
        }
    })
    .addLabel('ani')
    .from('.loading',{
            opacity:1,
            duration: 2,
            delay:1,
            scale:5
        },'ani' )
    .to('.loading',{
            opacity:0,
            delay:3,
        },'ani')

    // 서브메뉴on
    $('.gnb-item a').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 2000);
    })

    // 마우스 커서
    $('body').mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;

        gsap.to('.cursor',{
            x:xVal,
            y:yVal
        })
    })

    // main text
    $('.main-visual .sticky-wrap').each(function(){
        gsap.to($(this).find('.sticky-circle'),{
                scrollTrigger:{
                    trigger: $(this),
                    start:"0% 0%",
                    end:"100% 100%",
                    markers:false,
                    scrub:1,
                },
                width: '2500px',
                height: '2500px',
        })
    })

    introMotion = gsap.timeline({
        scrollTrigger:{
            trigger:".main-visual",
            start:"0% 0%",
            end:"100% 0%",
            markers:false,
            scrub:1,
        }
    })
    introMotion
    .addLabel('a')
    .to('.main-visual .line1',{ paddingLeft: '5%', opacity:'0' },'a')
    .to('.main-visual .line2',{ paddingRight: '10%', opacity:'0' },'a')
    .to('.main-visual .line3',{ paddingLeft: '15%', opacity:'0' },'a')
    .to('.main-visual .line4',{ paddingRight: '20%', opacity:'0' },'a')

    // intro text

    $('[data-x]').each(function(i,el){
        gsap.from($(this),{
            scrollTrigger:{
                trigger: '.intro',
                start:"-70% 0%",
                end:'100% 100%',
                markers:false,
            },
            opacity:0,
            x:-100,
            delay:$(this).data('x')
        })
    })
    $('[data-x2]').each(function(i,el){
        gsap.from($(this),{
            scrollTrigger:{
                trigger: '.intro',
                start:"-70% 0%",
                end:'100% 100%',
                markers:false,
            },
            opacity:0,
            x:100,
            delay:$(this).data('x2')
        })
    })
    $('[data-x3]').each(function(i,el){
        gsap.from($(this),{
            scrollTrigger:{
                trigger: $(this),
                start:"-70% 0%",
                end:'100% 100%',
                markers:false,
            },
            opacity:0,
            x:-100,
            delay:$(this).data('x3')
        })
    })

    // all-project
    $('.intro .btn-pj').click(function(){
        $('.pj-list').toggleClass('on');
    })
    // all pj버튼 클릭
    $('.pj-item a').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 2000)
    })

    // wokrs
    $('.works .sticky-wrap').each(function(){
        gsap.to($(this).find('.sticky-circle'),{
                scrollTrigger:{
                    trigger: $(this),
                    start:"0% 0%",
                    end:"100% 100%",
                    markers:false,
                    scrub:1,
                },
                width: '100%',
                height: '100vh',
                borderRadius: '0em',
                opacity:'0.3'
        })
    })

    // project name
    $('.work-item').mousemove(function(e){
        w = $(this).find('a').width()/2
        h = $(this).find('a').height()/2
        xVal = e.offsetX - w;
        yVal = e.offsetY - h;

        gsap.to($(this).find('a'),{
            x:xVal/15,
            y:yVal/8
        })
    })
    $('.work-item').mouseleave(function(){
        gsap.to('.work-item a',{
            x:0,
            y:0
        })
    })

})
