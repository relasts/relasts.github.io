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

  $('.tarif_category:not(.active)').hover(function () {
    $('.tarif_category.active').removeClass('active');
  });
  $( ".tarif_category:not(.active)").on( "mouseleave", function() {
    $('.tarif_category:eq(1)').addClass('active');
  } );

  $(".a").css('height', $('.aa > div:eq(0)').height());
  function aa(p){
      console.log(p)
      $('.aa > div').css('opacity', '0');
      setTimeout(function(){ $('.aa > div').css('display', 'block'); }, 0);
      $('.aa > div:eq(' + p + ')').css('display', 'block');
      setTimeout(function(){ $('.aa > div:eq(' + p + ')').css('opacity', '1'); }, 0);
      
      setTimeout(function(){
          $(".a").animate({
              'height': $('.aa > div:eq(' + p + ')').height()
          }, 300, "linear");
      }, 100);

      $('.ednum').html((p+1).toString().padStart(2, '0'))
  }

  p = 0, pl = $('.aa > div').length - 1;
  $('.b2').on('click', function(){
      if(p == 0) p = pl;
      else p--;
      aa(p);
  });
  $('.b1').on('click', function(){

      if(p == pl) p = 0;
      else p++;
      aa(p);
  });

  $('#AskList > div').on('click', function(){
    $('#AskList > div').removeClass('active');
    $(this).addClass('active');
  });


  $("#form_send").submit(function(e){
      console.log('asdsadsad')
      e.preventDefault();
      let name = document.getElementById('name').value,
          phone = document.getElementById('phone').value,
          email = document.getElementById('email').value,
          message = document.getElementById('message').value,
          captcha = grecaptcha.getResponse(),
          err = '';
      
      if(name == ''){
          err = 'Введите имя';
      }
      else if(phone == ''){
          err = 'Введите телефон';
      }
      else if(email == ''){
          err = 'Введите email';
      }
      else if(!document.getElementById('oznakomlen').checked){
          err = 'Нужно дать согласие на обработку персональных данных!';
      }
      else if (!grecaptcha.getResponse()) {
          err = 'Вы не заполнили поле Я не робот!';
      }
      
      if(err != ''){
          document.getElementById('status').innerHTML = err;
      }
      else{
          document.getElementById('status').innerHTML = '';
          let data = {
              name: name,
              phone: phone,
              email: email,
              message: message
          }
          $.post("/mail.php", data).done(function(result){
              document.getElementById('status').innerHTML = (result !== "error") ? "Заявка отправлена!" : "Неожиданная ошибка";
              $('form').trigger("reset");
          });
          return false;
      }
  });


};
