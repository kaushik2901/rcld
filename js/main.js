// window.onload = function() {
//   document.getElementById('loader').style.display = "none";
// }

var bg = 0;


function checkScroll() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= $('#about').offset().top - 100 && windscroll <= $('#news').offset().top - 100) {
    $('a[href="#about"]').css({"border-bottom": "2px solid gray"});
    $('a[href="#news"]').css({"border-bottom": "none"});
    $('a[href="#activity"]').css({"border-bottom": "none"});
    $('a[href="#recruitments"]').css({"border-bottom": "none"});
    $('a[href="#sponsors"]').css({"border-bottom": "none"});
    $('a[href="#team"]').css({"border-bottom": "none"});
  }
  else if (windscroll >= $('#news').offset().top - 100 && windscroll <= $('#activity').offset().top - 100){
    $('a[href="#news"]').css({"border-bottom": "2px solid gray"});
    $('a[href="#about"]').css({"border-bottom": "none"});
    $('a[href="#activity"]').css({"border-bottom": "none"});
    $('a[href="#recruitments"]').css({"border-bottom": "none"});
    $('a[href="#sponsors"]').css({"border-bottom": "none"});
    $('a[href="#team"]').css({"border-bottom": "none"});
  }
  else if (windscroll >= $('#activity').offset().top - 100 && windscroll <= $('#recruitments').offset().top - 100) {
    $('a[href="#activity"]').css({"border-bottom": "2px solid gray"});
    $('a[href="#news"]').css({"border-bottom": "none"});
    $('a[href="#about"]').css({"border-bottom": "none"});
    $('a[href="#recruitments"]').css({"border-bottom": "none"});
    $('a[href="#sponsors"]').css({"border-bottom": "none"});
    $('a[href="#team"]').css({"border-bottom": "none"});
  }
  else if (windscroll >= $('#recruitments').offset().top - 100 && windscroll <= $('#sponsors').offset().top - 100) {
    $('a[href="#recruitments"]').css({"border-bottom": "2px solid gray"});
    $('a[href="#news"]').css({"border-bottom": "none"});
    $('a[href="#activity"]').css({"border-bottom": "none"});
    $('a[href="#about"]').css({"border-bottom": "none"});
    $('a[href="#sponsors"]').css({"border-bottom": "none"});
    $('a[href="#team"]').css({"border-bottom": "none"});
  }
  else if (windscroll >= $('#sponsors').offset().top-100 && windscroll <= $('#team').offset().top-100) {
    $('a[href="#sponsors"]').css({"border-bottom": "2px solid gray"});
    $('a[href="#news"]').css({"border-bottom": "none"});
    $('a[href="#activity"]').css({"border-bottom": "none"});
    $('a[href="#recruitments"]').css({"border-bottom": "none"});
    $('a[href="#about"]').css({"border-bottom": "none"});
    $('a[href="#team"]').css({"border-bottom": "none"});
  }
  else if (windscroll >= $('#team').offset().top-100 && windscroll <= $('#footer').offset().top-100) {
    $('a[href="#team"]').css({"border-bottom": "2px solid gray"});
    $('a[href="#news"]').css({"border-bottom": "none"});
    $('a[href="#activity"]').css({"border-bottom": "none"});
    $('a[href="#recruitments"]').css({"border-bottom": "none"});
    $('a[href="#sponsors"]').css({"border-bottom": "none"});
    $('a[href="#about"]').css({"border-bottom": "none"});
  }
}

$(window).on( 'scroll',function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 150) {
    $('nav').addClass('dblue');
    $('.post_black').addClass('black_1');
  }
  else {
    $('nav').removeClass('dblue');
    $('.post_black').removeClass('black_1');
  }

  checkScroll();
});

$('.center').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.nav-link').click(function(e) {
  var link = $(this).attr('href');
  $('html, body').animate({
    scrollTop : $(link).offset().top - 90,
  }, 500, 'swing');
  e.preventDefault();
});

$(document).ready(function() {
  checkScroll();
  var windscroll = $(window).scrollTop();
  if (windscroll >= 150) {
    $('nav').addClass('dblue');
    $('.post_black').addClass('black_1');
  }
  else {
    $('nav').removeClass('dblue');
    $('.post_black').removeClass('black_1');
  }

  $('#nav_icon').click(function() {
    if($(window).scrollTop() <= 150) {
      if(bg == 0){
        $('nav').addClass('dblue');
        $('.post_black').addClass('black_1');
        bg = 1;
      }
      else {
        $('nav').removeClass('dblue');
        $('.post_black').removeClass('black_1');
        bg = 0;
      }
    }
  });
});
