$(function () {
  // index Swiper applies transform; fixed modal inside it won't cover the viewport
  $(".contact-modal").appendTo(document.body);

  if (typeof callContactPopup === "function") {
    callContactPopup(".site-header__contact-btn");
    callContactPopup(".contact-cta .list-item");
  }

  if (typeof indexFun === "function" && document.getElementById("indexSwiper")) {
    indexFun();
  }

  if (typeof aboutFun === "function" && document.querySelector(".about")) {
    aboutFun();
  }

  if (typeof iframeEvent === "function" && document.querySelector(".video-list")) {
    iframeEvent(".video-list .list-item");
  }

  if (typeof productCatelogFun === "function" && document.querySelector(".catelog")) {
    productCatelogFun();
  }

  if (typeof productListFun === "function" && document.querySelector(".product-list")) {
    productListFun();
  }

  if (typeof productCenterFun === "function" && document.querySelector(".product-center")) {
    productCenterFun();
  }

  if (typeof productViewFun === "function" && document.querySelector(".product-view")) {
    productViewFun();
  }

  if (
    typeof iframeEvent === "function" &&
    document.querySelector(".catelog-item-content-video .video-item")
  ) {
    iframeEvent(".catelog-item-content-video .video-item");
  }
});
