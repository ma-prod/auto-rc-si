$(function () {
  $('a[href^="#"]').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated), body:not(:animated)").animate(
      { scrollTop: destination },
      800
    );
    return false;
  });

  $(".reviews_slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    autoplay: true,
    cssEase: "linear",
  });

  $(".reviews_slider_rev1").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: false,
    adaptiveHeight: true,
    cssEase: "linear",
  });

  (function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    (k = e.createElement(t)),
      (a = e.getElementsByTagName(t)[0]),
      (k.async = 1),
      (k.src = r),
      a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  ym(83250076, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
  now = new Date();
  var perem = 1283;
  $(".el-timer").attr("data-timer", perem);
  $(".el-timer").TimeCircles({
    animation: "smooth",
    bg_width: 0.2,
    fg_width: 0.03,
    circle_bg_color: "#fff",
    time: {
      Days: {
        text: "",
        color: "#fff",
        show: false,
      },
      Hours: {
        text: "hodiny",
        color: "#fff",
        show: true,
      },
      Minutes: {
        text: "minúty",
        color: "#fff",
        show: true,
      },
      Seconds: {
        text: "sekundy",
        color: "#fff",
        show: true,
      },
    },
  });

  $(".feedback").click(function () {
    $(".popup-window").show();
  });
  $(".close-popup").click(function () {
    $(".popup-window").hide();
  });
});
