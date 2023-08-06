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
    waitForAnimate: false,
    responsive:
    [
      {
        breakpoint:1300 ,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
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
  function init() {
    let map = new ymaps.Map('map', {
      center: [40.71862775342618, -73.99846535532649],
      zoom: 12.4
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }
  ymaps.ready(init);

  $(".header__nav-list, .footer__nav-list, body").on("click", "a", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)
  $('.burger, .overley').on('click', function (e) {
    e.preventDefault()
    $('.burger,.header__top--open').toggleClass('active')
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })




})