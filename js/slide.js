$(".header-slide").slick({
  loop: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: !0,
  cssEase: "linear",
});

$(".guest-slide").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: false,
  autoplaySpeed: 2000,
});
