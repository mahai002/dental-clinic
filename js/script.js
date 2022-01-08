window.addEventListener('DOMContentLoaded',()=>{
    let clientSlider = new Swiper('.client__slider',{
        wrapperClass: 'client__wrapper',
        slideClass: 'client__slide',
        slidesPerView: 1,
        grabCursor: true,
        slidesPerGroup: 1,
        pagination: {
            el: '.client__pagination',
            type: 'bullets',
            bulletClass: 'client__pagination-bullet',
            bulletActiveClass: 'client__pagination-bullet-active',
          },
        breakpoints: {
            550: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,
            }
        }

    })
})