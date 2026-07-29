function callContactPopup(e) {
  var t =
    1 < arguments.length && void 0 !== arguments[1]
      ? arguments[1]
      : "contact-modal";
  ($(e).on("click", function () {
    var e = $(this).data("popup");
    ($(".".concat(t, " .contact-modal__body"))
      .find(".list-item")
      .removeClass("on"),
      $(".".concat(t, " .contact-modal__body"))
        .find(".".concat(e))
        .addClass("on"),
      $(".".concat(t)).fadeIn(function () {
        $(".".concat(t)).addClass("show");
      }));
  }),
    $(
      "."
        .concat(t, " .contact-modal__close, .")
        .concat(t, " .contact-modal__mask"),
    ).on("click", function () {
      $(".".concat(t)).fadeOut().removeClass("show");
    }));
}
function iframeEvent(e) {
  ($(e).click(function () {
    var e = $(this),
      t =
        (t =
          1024 < $(window).width()
            ? e.attr("data-iframe")
            : e.attr("data-mbiframe")) || e.attr("data-iframe");
    t &&
      ((e = $(".video-modal__player")),
      $(".video"),
      /\.(mp4|webm|ogg|mov)(\?|$)/i.test(t)
        ? (e.css("padding-bottom", "0"),
          e.html(
            '\n                <video src="'.concat(
              t,
              '" controls autoplay playsinline style="width:100%;"></video>\n            ',
            ),
          ))
        : (e.css("padding-bottom", "56.25%"),
          e.html(
            '\n                <iframe frameborder="0" src="'.concat(
              t,
              '" allowFullScreen="true" allow="autoplay; encrypted-media"></iframe>\n            ',
            ),
          )),
      $(".video-modal").fadeIn(200, function () {
        $(this).addClass("show");
      }));
  }),
    $(".video-modal__close, .video-modal__mask").on("click", function () {
      $(".video-modal")
        .removeClass("show")
        .fadeOut(300, function () {
          $(".video-modal__player").empty();
        });
    }));
}

