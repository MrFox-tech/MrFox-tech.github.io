$(function () {
  $(".menu a, .logo, .header__work").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });




  $('.header__btn, .menu a').on('click', function () {
    $('.header__top').toggleClass('header__top--active');
  });



  var mixer = mixitup('.portfolio__content');

});
