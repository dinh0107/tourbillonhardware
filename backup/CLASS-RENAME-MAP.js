/**
 * Semantic class rename map (old → new).
 * Longest keys first when applying. Swiper/iconfont/state kept where JS depends heavily.
 */
const MAP = {
  // —— Layout containers ——
  wp1760: "layout-wide",
  wp1680: "layout-footer",
  wp1600: "layout-contact",

  // —— Header ——
  "header-index": "site-header",
  "header-logo": "site-header__logo",
  "header-nav": "site-header__nav",
  "header-bar": "site-header__actions",
  "header-search": "site-header__search",
  "header-lang": "site-header__lang",
  "nav-item": "site-nav__item",
  "nav-link": "site-nav__link",
  "nav-sub": "site-nav__dropdown",
  "nav-sub-wp": "site-nav__dropdown-inner",
  "nav-con": "mobile-nav__link",
  "nav-child-con": "mobile-nav__toggle",
  "nav-child-item": "mobile-nav__child",
  "bar-item": "site-header__action",
  "bar-form": "site-header__contact-btn",
  "mobile-btn": "site-header__menu-btn",
  "search-box": "search-form",
  "search-btn": "search-form__submit",
  "lang-box": "lang-menu",
  "lang-item": "lang-menu__item",
  "logo-white": "logo--light",
  "logo-black": "logo--dark",
  "close-menu": "mobile-nav__close",
  "head-logo": "mobile-nav__logo",
  "list-wp": "mobile-nav__inner",
  "list-lang": "mobile-nav__langs",

  // —— Home: Hero ——
  "index-banner": "home-hero",
  "video-click": "video-play-btn",

  // —— Home: Design / products ——
  "index-design": "home-products",
  "index-design-wrapper": "home-products__slide",
  "index-design-container": "home-products__layout",
  "img-wrapper": "home-products__visual",
  "img-box": "media-box",

  // —— Home: Brand ——
  "index-brand": "home-brand",
  "index-brand-container": "home-brand__content",
  "brand-logo": "home-brand__logo",
  "blue-box": "home-brand__accent",
  "top-blue-box": "home-brand__accent-mobile",
  "top-title": "home-brand__heading",
  "mobile-content": "home-brand__mobile",
  "icon-logo": "home-brand__badge-logo",
  "icon-s": "home-brand__badge-text",
  "icon-img": "home-brand__badge-icon",

  // —— Home: News ——
  "index-news": "home-news",
  "index-news-wrapper": "home-news__inner",
  "index-news-container": "home-news__list",
  "index-news-mobile": "home-news--mobile",
  "index-news-mobile-contact": "home-news__contact",
  "hover-text": "news-card__overlay",
  "hover-text-content": "news-card__overlay-body",
  "view-more": "news-card__more",

  // —— Home: Footer slide ——
  "index-footer": "home-footer",
  "index-footer-mobile-contact": "home-footer__contact",
  "index-go-top": "home-footer__to-top",
  "footer-top": "site-footer__top",
  "footer-middle": "site-footer__middle",
  "footer-bottom": "site-footer__bottom",
  "footer-logo": "site-footer__logo",
  "footer-nav": "site-footer__nav",
  "footer-nav-list": "site-footer__nav-list",
  "footer-contact": "site-footer__contact",
  "share-list": "social-list",
  "share-item": "social-list__item",
  "contact-list": "site-footer__contact-list",
  "contact-item": "site-footer__contact-item",
  "circle-logo": "site-footer__seal",
  "circle-text": "site-footer__seal-text",
  "circle-text-top": "site-footer__seal-top",
  "circle-text-top-item": "site-footer__seal-top-item",
  "circle-text-bottom": "site-footer__seal-bottom",
  "qrcode-box": "wechat-qr",
  "qrcode-tit": "wechat-qr__title",

  // —— Contact CTA ——
  "common-contact": "contact-cta",
  "common-contact-wrapper": "contact-cta__inner",
  "common-contact-popup": "contact-modal",
  "contact-popup": "contact-modal", // same block; HTML class lists are deduped
  "contact-popup-mask": "contact-modal__mask",
  "contact-popup-box": "contact-modal__dialog",
  "contact-popup-close": "contact-modal__close",
  "contact-popup-content": "contact-modal__body",
  "item-join": "contact-modal--join",
  "item-inquiries": "contact-modal--inquire",
  "item-wrapper": "contact-form__fields",
  "input-item": "contact-form__field",
  "textarea-item": "contact-form__field--textarea",

  // —— Floating UI ——
  "fixed-right": "float-actions",
  "fixed-right-top": "back-to-top",
  "go-top": "scroll-top",

  // —— Video popup ——
  "video-popup": "video-modal",
  "video-popup-mask": "video-modal__mask",
  "video-popup-box": "video-modal__dialog",
  "video-popup-close": "video-modal__close",
  "video-box": "video-modal__player",

  // —— Generic semantic (context-heavy short names) ——
  // Keep scoped replacements carefully — applied as whole class tokens only
  more: "link-more",
  tit: "card-title",
  title: "section-title",
  date: "card-date",
  image: "cover-image",
  text: "copy",
  left: "col-main",
  right: "col-side",
  top: "block-top",
  bottom: "block-bottom",
  line: "divider",
  flag: "lang-flag",
  qrcode: "qr-preview",
  copyright: "site-copyright",
  mobile: "mobile-nav",
  list: "mobile-nav__list",
  box: "mobile-nav__panel",
  cont: "mobile-nav__row",
  child: "mobile-nav__submenu",
  "child-item": "mobile-nav__subitem",
  item: "list-item",
  label: "field-label",
  value: "field-control",
  add: "form-submit",
  search: "search-field",
  circle: "seal-ring",
  logo: "brand-mark",

  // Short typography tokens used across homepage
  t: "heading",
  s: "subcopy",

  // Responsive helpers
  pc: "is-desktop",
  m: "is-mobile",

  // Keep `on`, `absolute`, `active`, `hidden`, `mini`, `show`, `is-index`,
  // `auto-height`, `swiper-*`, `iconfont`, `icon-*` as-is (behavior / lib).
};

module.exports = MAP;
