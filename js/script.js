var slideWidth = $('.slides').width();

setInterval(function () {
  $('.slides ul').animate({ left: -slideWidth }, 900, function () {
    $('.slides ul').append($('.slides ul li').first());
    $('.slides ul').css({ left: 0 });
  });
}, 3000);

$('nav > ul > li').mouseenter(function () {
  $(this).find('.sub').stop().slideDown()
})
.mouseleave(function () {
  $(this).find('.sub').stop().slideUp()
})


// 팝업
$('.trigger').click(function () {
  $('#popup').addClass('active')
})
$('#popup button').click(function () {
  $('#popup').removeClass('active')
})


/* =========================
   베스트셀러
========================= */
var swiper = new Swiper(".mySwiperA", {

  slidesPerView: 4,
  spaceBetween: 30,

  scrollbar: {
    el: ".swiper-scrollbar1",
    clickable: true,
  },

  breakpoints: {

    0: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },

    1024: {
      slidesPerView: 3
    },

    1280: {
      slidesPerView: 4
    }

  }

});

/* =========================
   비디오 옆 상품
========================= */
var swiper = new Swiper(".mySwiperB", {
  slidesPerView: 1,

  scrollbar: {
    el: ".swiper-scrollbar2",
    clickable: true,
  }
});


/* =========================
   바디 보습 케어
========================= */
var swiper = new Swiper(".mySwiperC", {

  slidesPerView: 4,
  spaceBetween: 30,

  scrollbar: {
    el: ".swiper-scrollbar3",
    clickable: true,
  },

  breakpoints: {

    0: {
      slidesPerView: 1
    },

    480: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },

    1024: {
      slidesPerView: 3
    },

    1200: {
      slidesPerView: 4
    }

  }

});

/* =========================
   매거진
========================= */
var swiper = new Swiper(".mySwiperD", {

  slidesPerView: 3,
  spaceBetween: 30,

  breakpoints: {

    0: {
      slidesPerView: 1
    },

    480: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },

    1024: {
      slidesPerView: 3
    }

  }

});