function indexFun() {
  var o = !(1024 < $(window).width()),
    t = 0,
    n = $("header"),
    i = new Swiper("#indexSwiper", {
      direction: "vertical",
      observer: !0,
      observeParents: !0,
      speed: 1e3,
      initialSlide: 0,
      slidesPerView: 1,
      mousewheel: { thresholdDelta: 100, releaseOnEdges: !0 },
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      resistanceRatio: 0,
      parallax: !0,
      on: {
        slideChange: function () {
          var e = this.activeIndex;
          (t < e ? n.addClass("hidden") : e < t && n.removeClass("hidden"),
            0 < e
              ? (n.addClass("mini"), $(".back-to-top").addClass("show"))
              : (n.removeClass("mini"), $(".back-to-top").removeClass("show")),
            (t = e));
        },
        slideChangeTransitionStart: function () {
          var e = this.slides.length - 1;
          (this.activeIndex === e && $(".auto-height").scrollTop(0),
            2 === this.activeIndex
              ? ($(".home-brand .home-brand__accent").addClass("on"),
                $(".home-brand .home-brand__accent-mobile").addClass("on"))
              : ($(".home-brand .home-brand__accent").removeClass("on"),
                $(".home-brand .home-brand__accent-mobile").removeClass("on")));
        },
      },
    }),
    e =
      ($(".back-to-top").on("click", function () {
        i.slideTo(0);
      }),
      $(".auto-height").on("touchstart", function (e) {
        this.startY = e.touches[0].pageY;
      }),
      $(".auto-height").on("touchmove", function (e) {
        0 < $(e.target).closest(".contact-modal").length ||
          ((e = e.touches[0].pageY),
          $(this).scrollTop() <= 0 && e > this.startY + 10 && i.slideTo(3));
      }),
      $(".home-footer__to-top").on("click", function () {
        i.slideTo(0);
      }),
      $(".home-hero .swiper-slide").length),
    a = !1,
    s =
      ($(".home-hero video").each(function () {
        var e = $(this),
          t = e.data("poster-pc"),
          n = e.data("poster-m");
        ((t || n) && e.attr("poster", o ? n : t),
          o || $(this).attr("autoplay", "autoplay"));
      }),
      new Swiper(".home-hero .swiper-container", {
        observer: !0,
        observeParents: !0,
        parallax: !0,
        speed: 1200,
        loop: 1 < e,
        pagination: 1 < e && {
          el: ".home-hero .swiper-pagination",
          clickable: !0,
        },
        autoplay: o && { delay: 5e3, disableOnInteraction: !1 },
        on: {
          slideChangeTransitionStart: function () {
            var t;
            o ||
              (document
                .querySelectorAll(".swiper-slide video")
                .forEach(function (e) {
                  (e.pause(),
                    e.removeEventListener(
                      "ended",
                      window.handleVideoEndGlobal,
                    ));
                }),
              (t = this.slides[this.activeIndex].querySelector("video"))
                ? ((a = !0),
                  (t.loop = !1),
                  (t.currentTime = 0),
                  t.addEventListener("ended", function e() {
                    ((a = !1),
                      s.slideNext(),
                      t.removeEventListener("ended", e));
                  }),
                  t.play().catch(function (e) {
                    (console.warn("Autoplay prevented:", e), (a = !1));
                  }))
                : ((a = !1),
                  setTimeout(function () {
                    a || s.slideNext();
                  }, 6e3)));
          },
        },
      }));
  (iframeEvent(".home-hero .video-play-btn"),
    new Swiper(".home-products .swiper-container", {
      observer: !0,
      observeParents: !0,
      parallax: !0,
      speed: 1200,
      pagination: { el: ".home-products .swiper-pagination", clickable: !0 },
      scrollbar: { el: ".home-products .swiper-scrollbar", draggable: !0 },
      autoplay: { delay: 5e3, disableOnInteraction: !1 },
    }),
    $(".home-news__list .list-item").each(function (e) {
      $(".home-news__list .list-item")
        .slice(+e, +e + 1)
        .wrapAll('<div class="swiper-slide"></div>');
    }),
    new Swiper(".home-news .swiper-container", {
      observeParents: !0,
      observer: !0,
      loop: !o,
      speed: 900,
      centeredSlides: !o,
      scrollbar: { el: ".home-news .swiper-scrollbar", draggable: !0 },
      pagination: { el: ".home-news .swiper-pagination", clickable: !0 },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 20 },
        1024: { slidesPerView: 1970 / 900, spaceBetween: 50 },
      },
      autoplay: { delay: 5e3, disableOnInteraction: !1 },
    }));
}

function aboutFun() {
  $(".section-4-list .list-item").on("mouseenter", function () {
    $(this).addClass("on").siblings().removeClass("on");
    var e = $(this).index();
    $(".section-4 .bg-item").eq(e).addClass("on").siblings().removeClass("on");
  });
  new Swiper(".section-5 .case-list .swiper-container", {
    observeParents: !0,
    observer: !0,
    speed: 900,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
    navigation: {
      nextEl: $(".section-5 .case-list .product-swiper-button-next"),
      prevEl: $(".section-5 .case-list .product-swiper-button-prev"),
    },
  });
}

function productCatelogFun() {
  $(".catelog .catelog-item.open").find(".catelog-item-content").show();
  $(".catelog .catelog-item .catelog-item-head").on("click", function () {
    $(this).parent().toggleClass("open");
    $(this).parent().find(".catelog-item-content").slideToggle();
  });
}

