$(document).ready(function () {
    $('.list').click(function (e) {
        e.preventDefault();
        // 自己以外隱藏
        $(this).parent().siblings().find('.dropdown').slideUp()
        $(this).parent().find('.dropdown').slideToggle()
    });
    //go top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    })
 
});

// lightbox
lightbox.option({
    'resizeDuration': 200,
    'showImageNumberLabel': false,
    'wrapAround': true,
})

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});