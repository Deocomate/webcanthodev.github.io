$(document).ready(function () {
    $('.slide-cuisine').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
    $('.slide-cook-table').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:`<button type='button' class=''>a</button>`,
        nextArrow:`<button type='button' class=''>a</button>`,
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
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
      });
});