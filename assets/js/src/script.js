$(document).ready(function(){
  if($(window).width() <= '576'){
    $('.information__list').toggleClass('desktop');
  };
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = $(this.hash)
    $('html, body').stop().animate({
      'scrollTop': target.offset().top
    }, 1000);
  });
  $('.burger').click(function(){
    $('.nav-panel__li').toggleClass('mobile_hide');
    $('.nav-panel__social').toggleClass('mobile_hide');
    $('main,footer').toggleClass('_opacity');
  });
  $('.information__list').click(function(){
    $(this).toggleClass('noactive');
    $(this).toggleClass('active');
  });
});
