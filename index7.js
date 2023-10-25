/*jslint browser: true */
/*jslint single: true */
/*jslint unordered: true */
/*global $, jQuery */

window.onload = function () {
    let start = false;
    function slicker() {
        let vw = window.innerWidth;
        let vh = window.innerHeight;
        if (start) {
            $('#carousel').slick('unslick');
        }

        if (vw >= vh) {
            $('#carousel').slick({
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
            });
        } else {
            $('#carousel').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
    }
    slicker();
    start = true;

    window.addEventListener("resize", function () {
        slicker();
    });
};