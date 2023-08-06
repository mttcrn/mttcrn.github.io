$(document).ready(function(){
    $(".hamburger").on("click", function() {
      $(".menu").toggleClass("menu_open");
      if (document.querySelector(".menu").classList.contains("menu_open")) {
          $(".btn").toggleClass('active');
          $(".btn").removeClass('not-active');
          document.body.style.overflow = 'hidden';
      } else {
        $(".btn").toggleClass('not-active');
        $(".btn").removeClass('active');
        setTimeout(function() {
            document.body.style.overflow = 'visible';
        }, 1000);
      }
    });

    $(".menu a").on("click", function(){
        $(".menu").removeClass("menu_open");
        $(".btn").toggleClass('not-active');
        $(".btn").removeClass('active');
        setTimeout(function() {
            document.body.style.overflow = 'visible';
        }, 1000);
    });

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 1.5) {
        $('.arrow').addClass('fade');
      } else{
        $('.arrow').removeClass('fade');
      }
    });

});

ScrollReveal().reveal('.reveal', {
  distance: '100px', duration: 1500, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 600
});

var string = "Hi! I'm Cate";
var array = string.split("");
var timer;

function frameLooper () {
  if (array.length > 0) {
    document.getElementById("type").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout('frameLooper()', 100); /* change number for speed */
}
frameLooper();
