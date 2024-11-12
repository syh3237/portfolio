
$(function(){
    $('a').click(function(e){
        e.preventDefault();
    })

    // header
    let lastScroll = 0; 
    $(window).scroll(function(){
        curr = $(window).scrollTop();
        
        if(curr > lastScroll){
            $('.header-inner').addClass('hide');
        }else{
            $('.header-inner').removeClass('hide');
        }
        lastScroll = curr;
    })

    const mainSwiper = new Swiper(".main-visual", {
        loop:false,
        slidesPerView: 1,
        autoplay:{
            delay:3000
        },
        pagination: {
        el: ".fraction",
        type:'fraction'
        }
    });
    const tsSwiper = new Swiper(".tsSwiper", {
        slidesPerView: 1.2,
        spaceBetween: 15,
        pagination: {
        el: ".swiper-pagination",
        clickable: false,
        },
    });
    const prdSwiper = new Swiper(".swiper2", {
        slidesPerView: 2.2,
        spaceBetween: 15,
        pagination: {
        el: ".swiper-pagination",
        clickable: false,
        },
    });
    const tabSwiper = new Swiper(".tab-nav1", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        watchSlidesProgress: true,

    });
    const conSwiper = new Swiper(".tab-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        thumbs: {
            swiper: tabSwiper,
        },
    });

    const tabSwiper2 = new Swiper(".tab-nav2", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const packSwiper = new Swiper(".packSwiper", {
        slidesPerView: 1.4,
        spaceBetween: 15,
        pagination: {
        el: ".swiper-pagination",
        clickable: false,
        },
    });
    const bnSwiper = new Swiper(".bn-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".fraction",
            type:'fraction'
            }
    });


// 트리거
    gsap.to('.slide-bg',{
        scrollTrigger:{
            trigger:".wrap",
            start:"0% 0%",
            end:"100% 0%",
            markers:false,
            scrub:1,
        },
        left:'-20%'
    })

    $('.best-tab a').click(function(e){
        e.preventDefault();
        cateNum = $(this).data('cate');
        $('.best-tab a').removeClass('on');
        $(this).addClass('on');
        cateList(cateNum);

    })

    function cateList(num){
        fetch('./assets/data/product.json')
        .then(res=>res.json())
        .then(json=>{
    
            allData = json.items;
            sortData = allData.filter(function(data){
                return data.sort.indexOf(num) >= 0;
            })
    
            let html = ``;
            sortData.forEach(el => {
    
                freeDeli =`<span class="dv-icon"><span class="blind">무료배송</span></span>`
                saleEl = `<span class="sale"> <strong>${el.price.sale}</strong>% </span>`
                ogEl = `<span class="og-price"><span>${numberFormat(el.price.og)}</span>원</span>`
                newEl=`<img src="./assets/images/ad-new.png" alt="${el.title}">`
                addEl=`<img src="./assets/images/ad-img1.png" alt="추가증정">`
                chkEl=`<img src="./assets/images/ad-chk.png" alt="성분체크">`
    
    
                freeDeli = (el.freeDeli)?freeDeli:'';
                reviewCount = (el.review.count >= 999)?`999+`:`${el.review.count}`;
                sale = (el.price.sale > 0)? saleEl:``;
                ogPrice = (el.price.sale > 0)?ogEl:'';
                newIcon = (el.icons.new)?newEl:``;
                addIcon = (el.icons.add)?addEl:``;
                chkIcon = (el.icons.chk)?chkEl:``;
    
                html+= `<li class="tab-item">
                            <a href="">
                                <figure>
                                    <img src="${el.thumb}" alt="">
                                </figure>
                                <div class="text-box">
                                    <div class="text-top">
                                        ${freeDeli}
                                        <div class="review">
                                            <i class="rv-icon"></i>
                                            <span class="rv-n">${el.review.grade}</span>
                                            <span class="rv-a">(${reviewCount})</span>
                                        </div>
                                    </div>
                                    <p>${el.title}</p>
                                    <div class="price-info">
                                        ${sale}
                                        <span class="price"><em>${numberFormat(el.price.curr)}</em>원</span>
                                        ${ogPrice}
                                    </div>
                                    <span class="detail">${el.info}</span>
                                    <div class="ad-icon">
                                        ${newIcon}
                                        ${addIcon}
                                        ${chkIcon}
                                        
                                    </div>
                                </div>
                            </a>
                        </li>`
            });
    
            $('#cateList').html(html);
    
        })
    }
    cateList(1);


    function numberFormat(num){
        return num.toLocaleString('ko-KR');
    }

})