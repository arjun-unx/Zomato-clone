$(document).ready(function () {
    var owl = $(".hidecarousel3")
    owl.owlCarousel({
        items: 1,
        margin: 15,
        nav: false,
        loop: false,
        dots: false,
        rewind: true,
        mouseDrag: true,
        lazyLoad: false,
        autoplay: false,
    });
    var pick = $(".hidecarousel4")
    pick.owlCarousel({
        items: 4,
        margin: 15,
        nav: false,
        loop: false,
        dots: false,
        rewind: true,
        mouseDrag: true,
        lazyLoad: false,
        autoplay: false,
    });
    // Custom Button
    $(".customNextBtn").click(function () {
        owl.trigger("next.owl.carousel");
    });
    $(".customPreviousBtn").click(function () {
        owl.trigger("prev.owl.carousel");
    });
    $(".NextBtn").click(function () {
        pick.trigger("next.owl.carousel");
    });
    $(".PreBtn").click(function () {
        pick.trigger("prev.owl.carousel");
    });
});
$(document).ready(function () {
    if (document.querySelector(".globe") !== null) {
        document.querySelector(".globe").classList.add("hide");
        console.log("hiiiiiii");
    }
    if (document.querySelector(".nutrition") !== null) {
        document.querySelector(".nutrition").classList.remove("hide");
        console.log("hiiiiiiiiii");
    }
});
// function hiding() {
//     if (document.querySelector(".globe") !== null) {
//         document.querySelector(".globe").classList.add("hide");
//     }
// }