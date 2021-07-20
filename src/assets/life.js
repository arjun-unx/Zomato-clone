$(document).ready(function () {
    if (document.querySelector(".globe") !== null) {
        document.querySelector(".globe").classList.remove("hide");
    }
    if (document.querySelector(".nutrition") !== null) {
        document.querySelector(".nutrition").classList.add("hide");
    }
});
