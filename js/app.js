$('.compare-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear',
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 10000,
})

$('.control-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
})

$('.reviews-photos').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
})

$('.reviews-videos').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 10000,
})

$('.objects-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
})

$('.object').each(function () {
  const slider = $(this).find('.object-slider')
  const nav = $(this).find('.object-nav')

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav,
    arrows: false,
  })

  nav.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: slider,
    arrows: false,
    focusOnSelect: true,
  })
})

var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
var yyyy = today.getFullYear()

today = dd + '.' + mm + '.' + yyyy
$('.js-download-date').text(today)

$('.btn--burger-wrapper').on('click', function () {
  $('.btn--burger-wrapper').toggleClass('active')
  $('.widget-menu').toggleClass('active')
})

$('.faq__item').on('click', function () {
  $(this).toggleClass('active')
})

$('.nav__mob').on('click', function () {
  $('.nav').addClass('active')
})
$('.nav__close').on('click', function () {
  $('.nav').removeClass('active')
})
$('.nav__item a').on('click', function () {
  $('.nav').removeClass('active')
})

/* Selects */
$('.select').fancySelect()

$('.widget-video__close').on('click', function () {
  $('.widget-video').fadeOut()
})

$('.js-btn').on('click', function (e) {
  e.preventDefault()

  var href = $(this).attr('href')

  $(href).fadeIn(500)
})

$('.modal__close').on('click', function (event) {
  event.preventDefault()
  $('html').removeClass('stop')
  $('.modal-overlay').fadeOut(500)
})

$('.modal-overlay').mouseup(function (e) {
  var container = $('.modal')
  if (container.has(e.target).length === 0 && !container.is(e.target)) {
    $('html').removeClass('stop')
    $('.modal-overlay').fadeOut()
  }
})

/* Titles anim */
$('.fz75, .fz48, .fz46, .fz40, .fz55, .fz60, .fz70').not('.no-anim').each(anime)
// $(".title-descr").not('.subtitle-first').each(anime);
function anime(anim) {
  var thisTitle = $(this)
  var offsetTop = thisTitle.offset().top - $(window).height() - 10
  if ($(document).scrollTop() > offsetTop) {
    thisTitle.addClass('fade_in')
  }
  $(window).scroll(function (event) {
    offsetTop = thisTitle.offset().top - $(window).height() - 10
    if ($(document).scrollTop() > offsetTop) {
      thisTitle.addClass('fade_in')
    }
  })
}

// $("input[name='social']").on('change, input', function () {
//   if ($(this).is('#whatsapp')) {
//     $(this)
//       .closest('form')
//       .find('input[name="phone"]')
//       .attr('placeholder', 'Ваш телефон WhatsApp')
//   } else if ($(this).is('#telegram')) {
//     $(this)
//       .closest('form')
//       .find('input[name="phone"]')
//       .attr('placeholder', 'Ваш телефон Telegram')
//   } else if ($(this).is('#viber')) {
//     $(this)
//       .closest('form')
//       .find('input[name="phone"]')
//       .attr('placeholder', 'Ваш телефон Viber')
//   } else if ($(this).is('#phone')) {
//     $(this)
//       .closest('form')
//       .find('input[name="phone"]')
//       .attr('placeholder', 'Ваш телефон')
//   } else if ($(this).is('#email')) {
//     $(this)
//       .closest('form')
//       .find('input[name="phone"]')
//       .attr('placeholder', 'Ваш телефон')
//   }
// })

// $("input[name='social2']").on('change, input', function () {
//   if ($(this).is('#whatsapp2')) {
//     $(this)
//       .closest('form')
//       .find('input[name="phone"]')
//       .attr('placeholder', 'Ваш телефон WhatsApp')
//   } else if ($(this).is('#telegram2')) {
//     $(this)
//       .closest('form')
//       .find('input[name="phone"]')
//       .attr('placeholder', 'Ваш телефон Telegram')
//   } else if ($(this).is('#viber2')) {
//     $(this)
//       .closest('form')
//       .find('input[name="phone"]')
//       .attr('placeholder', 'Ваш телефон Viber')
//   }
// })