function productListFun() {
  var isMobile = !(1024 < $(window).width());
  $(".product-category-item .category-name").on("click", function () {
    $(this).parent().toggleClass("on");
    $(this).siblings(".category-child").slideToggle();
  });
  $(".product-category-item.on .category-child").show();
  $(".product-category-item.on .category-child").on(
    "click",
    ".category-child-item",
    function () {
      $(this).addClass("on").siblings().removeClass("on");
    }
  );
  if (isMobile) return;
  $(".product-album-wrapper").addClass("swiper-wrapper");
  var slideCount = $(".product-album .swiper-slide").length;
  var albumSwiper = new Swiper(".product-album .swiper-container", {
    observeParents: !0,
    observer: !0,
    loop: 1 < slideCount,
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: $(".product-album .product-swiper-button-next"),
      prevEl: $(".product-album .product-swiper-button-prev"),
    },
    autoplay: { delay: 5e3, disableOnInteraction: !1 },
  });
  if (slideCount < 1) {
    $(".product-album")
      .find(".product-swiper-button-next, .product-swiper-button-prev")
      .hide();
  }
  var thumbSwiper = new Swiper(".product-thumb .swiper-container", {
    observeParents: !0,
    observer: !0,
    initialSlide: 1,
    loop: !0,
    speed: 900,
    breakpoints: { 1024: { slidesPerView: "auto", spaceBetween: 20 } },
    autoplay: { delay: 5e3, disableOnInteraction: !1 },
  });
  albumSwiper.on("slideChange", function () {
    thumbSwiper.slideToLoop(this.realIndex + 1);
  });
}

function productCenterFun() {
  var isMobile = !(1024 < $(window).width());
  var slideCount = $(".product-center-banner .swiper-slide").length;
  var videoPlaying = !1;
  var bannerSwiper = new Swiper(".product-center-banner .swiper-container", {
    observer: !0,
    observeParents: !0,
    parallax: !0,
    loop: 1 < slideCount,
    speed: 1200,
    autoplay: isMobile && { delay: 5e3, disableOnInteraction: !1 },
    on: {
      slideChangeTransitionStart: function () {
        if (isMobile) return;
        document.querySelectorAll(".swiper-slide video").forEach(function (v) {
          v.pause();
          v.removeEventListener("ended", window.handleVideoEndGlobal);
        });
        var video = this.slides[this.activeIndex].querySelector("video");
        if (video) {
          videoPlaying = !0;
          video.loop = !1;
          video.currentTime = 0;
          video.addEventListener("ended", function onEnded() {
            videoPlaying = !1;
            bannerSwiper.slideNext();
            video.removeEventListener("ended", onEnded);
          });
          video.play().catch(function (err) {
            console.warn("Autoplay prevented:", err);
            videoPlaying = !1;
          });
        } else {
          videoPlaying = !1;
          setTimeout(function () {
            if (!videoPlaying) bannerSwiper.slideNext();
          }, 6e3);
        }
        var realIndex = this.realIndex;
        $(".product-cateogry-list .list-item")
          .eq(realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });
  $(".product-center video").each(function () {
    var $video = $(this);
    var posterPc = $video.data("poster-pc");
    var posterM = $video.data("poster-m");
    if (posterPc || posterM) {
      $video.attr("poster", isMobile ? posterM : posterPc);
    }
    if (!isMobile) $(this).attr("autoplay", "autoplay");
  });
  if (typeof iframeEvent === "function") {
    iframeEvent(".product-center .video-play-btn");
  }
  $(".product-cateogry-list .list-item").on("mouseenter", function () {
    $(this).addClass("on").siblings().removeClass("on");
    bannerSwiper.slideToLoop($(this).index());
  });
  if ($(window).width() < 1024) $("header").removeClass("absolute");
}

function productViewFun() {
  var $thumbs = $(".product-view__thumb");
  var syncing = !1;

  function setActiveThumb(index) {
    $thumbs.removeClass("on").eq(index).addClass("on");
  }

  var thumbSwiper = new Swiper(".product-view__thumbs .swiper-container", {
    observer: !0,
    observeParents: !0,
    slidesPerView: 2.3,
    spaceBetween: 16,
    watchOverflow: !0,
  });

  var mainSwiper = new Swiper(".product-view__main .swiper-container", {
    observer: !0,
    observeParents: !0,
    slidesPerView: 1,
    speed: 600,
    navigation: {
      nextEl: $(".product-view__nav--next"),
      prevEl: $(".product-view__nav--prev"),
    },
    on: {
      slideChange: function () {
        if (syncing) return;
        syncing = !0;
        var i = this.activeIndex;
        setActiveThumb(i);
        thumbSwiper.slideTo(i);
        syncing = !1;
      },
    },
  });

  $thumbs.on("click", function () {
    var i = $thumbs.index(this);
    setActiveThumb(i);
    mainSwiper.slideTo(i);
    thumbSwiper.slideTo(i);
  });

  $(".product-view__sku").on("click", function () {
    $(this).addClass("on").siblings().removeClass("on");
  });

  $(".product-view__tab").on("click", function () {
    var tab = $(this).data("tab");
    $(this).addClass("on").siblings().removeClass("on");
    $('.product-view__panel[data-panel="' + tab + '"]')
      .addClass("on")
      .siblings(".product-view__panel")
      .removeClass("on");
  });
}

$(function () {
  var t,
    n,
    o,
    i,
    e = !(1024 < $(window).width()),
    a =
      ($(".scroll-top").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500);
      }),
      $(".back-to-top"));
  (a.hasClass("is-index") ||
    $(a).click(function () {
      $("html,body").animate({ scrollTop: 0 }, 500);
    }),
    $(window).scroll(function () {
      var e = $(this).scrollTop();
      a.hasClass("is-index") || a.toggleClass("show", 800 <= e);
    }),
    $(".site-header__search").on("click", function (e) {
      (e.stopPropagation(), $(".search-form").addClass("on"));
    }),
    $(document).on("click", function (e) {
      $(e.target).closest(".search-form").length ||
        $(e.target).closest(".site-header__search").length ||
        $(".search-form").removeClass("on");
    }),
    e
      ? (initMobileNav(),
        0 !== (e = document.querySelectorAll(".mobile-nav__child")).length &&
          (e.forEach(function (e) {
            return (e.style.width = "");
          }),
          (t = 0),
          e.forEach(function (e) {
            e = e.offsetWidth;
            t < e && (t = e);
          }),
          e.forEach(function (e) {
            e.style.minWidth = t + "px";
          })))
      : ($("header")
          .on("mouseenter", function () {
            $(this).addClass("active");
          })
          .on("mouseleave", function () {
            $(this).removeClass("active");
          }),
        $(".site-header__nav .site-nav__item").hover(
          function () {
            $(this).find(".site-nav__dropdown").stop(!0).slideDown();
          },
          function () {
            $(this).find(".site-nav__dropdown").stop(!0).slideUp();
          },
        ),
        (n = 0),
        (o = $("header")),
        (i = o.outerHeight()),
        $(window).scroll(function () {
          var e;
          $("header").hasClass("site-header") ||
            ((e = $(this).scrollTop()),
            n < e ? i < e && o.addClass("hidden") : o.removeClass("hidden"),
            (n = e));
        })));
});

