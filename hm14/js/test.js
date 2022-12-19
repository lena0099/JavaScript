const anchors = document.querySelectorAll('a.scroll-to')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href')
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })}

    $(".you").on("click",function (){
        $(".hot-list").slideToggle(4000);
    });


$(document).on('scroll',function () {
    $(document).scrollTop()>$(window).height()?$("#scrollToTop").css("display", "flex"):$("#scrollToTop").fadeOut(2000);
});

$("#scrollToTop").on('click',function () {
    $('html, body').animate({scrollTop: 0},2000);
});

// let $btnScrollToTop = $('#scrollToTop');
//     $(document).on('scroll', function () {
//         $(document).scrollTop() > $(window).height() ? $btnScrollToTop.css("display", "flex").fadeIn(500) : $btnScrollToTop.fadeOut(500);
//     });
// //событие на кнопку up
//     $btnScrollToTop.on('click', function () {
//         $('html, body').animate({scrollTop: 0}, 1200);
//     });