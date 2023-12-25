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
  
  let FAQelement1 = document.getElementById("FAQ1li");
  let FAQelement2 = document.getElementById("FAQ2li");
  let FAQelement3 = document.getElementById("FAQ3li");
  let FAQelement4 = document.getElementById("FAQ4li");
  let FAQelement5 = document.getElementById("FAQ5li");
  let FAQelement6 = document.getElementById("FAQ6li");
  let FAQelement7 = document.getElementById("FAQ7li");
  let FAQelement8 = document.getElementById("FAQ8li");
  let FAQelement9 = document.getElementById("FAQ9li");
  let FAQelement10 = document.getElementById("FAQ10li");
  let FAQelement11 = document.getElementById("FAQ11li");
  let FAQelement12 = document.getElementById("FAQ12li");
  let FAQelements = [FAQelement1, FAQelement2, FAQelement3, FAQelement4, FAQelement5, FAQelement6, FAQelement7, FAQelement8, FAQelement9, FAQelement10, FAQelement11, FAQelement12];
  
  function FAQ(id) {
    for (i = 0; i < 12; i += 1) {
      FAQelements[i].setAttribute("class", "passive");
    }
    FAQelements[id].setAttribute("class", "active");
  }
  
  let btn_FAQ1 = document.getElementById("FAQ1");
  btn_FAQ1.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ1.getAttribute("element"));
  });
  
  let btn_FAQ2 = document.getElementById("FAQ2");
  btn_FAQ2.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ2.getAttribute("element"));
  });
  
  let btn_FAQ3 = document.getElementById("FAQ3");
  btn_FAQ3.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ3.getAttribute("element"));
  });
  let btn_FAQ4 = document.getElementById("FAQ4");
  btn_FAQ4.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ4.getAttribute("element"));
  });
  let btn_FAQ5 = document.getElementById("FAQ5");
  btn_FAQ5.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ5.getAttribute("element"));
  });
  let btn_FAQ6 = document.getElementById("FAQ6");
  btn_FAQ6.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ6.getAttribute("element"));
  });
  let btn_FAQ7 = document.getElementById("FAQ7");
  btn_FAQ7.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ7.getAttribute("element"));
  });
  let btn_FAQ8 = document.getElementById("FAQ8");
  btn_FAQ8.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ8.getAttribute("element"));
  });
  let btn_FAQ9 = document.getElementById("FAQ9");
  btn_FAQ9.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ9.getAttribute("element"));
  });
  let btn_FAQ10 = document.getElementById("FAQ10");
  btn_FAQ10.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ10.getAttribute("element"));
  });
  let btn_FAQ11 = document.getElementById("FAQ11");
  btn_FAQ11.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ11.getAttribute("element"));
  });
  let btn_FAQ12 = document.getElementById("FAQ12");
  btn_FAQ12.addEventListener("click", function (e) {
    e.preventDefault();
    FAQ(btn_FAQ12.getAttribute("element"));
  });
    // 6LemVDkpAAAAAMTv_m7XcDbfvpIv1tYvD8prjJyK
};
