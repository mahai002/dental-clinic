window.addEventListener('DOMContentLoaded',()=>{
    if (document.querySelector('.client__slider')) {
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
    
        });   
    }
    let shareWidgies = document.querySelectorAll('.share-widget:not(.full) .share-widget-sub');
    shareWidgies.forEach(el => {
        el.addEventListener('click', function () {
            if (this.classList.contains('flipped')) {
                this.classList.remove('flipped');
            } else {
                this.classList.add('flipped');
            }
        });
    });
    if (document.querySelector('.modal__slider')) {
        let modalSlider = new Swiper('.modal__slider',{
            wrapperClass: 'modal__slider-wrapper',
            slideClass: 'modal__slide',
            slideActiveClass: 'modal__slide-active',
            slidesPerView: 2,
            grabCursor: true,
            spaceBetween: 30,
            autoplay: {
                delay: 3000,
            },
            breakpoints: {
                728: {
                    slidesPerView: 3,
                }
            },
            centeredSlides: true
        });   
    }
    if (document.getElementById('lightgallery')) {
        lightGallery(document.getElementById('lightgallery')); 
    }

})