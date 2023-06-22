// Home Pages
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    $(".navbar").addClass("bg-redgroup");
  } else {
    $(".navbar").removeClass("bg-redgroup");
    $(".navbar").css("transition", "0.3s ease-in-out");
  }
});
$("#home-clients").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dot: true,
  items: 1,
});
$("#testimonials-collection").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dot: true,
  items: 1,
});
// Services Pages
$(".accord-wrapper .accord-card:nth-child(1) .accord-title").addClass("active");
$(".accord-wrapper .accord-card:nth-child(1) .accord-content").slideDown();
$(".accord-title").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).siblings(".accord-content").slideUp();
    $(this).removeClass("active");
  } else {
    $(".accord-content").slideUp();
    $(".accord-title").removeClass("active");
    $(this).siblings(".accord-content").slideToggle();
    $(this).toggleClass("active");
  }
});
// Gallery Pages
$("#main-images-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dot: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$("#other-galleries-1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dot: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$("#other-galleries-2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dot: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$("#journey-bottom").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dot: true,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$("#career-carousel").owlCarousel({
  items: 2,
  loop: true,
  nav: false,
  dots: false,
  margin: 10,
});
