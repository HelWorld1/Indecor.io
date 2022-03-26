$(document).ready(function(){
  $('.burger').click(function(){
      $('.nav-panel__li').toggleClass('mobile_hide');
      $('.nav-panel__social').toggleClass('mobile_hide');
      $('main,footer').toggleClass('_opacity');
  })
});
