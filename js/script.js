$(document).ready(function(){
  $('.slick_one').slick({
    // setting-name: setting-value
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
  });
  $('.slick_two').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    prevArrow: '<i class="fa-solid fa-arrow-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right next"></i>',
  });
});