$(document).ready(function () {
    $('.slide-cuisine').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:`<button type='button' class='arrow-banner-prev'><img src="../assets/imgs/thaianhimg/icon/prev.png" alt=""></button>`,
        nextArrow:`<button type='button' class='arrow-banner-next'><img src="../assets/imgs/thaianhimg/icon/next.png" alt=""></button>`,
        responsive: [
          {
              breakpoint: 500,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});

$(document).ready(function () {
    $('.slide-schedule').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:`<button type='button' class='arrow-banner-prev'><img src="../assets/imgs/thaianhimg/icon/prev.png" alt=""></button>`,
        nextArrow:`<button type='button' class='arrow-banner-next'><img src="../assets/imgs/thaianhimg/icon/next.png" alt=""></button>`,
        responsive: [
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});

$(document).ready(function () {
    $('.slide-cook-table').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:`<button type='button' class='arrow-ct-prev'><i class="fa-solid fa-angle-left"></i></button>`,
        nextArrow:`<button type='button' class='arrow-ct-next'><i class="fa-solid fa-angle-right"></i></button>`,
        responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
      });
});

$(document).ready(function(){
    $('.slider-for-pd-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav-pd-gallery'
    });
    $('.slider-nav-pd-gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for-pd-gallery',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
})