// $("input[name='social3']").on('change, input', function () {
//   if ($(this).is('#whatsapp3')) {
//     $(this)
//       .closest('form')
//       .find('input[name="phone"]')
//       .attr('placeholder', 'Ваш телефон WhatsApp')
//   } else if ($(this).is('#telegram3')) {
//     $(this)
//       .closest('form')
//       .find('input[name="phone"]')
//       .attr('placeholder', 'Ваш телефон Telegram')
//   } else if ($(this).is('#viber3')) {
//     $(this)
//       .closest('form')
//       .find('input[name="phone"]')
//       .attr('placeholder', 'Ваш телефон Viber')
//   }
// })

$('input[name="phone"]').mask('+380(99)999-99-99')

$('input[type="file"]').change(function () {
  var value = $(this).val()
  $(this).closest('label').find('.js-file').text(value)
})

$('.js-trigger-file').on('click', function (e) {
  e.preventDefault()

  $('.js-trigger-point').click()
})

//AJAX

// ---------------------

function simulate(element, eventName) {
  var options = extend(defaultOptions, arguments[2] || {})
  var oEvent,
    eventType = null

  for (var name in eventMatchers) {
    if (eventMatchers[name].test(eventName)) {
      eventType = name
      break
    }
  }

  if (!eventType)
    throw new SyntaxError(
      'Only HTMLEvents and MouseEvents interfaces are supported'
    )

  if (document.createEvent) {
    oEvent = document.createEvent(eventType)
    if (eventType == 'HTMLEvents') {
      oEvent.initEvent(eventName, options.bubbles, options.cancelable)
    } else {
      oEvent.initMouseEvent(
        eventName,
        options.bubbles,
        options.cancelable,
        document.defaultView,
        options.button,
        options.pointerX,
        options.pointerY,
        options.pointerX,
        options.pointerY,
        options.ctrlKey,
        options.altKey,
        options.shiftKey,
        options.metaKey,
        options.button,
        element
      )
    }
    element.dispatchEvent(oEvent)
  } else {
    options.clientX = options.pointerX
    options.clientY = options.pointerY
    var evt = document.createEventObject()
    oEvent = extend(evt, options)
    element.fireEvent('on' + eventName, oEvent)
  }
  return element
}

function extend(destination, source) {
  for (var property in source) destination[property] = source[property]
  return destination
}

var eventMatchers = {
  HTMLEvents:
    /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
  MouseEvents: /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/,
}
var defaultOptions = {
  pointerX: 0,
  pointerY: 0,
  button: 0,
  ctrlKey: false,
  altKey: false,
  shiftKey: false,
  metaKey: false,
  bubbles: true,
  cancelable: true,
}

/* Quiz */
const QUIZ_TOTAL = 5

var number = 0
var maxNumber = $('.quiz-item').length
var $element = $('.quiz-item').find('input, select, textarea')
var btnPrev = $('.quiz-btn--prev')
var btnNext = $('.quiz-btn--next')
var isValid
var dataBlock
var activeSlide = []
let quizResult = []
let bxTextarea
let step = 0
$element.on('change input', function (e) {
  var value = $(this).val().trim()

  if (quizResult[quizResult.length - 1] !== `${step} - ${value}`) {
    step++
    quizResult.push(`${step} - ${value}`)
  }

  if (QUIZ_TOTAL == step) {
    bxTextarea.textContent = quizResult.toString()
  }
  isValid = value !== ''
  btnActive(!isValid)
})

