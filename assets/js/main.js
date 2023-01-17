$(document).ready(function () {    
    $('.carousel').slick({
        slidesToShow: 3,
        dots: true,
        centerMode: false,
        prevArrow: //html
            `
        <button class="btn-arr btn-prev">
        <i class="bi bi-arrow-left-circle-fill"></i>
        </button>
        `,
        nextArrow: //html
            `
        <button class="btn-arr btn-next">
        <i class="bi bi-arrow-right-circle-fill"></i>
        </button>
        `,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 765.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.myslider').slick({
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    autoplay: true,
                    infinite: false
                }
            }
        ]
    });
    $('.list-location').slick({
        infinite: true,
        slidesToShow: 3,
        dots: true,
        centerMode: true,
        arrows: true,
        prevArrow: //html
            `
        <button class="btn-arr btn-prev">
        <i class="bi bi-arrow-left-circle-fill"></i>
        </button>
        `,
        nextArrow: //html
            `
        <button class="btn-arr btn-next">
        <i class="bi bi-arrow-right-circle-fill"></i>
        </button>
        `,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".icon-search").click(function (e) { 
        $(".input-search").toggleClass("d-none");
    });
    if ($("#home-map").length > 0) {
        let listData = []
        let data = $(".sort-result .item")
        for (const item of data) {
            let typeLocation = $(item).attr("typeLocation");
            let nameLocation = $(item).attr("nameLocation");
            let districtLocation = $(item).attr("districtLocation");
            let html = item.innerHTML
            const obj = {
                typeLocation,
                nameLocation,
                districtLocation,
                html
            }
            listData.push(obj)
        }


        $(".location-item").click(function (e) {
            let location = $(this).attr('locationValue')
            let newList = listData.filter(item => item.typeLocation == location)
            loadDataLocation(newList)
        });

        $("#input-sort").keyup(function (e) {
            let name = $(this).val()
            name = convertVietnamese(name);
            let newList = listData.filter(item => isInString2(name, convertVietnamese(item.nameLocation)))
            loadDataLocation(newList)
        });

        $("#sort-select-district").change(function (e) {
            let district = $(this).val()
            district = convertVietnamese(district);
            let newList = listData.filter(item => isInString2(district, convertVietnamese(item.districtLocation)))
            loadDataLocation(newList)
        });
    }

    AOS.init();
});

function loadDataLocation(listData) {
    let sortResult = $(".sort-result .list-unstyled")
    sortResult.html("")
    let html = ``
    for (const item of listData) {
        html += //html 
            `
        <li class="item d-flex align-items-center" typeLocation="${item.typeLocation}" nameLocation="${item.nameLocation}"
            districtLocation="${item.districtLocation}">
            ${item.html}
        </li>
        `
    };
    sortResult.html(html)
}

function convertVietnamese(str) {
    // remove spaces
    str = str.replace(/\s+/g, '');

    // convert Vietnamese characters to unsigned
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    return str.toLowerCase();
}

function isInString2(str1, str2) {
    return str2.indexOf(str1) !== -1;
}