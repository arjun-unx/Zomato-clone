$(document).ready(function () {
    var owl = $(".hidecarousel2");
    owl.owlCarousel({
        items: 6,
        margin: 30,
        nav: false,
        loop: false,
        dots: false,
        rewind: true,
        mouseDrag: true,
        lazyLoad: false,
        autoplay: false,
    });

    // Custom Button
    $(".NextBtn").click(function () {
        owl.trigger("next.owl.carousel");
    });
    $(".PreBtn").click(function () {
        owl.trigger("prev.owl.carousel");
    });

});
$(document).ready(function () {
    if (document.querySelector(".globe") !== null) {
        document.querySelector(".globe").classList.remove("hide");
    }
    if (document.querySelector(".nutrition") !== null) {
        document.querySelector(".nutrition").classList.add("hide");
    }
});
