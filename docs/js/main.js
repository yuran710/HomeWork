$(function () {
  $('.header__reting').rateYo({
  })
  $(function () {
    var mixer = mixitup('.blog__list');
    $('.blog__filter-btn').on('click', function () {
      $('.blog__filter-btn').removeClass('blog__filter-btn--active')
      $(this).addClass('blog__filter-btn--active')
    })
  })
  $('.customers__slider').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    appendDots: $('.customers__dots'),
    waitForAnimate: false
  })
  $('.customers__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickPrev')
  })
  $('.customers__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickNext')
  })

  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-link--active')) {
      $(this).removeClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideUp()
    } else {
      $('.questions__acc-link').removeClass('questions__acc-link--active')
      $('.questions__acc-text').slideUp()
      $(this).addClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideDown()
    }
  })



})