function initMobileNav() {
  var t;
  ($("#mobileToggleBtn").on("click", function () {
    $(this).hasClass("show")
      ? (removeUnScroll(),
        t && t.destroy(),
        $(this).removeClass("show"),
        $(".header .mask").hide(),
        $("#mobileMenu").removeClass("show"))
      : (unScroll(),
        $(this).addClass("show"),
        $(".header .mask").show(),
        $("#mobileMenu").addClass("show"),
        (t = new BetterScroll.createBScroll("#mobileMenuScroller", {
          tap: !0,
          click: !0,
          scrollX: !1,
          scrollY: !0,
          mouseWheel: !1,
        })));
  }),
    $(".mobile-nav__close").click(function () {
      (removeUnScroll(),
        $(".header .mask").hide(),
        $("#mobileMenu").removeClass("show"));
    }),
    $("#mobileMenuScroller .list-item .mobile-nav__row").on(
      "click",
      function (e) {
        0 <
          $(this).siblings(".mobile-nav__submenu").find(".mobile-nav__subitem")
            .length &&
          ($(this)
            .siblings(".mobile-nav__submenu")
            .stop()
            .slideToggle(function () {
              t.refresh();
            }),
          $(this).parent(".list-item").toggleClass("on"));
      },
    ));
}
function unScroll() {
  var t = $(document).scrollTop();
  $(document).on("scroll.unable", function (e) {
    $(document).scrollTop(t);
  });
}
function removeUnScroll() {
  $(document).unbind("scroll.unable");
}
