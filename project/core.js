window.onload = function () {
    $('.burger_menu').on('click', function(){
        $('body').toggleClass('menu_active');
    });

    let setTimer;
    const partners = document.querySelector('.autoplay').innerHTML;
    let start = false;
    function slicker() {
        let sl_w = $('.partner:eq(0)').width(),
            cols = Math.round(window.innerWidth/sl_w) + 2;
        for(let i = 0; i < Math.round(cols / 3) + 1; i++)
            $('.autoplay, .autoplay2').append(partners);

        console.log(cols)
        if (start) {
            $('.autoplay').slick('unslick');
            $('.autoplay2').slick('unslick');
        }

        $('.autoplay, .autoplay2').css('width', (sl_w * cols + 20 * cols) + "px");
        
        $('.autoplay').slick({
            infinite: true,
            slidesToShow: cols,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            variableWidth: true
        });
        setTimeout(function(){
          $('.autoplay2').slick({
            infinite: true,
            slidesToShow: cols,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            variableWidth: true
          });
        },800);

        sl_w = $('.partner:eq(0)').width();
        $('#companies .slick:eq(0)').css('margin-left', -sl_w + "px");
        $('#companies .slick:eq(1)').css('margin-left', -(sl_w / 2) + "px");
    }
    slicker();
    start = true;
  
    window.addEventListener("resize", function () {
        clearTimeout(setTimer);
        setTimer = setTimeout(() => { slicker(); }, 500);
    });

    // 6LemVDkpAAAAAMTv_m7XcDbfvpIv1tYvD8prjJyK
};
