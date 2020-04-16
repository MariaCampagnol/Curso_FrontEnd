$(function () {
    $('.menu-mobile').click(function () {
        $(this).find('ul').slideToggle();
    });

    $('.mosaico-wraper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    centerMode: true
                }
            },
            {
                breakpoint: 380,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true
                }
            }
        ]
    });

    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    arrows: false,
                    dots: true,
                    infinite: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.depoimentos .container').slick({
        centerMode: false,
        slidesToShow: 1,
                    dots: true,
        arrows: false,
        infinite: false
    })
});