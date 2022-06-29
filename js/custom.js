$(function () {
    // navbar icon rotate  //
    $(function () {
        $(".dropdown .dropdown-menu.show").click(function () {
            $(".fa-angle-down").toggleClass("fa-angle-up");
        })
    });

    // banner slider //
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1500

    });


})