$('input[name="quiz1"]').on('change', function (e) {
  setTimeout(function () {
    btnNext.click()
  }, 500)
})
$('input[name="quiz2"]').on('change', function () {
  setTimeout(function () {
    btnNext.click()
  }, 500)
})
$('input[name="quiz4"]').on('change', function () {
  setTimeout(function () {
    btnNext.click()
  }, 500)
})
$('input[name="quiz5"]').on('change', function () {
  setTimeout(function () {
    btnNext.click()
  }, 500)
})
$('input[name="quiz6"]').on('change', function () {
  setTimeout(function () {
    btnNext.click()
  }, 500)
})
$('input[name="quiz7"]').on('change', function () {
  setTimeout(function () {
    btnNext.click()
  }, 500)
})

function btnActive(isValid) {
  if (number === 0) {
    btnPrev.prop('disabled', 'false')
    btnNext.prop('disabled', isValid)
  } else {
    btnPrev.prop('disabled', false)
    if (activeSlide[number] === true || isValid === false) {
      btnNext.prop('disabled', false)
    } else {
      btnNext.prop('disabled', true)
    }
  }
}

// sidebar

function progress(num) {
  const percent = parseInt((100 / maxNumber) * (num + 1))
  const promo = ++$('.js-quiz-percent').text()[0]
  $('.js-quiz-percent').text(promo > 5 ? 5 : promo)
  $('.js-quiz-progress').text(num + 1)
  $('.quiz-progress__inner').css(
    'width',
    (percent === 100 ? 98.9 : percent) + '%'
  )
}
progress(0)

// btn
function btnClick() {
  btnPrev.on('click', function (event) {
    event.preventDefault()
    --number
    $('.quiz-item').hide()
    $('.quiz-item').eq(number).fadeIn()
    btnActive(!isValid)
    if (number === 0) {
      btnPrev.hide()
    }
    progress(number)

    animateTop()
  })

  btnNext.on('click', function (event) {
    event.preventDefault()

    activeSlide[number] = true
    ++number
    $('.quiz-item').hide()
    $('.quiz-item').eq(number).fadeIn(1000)
    btnActive(!isValid)

    if (activeSlide[number] === true) {
      btnNext.prop('disabled', false)
    } else {
      btnNext.prop('disabled', true)
    }

    if (number > 0) {
      btnPrev.show()
    }

    if (number === 5) {
      $('.quiz-bottom').hide()
      $('.quiz-right').hide()
      $('.quiz-progress').hide()
      $('.quiz-form').addClass('quiz-form--semifinal')
    }

    progress(number)

    animateTop()
  })
}
btnClick()

function animateTop(eq) {
  var elem = $('.quiz-inner')
  var top = elem.offset().top - 15
  $('body,html').animate({ scrollTop: top }, 400)
}

var toTop = $('.to_top')

toTop.on('click', topFunction)

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    toTop.addClass('act')
  } else {
    toTop.removeClass('act')
  }
}

function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

function topFunction() {
  $('body,html').animate({ scrollTop: 0 }, 100)
}

$(document).ready(function ($) {
  if (window.screen.width < 901) {
    $('.btn--burger-wrapper').removeClass('active')
    $('.widget-menu').removeClass('active')
  }

  const bxInterval = setInterval(() => {
    if (window.b24form) {
      bxTextarea = document.querySelector('textarea.b24-form-control')

      bxTextarea.style.display = 'none'

      clearInterval(bxInterval)
    }
  }, 500)
})

/* Cookie */
var cookiesTest2 = get_cookie('test2')
if (cookiesTest2 !== '' && cookiesTest2 !== null) {
  // return false;
} else {
  var closeMod1 = false
  var closeMod2 = false
  var closeMod3 = false

  $(document).mouseleave(function (event) {
    event = event || window.event
    if (event.clientY < 0 || event.clientY < 3) {
      if (!closeMod3) {
        $('html').addClass('stop')
        $('#modal-free').fadeIn()

        closeMod3 = true

        var date2 = new Date()
        date2.setDate(date2.getDate() + 7)
        date2 = date2.toUTCString()
        document.cookie = 'test2=1;expires=' + date2
      }
    }
  })
}

function get_cookie(cookie_name) {
  var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)')

  if (results) return unescape(results[2])
  else return null
}
