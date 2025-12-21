$('nav > ul > li').mouseenter(function () {
  $('.sub, .subbg').stop().slideDown()
})
  .mouseleave(function () {
    $('.sub, .subbg').stop().slideUp(200)
  })

// 메인 이미지 슬라이드
setInterval(function () {
  $('.slides ul').animate({ left: -1200 }, 900, function () {
    $('.slides ul').append($('.slides ul li').first())
    $('.slides ul').css({ left: 0 })
  })
}, 3000)

// 팝업
$('.trigger').click(function () {
  $('#popup').addClass('active')
})
$('#popup button').click(function () {
  $('#popup').removeClass('active')
})


// 베스트셀러
var swiper = new Swiper(".mySwiperA", {
      slidesPerView: 4,
      spaceBetween: 30,
      scrollbar: {
        el: ".swiper-scrollbar1",
        clickable: true,
      },
    });

var swiper = new Swiper(".mySwiperB", {
  slidesPerView: 1,
  scrollbar: {
    el: ".swiper-scrollbar2",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiperC", {
      slidesPerView: 4,
      spaceBetween: 30,
      scrollbar: {
        el: ".swiper-scrollbar3",
        clickable: true,
      },
    });

var swiper = new Swiper(".mySwiperD", {
  slidesPerView: 3,
});
