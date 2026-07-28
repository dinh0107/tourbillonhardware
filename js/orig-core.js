function isPassive() {
  var e = !1;
  try {
    addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          e = !0;
        },
      }),
    );
  } catch (e) {}
  return e;
}
function swiperAnimateCache(e) {
  for (j = 0; j < e.slides.length; j++)
    for (
      allBoxes = e.slides[j].querySelectorAll(".ani"), i = 0;
      i < allBoxes.length;
      i++
    )
      (allBoxes[i].attributes.style
        ? allBoxes[i].setAttribute(
            "swiper-animate-style-cache",
            allBoxes[i].attributes.style.value,
          )
        : allBoxes[i].setAttribute("swiper-animate-style-cache", " "),
        (allBoxes[i].style.visibility = "hidden"));
}
function swiperAnimate(e) {
  clearSwiperAnimate(e);
  var t = e.slides[e.activeIndex].querySelectorAll(".ani");
  for (i = 0; i < t.length; i++)
    ((t[i].style.visibility = "visible"),
      (effect = t[i].attributes["swiper-animate-effect"]
        ? t[i].attributes["swiper-animate-effect"].value
        : ""),
      (t[i].className = t[i].className + "  " + effect + " animated"),
      (style = t[i].attributes.style.value),
      (duration = t[i].attributes["swiper-animate-duration"]
        ? t[i].attributes["swiper-animate-duration"].value
        : "") &&
        (style =
          style +
          "animation-duration:" +
          duration +
          ";-webkit-animation-duration:" +
          duration +
          ";"),
      (delay = t[i].attributes["swiper-animate-delay"]
        ? t[i].attributes["swiper-animate-delay"].value
        : "") &&
        (style =
          style +
          "animation-delay:" +
          delay +
          ";-webkit-animation-delay:" +
          delay +
          ";"),
      t[i].setAttribute("style", style));
}
function clearSwiperAnimate(e) {
  for (j = 0; j < e.slides.length; j++)
    for (
      allBoxes = e.slides[j].querySelectorAll(".ani"), i = 0;
      i < allBoxes.length;
      i++
    )
      (allBoxes[i].attributes["swiper-animate-style-cache"] &&
        allBoxes[i].setAttribute(
          "style",
          allBoxes[i].attributes["swiper-animate-style-cache"].value,
        ),
        (allBoxes[i].style.visibility = "hidden"),
        (allBoxes[i].className = allBoxes[i].className.replace(
          "animated",
          " ",
        )),
        allBoxes[i].attributes["swiper-animate-effect"] &&
          ((effect = allBoxes[i].attributes["swiper-animate-effect"].value),
          (allBoxes[i].className = allBoxes[i].className.replace(
            effect,
            " ",
          ))));
}
(!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(
          ((e =
            "undefined" != typeof globalThis
              ? globalThis
              : e || self).BetterScroll = {}),
        );
})(this, function (e) {
  var X = function (e, t) {
    return (X =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array
        ? function (e, t) {
            e.__proto__ = t;
          }
        : function (e, t) {
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }))(e, t);
  };
  function H(e, t) {
    function i() {
      this.constructor = e;
    }
    (X(e, t),
      (e.prototype =
        null === t
          ? Object.create(t)
          : ((i.prototype = t.prototype), new i())));
  }
  var c = function () {
    return (c =
      Object.assign ||
      function (e) {
        for (var t, i = 1, s = arguments.length; i < s; i++)
          for (var o in (t = arguments[i]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  };
  function A(e, r, a, l) {
    return new (a = a || Promise)(function (i, t) {
      function s(e) {
        try {
          n(l.next(e));
        } catch (e) {
          t(e);
        }
      }
      function o(e) {
        try {
          n(l.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function n(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value) instanceof a
              ? t
              : new a(function (e) {
                  e(t);
                })
            ).then(s, o);
      }
      n((l = l.apply(e, r || [])).next());
    });
  }
  function N(s, o) {
    var n,
      r,
      a,
      l = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      e = { next: t(0), throw: t(1), return: t(2) };
    return (
      "function" == typeof Symbol &&
        (e[Symbol.iterator] = function () {
          return this;
        }),
      e
    );
    function t(i) {
      return function (e) {
        var t = [i, e];
        if (n) throw new TypeError("Generator is already executing.");
        for (; l;)
          try {
            if (
              ((n = 1),
              r &&
                (a =
                  2 & t[0]
                    ? r.return
                    : t[0]
                      ? r.throw || ((a = r.return) && a.call(r), 0)
                      : r.next) &&
                !(a = a.call(r, t[1])).done)
            )
              return a;
            switch (((r = 0), (t = a ? [2 & t[0], a.value] : t)[0])) {
              case 0:
              case 1:
                a = t;
                break;
              case 4:
                return (l.label++, { value: t[1], done: !1 });
              case 5:
                (l.label++, (r = t[1]), (t = [0]));
                continue;
              case 7:
                ((t = l.ops.pop()), l.trys.pop());
                continue;
              default:
                if (
                  !(a = 0 < (a = l.trys).length && a[a.length - 1]) &&
                  (6 === t[0] || 2 === t[0])
                ) {
                  l = 0;
                  continue;
                }
                if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3])))
                  l.label = t[1];
                else if (6 === t[0] && l.label < a[1])
                  ((l.label = a[1]), (a = t));
                else {
                  if (!(a && l.label < a[2])) {
                    (a[2] && l.ops.pop(), l.trys.pop());
                    continue;
                  }
                  ((l.label = a[2]), l.ops.push(t));
                }
            }
            t = o.call(s, l);
          } catch (e) {
            ((t = [6, e]), (r = 0));
          } finally {
            n = a = 0;
          }
        if (5 & t[0]) throw t[1];
        return { value: t[0] ? t[1] : void 0, done: !0 };
      };
    }
  }
  function $() {
    for (var e = 0, t = 0, i = arguments.length; t < i; t++)
      e += arguments[t].length;
    for (var s = Array(e), o = 0, t = 0; t < i; t++)
      for (var n = arguments[t], r = 0, a = n.length; r < a; r++, o++)
        s[o] = n[r];
    return s;
  }
  var F = [
    { sourceKey: "scroller.scrollBehaviorX.currentPos", key: "x" },
    { sourceKey: "scroller.scrollBehaviorY.currentPos", key: "y" },
    {
      sourceKey: "scroller.scrollBehaviorX.hasScroll",
      key: "hasHorizontalScroll",
    },
    {
      sourceKey: "scroller.scrollBehaviorY.hasScroll",
      key: "hasVerticalScroll",
    },
    { sourceKey: "scroller.scrollBehaviorX.contentSize", key: "scrollerWidth" },
    {
      sourceKey: "scroller.scrollBehaviorY.contentSize",
      key: "scrollerHeight",
    },
    { sourceKey: "scroller.scrollBehaviorX.maxScrollPos", key: "maxScrollX" },
    { sourceKey: "scroller.scrollBehaviorY.maxScrollPos", key: "maxScrollY" },
    { sourceKey: "scroller.scrollBehaviorX.minScrollPos", key: "minScrollX" },
    { sourceKey: "scroller.scrollBehaviorY.minScrollPos", key: "minScrollY" },
    {
      sourceKey: "scroller.scrollBehaviorX.movingDirection",
      key: "movingDirectionX",
    },
    {
      sourceKey: "scroller.scrollBehaviorY.movingDirection",
      key: "movingDirectionY",
    },
    { sourceKey: "scroller.scrollBehaviorX.direction", key: "directionX" },
    { sourceKey: "scroller.scrollBehaviorY.direction", key: "directionY" },
    { sourceKey: "scroller.actions.enabled", key: "enabled" },
    { sourceKey: "scroller.animater.pending", key: "pending" },
    { sourceKey: "scroller.animater.stop", key: "stop" },
    { sourceKey: "scroller.scrollTo", key: "scrollTo" },
    { sourceKey: "scroller.scrollBy", key: "scrollBy" },
    { sourceKey: "scroller.scrollToElement", key: "scrollToElement" },
    { sourceKey: "scroller.resetPosition", key: "resetPosition" },
  ];
  function s(e) {
    console.error("[BScroll warn]: " + e);
  }
  function R(e, t) {
    if (!e) throw new Error("[BScroll] " + t);
  }
  var o = "undefined" != typeof window,
    t = o && navigator.userAgent.toLowerCase(),
    W = !(!t || !/wechatdevtools/.test(t)),
    G = t && 0 < t.indexOf("android"),
    V =
      "string" == typeof t &&
      !!(t = /os (\d\d?_\d(_\d)?)/.exec(t)) &&
      !!(
        13 ===
          (t = t[1].split("_").map(function (e) {
            return parseInt(e, 10);
          }))[0] && 4 <= t[1]
      ),
    j = !1;
  if (o)
    try {
      var q = {};
      (Object.defineProperty(q, "passive", {
        get: function () {
          j = !0;
        },
      }),
        window.addEventListener("test-passive", function () {}, q));
    } catch (e) {}
  function u() {
    return window.performance &&
      window.performance.now &&
      window.performance.timing
      ? window.performance.now() + window.performance.timing.navigationStart
      : +new Date();
  }
  function r(e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }
  function _(e) {
    return null == e;
  }
  function f(e, t, i) {
    return e < t ? t : i < e ? i : e;
  }
  function K(e, s) {
    var o;
    return e.findIndex
      ? e.findIndex(s)
      : ((o = -1),
        e.some(function (e, t, i) {
          if ((i = s(e, t, i))) return ((o = t), i);
        }),
        o);
  }
  var U = o && document.createElement("div").style,
    Z = (function () {
      if (o)
        for (
          var e = 0,
            t = [
              { key: "standard", value: "transform" },
              { key: "webkit", value: "webkitTransform" },
              { key: "Moz", value: "MozTransform" },
              { key: "O", value: "OTransform" },
              { key: "ms", value: "msTransform" },
            ];
          e < t.length;
          e++
        ) {
          var i = t[e];
          if (void 0 !== U[i.value]) return i.key;
        }
      return !1;
    })();
  function i(e) {
    return !1 === Z
      ? e
      : "standard" === Z
        ? "transitionEnd" === e
          ? "transitionend"
          : e
        : Z + e.charAt(0).toUpperCase() + e.substr(1);
  }
  function Q(e) {
    return "string" == typeof e ? document.querySelector(e) : e;
  }
  function J(e, t, i, s) {
    ((s = j ? { passive: !1, capture: !!s } : !!s),
      e.addEventListener(t, i, s));
  }
  function ee(e, t, i, s) {
    e.removeEventListener(t, i, { capture: !!s });
  }
  function te(e) {
    for (var t = 0, i = 0; e;)
      ((t -= e.offsetLeft), (i -= e.offsetTop), (e = e.offsetParent));
    return { left: t, top: i };
  }
  var ie = Z && "standard" !== Z ? "-" + Z.toLowerCase() + "-" : "",
    t = i("transform"),
    se = i("transition"),
    oe = o && i("perspective") in U,
    ne = o && ("ontouchstart" in window || W),
    re = o && se in U,
    d = {
      transform: t,
      transition: se,
      transitionTimingFunction: i("transitionTimingFunction"),
      transitionDuration: i("transitionDuration"),
      transitionDelay: i("transitionDelay"),
      transformOrigin: i("transformOrigin"),
      transitionEnd: i("transitionEnd"),
      transitionProperty: i("transitionProperty"),
    },
    ae = {
      touchstart: 1,
      touchmove: 1,
      touchend: 1,
      touchcancel: 1,
      mousedown: 2,
      mousemove: 2,
      mouseup: 2,
    };
  function le(e) {
    var t;
    return e instanceof window.SVGElement
      ? {
          top: (t = e.getBoundingClientRect()).top,
          left: t.left,
          width: t.width,
          height: t.height,
        }
      : {
          top: e.offsetTop,
          left: e.offsetLeft,
          width: e.offsetWidth,
          height: e.offsetHeight,
        };
  }
  function he(e, t) {
    for (var i in t) if (t[i].test(e[i])) return !0;
    return !1;
  }
  var ce = he;
  function de(e, t) {
    (void 0 === t && (t = "click"),
      "mouseup" === e.type
        ? (o = e)
        : ("touchend" !== e.type && "touchcancel" !== e.type) ||
          (o = e.changedTouches[0]));
    var i,
      s = {},
      o =
        (o &&
          ((s.screenX = o.screenX || 0),
          (s.screenY = o.screenY || 0),
          (s.clientX = o.clientX || 0),
          (s.clientY = o.clientY || 0)),
        {
          ctrlKey: e.ctrlKey,
          shiftKey: e.shiftKey,
          altKey: e.altKey,
          metaKey: e.metaKey,
        });
    if ("undefined" != typeof MouseEvent)
      try {
        i = new MouseEvent(t, r(c({ bubbles: !0, cancelable: !0 }, o), s));
      } catch (e) {
        n();
      }
    else n();
    function n() {
      ((i = document.createEvent("Event")).initEvent(t, !0, !0), r(i, s));
    }
    ((i.forwardedTouchEvent = !0),
      (i._constructed = !0),
      e.target.dispatchEvent(i));
  }
  function pe(e, t) {
    return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className);
  }
  var m = {
      swipe: {
        style: "cubic-bezier(0.23, 1, 0.32, 1)",
        fn: function (e) {
          return 1 + --e * e * e * e * e;
        },
      },
      swipeBounce: {
        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fn: function (e) {
          return e * (2 - e);
        },
      },
      bounce: {
        style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
        fn: function (e) {
          return 1 - --e * e * e * e;
        },
      },
    },
    n = o && window;
  function ue() {}
  var fe = o
      ? n.requestAnimationFrame ||
        n.webkitRequestAnimationFrame ||
        n.mozRequestAnimationFrame ||
        n.oRequestAnimationFrame ||
        function (e) {
          return window.setTimeout(e, e.interval || 1e3 / 60);
        }
      : ue,
    g = o
      ? n.cancelAnimationFrame ||
        n.webkitCancelAnimationFrame ||
        n.mozCancelAnimationFrame ||
        n.oCancelAnimationFrame ||
        function (e) {
          window.clearTimeout(e);
        }
      : ue,
    me = {
      enumerable: !0,
      configurable: !0,
      get: (pt = function (e) {}),
      set: pt,
    };
  function ge(e, n, t) {
    ((me.get = function () {
      for (var e = this, t = n.split("."), i = 0; i < t.length - 1; i++)
        if ("object" != typeof (e = e[t[i]]) || !e) return;
      var s = t.pop();
      return "function" == typeof e[s]
        ? function () {
            return e[s].apply(e, arguments);
          }
        : e[s];
    }),
      (me.set = function (e) {
        for (var t, i = this, s = n.split("."), o = 0; o < s.length - 1; o++)
          (i[(t = s[o])] || (i[t] = {}), (i = i[t]));
        i[s.pop()] = e;
      }),
      Object.defineProperty(e, t, me));
  }
  ((ve.prototype.on = function (e, t, i) {
    return (
      void 0 === i && (i = this),
      this.hasType(e),
      this.events[e] || (this.events[e] = []),
      this.events[e].push([t, i]),
      this
    );
  }),
    (ve.prototype.once = function (s, o, n) {
      var r = this,
        a =
          (void 0 === n && (n = this),
          this.hasType(s),
          function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            r.off(s, a);
            var i = o.apply(n, e);
            if (!0 === i) return i;
          });
      return ((a.fn = o), this.on(s, a), this);
    }),
    (ve.prototype.off = function (e, t) {
      if (!e && !t) return ((this.events = {}), this);
      if (e) {
        if ((this.hasType(e), t)) {
          var i = this.events[e];
          if (i)
            for (var s = i.length; s--;)
              (i[s][0] === t || (i[s][0] && i[s][0].fn === t)) &&
                i.splice(s, 1);
        } else this.events[e] = [];
        return this;
      }
    }),
    (ve.prototype.trigger = function (e) {
      for (var t = [], i = 1; i < arguments.length; i++)
        t[i - 1] = arguments[i];
      if ((this.hasType(e), (e = this.events[e])))
        for (var s = e.length, o = $(e), n = 0; n < s; n++) {
          var r = (a = o[n])[0],
            a = a[1];
          if (r && !0 === (r = r.apply(a, t))) return r;
        }
    }),
    (ve.prototype.registerType = function (e) {
      var t = this;
      e.forEach(function (e) {
        t.eventTypes[e] = e;
      });
    }),
    (ve.prototype.destroy = function () {
      ((this.events = {}), (this.eventTypes = {}));
    }),
    (ve.prototype.hasType = function (e) {
      var t = this.eventTypes;
      t[e] !== e &&
        s(
          'EventEmitter has used unknown event type: "' +
            e +
            '", should be oneof [' +
            Object.keys(t).map(function (e) {
              return JSON.stringify(e);
            }) +
            "]",
        );
    }));
  var h = ve;
  function ve(e) {
    ((this.events = {}), (this.eventTypes = {}), this.registerType(e));
  }
  ((ye.prototype.destroy = function () {
    (this.removeDOMEvents(), (this.events = []));
  }),
    (ye.prototype.addDOMEvents = function () {
      this.handleDOMEvents(J);
    }),
    (ye.prototype.removeDOMEvents = function () {
      this.handleDOMEvents(ee);
    }),
    (ye.prototype.handleDOMEvents = function (t) {
      var i = this,
        s = this.wrapper;
      this.events.forEach(function (e) {
        t(s, e.name, i, !!e.capture);
      });
    }),
    (ye.prototype.handleEvent = function (t) {
      var i = t.type;
      this.events.some(function (e) {
        return e.name === i && (e.handler(t), !0);
      });
    }));
  var p = ye;
  function ye(e, t) {
    ((this.wrapper = e), (this.events = t), this.addDOMEvents());
  }
  function be() {}
  (H(Se, (we = be)),
    (Se.prototype.merge = function (e) {
      if (e)
        for (var t in e)
          "bounce" !== t
            ? (this[t] = e[t])
            : (this.bounce = this.resolveBounce(e[t]));
      return this;
    }),
    (Se.prototype.process = function () {
      return (
        (this.translateZ = this.HWCompositing && oe ? " translateZ(1px)" : ""),
        (this.useTransition = this.useTransition && re),
        (this.preventDefault = !this.eventPassthrough && this.preventDefault),
        (this.scrollX = "horizontal" !== this.eventPassthrough && this.scrollX),
        (this.scrollY = "vertical" !== this.eventPassthrough && this.scrollY),
        (this.freeScroll = this.freeScroll && !this.eventPassthrough),
        (this.scrollX = !!this.freeScroll || this.scrollX),
        (this.scrollY = !!this.freeScroll || this.scrollY),
        (this.directionLockThreshold = this.eventPassthrough
          ? 0
          : this.directionLockThreshold),
        this
      );
    }),
    (Se.prototype.resolveBounce = function (e) {
      var t = { top: !0, right: !0, bottom: !0, left: !0 };
      return "object" == typeof e
        ? r(t, e)
        : e
          ? t
          : { top: !1, right: !1, bottom: !1, left: !1 };
    }));
  var we,
    Te = Se;
  function Se() {
    var e = we.call(this) || this;
    return (
      (e.startX = 0),
      (e.startY = 0),
      (e.scrollX = !1),
      (e.scrollY = !0),
      (e.freeScroll = !1),
      (e.directionLockThreshold = 0),
      (e.eventPassthrough = ""),
      (e.click = !1),
      (e.dblclick = !1),
      (e.tap = ""),
      (e.bounce = { top: !0, bottom: !0, left: !0, right: !0 }),
      (e.bounceTime = 800),
      (e.momentum = !0),
      (e.momentumLimitTime = 300),
      (e.momentumLimitDistance = 15),
      (e.swipeTime = 2500),
      (e.swipeBounceTime = 500),
      (e.deceleration = 0.0015),
      (e.flickLimitTime = 200),
      (e.flickLimitDistance = 100),
      (e.resizePolling = 60),
      (e.probeType = 0),
      (e.stopPropagation = !1),
      (e.preventDefault = !0),
      (e.preventDefaultException = {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/,
      }),
      (e.tagException = { tagName: /^TEXTAREA$/ }),
      (e.HWCompositing = !0),
      (e.useTransition = !0),
      (e.bindToWrapper = !1),
      (e.bindToTarget = !1),
      (e.disableMouse = ne),
      (e.disableTouch = !ne),
      (e.autoBlur = !0),
      (e.autoEndDistance = 5),
      (e.outOfBoundaryDampingFactor = 1 / 3),
      (e.specifiedIndexAsContent = 0),
      (e.quadrant = 1),
      e
    );
  }
  ((a.prototype.handleDOMEvents = function () {
    var e = (r = this.options).bindToWrapper,
      t = r.disableMouse,
      i = r.disableTouch,
      s = r.click,
      o = this.wrapper,
      n = e ? o : window,
      r = [],
      e = [],
      i = !i,
      t = !t;
    (s &&
      r.push({ name: "click", handler: this.click.bind(this), capture: !0 }),
      i &&
        (r.push({ name: "touchstart", handler: this.start.bind(this) }),
        e.push(
          { name: "touchmove", handler: this.move.bind(this) },
          { name: "touchend", handler: this.end.bind(this) },
          { name: "touchcancel", handler: this.end.bind(this) },
        )),
      t &&
        (r.push({ name: "mousedown", handler: this.start.bind(this) }),
        e.push(
          { name: "mousemove", handler: this.move.bind(this) },
          { name: "mouseup", handler: this.end.bind(this) },
        )),
      (this.wrapperEventRegister = new p(o, r)),
      (this.targetEventRegister = new p(n, e)));
  }),
    (a.prototype.beforeHandler = function (e, t) {
      var i = this.options,
        s = i.preventDefault,
        o = i.stopPropagation,
        n = i.preventDefaultException;
      (!{
        start: function () {
          return s && !he(e.target, n);
        },
        end: function () {
          return s && !he(e.target, n);
        },
        move: function () {
          return s;
        },
      }[t]() || e.preventDefault(),
        o && e.stopPropagation());
    }),
    (a.prototype.setInitiated = function (e) {
      this.initiated = e = void 0 === e ? 0 : e;
    }),
    (a.prototype.start = function (e) {
      var t = ae[e.type];
      (this.initiated && this.initiated !== t) ||
        (this.setInitiated(t),
        ce(e.target, this.options.tagException)
          ? this.setInitiated()
          : (2 === t && 0 !== e.button) ||
            this.hooks.trigger(this.hooks.eventTypes.beforeStart, e) ||
            (this.beforeHandler(e, "start"),
            (t = e.touches ? e.touches[0] : e),
            (this.pointX = t.pageX),
            (this.pointY = t.pageY),
            this.hooks.trigger(this.hooks.eventTypes.start, e)));
    }),
    (a.prototype.move = function (e) {
      var t, i, s;
      ae[e.type] === this.initiated &&
        (this.beforeHandler(e, "move"),
        (s = (i = e.touches ? e.touches[0] : e).pageX - this.pointX),
        (t = i.pageY - this.pointY),
        (this.pointX = i.pageX),
        (this.pointY = i.pageY),
        !this.hooks.trigger(this.hooks.eventTypes.move, {
          deltaX: s,
          deltaY: t,
          e: e,
        })) &&
        ((i =
          document.documentElement.scrollLeft ||
          window.pageXOffset ||
          document.body.scrollLeft),
        (s =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop),
        (t = this.pointX - i),
        (i = this.pointY - s),
        (s = this.options.autoEndDistance),
        t > document.documentElement.clientWidth - s ||
          i > document.documentElement.clientHeight - s ||
          t < s ||
          i < s) &&
        this.end(e);
    }),
    (a.prototype.end = function (e) {
      ae[e.type] === this.initiated &&
        (this.setInitiated(),
        this.beforeHandler(e, "end"),
        this.hooks.trigger(this.hooks.eventTypes.end, e));
    }),
    (a.prototype.click = function (e) {
      this.hooks.trigger(this.hooks.eventTypes.click, e);
    }),
    (a.prototype.setContent = function (e) {
      e !== this.wrapper && ((this.wrapper = e), this.rebindDOMEvents());
    }),
    (a.prototype.rebindDOMEvents = function () {
      (this.wrapperEventRegister.destroy(),
        this.targetEventRegister.destroy(),
        this.handleDOMEvents());
    }),
    (a.prototype.destroy = function () {
      (this.wrapperEventRegister.destroy(),
        this.targetEventRegister.destroy(),
        this.hooks.destroy());
    }));
  var xe = a;
  function a(e, t) {
    ((this.wrapper = e),
      (this.options = t),
      (this.hooks = new h(["beforeStart", "start", "move", "end", "click"])),
      this.handleDOMEvents());
  }
  var ke = { x: ["translateX", "px"], y: ["translateY", "px"] },
    Ee =
      ((Ce.prototype.getComputedPosition = function () {
        var e = window
          .getComputedStyle(this.content, null)
          [d.transform].split(")")[0]
          .split(", ");
        return { x: +(e[12] || e[4]) || 0, y: +(e[13] || e[5]) || 0 };
      }),
      (Ce.prototype.translate = function (s) {
        var o = [];
        (Object.keys(s).forEach(function (e) {
          var t, i;
          ke[e] &&
            (t = ke[e][0]) &&
            ((i = ke[e][1]), (e = s[e]), o.push(t + "(" + e + i + ")"));
        }),
          this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, o, s),
          (this.style[d.transform] = o.join(" ")),
          this.hooks.trigger(this.hooks.eventTypes.translate, s));
      }),
      (Ce.prototype.setContent = function (e) {
        this.content !== e && ((this.content = e), (this.style = e.style));
      }),
      (Ce.prototype.destroy = function () {
        this.hooks.destroy();
      }),
      Ce);
  function Ce(e) {
    (this.setContent(e),
      (this.hooks = new h(["beforeTranslate", "translate"])));
  }
  function Pe(e, t, i) {
    ((this.translater = t),
      (this.options = i),
      (this.timer = 0),
      (this.hooks = new h([
        "move",
        "end",
        "beforeForceStop",
        "forceStop",
        "callStop",
        "time",
        "timeFunction",
      ])),
      this.setContent(e));
  }
  ((Pe.prototype.translate = function (e) {
    this.translater.translate(e);
  }),
    (Pe.prototype.setPending = function (e) {
      this.pending = e;
    }),
    (Pe.prototype.setForceStopped = function (e) {
      this.forceStopped = e;
    }),
    (Pe.prototype.setCallStop = function (e) {
      this.callStopWhenPending = e;
    }),
    (Pe.prototype.setContent = function (e) {
      this.content !== e &&
        ((this.content = e), (this.style = e.style), this.stop());
    }),
    (Pe.prototype.clearTimer = function () {
      this.timer && (g(this.timer), (this.timer = 0));
    }),
    (Pe.prototype.destroy = function () {
      (this.hooks.destroy(), g(this.timer));
    }));
  (H(l, (Me = vt = Pe)),
    (l.prototype.startProbe = function (r, a) {
      var l = this,
        h = r,
        c = function () {
          var e,
            t,
            i,
            s,
            o = l.translater.getComputedPosition();
          function n(e, t) {
            return 0 < (t = e - t) ? -1 : t < 0 ? 1 : 0;
          }
          ((e = r),
            (i = h),
            (s = n((t = a).x, r.x)),
            (t = n(a.y, r.y)),
            (e = o.x - i.x),
            (i = o.y - i.y),
            s * e <= 0 &&
              t * i <= 0 &&
              l.hooks.trigger(l.hooks.eventTypes.move, o),
            l.pending ||
              (l.callStopWhenPending
                ? (l.callStopWhenPending = !1)
                : l.hooks.trigger(l.hooks.eventTypes.end, o)),
            (h = o),
            l.pending && (l.timer = fe(c)));
        };
      (this.callStopWhenPending && this.setCallStop(!1), g(this.timer), c());
    }),
    (l.prototype.transitionTime = function (e) {
      ((this.style[d.transitionDuration] = (e = void 0 === e ? 0 : e) + "ms"),
        this.hooks.trigger(this.hooks.eventTypes.time, e));
    }),
    (l.prototype.transitionTimingFunction = function (e) {
      ((this.style[d.transitionTimingFunction] = e),
        this.hooks.trigger(this.hooks.eventTypes.timeFunction, e));
    }),
    (l.prototype.transitionProperty = function () {
      this.style[d.transitionProperty] = d.transform;
    }),
    (l.prototype.move = function (e, t, i, s) {
      (this.setPending(0 < i),
        this.transitionTimingFunction(s),
        this.transitionProperty(),
        this.transitionTime(i),
        this.translate(t),
        (s = 3 === this.options.probeType),
        i && s && this.startProbe(e, t),
        i ||
          ((this._reflow = this.content.offsetHeight),
          s && this.hooks.trigger(this.hooks.eventTypes.move, t),
          this.hooks.trigger(this.hooks.eventTypes.end, t)));
    }),
    (l.prototype.doStop = function () {
      var e,
        t,
        i = this.pending;
      return (
        this.setForceStopped(!1),
        this.setCallStop(!1),
        i &&
          (this.setPending(!1),
          g(this.timer),
          (e = (t = this.translater.getComputedPosition()).x),
          (t = t.y),
          this.transitionTime(),
          this.translate({ x: e, y: t }),
          this.setForceStopped(!0),
          this.setCallStop(!0),
          this.hooks.trigger(this.hooks.eventTypes.forceStop, { x: e, y: t })),
        i
      );
    }),
    (l.prototype.stop = function () {
      this.doStop() && this.hooks.trigger(this.hooks.eventTypes.callStop);
    }));
  var Me,
    ze = l;
  function l() {
    return (null !== Me && Me.apply(this, arguments)) || this;
  }
  (H(Oe, (De = vt)),
    (Oe.prototype.move = function (e, t, i, s) {
      i
        ? this.animate(e, t, i, s)
        : (this.translate(t),
          3 === this.options.probeType &&
            this.hooks.trigger(this.hooks.eventTypes.move, t),
          this.hooks.trigger(this.hooks.eventTypes.end, t));
    }),
    (Oe.prototype.animate = function (n, r, t, i) {
      var a = this,
        l = u(),
        h = l + t,
        c = 3 === this.options.probeType,
        d = function () {
          var s,
            o,
            e = u();
          h <= e
            ? (a.translate(r),
              c && a.hooks.trigger(a.hooks.eventTypes.move, r),
              a.hooks.trigger(a.hooks.eventTypes.end, r))
            : ((s = i((e - l) / t)),
              (o = {}),
              Object.keys(r).forEach(function (e) {
                var t = n[e],
                  i = r[e];
                o[e] = (i - t) * s + t;
              }),
              a.translate(o),
              c && a.hooks.trigger(a.hooks.eventTypes.move, o),
              a.pending && (a.timer = fe(d)),
              a.pending ||
                (a.callStopWhenPending
                  ? (a.callStopWhenPending = !1)
                  : a.hooks.trigger(a.hooks.eventTypes.end, r)));
        };
      (this.setPending(!0),
        this.callStopWhenPending && this.setCallStop(!1),
        g(this.timer),
        d());
    }),
    (Oe.prototype.doStop = function () {
      var e,
        t = this.pending;
      return (
        this.setForceStopped(!1),
        this.setCallStop(!1),
        t &&
          (this.setPending(!1),
          g(this.timer),
          (e = this.translater.getComputedPosition()),
          this.setForceStopped(!0),
          this.setCallStop(!0),
          this.hooks.trigger(this.hooks.eventTypes.forceStop, e)),
        t
      );
    }),
    (Oe.prototype.stop = function () {
      this.doStop() && this.hooks.trigger(this.hooks.eventTypes.callStop);
    }));
  var De,
    Le = Oe;
  function Oe() {
    return (null !== De && De.apply(this, arguments)) || this;
  }
  ((v.prototype.start = function () {
    ((this.dist = 0), this.setMovingDirection(0), this.setDirection(0));
  }),
    (v.prototype.move = function (e) {
      return (
        (e = this.hasScroll ? e : 0),
        this.setMovingDirection(e),
        this.performDampingAlgorithm(e, this.options.outOfBoundaryDampingFactor)
      );
    }),
    (v.prototype.setMovingDirection = function (e) {
      this.movingDirection = 0 < e ? -1 : e < 0 ? 1 : 0;
    }),
    (v.prototype.setDirection = function (e) {
      this.direction = 0 < e ? -1 : e < 0 ? 1 : 0;
    }),
    (v.prototype.performDampingAlgorithm = function (e, t) {
      var i = this.currentPos + e;
      return i > this.minScrollPos || i < this.maxScrollPos
        ? (i > this.minScrollPos && this.options.bounces[0]) ||
          (i < this.maxScrollPos && this.options.bounces[1])
          ? this.currentPos + e * t
          : i > this.minScrollPos
            ? this.minScrollPos
            : this.maxScrollPos
        : i;
    }),
    (v.prototype.end = function (e) {
      var t = { duration: 0 },
        i = Math.abs(this.currentPos - this.startPos);
      return (
        this.options.momentum &&
        e < this.options.momentumLimitTime &&
        i > this.options.momentumLimitDistance
          ? ((i =
              (-1 === this.direction && this.options.bounces[0]) ||
              (1 === this.direction && this.options.bounces[1])
                ? this.wrapperSize
                : 0),
            (t = this.hasScroll
              ? this.momentum(
                  this.currentPos,
                  this.startPos,
                  e,
                  this.maxScrollPos,
                  this.minScrollPos,
                  i,
                  this.options,
                )
              : { destination: this.currentPos, duration: 0 }))
          : this.hooks.trigger(this.hooks.eventTypes.end, t),
        t
      );
    }),
    (v.prototype.momentum = function (e, t, i, s, o, n, r) {
      void 0 === r && (r = this.options);
      var a = e - t,
        l = Math.abs(a) / i,
        t = r.deceleration,
        i = r.swipeBounceTime,
        r = r.swipeTime,
        t = {
          destination: e + ((l * l) / t) * (a < 0 ? -1 : 1),
          duration: Math.min(r, (2 * l) / t),
          rate: 15,
        };
      return (
        this.hooks.trigger(this.hooks.eventTypes.momentum, t, a),
        t.destination < s
          ? ((t.destination = n
              ? Math.max(s - n / 4, s - (n / t.rate) * l)
              : s),
            (t.duration = i))
          : t.destination > o &&
            ((t.destination = n
              ? Math.min(o + n / 4, o + (n / t.rate) * l)
              : o),
            (t.duration = i)),
        (t.destination = Math.round(t.destination)),
        t
      );
    }),
    (v.prototype.updateDirection = function () {
      var e = this.currentPos - this.absStartPos;
      this.setDirection(e);
    }),
    (v.prototype.refresh = function (e) {
      var t = (o = this.options.rect).size,
        i = o.position,
        s = "static" === window.getComputedStyle(this.wrapper, null).position,
        o = le(this.wrapper);
      ((this.wrapperSize =
        this.wrapper["width" === t ? "clientWidth" : "clientHeight"]),
        this.setContent(e),
        (e = le(this.content)),
        (this.contentSize = e[t]),
        (this.relativeOffset = e[i]),
        s && (this.relativeOffset -= o[i]),
        this.computeBoundary(),
        this.setDirection(0));
    }),
    (v.prototype.setContent = function (e) {
      e !== this.content && ((this.content = e), this.resetState());
    }),
    (v.prototype.resetState = function () {
      ((this.currentPos = 0),
        (this.startPos = 0),
        (this.dist = 0),
        this.setDirection(0),
        this.setMovingDirection(0),
        this.resetStartPos());
    }),
    (v.prototype.computeBoundary = function () {
      this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary);
      var e = {
        minScrollPos: 0,
        maxScrollPos: this.wrapperSize - this.contentSize,
      };
      (e.maxScrollPos < 0 &&
        ((e.maxScrollPos -= this.relativeOffset),
        0 === this.options.specifiedIndexAsContent) &&
        (e.minScrollPos = -this.relativeOffset),
        this.hooks.trigger(this.hooks.eventTypes.computeBoundary, e),
        (this.minScrollPos = e.minScrollPos),
        (this.maxScrollPos = e.maxScrollPos),
        (this.hasScroll =
          this.options.scrollable && this.maxScrollPos < this.minScrollPos),
        !this.hasScroll &&
          this.minScrollPos < this.maxScrollPos &&
          ((this.maxScrollPos = this.minScrollPos),
          (this.contentSize = this.wrapperSize)));
    }),
    (v.prototype.updatePosition = function (e) {
      this.currentPos = e;
    }),
    (v.prototype.getCurrentPos = function () {
      return this.currentPos;
    }),
    (v.prototype.checkInBoundary = function () {
      var e = this.adjustPosition(this.currentPos);
      return { position: e, inBoundary: e === this.getCurrentPos() };
    }),
    (v.prototype.adjustPosition = function (e) {
      return (
        (!this.hasScroll &&
          !this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll)) ||
        e > this.minScrollPos
          ? (e = this.minScrollPos)
          : e < this.maxScrollPos && (e = this.maxScrollPos),
        e
      );
    }),
    (v.prototype.updateStartPos = function () {
      this.startPos = this.currentPos;
    }),
    (v.prototype.updateAbsStartPos = function () {
      this.absStartPos = this.currentPos;
    }),
    (v.prototype.resetStartPos = function () {
      (this.updateStartPos(), this.updateAbsStartPos());
    }),
    (v.prototype.getAbsDist = function (e) {
      return ((this.dist += e), Math.abs(this.dist));
    }),
    (v.prototype.destroy = function () {
      this.hooks.destroy();
    }));
  var Be = v;
  function v(e, t, i) {
    ((this.wrapper = e),
      (this.options = i),
      (this.hooks = new h([
        "beforeComputeBoundary",
        "computeBoundary",
        "momentum",
        "end",
        "ignoreHasScroll",
      ])),
      this.refresh(t));
  }
  (((Ct = {}).yes = function (e) {
    return !0;
  }),
    (Ct.no = function (e) {
      return (e.preventDefault(), !1);
    }));
  var Ie = Ct,
    Ye =
      (((Bt = {}).horizontal =
        (((Mt = {}).yes = "horizontal"), (Mt.no = "vertical"), Mt)),
      (Bt.vertical =
        (((zt = {}).yes = "vertical"), (zt.no = "horizontal"), zt)),
      Bt),
    Xe =
      ((He.prototype.reset = function () {
        this.directionLocked = "";
      }),
      (He.prototype.checkMovingDirection = function (e, t, i) {
        return (
          this.computeDirectionLock(e, t),
          this.handleEventPassthrough(i)
        );
      }),
      (He.prototype.adjustDelta = function (e, t) {
        return (
          "horizontal" === this.directionLocked
            ? (t = 0)
            : "vertical" === this.directionLocked && (e = 0),
          { deltaX: e, deltaY: t }
        );
      }),
      (He.prototype.computeDirectionLock = function (e, t) {
        "" !== this.directionLocked ||
          this.freeScroll ||
          (e > t + this.directionLockThreshold
            ? (this.directionLocked = "horizontal")
            : t >= e + this.directionLockThreshold
              ? (this.directionLocked = "vertical")
              : (this.directionLocked = "none"));
      }),
      (He.prototype.handleEventPassthrough = function (e) {
        var t = Ye[this.directionLocked];
        if (t) {
          if (this.eventPassthrough === t.yes) return Ie.yes(e);
          if (this.eventPassthrough === t.no) return Ie.no(e);
        }
        return !1;
      }),
      He);
  function He(e, t, i) {
    ((this.directionLockThreshold = e),
      (this.freeScroll = t),
      (this.eventPassthrough = i),
      this.reset());
  }
  ((y.prototype.bindActionsHandler = function () {
    var o = this;
    (this.actionsHandler.hooks.on(
      this.actionsHandler.hooks.eventTypes.start,
      function (e) {
        return !o.enabled || o.handleStart(e);
      },
    ),
      this.actionsHandler.hooks.on(
        this.actionsHandler.hooks.eventTypes.move,
        function (e) {
          var t = e.deltaX,
            i = e.deltaY,
            s = e.e;
          return (
            !o.enabled ||
            ((e = t),
            (t = i),
            (t =
              2 === (i = o.options.quadrant)
                ? [t, -e]
                : 3 === i
                  ? [-e, -t]
                  : 4 === i
                    ? [-t, e]
                    : [e, t]),
            o.hooks.trigger(
              o.hooks.eventTypes.coordinateTransformation,
              (t = { deltaX: t[0], deltaY: t[1] }),
            ),
            o.handleMove(t.deltaX, t.deltaY, s))
          );
        },
      ),
      this.actionsHandler.hooks.on(
        this.actionsHandler.hooks.eventTypes.end,
        function (e) {
          return !o.enabled || o.handleEnd(e);
        },
      ),
      this.actionsHandler.hooks.on(
        this.actionsHandler.hooks.eventTypes.click,
        function (e) {
          o.enabled && !e._constructed && o.handleClick(e);
        },
      ));
  }),
    (y.prototype.handleStart = function (e) {
      var t = u();
      ((this.fingerMoved = !1),
        (this.contentMoved = !1),
        (this.startTime = t),
        this.directionLockAction.reset(),
        this.scrollBehaviorX.start(),
        this.scrollBehaviorY.start(),
        this.animater.doStop(),
        this.scrollBehaviorX.resetStartPos(),
        this.scrollBehaviorY.resetStartPos(),
        this.hooks.trigger(this.hooks.eventTypes.start, e));
    }),
    (y.prototype.handleMove = function (e, t, i) {
      var s, o, n;
      if (!this.hooks.trigger(this.hooks.eventTypes.beforeMove, i))
        return (
          (s = this.scrollBehaviorX.getAbsDist(e)),
          (o = this.scrollBehaviorY.getAbsDist(t)),
          (n = u()),
          !!this.checkMomentum(s, o, n) ||
            (this.directionLockAction.checkMovingDirection(s, o, i)
              ? (this.actionsHandler.setInitiated(), !0)
              : ((o = this.directionLockAction.adjustDelta(e, t)),
                (i = this.scrollBehaviorX.getCurrentPos()),
                (e = this.scrollBehaviorX.move(o.deltaX)),
                (t = this.scrollBehaviorY.getCurrentPos()),
                (o = this.scrollBehaviorY.move(o.deltaY)),
                void (
                  this.hooks.trigger(
                    this.hooks.eventTypes.detectMovingDirection,
                  ) ||
                  (this.fingerMoved || (this.fingerMoved = !0),
                  (t = e !== i || o !== t),
                  this.contentMoved ||
                    t ||
                    this.hooks.trigger(this.hooks.eventTypes.contentNotMoved),
                  !this.contentMoved &&
                    t &&
                    ((this.contentMoved = !0),
                    this.hooks.trigger(this.hooks.eventTypes.scrollStart)),
                  this.contentMoved &&
                    t &&
                    (this.animater.translate({ x: e, y: o }),
                    this.dispatchScroll(n)))
                )))
        );
    }),
    (y.prototype.dispatchScroll = function (e) {
      (e - this.startTime > this.options.momentumLimitTime &&
        ((this.startTime = e),
        this.scrollBehaviorX.updateStartPos(),
        this.scrollBehaviorY.updateStartPos(),
        1 === this.options.probeType) &&
        this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos()),
        1 < this.options.probeType &&
          this.hooks.trigger(
            this.hooks.eventTypes.scroll,
            this.getCurrentPos(),
          ));
    }),
    (y.prototype.checkMomentum = function (e, t, i) {
      return (
        i - this.endTime > this.options.momentumLimitTime &&
        t < this.options.momentumLimitDistance &&
        e < this.options.momentumLimitDistance
      );
    }),
    (y.prototype.handleEnd = function (e) {
      if (!this.hooks.trigger(this.hooks.eventTypes.beforeEnd, e)) {
        var t = this.getCurrentPos();
        if (
          (this.scrollBehaviorX.updateDirection(),
          this.scrollBehaviorY.updateDirection(),
          this.hooks.trigger(this.hooks.eventTypes.end, e, t))
        )
          return !0;
        ((t = this.ensureIntegerPos(t)),
          this.animater.translate(t),
          (this.endTime = u()),
          (e = this.endTime - this.startTime),
          this.hooks.trigger(this.hooks.eventTypes.scrollEnd, t, e));
      }
    }),
    (y.prototype.ensureIntegerPos = function (e) {
      this.ensuringInteger = !0;
      var t = e.x,
        i = e.y,
        s = (n = this.scrollBehaviorX).minScrollPos,
        o = n.maxScrollPos,
        n = (e = this.scrollBehaviorY).minScrollPos,
        e = e.maxScrollPos,
        t = 0 < t ? Math.ceil(t) : Math.floor(t),
        i = 0 < i ? Math.ceil(i) : Math.floor(i);
      return { x: f(t, o, s), y: f(i, e, n) };
    }),
    (y.prototype.handleClick = function (e) {
      he(e.target, this.options.preventDefaultException) ||
        (e.preventDefault(), e.stopPropagation());
    }),
    (y.prototype.getCurrentPos = function () {
      return {
        x: this.scrollBehaviorX.getCurrentPos(),
        y: this.scrollBehaviorY.getCurrentPos(),
      };
    }),
    (y.prototype.refresh = function () {
      this.endTime = 0;
    }),
    (y.prototype.destroy = function () {
      this.hooks.destroy();
    }));
  var Ae = y;
  function y(e, t, i, s, o) {
    ((this.hooks = new h([
      "start",
      "beforeMove",
      "scrollStart",
      "scroll",
      "beforeEnd",
      "end",
      "scrollEnd",
      "contentNotMoved",
      "detectMovingDirection",
      "coordinateTransformation",
    ])),
      (this.scrollBehaviorX = e),
      (this.scrollBehaviorY = t),
      (this.actionsHandler = i),
      (this.animater = s),
      (this.options = o),
      (this.directionLockAction = new Xe(
        o.directionLockThreshold,
        o.freeScroll,
        o.eventPassthrough,
      )),
      (this.enabled = !0),
      this.bindActionsHandler());
  }
  function Ne(i, e, t, s) {
    var o = [
      "momentum",
      "momentumLimitTime",
      "momentumLimitDistance",
      "deceleration",
      "swipeBounceTime",
      "swipeTime",
      "outOfBoundaryDampingFactor",
      "specifiedIndexAsContent",
    ].reduce(function (e, t) {
      return ((e[t] = i[t]), e);
    }, {});
    return ((o.scrollable = !!i[e]), (o.bounces = t), (o.rect = s), o);
  }
  function $e(s, o, e) {
    e.forEach(function (e) {
      var t, i;
      ("string" == typeof e ? (t = i = e) : ((t = e.source), (i = e.target)),
        s.on(t, function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return o.trigger.apply(o, $([i], e));
        }));
    });
  }
  ((b.prototype.init = function () {
    var e = this;
    (this.bindTranslater(),
      this.bindAnimater(),
      this.bindActions(),
      this.hooks.on(this.hooks.eventTypes.scrollEnd, function () {
        e.togglePointerEvents(!0);
      }));
  }),
    (b.prototype.registerTransitionEnd = function () {
      this.transitionEndRegister = new p(this.content, [
        { name: d.transitionEnd, handler: this.transitionEnd.bind(this) },
      ]);
    }),
    (b.prototype.bindTranslater = function () {
      var i = this,
        e = this.translater.hooks;
      (e.on(e.eventTypes.beforeTranslate, function (e) {
        i.options.translateZ && e.push(i.options.translateZ);
      }),
        e.on(e.eventTypes.translate, function (e) {
          var t = i.getCurrentPos();
          (i.updatePositions(e),
            !0 !== i.actions.ensuringInteger
              ? (e.x === t.x && e.y === t.y) || i.togglePointerEvents(!1)
              : (i.actions.ensuringInteger = !1));
        }));
    }),
    (b.prototype.bindAnimater = function () {
      var t = this;
      (this.animater.hooks.on(this.animater.hooks.eventTypes.end, function (e) {
        t.resetPosition(t.options.bounceTime) ||
          (t.animater.setPending(!1),
          t.hooks.trigger(t.hooks.eventTypes.scrollEnd, e));
      }),
        $e(this.animater.hooks, this.hooks, [
          {
            source: this.animater.hooks.eventTypes.move,
            target: this.hooks.eventTypes.scroll,
          },
          {
            source: this.animater.hooks.eventTypes.forceStop,
            target: this.hooks.eventTypes.scrollEnd,
          },
        ]));
    }),
    (b.prototype.bindActions = function () {
      var o = this,
        n = this.actions;
      ($e(n.hooks, this.hooks, [
        {
          source: n.hooks.eventTypes.start,
          target: this.hooks.eventTypes.beforeStart,
        },
        {
          source: n.hooks.eventTypes.start,
          target: this.hooks.eventTypes.beforeScrollStart,
        },
        {
          source: n.hooks.eventTypes.beforeMove,
          target: this.hooks.eventTypes.beforeMove,
        },
        {
          source: n.hooks.eventTypes.scrollStart,
          target: this.hooks.eventTypes.scrollStart,
        },
        {
          source: n.hooks.eventTypes.scroll,
          target: this.hooks.eventTypes.scroll,
        },
        {
          source: n.hooks.eventTypes.beforeEnd,
          target: this.hooks.eventTypes.beforeEnd,
        },
      ]),
        n.hooks.on(n.hooks.eventTypes.end, function (e, t) {
          return (
            o.hooks.trigger(o.hooks.eventTypes.touchEnd, t),
            !!o.hooks.trigger(o.hooks.eventTypes.end, t) ||
              !(
                n.fingerMoved ||
                (o.hooks.trigger(o.hooks.eventTypes.scrollCancel),
                !o.checkClick(e))
              ) ||
              (o.resetPosition(o.options.bounceTime, m.bounce)
                ? (o.animater.setForceStopped(!1), !0)
                : void 0)
          );
        }),
        n.hooks.on(n.hooks.eventTypes.scrollEnd, function (e, t) {
          var i = Math.abs(e.x - o.scrollBehaviorX.startPos),
            s = Math.abs(e.y - o.scrollBehaviorY.startPos);
          o.checkFlick(t, i, s)
            ? (o.animater.setForceStopped(!1),
              o.hooks.trigger(o.hooks.eventTypes.flick))
            : (o.momentum(e, t) ||
                (n.contentMoved &&
                  o.hooks.trigger(o.hooks.eventTypes.scrollEnd, e),
                o.animater.forceStopped)) &&
              o.animater.setForceStopped(!1);
        }));
    }),
    (b.prototype.checkFlick = function (e, t, i) {
      if (
        1 < this.hooks.events.flick.length &&
        e < this.options.flickLimitTime &&
        t < this.options.flickLimitDistance &&
        i < this.options.flickLimitDistance &&
        (1 < i || 1 < t)
      )
        return !0;
    }),
    (b.prototype.momentum = function (e, t) {
      var i = { time: 0, easing: m.swiper, newX: e.x, newY: e.y },
        s = this.scrollBehaviorX.end(t),
        t = this.scrollBehaviorY.end(t);
      if (
        ((i.newX = _(s.destination) ? i.newX : s.destination),
        (i.newY = _(t.destination) ? i.newY : t.destination),
        (i.time = Math.max(s.duration, t.duration)),
        this.hooks.trigger(this.hooks.eventTypes.momentum, i, this),
        i.newX !== e.x || i.newY !== e.y)
      )
        return (
          (i.newX > this.scrollBehaviorX.minScrollPos ||
            i.newX < this.scrollBehaviorX.maxScrollPos ||
            i.newY > this.scrollBehaviorY.minScrollPos ||
            i.newY < this.scrollBehaviorY.maxScrollPos) &&
            (i.easing = m.swipeBounce),
          this.scrollTo(i.newX, i.newY, i.time, i.easing),
          !0
        );
    }),
    (b.prototype.checkClick = function (e) {
      var t,
        i,
        s,
        o = this.animater.forceStopped;
      return this.hooks.trigger(this.hooks.eventTypes.checkClick)
        ? (this.animater.setForceStopped(!1), !0)
        : !o &&
            ((o = !1),
            (s = this.options.dblclick) &&
              this.lastClickTime &&
              ((i = void 0 === (t = s.delay) ? 300 : t),
              u() - this.lastClickTime < i) &&
              ((o = !0), de(e, "dblclick")),
            this.options.tap &&
              ((s = e),
              (t = this.options.tap),
              (i = document.createEvent("Event")).initEvent(t, !0, !0),
              (i.pageX = s.pageX),
              (i.pageY = s.pageY),
              s.target.dispatchEvent(i)),
            this.options.click &&
              !he(e.target, this.options.preventDefaultException) &&
              de(e),
            (this.lastClickTime = o ? null : u()),
            !0);
    }),
    (b.prototype.resize = function () {
      var e = this;
      this.actions.enabled &&
        (G && (this.wrapper.scrollTop = 0),
        clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = window.setTimeout(function () {
          e.hooks.trigger(e.hooks.eventTypes.resize);
        }, this.options.resizePolling)));
    }),
    (b.prototype.transitionEnd = function (e) {
      e.target === this.content &&
        this.animater.pending &&
        (this.animater.transitionTime(),
        this.resetPosition(this.options.bounceTime, m.bounce) ||
          (this.animater.setPending(!1),
          3 !== this.options.probeType &&
            this.hooks.trigger(
              this.hooks.eventTypes.scrollEnd,
              this.getCurrentPos(),
            )));
    }),
    (b.prototype.togglePointerEvents = function (e) {
      for (
        var t = this.content.children.length
            ? this.content.children
            : [this.content],
          i = (e = void 0 === e || e) ? "auto" : "none",
          s = 0;
        s < t.length;
        s++
      ) {
        var o = t[s];
        o.isBScrollContainer || (o.style.pointerEvents = i);
      }
    }),
    (b.prototype.refresh = function (e) {
      var t = this.setContent(e);
      (this.hooks.trigger(this.hooks.eventTypes.beforeRefresh),
        this.scrollBehaviorX.refresh(e),
        this.scrollBehaviorY.refresh(e),
        t &&
          (this.translater.setContent(e),
          this.animater.setContent(e),
          this.transitionEndRegister.destroy(),
          this.registerTransitionEnd(),
          this.options.bindToTarget) &&
          this.actionsHandler.setContent(e),
        this.actions.refresh(),
        (this.wrapperOffset = te(this.wrapper)));
    }),
    (b.prototype.setContent = function (e) {
      var t = e !== this.content;
      return (t && (this.content = e), t);
    }),
    (b.prototype.scrollBy = function (e, t, i, s) {
      void 0 === i && (i = 0);
      var o = (n = this.getCurrentPos()).x,
        n = n.y;
      this.scrollTo((e += o), (t += n), i, (s = s || m.bounce));
    }),
    (b.prototype.scrollTo = function (e, t, i, s, o) {
      (void 0 === i && (i = 0),
        void 0 === s && (s = m.bounce),
        void 0 === o && (o = { start: {}, end: {} }));
      var n = this.options.useTransition ? s.style : s.fn,
        s = this.getCurrentPos(),
        s = c({ x: s.x, y: s.y }, o.start),
        e = c({ x: e, y: t }, o.end);
      (this.hooks.trigger(this.hooks.eventTypes.scrollTo, e),
        (function (e, t) {
          for (var i = 0, s = Object.keys(e); i < s.length; i++) {
            var o = s[i];
            if (e[o] !== t[o]) return;
          }
          return 1;
        })(s, e) ||
          ((t = Math.abs(e.x - s.x)),
          (o = Math.abs(e.y - s.y)),
          t < 1 &&
            o < 1 &&
            ((i = 0),
            this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll)),
          this.animater.move(s, e, i, n)));
    }),
    (b.prototype.scrollToElement = function (e, t, i, s, o) {
      var n = Q(e),
        r = te(n);
      ((i = (e = function (e, t, i) {
        return "number" == typeof e ? e : e ? Math.round(t / 2 - i / 2) : 0;
      })(i, n.offsetWidth, this.wrapper.offsetWidth)),
        (s = e(s, n.offsetHeight, this.wrapper.offsetHeight)),
        (r.left = (e = function (e, t, i, s) {
          return s.adjustPosition((e -= t) - i);
        })(r.left, this.wrapperOffset.left, i, this.scrollBehaviorX)),
        (r.top = e(r.top, this.wrapperOffset.top, s, this.scrollBehaviorY)),
        this.hooks.trigger(this.hooks.eventTypes.scrollToElement, n, r) ||
          this.scrollTo(r.left, r.top, t, o));
    }),
    (b.prototype.resetPosition = function (e, t) {
      (void 0 === e && (e = 0), void 0 === t && (t = m.bounce));
      var i = (o = this.scrollBehaviorX.checkInBoundary()).position,
        s = o.inBoundary,
        o = (n = this.scrollBehaviorY.checkInBoundary()).position,
        n = n.inBoundary;
      return !((s && n) || (V && this.reflow(), this.scrollTo(i, o, e, t), 0));
    }),
    (b.prototype.reflow = function () {
      this._reflow = this.content.offsetHeight;
    }),
    (b.prototype.updatePositions = function (e) {
      (this.scrollBehaviorX.updatePosition(e.x),
        this.scrollBehaviorY.updatePosition(e.y));
    }),
    (b.prototype.getCurrentPos = function () {
      return this.actions.getCurrentPos();
    }),
    (b.prototype.enable = function () {
      this.actions.enabled = !0;
    }),
    (b.prototype.disable = function () {
      (g(this.animater.timer), (this.actions.enabled = !1));
    }),
    (b.prototype.destroy = function () {
      var t = this;
      [
        "resizeRegister",
        "transitionEndRegister",
        "actionsHandler",
        "actions",
        "hooks",
        "animater",
        "translater",
        "scrollBehaviorX",
        "scrollBehaviorY",
      ].forEach(function (e) {
        return t[e].destroy();
      });
    }));
  var Fe = b;
  function b(e, t, i) {
    ((this.wrapper = e),
      (this.content = t),
      (this.resizeTimeout = 0),
      (this.hooks = new h([
        "beforeStart",
        "beforeMove",
        "beforeScrollStart",
        "scrollStart",
        "scroll",
        "beforeEnd",
        "scrollEnd",
        "resize",
        "touchEnd",
        "end",
        "flick",
        "scrollCancel",
        "momentum",
        "scrollTo",
        "minDistanceScroll",
        "scrollToElement",
        "beforeRefresh",
      ])),
      (this.options = i));
    var s,
      o,
      n = (l = this.options.bounce).left,
      r = l.right,
      a = l.top,
      l = l.bottom;
    ((this.scrollBehaviorX = new Be(
      e,
      t,
      Ne(i, "scrollX", [n, r], { size: "width", position: "left" }),
    )),
      (this.scrollBehaviorY = new Be(
        e,
        t,
        Ne(i, "scrollY", [a, l], { size: "height", position: "top" }),
      )),
      (this.translater = new Ee(this.content)),
      (this.animater =
        ((t = this.content),
        (i = this.translater),
        (a = (s = this.options).useTransition),
        (l = {}),
        Object.defineProperty(l, "probeType", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            return s.probeType;
          },
        }),
        new (a ? ze : Le)(t, i, l))),
      (this.actionsHandler = new xe(
        this.options.bindToTarget ? this.content : e,
        ((o = this.options),
        [
          "click",
          "bindToWrapper",
          "disableMouse",
          "disableTouch",
          "preventDefault",
          "stopPropagation",
          "tagException",
          "preventDefaultException",
          "autoEndDistance",
        ].reduce(function (e, t) {
          return ((e[t] = o[t]), e);
        }, {})),
      )),
      (this.actions = new Ae(
        this.scrollBehaviorX,
        this.scrollBehaviorY,
        this.actionsHandler,
        this.animater,
        this.options,
      )),
      (e = this.resize.bind(this)),
      (this.resizeRegister = new p(window, [
        { name: "orientationchange", handler: e },
        { name: "resize", handler: e },
      ])),
      this.registerTransitionEnd(),
      this.init());
  }
  (H(w, (Re = h)),
    (w.use = function (t) {
      var e = t.pluginName;
      return (
        w.plugins.some(function (e) {
          return t === e.ctor;
        }) ||
          (_(e)
            ? s(
                "Plugin Class must specify plugin's name in static property by 'pluginName' field.",
              )
            : ((w.pluginsMap[e] = !0),
              w.plugins.push({ name: e, applyOrder: t.applyOrder, ctor: t }))),
        w
      );
    }),
    (w.prototype.setContent = function (e) {
      var t = !1,
        i = !0;
      return (
        (e = e.children[this.options.specifiedIndexAsContent])
          ? (t = this.content !== e) && (this.content = e)
          : (s(
              "The wrapper need at least one child element to be content element to scroll.",
            ),
            (i = !1)),
        { valid: i, contentChanged: t }
      );
    }),
    (w.prototype.init = function (e) {
      var t = this;
      (((this.wrapper = e).isBScrollContainer = !0),
        (this.scroller = new Fe(e, this.content, this.options)),
        this.scroller.hooks.on(
          this.scroller.hooks.eventTypes.resize,
          function () {
            t.refresh();
          },
        ),
        this.eventBubbling(),
        this.handleAutoBlur(),
        this.enable(),
        this.proxy(F),
        this.applyPlugins(),
        this.refreshWithoutReset(this.content),
        (e = { x: (e = this.options).startX, y: e.startY }),
        this.hooks.trigger(this.hooks.eventTypes.beforeInitialScrollTo, e) ||
          this.scroller.scrollTo(e.x, e.y));
    }),
    (w.prototype.applyPlugins = function () {
      var i = this,
        s = this.options;
      w.plugins
        .sort(function (e, t) {
          var i;
          (((i = {}).pre = -1), (i.post = 1));
          return (
            (e.applyOrder ? i[e.applyOrder] : 0) -
            (t.applyOrder ? i[t.applyOrder] : 0)
          );
        })
        .forEach(function (e) {
          var t = e.ctor;
          s[e.name] && "function" == typeof t && (i.plugins[e.name] = new t(i));
        });
    }),
    (w.prototype.handleAutoBlur = function () {
      this.options.autoBlur &&
        this.on(this.eventTypes.beforeScrollStart, function () {
          var e = document.activeElement;
          !e || ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) || e.blur();
        });
    }),
    (w.prototype.eventBubbling = function () {
      $e(this.scroller.hooks, this, [
        this.eventTypes.beforeScrollStart,
        this.eventTypes.scrollStart,
        this.eventTypes.scroll,
        this.eventTypes.scrollEnd,
        this.eventTypes.scrollCancel,
        this.eventTypes.touchEnd,
        this.eventTypes.flick,
      ]);
    }),
    (w.prototype.refreshWithoutReset = function (e) {
      (this.scroller.refresh(e),
        this.hooks.trigger(this.hooks.eventTypes.refresh, e),
        this.trigger(this.eventTypes.refresh, e));
    }),
    (w.prototype.proxy = function (e) {
      var i = this;
      e.forEach(function (e) {
        var t = e.key,
          e = e.sourceKey;
        ge(i, e, t);
      });
    }),
    (w.prototype.refresh = function () {
      var e = this.setContent(this.wrapper),
        t = e.contentChanged;
      e.valid &&
        ((e = this.content),
        this.refreshWithoutReset(e),
        t &&
          (this.hooks.trigger(this.hooks.eventTypes.contentChanged, e),
          this.trigger(this.eventTypes.contentChanged, e)),
        this.scroller.resetPosition());
    }),
    (w.prototype.enable = function () {
      (this.scroller.enable(),
        this.hooks.trigger(this.hooks.eventTypes.enable),
        this.trigger(this.eventTypes.enable));
    }),
    (w.prototype.disable = function () {
      (this.scroller.disable(),
        this.hooks.trigger(this.hooks.eventTypes.disable),
        this.trigger(this.eventTypes.disable));
    }),
    (w.prototype.destroy = function () {
      (this.hooks.trigger(this.hooks.eventTypes.destroy),
        this.trigger(this.eventTypes.destroy),
        this.scroller.destroy());
    }),
    (w.prototype.eventRegister = function (e) {
      this.registerType(e);
    }),
    (w.plugins = []),
    (w.pluginsMap = {}));
  var Re,
    We = w;
  function w(e, t) {
    var i =
      Re.call(this, [
        "refresh",
        "contentChanged",
        "enable",
        "disable",
        "beforeScrollStart",
        "scrollStart",
        "scroll",
        "scrollEnd",
        "scrollCancel",
        "touchEnd",
        "flick",
        "destroy",
      ]) || this;
    return (
      (e = Q(e))
        ? ((i.plugins = {}),
          (i.options = new Te().merge(t).process()),
          i.setContent(e).valid &&
            ((i.hooks = new h([
              "refresh",
              "enable",
              "disable",
              "destroy",
              "beforeInitialScrollTo",
              "contentChanged",
            ])),
            i.init(e)))
        : s("Can not resolve the wrapper DOM."),
      i
    );
  }
  function Ge(e, t) {
    return new We(e, t);
  }
  ((Ge.use = We.use),
    (Ge.plugins = We.plugins),
    (Ge.pluginsMap = We.pluginsMap));
  var Ve = Ge,
    je =
      ((T.prototype.init = function () {
        (this.handleBScroll(),
          this.handleOptions(),
          this.handleHooks(),
          this.registerEvent());
      }),
      (T.prototype.handleBScroll = function () {
        this.scroll.registerType([
          "alterOptions",
          "mousewheelStart",
          "mousewheelMove",
          "mousewheelEnd",
        ]);
      }),
      (T.prototype.handleOptions = function () {
        var e =
          !0 === this.scroll.options.mouseWheel
            ? {}
            : this.scroll.options.mouseWheel;
        this.mouseWheelOpt = r(
          {
            speed: 20,
            invert: !1,
            easeTime: 300,
            discreteTime: 400,
            throttleTime: 0,
            dampingFactor: 0.1,
          },
          e,
        );
      }),
      (T.prototype.handleHooks = function () {
        ((this.hooksFn = []),
          this.registerHooks(this.scroll.hooks, "destroy", this.destroy));
      }),
      (T.prototype.registerEvent = function () {
        this.eventRegister = new p(this.scroll.scroller.wrapper, [
          { name: "wheel", handler: this.wheelHandler.bind(this) },
          { name: "mousewheel", handler: this.wheelHandler.bind(this) },
          { name: "DOMMouseScroll", handler: this.wheelHandler.bind(this) },
        ]);
      }),
      (T.prototype.registerHooks = function (e, t, i) {
        (e.on(t, i, this), this.hooksFn.push([e, t, i]));
      }),
      (T.prototype.wheelHandler = function (e) {
        this.scroll.enabled &&
          (this.beforeHandler(e),
          this.wheelStart ||
            (this.wheelStartHandler(e), (this.wheelStart = !0)),
          (e = this.getWheelDelta(e)),
          this.wheelMoveHandler(e),
          this.wheelEndDetector(e));
      }),
      (T.prototype.wheelStartHandler = function (e) {
        this.cleanCache();
        var t = (i = this.scroll.scroller).scrollBehaviorX,
          i = i.scrollBehaviorY;
        (t.setMovingDirection(0),
          i.setMovingDirection(0),
          t.setDirection(0),
          i.setDirection(0),
          this.scroll.trigger(
            this.scroll.eventTypes.alterOptions,
            this.mouseWheelOpt,
          ),
          this.scroll.trigger(this.scroll.eventTypes.mousewheelStart));
      }),
      (T.prototype.cleanCache = function () {
        this.deltaCache = [];
      }),
      (T.prototype.wheelMoveHandler = function (e) {
        var t,
          i,
          s = this,
          o = this.mouseWheelOpt,
          n = o.throttleTime,
          r = o.dampingFactor;
        n && this.wheelMoveTimer
          ? this.deltaCache.push(e)
          : ((i = this.deltaCache.reduce(
              function (e, t) {
                return { x: e.x + t.x, y: e.y + t.y };
              },
              { x: 0, y: 0 },
            )),
            this.cleanCache(),
            (o = (t = this.scroll.scroller).scrollBehaviorX),
            (t = t.scrollBehaviorY),
            o.setMovingDirection(-e.directionX),
            t.setMovingDirection(-e.directionY),
            o.setDirection(e.x),
            t.setDirection(e.y),
            (o = o.performDampingAlgorithm(Math.round(e.x) + i.x, r)),
            (i = t.performDampingAlgorithm(Math.round(e.y) + i.x, r)),
            this.scroll.trigger(this.scroll.eventTypes.mousewheelMove, {
              x: o,
              y: i,
            }) ||
              ((r = this.getEaseTime()),
              o === this.scroll.x && i === this.scroll.y) ||
              this.scroll.scrollTo(o, i, r),
            n &&
              (this.wheelMoveTimer = window.setTimeout(function () {
                s.wheelMoveTimer = 0;
              }, n)));
      }),
      (T.prototype.wheelEndDetector = function (e) {
        var t = this;
        (window.clearTimeout(this.wheelEndTimer),
          (this.wheelEndTimer = window.setTimeout(function () {
            ((t.wheelStart = !1),
              window.clearTimeout(t.wheelMoveTimer),
              (t.wheelMoveTimer = 0),
              t.scroll.trigger(t.scroll.eventTypes.mousewheelEnd, e));
          }, this.mouseWheelOpt.discreteTime)));
      }),
      (T.prototype.getWheelDelta = function (e) {
        var t = (o = this.mouseWheelOpt).speed,
          i = 0,
          s = 0,
          o = o.invert ? -1 : 1;
        switch (!0) {
          case "deltaX" in e:
            s =
              1 === e.deltaMode
                ? ((i = -e.deltaX * t), -e.deltaY * t)
                : ((i = -e.deltaX), -e.deltaY);
            break;
          case "wheelDeltaX" in e:
            ((i = (e.wheelDeltaX / 120) * t), (s = (e.wheelDeltaY / 120) * t));
            break;
          case "wheelDelta" in e:
            i = s = (e.wheelDelta / 120) * t;
            break;
          case "detail" in e:
            i = s = (-e.detail / 3) * t;
        }
        return (
          (i *= o),
          (s *= o),
          this.scroll.hasVerticalScroll ||
            (Math.abs(s) > Math.abs(i) && (i = s), (s = 0)),
          {
            x: (i = this.scroll.hasHorizontalScroll ? i : 0),
            y: s,
            directionX: 0 < i ? -1 : i < 0 ? 1 : 0,
            directionY: 0 < s ? -1 : s < 0 ? 1 : 0,
          }
        );
      }),
      (T.prototype.beforeHandler = function (e) {
        var t = (s = this.scroll.options).preventDefault,
          i = s.stopPropagation,
          s = s.preventDefaultException;
        (t && !he(e.target, s) && e.preventDefault(), i && e.stopPropagation());
      }),
      (T.prototype.getEaseTime = function () {
        var e = this.mouseWheelOpt.easeTime;
        return (
          e < 100 &&
            s(
              "easeTime should be greater than 100.If mouseWheel easeTime is too small,scrollEnd will be triggered many times.",
            ),
          Math.max(e, 100)
        );
      }),
      (T.prototype.destroy = function () {
        (this.eventRegister.destroy(),
          window.clearTimeout(this.wheelEndTimer),
          window.clearTimeout(this.wheelMoveTimer),
          this.hooksFn.forEach(function (e) {
            var t = e[0],
              i = e[1],
              e = e[2];
            t.off(i, e);
          }));
      }),
      (T.pluginName = "mouseWheel"),
      (T.applyOrder = "pre"),
      T);
  function T(e) {
    ((this.scroll = e),
      (this.wheelEndTimer = 0),
      (this.wheelMoveTimer = 0),
      (this.wheelStart = !1),
      this.init());
  }
  ((S.prototype.init = function () {
    (this.handleMutationObserver(), this.handleHooks());
  }),
    (S.prototype.handleMutationObserver = function () {
      var t = this;
      "undefined" != typeof MutationObserver
        ? ((this.observer = new MutationObserver(function (e) {
            t.mutationObserverHandler(e, 0);
          })),
          this.startObserve(this.observer))
        : this.checkDOMUpdate();
    }),
    (S.prototype.handleHooks = function () {
      var e = this;
      ((this.hooksFn = []),
        this.registerHooks(
          this.scroll.hooks,
          this.scroll.hooks.eventTypes.contentChanged,
          function () {
            (e.stopObserve(), e.handleMutationObserver());
          },
        ),
        this.registerHooks(
          this.scroll.hooks,
          this.scroll.hooks.eventTypes.enable,
          function () {
            e.stopObserver && e.handleMutationObserver();
          },
        ),
        this.registerHooks(
          this.scroll.hooks,
          this.scroll.hooks.eventTypes.disable,
          function () {
            e.stopObserve();
          },
        ),
        this.registerHooks(
          this.scroll.hooks,
          this.scroll.hooks.eventTypes.destroy,
          function () {
            e.destroy();
          },
        ));
    }),
    (S.prototype.mutationObserverHandler = function (e, t) {
      var i = this;
      if (!this.shouldNotRefresh()) {
        for (var s = !1, o = !1, n = 0; n < e.length; n++) {
          var r = e[n];
          if ("attributes" !== r.type) {
            s = !0;
            break;
          }
          if (r.target !== this.scroll.scroller.content) {
            o = !0;
            break;
          }
        }
        s
          ? this.scroll.refresh()
          : o &&
            (clearTimeout(t),
            window.setTimeout(function () {
              i.shouldNotRefresh() || i.scroll.refresh();
            }, 60));
      }
    }),
    (S.prototype.startObserve = function (e) {
      e.observe(this.scroll.scroller.content, {
        attributes: !0,
        childList: !0,
        subtree: !0,
      });
    }),
    (S.prototype.shouldNotRefresh = function () {
      var e = this.scroll.scroller,
        t = e.scrollBehaviorX,
        i = e.scrollBehaviorY,
        i =
          t.currentPos > t.minScrollPos ||
          t.currentPos < t.maxScrollPos ||
          i.currentPos > i.minScrollPos ||
          i.currentPos < i.maxScrollPos;
      return e.animater.pending || i;
    }),
    (S.prototype.checkDOMUpdate = function () {
      function i() {
        setTimeout(function () {
          var e, t;
          s.stopObserver ||
            ((e = (n = le(o)).width),
            (t = n.height),
            (r === e && a === t) || s.scroll.refresh(),
            (r = e),
            (a = t),
            i());
        }, 1e3);
      }
      var s = this,
        o = this.scroll.scroller.content,
        n = le(o),
        r = n.width,
        a = n.height;
      i();
    }),
    (S.prototype.registerHooks = function (e, t, i) {
      (e.on(t, i, this), this.hooksFn.push([e, t, i]));
    }),
    (S.prototype.stopObserve = function () {
      ((this.stopObserver = !0), this.observer && this.observer.disconnect());
    }),
    (S.prototype.destroy = function () {
      (this.stopObserve(),
        this.hooksFn.forEach(function (e) {
          var t = e[0],
            i = e[1],
            e = e[2];
          t.off(i, e);
        }),
        (this.hooksFn.length = 0));
    }),
    (S.pluginName = "observeDOM"));
  var qe = S;
  function S(e) {
    ((this.scroll = e), (this.stopObserver = !1), this.init());
  }
  var _e = [
      { key: "finishPullDown", name: "finishPullDown" },
      { key: "openPullDown", name: "openPullDown" },
      { key: "closePullDown", name: "closePullDown" },
      { key: "autoPullDownRefresh", name: "autoPullDownRefresh" },
    ].map(function (e) {
      return { key: e.key, sourceKey: "plugins.pullDownRefresh." + e.name };
    }),
    Ke = "pullingDown",
    Ue = "enterThreshold",
    Ze = "leaveThreshold",
    q =
      ((x.prototype.setPulling = function (e) {
        this.pulling = e;
      }),
      (x.prototype.setThresholdBoundary = function (e) {
        this.thresholdBoundary = e;
      }),
      (x.prototype.init = function () {
        (this.handleBScroll(),
          this.handleOptions(this.scroll.options.pullDownRefresh),
          this.handleHooks(),
          this.watch());
      }),
      (x.prototype.handleBScroll = function () {
        (this.scroll.registerType([Ke, Ue, Ze]), this.scroll.proxy(_e));
      }),
      (x.prototype.handleOptions = function (e) {
        ((this.options = r(
          { threshold: 90, stop: 40 },
          (e = !0 === (e = void 0 === e ? {} : e) ? {} : e),
        )),
          (this.scroll.options.probeType = 3));
      }),
      (x.prototype.handleHooks = function () {
        var t = this,
          e = ((this.hooksFn = []), this.scroll.scroller),
          i = e.scrollBehaviorY;
        ((this.currentMinScrollY = this.cachedOriginanMinScrollY =
          i.minScrollPos),
          this.registerHooks(
            this.scroll.hooks,
            this.scroll.hooks.eventTypes.contentChanged,
            function () {
              t.finishPullDown();
            },
          ),
          this.registerHooks(
            i.hooks,
            i.hooks.eventTypes.computeBoundary,
            function (e) {
              (0 < e.maxScrollPos && (e.maxScrollPos = -1),
                (e.minScrollPos = t.currentMinScrollY));
            },
          ),
          this.hasMouseWheelPlugin() &&
            (this.registerHooks(
              this.scroll,
              this.scroll.eventTypes.alterOptions,
              function (e) {
                ((e.discreteTime = 300), (e.easeTime = 350));
              },
            ),
            this.registerHooks(
              this.scroll,
              this.scroll.eventTypes.mousewheelEnd,
              function () {
                e.hooks.trigger(e.hooks.eventTypes.end);
              },
            )));
      }),
      (x.prototype.registerHooks = function (e, t, i) {
        (e.on(t, i, this), this.hooksFn.push([e, t, i]));
      }),
      (x.prototype.hasMouseWheelPlugin = function () {
        return !!this.scroll.eventTypes.alterOptions;
      }),
      (x.prototype.watch = function () {
        var e = this.scroll.scroller;
        ((this.watching = !0),
          this.registerHooks(
            e.hooks,
            e.hooks.eventTypes.end,
            this.checkPullDown,
          ),
          this.registerHooks(
            this.scroll,
            this.scroll.eventTypes.scrollStart,
            this.resetStateBeforeScrollStart,
          ),
          this.registerHooks(
            this.scroll,
            this.scroll.eventTypes.scroll,
            this.checkLocationOfThresholdBoundary,
          ),
          this.hasMouseWheelPlugin() &&
            this.registerHooks(
              this.scroll,
              this.scroll.eventTypes.mousewheelStart,
              this.resetStateBeforeScrollStart,
            ));
      }),
      (x.prototype.resetStateBeforeScrollStart = function () {
        this.isFetchingStatus() ||
          (this.setPulling(1), this.setThresholdBoundary(0));
      }),
      (x.prototype.checkLocationOfThresholdBoundary = function () {
        var e, t, i;
        1 === this.pulling &&
          ((e = this.scroll),
          (t =
            1 !== this.thresholdBoundary &&
            this.locateInsideThresholdBoundary()),
          (i =
            2 !== this.thresholdBoundary &&
            !this.locateInsideThresholdBoundary()),
          t && (this.setThresholdBoundary(1), e.trigger(Ue)),
          i) &&
          (this.setThresholdBoundary(2), e.trigger(Ze));
      }),
      (x.prototype.locateInsideThresholdBoundary = function () {
        return this.scroll.y <= this.options.threshold;
      }),
      (x.prototype.unwatch = function () {
        var e = this.scroll,
          t = e.scroller;
        ((this.watching = !1),
          t.hooks.off(t.hooks.eventTypes.end, this.checkPullDown),
          e.off(e.eventTypes.scrollStart, this.resetStateBeforeScrollStart),
          e.off(e.eventTypes.scroll, this.checkLocationOfThresholdBoundary),
          this.hasMouseWheelPlugin() &&
            e.off(
              e.eventTypes.mousewheelStart,
              this.resetStateBeforeScrollStart,
            ));
      }),
      (x.prototype.checkPullDown = function () {
        var e = (t = this.options).threshold,
          t = t.stop;
        return (
          !(this.scroll.y < e) &&
          (1 === this.pulling &&
            (this.modifyBehaviorYBoundary(t),
            this.setPulling(2),
            this.scroll.trigger(Ke)),
          this.scroll.scrollTo(
            this.scroll.x,
            t,
            this.scroll.options.bounceTime,
            m.bounce,
          ),
          this.isFetchingStatus())
        );
      }),
      (x.prototype.isFetchingStatus = function () {
        return 2 === this.pulling;
      }),
      (x.prototype.modifyBehaviorYBoundary = function (e) {
        var t = this.scroll.scroller.scrollBehaviorY;
        ((this.cachedOriginanMinScrollY = t.minScrollPos),
          (this.currentMinScrollY = e),
          t.computeBoundary());
      }),
      (x.prototype.finishPullDown = function () {
        var e;
        this.isFetchingStatus() &&
          ((e = this.scroll.scroller.scrollBehaviorY),
          (this.currentMinScrollY = this.cachedOriginanMinScrollY),
          e.computeBoundary(),
          this.setPulling(0),
          this.scroll.resetPosition(this.scroll.options.bounceTime, m.bounce));
      }),
      (x.prototype.openPullDown = function (e) {
        (this.handleOptions((e = void 0 === e ? {} : e)),
          this.watching || this.watch());
      }),
      (x.prototype.closePullDown = function () {
        this.unwatch();
      }),
      (x.prototype.autoPullDownRefresh = function () {
        var e = (t = this.options).threshold,
          t = t.stop;
        !this.isFetchingStatus() &&
          this.watching &&
          (this.modifyBehaviorYBoundary(t),
          this.scroll.trigger(this.scroll.eventTypes.scrollStart),
          this.scroll.scrollTo(this.scroll.x, e),
          this.setPulling(2),
          this.scroll.trigger(Ke),
          this.scroll.scrollTo(
            this.scroll.x,
            t,
            this.scroll.options.bounceTime,
            m.bounce,
          ));
      }),
      (x.pluginName = "pullDownRefresh"),
      x);
  function x(e) {
    ((this.scroll = e),
      (this.pulling = 0),
      (this.thresholdBoundary = 0),
      this.init());
  }
  var Qe = [
      { key: "finishPullUp", name: "finishPullUp" },
      { key: "openPullUp", name: "openPullUp" },
      { key: "closePullUp", name: "closePullUp" },
      { key: "autoPullUpLoad", name: "autoPullUpLoad" },
    ].map(function (e) {
      return { key: e.key, sourceKey: "plugins.pullUpLoad." + e.name };
    }),
    Je = "pullingUp",
    W =
      ((k.prototype.init = function () {
        (this.handleBScroll(),
          this.handleOptions(this.scroll.options.pullUpLoad),
          this.handleHooks(),
          this.watch());
      }),
      (k.prototype.handleBScroll = function () {
        (this.scroll.registerType([Je]), this.scroll.proxy(Qe));
      }),
      (k.prototype.handleOptions = function (e) {
        ((this.options = r(
          { threshold: 0 },
          (e = !0 === (e = void 0 === e ? {} : e) ? {} : e),
        )),
          (this.scroll.options.probeType = 3));
      }),
      (k.prototype.handleHooks = function () {
        var e = this,
          t = ((this.hooksFn = []), this.scroll.scroller.scrollBehaviorY);
        (this.registerHooks(
          this.scroll.hooks,
          this.scroll.hooks.eventTypes.contentChanged,
          function () {
            e.finishPullUp();
          },
        ),
          this.registerHooks(
            t.hooks,
            t.hooks.eventTypes.computeBoundary,
            function (e) {
              0 < e.maxScrollPos && (e.maxScrollPos = -1);
            },
          ));
      }),
      (k.prototype.registerHooks = function (e, t, i) {
        (e.on(t, i, this), this.hooksFn.push([e, t, i]));
      }),
      (k.prototype.watch = function () {
        this.watching ||
          ((this.watching = !0),
          this.registerHooks(
            this.scroll,
            this.scroll.eventTypes.scroll,
            this.checkPullUp,
          ));
      }),
      (k.prototype.unwatch = function () {
        ((this.watching = !1),
          this.scroll.off(this.scroll.eventTypes.scroll, this.checkPullUp));
      }),
      (k.prototype.checkPullUp = function (e) {
        var t = this,
          i = this.options.threshold;
        1 === this.scroll.movingDirectionY &&
          e.y <= this.scroll.maxScrollY + i &&
          ((this.pulling = !0),
          this.scroll.once(this.scroll.eventTypes.scrollEnd, function () {
            t.pulling = !1;
          }),
          this.unwatch(),
          this.scroll.trigger(Je));
      }),
      (k.prototype.finishPullUp = function () {
        var e = this;
        (this.scroll.scroller.scrollBehaviorY.setMovingDirection(0),
          this.pulling
            ? this.scroll.once(this.scroll.eventTypes.scrollEnd, function () {
                e.watch();
              })
            : this.watch());
      }),
      (k.prototype.openPullUp = function (e) {
        (this.handleOptions((e = void 0 === e ? {} : e)), this.watch());
      }),
      (k.prototype.closePullUp = function () {
        this.unwatch();
      }),
      (k.prototype.autoPullUpLoad = function () {
        var e = this.options.threshold,
          t = this.scroll.scroller.scrollBehaviorY;
        !this.pulling &&
          this.watching &&
          ((e = t.maxScrollPos + e + -1),
          this.scroll.scroller.scrollBehaviorY.setMovingDirection(-1),
          this.scroll.scrollTo(
            this.scroll.x,
            e,
            this.scroll.options.bounceTime,
          ));
      }),
      (k.pluginName = "pullUpLoad"),
      k);
  function k(e) {
    ((this.scroll = e), (this.pulling = !1), (this.watching = !1), this.init());
  }
  ((tt.prototype.registerEvents = function () {
    var e = (o = this.options).disableMouse,
      t = o.disableTouch,
      i = [],
      s = [],
      o = [];
    (e ||
      (i.push({ name: "mousedown", handler: this.start.bind(this) }),
      s.push({ name: "mousemove", handler: this.move.bind(this) }),
      o.push({ name: "mouseup", handler: this.end.bind(this) })),
      t ||
        (i.push({ name: "touchstart", handler: this.start.bind(this) }),
        s.push({ name: "touchmove", handler: this.move.bind(this) }),
        o.push(
          { name: "touchend", handler: this.end.bind(this) },
          { name: "touchcancel", handler: this.end.bind(this) },
        )),
      (this.startEventRegister = new p(this.indicator.indicatorEl, i)),
      (this.moveEventRegister = new p(window, s)),
      (this.endEventRegister = new p(window, o)));
  }),
    (tt.prototype.BScrollIsDisabled = function () {
      return !this.indicator.scroll.enabled;
    }),
    (tt.prototype.start = function (e) {
      var t;
      this.BScrollIsDisabled() ||
        ((t = e.touches ? e.touches[0] : e),
        e.preventDefault(),
        e.stopPropagation(),
        (this.initiated = !0),
        (this.lastPoint = t[this.indicator.keysMap.point]),
        this.hooks.trigger(this.hooks.eventTypes.touchStart));
    }),
    (tt.prototype.move = function (e) {
      var t;
      this.initiated &&
        ((t = (e.touches ? e.touches[0] : e)[this.indicator.keysMap.point]),
        e.preventDefault(),
        e.stopPropagation(),
        (e = t - this.lastPoint),
        (this.lastPoint = t),
        this.hooks.trigger(this.hooks.eventTypes.touchMove, e));
    }),
    (tt.prototype.end = function (e) {
      this.initiated &&
        ((this.initiated = !1),
        e.preventDefault(),
        e.stopPropagation(),
        this.hooks.trigger(this.hooks.eventTypes.touchEnd));
    }),
    (tt.prototype.destroy = function () {
      (this.startEventRegister.destroy(),
        this.moveEventRegister.destroy(),
        this.endEventRegister.destroy());
    }));
  var et = tt;
  function tt(e, t) {
    ((this.indicator = e),
      (this.options = t),
      (this.hooks = new h(["touchStart", "touchMove", "touchEnd"])),
      this.registerEvents());
  }
  ((E.prototype.handleFade = function () {
    this.options.fade && (this.wrapper.style.opacity = "0");
  }),
    (E.prototype.handleHooks = function () {
      var i = this,
        e = (a = this.options).fade,
        t = a.interactive,
        s = a.scrollbarTrackClickable,
        o = this.scroll,
        n = o.hooks,
        r = o.scroller.translater.hooks,
        a = o.scroller.animater.hooks;
      (this.registerHooks(n, n.eventTypes.refresh, this.refresh),
        this.registerHooks(r, r.eventTypes.translate, function (e) {
          var t = i.keysMap.hasScroll;
          i.scroll[t] && i.updatePosition(e);
        }),
        this.registerHooks(a, a.eventTypes.time, this.transitionTime),
        this.registerHooks(
          a,
          a.eventTypes.timeFunction,
          this.transitionTimingFunction,
        ),
        e &&
          (this.registerHooks(o, o.eventTypes.scrollEnd, function () {
            i.fade();
          }),
          this.registerHooks(o, o.eventTypes.scrollStart, function () {
            i.fade(!0);
          }),
          o.eventTypes.mousewheelStart) &&
          o.eventTypes.mousewheelEnd &&
          (this.registerHooks(o, o.eventTypes.mousewheelStart, function () {
            i.fade(!0);
          }),
          this.registerHooks(o, o.eventTypes.mousewheelMove, function () {
            i.fade(!0);
          }),
          this.registerHooks(o, o.eventTypes.mousewheelEnd, function () {
            i.fade();
          })),
        t &&
          ((t = (o = this.scroll.options).disableMouse),
          (o = o.disableTouch),
          (this.eventHandler = new et(this, {
            disableMouse: t,
            disableTouch: o,
          })),
          (o = this.eventHandler.hooks),
          this.registerHooks(o, o.eventTypes.touchStart, this.startHandler),
          this.registerHooks(o, o.eventTypes.touchMove, this.moveHandler),
          this.registerHooks(o, o.eventTypes.touchEnd, this.endHandler)),
        s && this.bindClick());
    }),
    (E.prototype.registerHooks = function (e, t, i) {
      (e.on(t, i, this), this.hooksFn.push([e, t, i]));
    }),
    (E.prototype.bindClick = function () {
      var e = this.wrapper;
      this.clickEventRegister = new p(e, [
        { name: "click", handler: this.handleClick.bind(this) },
      ]);
    }),
    (E.prototype.handleClick = function (e) {
      var t = this.calculateclickOffsetPos(e),
        e = (i = this.scroll).x,
        i = i.y,
        e = "horizontal" === this.direction ? t : e,
        i = "vertical" === this.direction ? t : i;
      this.scroll.scrollTo(e, i, this.options.scrollbarTrackOffsetTime);
    }),
    (E.prototype.calculateclickOffsetPos = function (e) {
      var t = this.keysMap,
        i = t.point,
        s = t.domRect,
        o = this.options.scrollbarTrackOffsetType,
        e = (t = e[i] - this.wrapperRect[s]) < this.currentPos ? -1 : 1,
        i = 0,
        s = this.currentPos;
      return (
        "step" === o ? (i = this.scrollInfo.baseSize * e) : ((i = 0), (s = t)),
        this.newPos(s, i, this.scrollInfo)
      );
    }),
    (E.prototype.getKeysMap = function () {
      return "vertical" === this.direction
        ? {
            hasScroll: "hasVerticalScroll",
            size: "height",
            wrapperSize: "clientHeight",
            scrollerSize: "scrollerHeight",
            maxScrollPos: "maxScrollY",
            pos: "y",
            point: "pageY",
            translateProperty: "translateY",
            domRect: "top",
          }
        : {
            hasScroll: "hasHorizontalScroll",
            size: "width",
            wrapperSize: "clientWidth",
            scrollerSize: "scrollerWidth",
            maxScrollPos: "maxScrollX",
            pos: "x",
            point: "pageX",
            translateProperty: "translateX",
            domRect: "left",
          };
    }),
    (E.prototype.fade = function (e) {
      var t = this.options,
        i = t.fadeInTime,
        s = t.fadeOutTime;
      (((t = this.wrapper).style[d.transitionDuration] = (e ? i : s) + "ms"),
        (t.style.opacity = e ? "1" : "0"));
    }),
    (E.prototype.refresh = function () {
      var e,
        t,
        i = this.keysMap.hasScroll,
        s = this.scroll,
        o = s.x,
        n = s.y;
      ((this.wrapperRect = this.wrapper.getBoundingClientRect()),
        this.canScroll(s[i]) &&
          ((e = (t = this.keysMap).wrapperSize),
          (i = t.scrollerSize),
          (t = t.maxScrollPos),
          (this.scrollInfo = this.refreshScrollInfo(
            this.wrapper[e],
            s[i],
            s[t],
            this.indicatorEl[e],
          )),
          this.updatePosition({ x: o, y: n })));
    }),
    (E.prototype.transitionTime = function (e) {
      this.indicatorEl.style[d.transitionDuration] =
        (e = void 0 === e ? 0 : e) + "ms";
    }),
    (E.prototype.transitionTimingFunction = function (e) {
      this.indicatorEl.style[d.transitionTimingFunction] = e;
    }),
    (E.prototype.canScroll = function (e) {
      return ((this.wrapper.style.display = e ? "block" : "none"), e);
    }),
    (E.prototype.refreshScrollInfo = function (e, t, i, s) {
      return (
        (t = Math.max(
          Math.round((e * e) / (t || e || 1)),
          this.options.minSize,
        )),
        (s = e - (t = this.options.isCustom ? s : t)),
        { baseSize: t, maxScrollPos: s, minScrollPos: 0, sizeRatio: s / i }
      );
    }),
    (E.prototype.updatePosition = function (e) {
      var e = (t = this.caculatePosAndSize(e, this.scrollInfo)).pos,
        t = t.size;
      (this.refreshStyle(t, e), (this.currentPos = e));
    }),
    (E.prototype.caculatePosAndSize = function (e, t) {
      var i,
        s = this.keysMap.pos,
        o = t.sizeRatio,
        n = t.baseSize,
        r = t.maxScrollPos,
        a = t.minScrollPos,
        t = this.options.minSize;
      return (
        (s = Math.round(o * e[s])) < a
          ? ((i = Math.max(n + 3 * s, t)), (s = a))
          : r < s
            ? (s = r + n - (i = Math.max(n - 3 * (s - r), t)))
            : (i = n),
        { pos: s, size: i }
      );
    }),
    (E.prototype.refreshStyle = function (e, t) {
      var i = (o = this.keysMap).translateProperty,
        s = o.size,
        o = this.scroll.options.translateZ;
      ((this.indicatorEl.style[s] = e + "px"),
        (this.indicatorEl.style[d.transform] = i + "(" + t + "px)" + o));
    }),
    (E.prototype.startHandler = function () {
      ((this.moved = !1),
        (this.startTime = u()),
        this.transitionTime(),
        this.scroll.scroller.hooks.trigger(
          this.scroll.scroller.hooks.eventTypes.beforeScrollStart,
        ));
    }),
    (E.prototype.moveHandler = function (e) {
      (this.moved ||
        this.indicatorNotMoved(e) ||
        ((this.moved = !0),
        this.scroll.scroller.hooks.trigger(
          this.scroll.scroller.hooks.eventTypes.scrollStart,
        )),
        this.moved &&
          ((e = this.newPos(this.currentPos, e, this.scrollInfo)),
          this.syncBScroll(e)));
    }),
    (E.prototype.endHandler = function () {
      var e, t;
      this.moved &&
        ((e = (t = this.scroll).x),
        (t = t.y),
        this.scroll.scroller.hooks.trigger(
          this.scroll.scroller.hooks.eventTypes.scrollEnd,
          { x: e, y: t },
        ));
    }),
    (E.prototype.indicatorNotMoved = function (e) {
      var t = this.currentPos,
        i = this.scrollInfo,
        s = i.maxScrollPos;
      return (t === i.minScrollPos && e <= 0) || (t === s && 0 <= e);
    }),
    (E.prototype.syncBScroll = function (e) {
      var t = u(),
        i = (c = this.scroll).x,
        s = c.y,
        o = c.options,
        n = c.scroller,
        r = c.maxScrollY,
        a = c.minScrollY,
        l = c.maxScrollX,
        h = c.minScrollX,
        c = o.probeType,
        o = o.momentumLimitTime,
        s = { x: i, y: s };
      ("vertical" === this.direction ? (s.y = f(e, r, a)) : (s.x = f(e, l, h)),
        n.translater.translate(s),
        t - this.startTime > o &&
          ((this.startTime = t), 1 === c) &&
          n.hooks.trigger(n.hooks.eventTypes.scroll, s),
        1 < c && n.hooks.trigger(n.hooks.eventTypes.scroll, s));
    }),
    (E.prototype.newPos = function (e, t, i) {
      var s = i.maxScrollPos,
        o = i.sizeRatio,
        t = f((t = e + t), i.minScrollPos, s);
      return Math.round(t / o);
    }),
    (E.prototype.destroy = function () {
      var e = (i = this.options).interactive,
        t = i.scrollbarTrackClickable,
        i = i.isCustom;
      (e && this.eventHandler.destroy(),
        t && this.clickEventRegister.destroy(),
        i || this.wrapper.parentNode.removeChild(this.wrapper),
        this.hooksFn.forEach(function (e) {
          var t = e[0],
            i = e[1],
            e = e[2];
          t.off(i, e);
        }),
        (this.hooksFn.length = 0));
    }));
  var it = E;
  function E(e, t) {
    ((this.scroll = e),
      (this.options = t),
      (this.hooksFn = []),
      (this.wrapper = t.wrapper),
      (this.direction = t.direction),
      (this.indicatorEl = this.wrapper.children[0]),
      (this.keysMap = this.getKeysMap()),
      this.handleFade(),
      this.handleHooks());
  }
  function st(e) {
    ((this.scroll = e),
      this.handleOptions(),
      this.createIndicators(),
      this.handleHooks());
  }
  ((st.prototype.handleHooks = function () {
    var i = this,
      e = this.scroll;
    e.hooks.on(e.hooks.eventTypes.destroy, function () {
      for (var e = 0, t = i.indicators; e < t.length; e++) t[e].destroy();
    });
  }),
    (st.prototype.handleOptions = function () {
      var e =
        !0 === this.scroll.options.scrollbar
          ? {}
          : this.scroll.options.scrollbar;
      this.options = r(
        {
          fade: !0,
          fadeInTime: 250,
          fadeOutTime: 500,
          interactive: !1,
          customElements: [],
          minSize: 8,
          scrollbarTrackClickable: !1,
          scrollbarTrackOffsetType: "step",
          scrollbarTrackOffsetTime: 300,
        },
        e,
      );
    }),
    (st.prototype.createIndicators = function () {
      for (
        var e,
          t,
          i,
          s,
          o = this.scroll,
          n = [],
          r = ["scrollX", "scrollY"],
          a = ["horizontal", "vertical"],
          l = this.options.customElements,
          h = 0;
        h < r.length;
        h++
      )
        o.options[r[h]] &&
          ((e = l.shift()),
          (t = a[h]),
          (i = !1),
          (s = e || this.createScrollbarElement(t)) !== e
            ? o.wrapper.appendChild(s)
            : (i = !0),
          (i = c(c({ wrapper: s, direction: t }, this.options), {
            isCustom: i,
          })),
          n.push(new it(o, i)));
      this.indicators = n;
    }),
    (st.prototype.createScrollbarElement = function (e, t) {
      void 0 === t && (t = this.options.scrollbarTrackClickable);
      var i = document.createElement("div"),
        s = document.createElement("div");
      return (
        (i.style.cssText = "position:absolute;z-index:9999;overflow:hidden;"),
        (s.style.cssText =
          "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;"),
        (s.className = "bscroll-indicator"),
        "horizontal" === e
          ? ((i.style.cssText += "height:7px;left:2px;right:2px;bottom:0;"),
            (s.style.height = "100%"),
            (i.className = "bscroll-horizontal-scrollbar"))
          : ((i.style.cssText += "width:7px;bottom:2px;top:2px;right:1px;"),
            (s.style.width = "100%"),
            (i.className = "bscroll-vertical-scrollbar")),
        t || (i.style.cssText += "pointer-events:none;"),
        i.appendChild(s),
        i
      );
    }),
    (st.pluginName = "scrollbar"));
  var t = st,
    ot =
      ((nt.prototype.init = function () {
        var e = (t = this.scroll.scroller).scrollBehaviorX,
          t = t.scrollBehaviorY;
        ((this.wrapperWidth = e.wrapperSize),
          (this.wrapperHeight = t.wrapperSize),
          (this.scrollerHeight = t.contentSize),
          (this.scrollerWidth = e.contentSize),
          (this.pages = this.buildPagesMatrix(
            this.wrapperWidth,
            this.wrapperHeight,
          )),
          (this.pageLengthOfX = this.pages ? this.pages.length : 0),
          (this.pageLengthOfY =
            this.pages && this.pages[0] ? this.pages[0].length : 0));
      }),
      (nt.prototype.getPageStats = function (e, t) {
        return this.pages[e][t];
      }),
      (nt.prototype.getNearestPageIndex = function (e, t) {
        for (
          var i = 0, s = 0, o = this.pages.length;
          i < o - 1 && !(e >= this.pages[i][0].cx);
          i++
        );
        for (
          o = this.pages[i].length;
          s < o - 1 && !(t >= this.pages[0][s].cy);
          s++
        );
        return { pageX: i, pageY: s };
      }),
      (nt.prototype.buildPagesMatrix = function (e, t) {
        for (
          var i,
            s,
            o = [],
            n = 0,
            r = 0,
            a = this.scroll.scroller.scrollBehaviorX.maxScrollPos,
            l = this.scroll.scroller.scrollBehaviorY.maxScrollPos,
            h = Math.round(e / 2),
            c = Math.round(t / 2);
          n > -this.scrollerWidth;
        ) {
          for (o[r] = [], i = s = 0; i > -this.scrollerHeight;)
            ((o[r][s] = {
              x: Math.max(n, a),
              y: Math.max(i, l),
              width: e,
              height: t,
              cx: n - h,
              cy: i - c,
            }),
              (i -= t),
              s++);
          ((n -= e), r++);
        }
        return o;
      }),
      nt);
  function nt(e) {
    ((this.scroll = e), this.init());
  }
  var rt = { pageX: 0, pageY: 0, x: 0, y: 0 },
    at =
      ((C.prototype.refresh = function () {
        ((this.pagesMatrix = new ot(this.scroll)),
          this.checkSlideLoop(),
          (this.currentPage = this.getAdjustedCurrentPage()));
      }),
      (C.prototype.getAdjustedCurrentPage = function () {
        var e = this.currentPage,
          t = e.pageX,
          i = e.pageY,
          t = Math.min(t, this.pagesMatrix.pageLengthOfX - 1),
          i = Math.min(i, this.pagesMatrix.pageLengthOfY - 1);
        return {
          pageX: (t = this.loopX
            ? Math.min(t, this.pagesMatrix.pageLengthOfX - 2)
            : t),
          pageY: (i = this.loopY
            ? Math.min(i, this.pagesMatrix.pageLengthOfY - 2)
            : i),
          x: (e = this.pagesMatrix.getPageStats(t, i)).x,
          y: e.y,
        };
      }),
      (C.prototype.setCurrentPage = function (e) {
        this.currentPage = e;
      }),
      (C.prototype.getInternalPage = function (e, t) {
        (e >= this.pagesMatrix.pageLengthOfX
          ? (e = this.pagesMatrix.pageLengthOfX - 1)
          : e < 0 && (e = 0),
          t >= this.pagesMatrix.pageLengthOfY
            ? (t = this.pagesMatrix.pageLengthOfY - 1)
            : t < 0 && (t = 0));
        var i = this.pagesMatrix.getPageStats(e, t);
        return { pageX: e, pageY: t, x: i.x, y: i.y };
      }),
      (C.prototype.getInitialPage = function (e, t) {
        var i = (a = this.slideOptions).startPageXIndex,
          s = a.startPageYIndex,
          o = this.loopX ? 1 : 0,
          n = this.loopY ? 1 : 0,
          r = (e = void 0 !== e && e) ? o : this.currentPage.pageX,
          a =
            (e || this.currentPage.pageY,
            (t = void 0 !== t && t)
              ? ((r = this.loopX ? i + 1 : i), this.loopY ? s + 1 : s)
              : ((r = e ? o : this.currentPage.pageX),
                e ? n : this.currentPage.pageY));
        return {
          pageX: r,
          pageY: a,
          x: (n = this.pagesMatrix.getPageStats(r, a)).x,
          y: n.y,
        };
      }),
      (C.prototype.getExposedPage = function (e) {
        return (
          (e = r({}, e)),
          this.loopX &&
            (e.pageX = this.fixedPage(
              e.pageX,
              this.pagesMatrix.pageLengthOfX - 2,
            )),
          this.loopY &&
            (e.pageY = this.fixedPage(
              e.pageY,
              this.pagesMatrix.pageLengthOfY - 2,
            )),
          e
        );
      }),
      (C.prototype.getExposedPageByPageIndex = function (e, t) {
        var i = { pageX: e, pageY: t };
        return (
          this.loopX && (i.pageX = e + 1),
          this.loopY && (i.pageY = t + 1),
          {
            x: (i = this.pagesMatrix.getPageStats(i.pageX, i.pageY)).x,
            y: i.y,
            pageX: e,
            pageY: t,
          }
        );
      }),
      (C.prototype.getWillChangedPage = function (e) {
        return (
          (e = r({}, e)),
          this.loopX &&
            ((e.pageX = this.fixedPage(
              e.pageX,
              this.pagesMatrix.pageLengthOfX - 2,
            )),
            (e.x = this.pagesMatrix.getPageStats(e.pageX + 1, 0).x)),
          this.loopY &&
            ((e.pageY = this.fixedPage(
              e.pageY,
              this.pagesMatrix.pageLengthOfY - 2,
            )),
            (e.y = this.pagesMatrix.getPageStats(0, e.pageY + 1).y)),
          e
        );
      }),
      (C.prototype.fixedPage = function (e, t) {
        for (var i = [], s = 0; s < t; s++) i.push(s);
        return (i.unshift(t - 1), i.push(0), i[e]);
      }),
      (C.prototype.getPageStats = function () {
        return this.pagesMatrix.getPageStats(
          this.currentPage.pageX,
          this.currentPage.pageY,
        );
      }),
      (C.prototype.getValidPageIndex = function (e, t) {
        var i = this.pagesMatrix.pageLengthOfX - 1,
          s = this.pagesMatrix.pageLengthOfY - 1,
          o = 0,
          n = 0;
        return (
          this.loopX && ((e += 1), (o += 1), --i),
          this.loopY && ((t += 1), (n += 1), --s),
          { pageX: (e = f(e, o, i)), pageY: (t = f(t, n, s)) }
        );
      }),
      (C.prototype.nextPageIndex = function () {
        return this.getPageIndexByDirection("positive");
      }),
      (C.prototype.prevPageIndex = function () {
        return this.getPageIndexByDirection("negative");
      }),
      (C.prototype.getNearestPage = function (e, t) {
        return (
          (t = (e = this.pagesMatrix.getNearestPageIndex(e, t)).pageX),
          (e = e.pageY),
          {
            x: this.pagesMatrix.getPageStats(t, 0).x,
            y: this.pagesMatrix.getPageStats(0, e).y,
            pageX: t,
            pageY: e,
          }
        );
      }),
      (C.prototype.getPageByDirection = function (e, t, i) {
        var s = e.pageX,
          e = e.pageY;
        return (
          s === this.currentPage.pageX &&
            (s = f(s + t, 0, this.pagesMatrix.pageLengthOfX - 1)),
          e === this.currentPage.pageY &&
            (e = f(e + i, 0, this.pagesMatrix.pageLengthOfY - 1)),
          {
            x: this.pagesMatrix.getPageStats(s, 0).x,
            y: this.pagesMatrix.getPageStats(0, e).y,
            pageX: s,
            pageY: e,
          }
        );
      }),
      (C.prototype.resetLoopPage = function () {
        if (this.loopX) {
          if (0 === this.currentPage.pageX)
            return {
              pageX: this.pagesMatrix.pageLengthOfX - 2,
              pageY: this.currentPage.pageY,
            };
          if (this.currentPage.pageX === this.pagesMatrix.pageLengthOfX - 1)
            return { pageX: 1, pageY: this.currentPage.pageY };
        }
        if (this.loopY)
          return 0 === this.currentPage.pageY
            ? {
                pageX: this.currentPage.pageX,
                pageY: this.pagesMatrix.pageLengthOfY - 2,
              }
            : this.currentPage.pageY === this.pagesMatrix.pageLengthOfY - 1
              ? { pageX: this.currentPage.pageX, pageY: 1 }
              : void 0;
      }),
      (C.prototype.getPageIndexByDirection = function (e) {
        var t = this.currentPage.pageX,
          i = this.currentPage.pageY;
        return {
          pageX: this.slideX ? ("negative" === e ? t - 1 : t + 1) : t,
          pageY: this.slideY ? ("negative" === e ? i - 1 : i + 1) : i,
        };
      }),
      (C.prototype.checkSlideLoop = function () {
        ((this.wannaLoop = this.slideOptions.loop),
          1 < this.pagesMatrix.pageLengthOfX
            ? (this.slideX = !0)
            : (this.slideX = !1),
          this.pagesMatrix.pages[0] && 1 < this.pagesMatrix.pageLengthOfY
            ? (this.slideY = !0)
            : (this.slideY = !1),
          (this.loopX = this.wannaLoop && this.slideX),
          (this.loopY = this.wannaLoop && this.slideY),
          this.slideX &&
            this.slideY &&
            s("slide does not support two direction at the same time."));
      }),
      C);
  function C(e, t) {
    ((this.scroll = e),
      (this.slideOptions = t),
      (this.slideX = !1),
      (this.slideY = !1),
      (this.currentPage = r({}, rt)));
  }
  var lt = [
      { key: "next", name: "next" },
      { key: "prev", name: "prev" },
      { key: "goToPage", name: "goToPage" },
      { key: "getCurrentPage", name: "getCurrentPage" },
      { key: "startPlay", name: "startPlay" },
      { key: "pausePlay", name: "pausePlay" },
    ].map(function (e) {
      return { key: e.key, sourceKey: "plugins.slide." + e.name };
    }),
    se =
      ((P.prototype.satisfyInitialization = function () {
        return !(
          this.scroll.scroller.content.children.length <= 0 &&
          (s(
            "slide need at least one slide page to be initialised.please check your DOM layout.",
          ),
          1)
        );
      }),
      (P.prototype.init = function () {
        ((this.willChangeToPage = r({}, rt)),
          this.handleBScroll(),
          this.handleOptions(),
          this.handleHooks(),
          this.createPages());
      }),
      (P.prototype.createPages = function () {
        this.pages = new at(this.scroll, this.options);
      }),
      (P.prototype.handleBScroll = function () {
        (this.scroll.registerType(["slideWillChange", "slidePageChanged"]),
          this.scroll.proxy(lt));
      }),
      (P.prototype.handleOptions = function () {
        var e =
          !0 === this.scroll.options.slide ? {} : this.scroll.options.slide;
        this.options = r(
          {
            loop: !0,
            threshold: 0.1,
            speed: 400,
            easing: m.bounce,
            listenFlick: !0,
            autoplay: !0,
            interval: 3e3,
            startPageXIndex: 0,
            startPageYIndex: 0,
          },
          e,
        );
      }),
      (P.prototype.handleLoop = function (e) {
        var t = this.options.loop,
          i = this.scroll.scroller.content,
          s = i.children.length;
        t &&
          (i !== e
            ? (this.resetLoopChangedStatus(),
              this.removeClonedSlidePage(e),
              1 < s && this.cloneFirstAndLastSlidePage(i))
            : 3 === s && this.initialised
              ? (this.removeClonedSlidePage(i),
                (this.moreToOnePageInLoop = !0),
                (this.oneToMorePagesInLoop = !1))
              : 1 < s
                ? (this.initialised && 0 === this.cachedClonedPageDOM.length
                    ? ((this.oneToMorePagesInLoop = !0),
                      (this.moreToOnePageInLoop = !1))
                    : (this.removeClonedSlidePage(i),
                      this.resetLoopChangedStatus()),
                  this.cloneFirstAndLastSlidePage(i))
                : this.resetLoopChangedStatus());
      }),
      (P.prototype.resetLoopChangedStatus = function () {
        ((this.moreToOnePageInLoop = !1), (this.oneToMorePagesInLoop = !1));
      }),
      (P.prototype.handleHooks = function () {
        var t = this,
          e = this.scroll.hooks,
          i = this.scroll.scroller.hooks,
          s = this.options.listenFlick;
        ((this.prevContent = this.scroll.scroller.content),
          (this.hooksFn = []),
          this.registerHooks(
            this.scroll,
            this.scroll.eventTypes.beforeScrollStart,
            this.pausePlay,
          ),
          this.registerHooks(
            this.scroll,
            this.scroll.eventTypes.scrollEnd,
            this.modifyCurrentPage,
          ),
          this.registerHooks(
            this.scroll,
            this.scroll.eventTypes.scrollEnd,
            this.startPlay,
          ),
          this.scroll.eventTypes.mousewheelMove &&
            (this.registerHooks(
              this.scroll,
              this.scroll.eventTypes.mousewheelMove,
              function () {
                return !0;
              },
            ),
            this.registerHooks(
              this.scroll,
              this.scroll.eventTypes.mousewheelEnd,
              function (e) {
                ((1 !== e.directionX && 1 !== e.directionY) || t.next(),
                  (-1 !== e.directionX && -1 !== e.directionY) || t.prev());
              },
            )),
          this.registerHooks(e, e.eventTypes.refresh, this.refreshHandler),
          this.registerHooks(e, e.eventTypes.destroy, this.destroy),
          this.registerHooks(i, i.eventTypes.beforeRefresh, function () {
            (t.handleLoop(t.prevContent), t.setSlideInlineStyle());
          }),
          this.registerHooks(
            i,
            i.eventTypes.momentum,
            this.modifyScrollMetaHandler,
          ),
          this.registerHooks(i, i.eventTypes.scroll, this.scrollHandler),
          this.registerHooks(i, i.eventTypes.checkClick, this.startPlay),
          s && this.registerHooks(i, i.eventTypes.flick, this.flickHandler));
      }),
      (P.prototype.startPlay = function () {
        var e = this,
          t = this.options,
          i = t.interval;
        t.autoplay &&
          (clearTimeout(this.autoplayTimer),
          (this.autoplayTimer = window.setTimeout(function () {
            e.next();
          }, i)));
      }),
      (P.prototype.pausePlay = function () {
        this.options.autoplay && clearTimeout(this.autoplayTimer);
      }),
      (P.prototype.setSlideInlineStyle = function () {
        var e = this.scroll.scroller,
          l = e.content,
          h = e.wrapper,
          c = this.scroll.options;
        [
          { direction: "scrollX", sizeType: "offsetWidth", styleType: "width" },
          {
            direction: "scrollY",
            sizeType: "offsetHeight",
            styleType: "height",
          },
        ].forEach(function (e) {
          var t = e.direction,
            i = e.sizeType,
            s = e.styleType;
          if (c[t]) {
            for (var o = h[i], n = l.children, r = n.length, a = 0; a < r; a++)
              n[a].style[s] = o + "px";
            l.style[s] = o * r + "px";
          }
        });
      }),
      (P.prototype.next = function (e, t) {
        var i = (s = this.pages.nextPageIndex()).pageX,
          s = s.pageY;
        this.goTo(i, s, e, t);
      }),
      (P.prototype.prev = function (e, t) {
        var i = (s = this.pages.prevPageIndex()).pageX,
          s = s.pageY;
        this.goTo(i, s, e, t);
      }),
      (P.prototype.goToPage = function (e, t, i, s) {
        ((t = this.pages.getValidPageIndex(e, t)),
          this.goTo(t.pageX, t.pageY, i, s));
      }),
      (P.prototype.getCurrentPage = function () {
        return this.exposedPage || this.pages.getInitialPage(!1, !0);
      }),
      (P.prototype.setCurrentPage = function (e) {
        (this.pages.setCurrentPage(e),
          (this.exposedPage = this.pages.getExposedPage(e)));
      }),
      (P.prototype.nearestPage = function (e, t) {
        var i = (n = this.scroll.scroller).scrollBehaviorX,
          s = n.scrollBehaviorY,
          o = i.maxScrollPos,
          n = i.minScrollPos,
          i = s.maxScrollPos,
          s = s.minScrollPos;
        return this.pages.getNearestPage(f(e, o, n), f(t, i, s));
      }),
      (P.prototype.satisfyThreshold = function (e, t) {
        var i = (o = this.scroll.scroller).scrollBehaviorX,
          s = o.scrollBehaviorY,
          o = !0;
        return !(
          Math.abs(e - i.absStartPos) <= this.thresholdX &&
          Math.abs(t - s.absStartPos) <= this.thresholdY
        );
      }),
      (P.prototype.refreshHandler = function (e) {
        var t,
          i,
          s = this;
        this.satisfyInitialization() &&
          (this.pages.refresh(),
          this.computeThreshold(),
          (t = this.contentChanged = this.prevContent !== e) &&
            (this.prevContent = e),
          (i = this.pages.getInitialPage(
            this.oneToMorePagesInLoop || this.moreToOnePageInLoop,
            t || !this.initialised,
          )),
          this.initialised
            ? this.goTo(i.pageX, i.pageY, 0)
            : this.registerHooks(
                this.scroll.hooks,
                this.scroll.hooks.eventTypes.beforeInitialScrollTo,
                function (e) {
                  ((s.initialised = !0), (e.x = i.x), (e.y = i.y));
                },
              ),
          this.startPlay());
      }),
      (P.prototype.computeThreshold = function () {
        var e,
          t,
          i = this.options.threshold;
        i % 1 == 0
          ? ((this.thresholdX = i), (this.thresholdY = i))
          : ((e = (t = this.pages.getPageStats()).width),
            (t = t.height),
            (this.thresholdX = Math.round(e * i)),
            (this.thresholdY = Math.round(t * i)));
      }),
      (P.prototype.cloneFirstAndLastSlidePage = function (e) {
        var t,
          i = e.children,
          s = i[i.length - 1].cloneNode(!0),
          o = i[0].cloneNode(!0),
          n = s;
        ((i = (t = e).firstChild)
          ? i.parentNode.insertBefore(n, i)
          : t.appendChild(n),
          e.appendChild(o),
          (this.cachedClonedPageDOM = [s, o]));
      }),
      (P.prototype.removeClonedSlidePage = function (t) {
        (((t && t.children) || []).length &&
          this.cachedClonedPageDOM.forEach(function (e) {
            t.removeChild(e);
          }),
          (this.cachedClonedPageDOM = []));
      }),
      (P.prototype.modifyCurrentPage = function (e) {
        var t,
          i = this.getCurrentPage(),
          s = i.pageX,
          o = i.pageY,
          n = this.nearestPage(e.x, e.y);
        return (
          this.setCurrentPage(n),
          this.contentChanged
            ? !(this.contentChanged = !1)
            : ((e = (i = this.getCurrentPage()).pageX),
              (i = i.pageY),
              this.pageWillChangeTo(n),
              this.oneToMorePagesInLoop
                ? !(this.oneToMorePagesInLoop = !1)
                : this.moreToOnePageInLoop && 0 === s && 0 === o
                  ? !(this.moreToOnePageInLoop = !1)
                  : ((s === e && o === i) ||
                      ((t = this.pages.getExposedPageByPageIndex(e, i)),
                      this.scroll.trigger(
                        this.scroll.eventTypes.slidePageChanged,
                        t,
                      )),
                    this.resetLooping
                      ? void (this.resetLooping = !1)
                      : (t = this.pages.resetLoopPage())
                        ? ((this.resetLooping = !0),
                          this.goTo(t.pageX, t.pageY, 0),
                          !0)
                        : void 0))
        );
      }),
      (P.prototype.goTo = function (e, t, i, s) {
        var o = this.pages.getInternalPage(e, t),
          n = s || this.options.easing || m.bounce,
          e = o.x,
          t = o.y,
          s = e - this.scroll.scroller.scrollBehaviorX.currentPos,
          o = t - this.scroll.scroller.scrollBehaviorY.currentPos;
        s || o
          ? ((i = void 0 === i ? this.getEaseTime(s, o) : i),
            this.scroll.scroller.scrollTo(e, t, i, n))
          : this.scroll.scroller.togglePointerEvents(!0);
      }),
      (P.prototype.flickHandler = function () {
        var e = (a = this.scroll.scroller).scrollBehaviorX,
          t = a.scrollBehaviorY,
          i = e.currentPos,
          s = e.startPos,
          o = e.direction,
          n = t.currentPos,
          r = t.startPos,
          a = t.direction,
          t = (e = this.pages.currentPage).pageX,
          e = e.pageY,
          r = this.getEaseTime(i - s, n - r);
        this.goTo(t + o, e + a, r);
      }),
      (P.prototype.getEaseTime = function (e, t) {
        return (
          this.options.speed ||
          Math.max(
            Math.max(Math.min(Math.abs(e), 1e3), Math.min(Math.abs(t), 1e3)),
            300,
          )
        );
      }),
      (P.prototype.modifyScrollMetaHandler = function (e) {
        var t = (n = this.scroll.scroller).scrollBehaviorX,
          i = n.scrollBehaviorY,
          s = n.animater,
          o = e.newX,
          n = e.newY,
          i =
            this.satisfyThreshold(o, n) || s.forceStopped
              ? this.pages.getPageByDirection(
                  this.nearestPage(o, n),
                  t.direction,
                  i.direction,
                )
              : this.pages.currentPage;
        ((e.time = this.getEaseTime(e.newX - i.x, e.newY - i.y)),
          (e.newX = i.x),
          (e.newY = i.y),
          (e.easing = this.options.easing || m.bounce));
      }),
      (P.prototype.scrollHandler = function (e) {
        var t = e.x,
          e = e.y;
        this.satisfyThreshold(t, e) &&
          ((e = this.nearestPage(t, e)), this.pageWillChangeTo(e));
      }),
      (P.prototype.pageWillChangeTo = function (e) {
        var t = this.pages.getWillChangedPage(e),
          i = this.willChangeToPage;
        (i.pageX === (e = t).pageX && i.pageY === e.pageY) ||
          ((this.willChangeToPage = t),
          this.scroll.trigger(
            this.scroll.eventTypes.slideWillChange,
            this.willChangeToPage,
          ));
      }),
      (P.prototype.registerHooks = function (e, t, i) {
        (e.on(t, i, this), this.hooksFn.push([e, t, i]));
      }),
      (P.prototype.destroy = function () {
        var e = this.scroll.scroller.content,
          t = (i = this.options).loop,
          i = i.autoplay;
        (t && this.removeClonedSlidePage(e),
          i && clearTimeout(this.autoplayTimer),
          this.hooksFn.forEach(function (e) {
            var t = e[0],
              i = e[1],
              e = e[2];
            t.eventTypes[i] && t.off(i, e);
          }),
          (this.hooksFn.length = 0));
      }),
      (P.pluginName = "slide"),
      P);
  function P(e) {
    ((this.scroll = e),
      (this.cachedClonedPageDOM = []),
      (this.resetLooping = !1),
      (this.autoplayTimer = 0),
      this.satisfyInitialization() && this.init());
  }
  var ht = [
      { key: "wheelTo", name: "wheelTo" },
      { key: "getSelectedIndex", name: "getSelectedIndex" },
      { key: "restorePosition", name: "restorePosition" },
    ].map(function (e) {
      return { key: e.key, sourceKey: "plugins.wheel." + e.name };
    }),
    ct = "wheelIndexChanged",
    n =
      ((M.prototype.init = function () {
        (this.handleBScroll(),
          this.handleOptions(),
          this.handleHooks(),
          this.refreshBoundary(),
          this.setSelectedIndex(this.options.selectedIndex));
      }),
      (M.prototype.handleBScroll = function () {
        (this.scroll.proxy(ht), this.scroll.registerType([ct]));
      }),
      (M.prototype.handleOptions = function () {
        var e =
          !0 === this.scroll.options.wheel ? {} : this.scroll.options.wheel;
        this.options = r(
          {
            wheelWrapperClass: "wheel-scroll",
            wheelItemClass: "wheel-item",
            rotate: 25,
            adjustTime: 400,
            selectedIndex: 0,
            wheelDisabledItemClass: "wheel-disabled-item",
          },
          e,
        );
      }),
      (M.prototype.handleHooks = function () {
        var i = this,
          e = this.scroll,
          t = this.scroll.scroller,
          s = t.actionsHandler,
          o = t.scrollBehaviorX,
          n = t.scrollBehaviorY,
          r = t.animater,
          a = t.content;
        (e.on(e.eventTypes.scrollEnd, function (e) {
          if (
            ((e = i.findNearestValidWheel(e.y).index),
            t.animater.forceStopped && !i.isAdjustingPosition)
          )
            return ((i.target = i.items[e]), !0);
          (i.setSelectedIndex(e),
            i.isAdjustingPosition && (i.isAdjustingPosition = !1));
        }),
          this.scroll.hooks.on(
            this.scroll.hooks.eventTypes.refresh,
            function (e) {
              (e !== a &&
                ((a = e), i.setSelectedIndex(i.options.selectedIndex, !0)),
                i.rotateX(i.scroll.y),
                i.wheelTo(i.selectedIndex, 0));
            },
          ),
          this.scroll.hooks.on(
            this.scroll.hooks.eventTypes.beforeInitialScrollTo,
            function (e) {
              ((e.x = 0), (e.y = -(i.selectedIndex * i.itemHeight)));
            },
          ),
          t.hooks.on(t.hooks.eventTypes.checkClick, function () {
            e = i.items;
            var e = Array.prototype.slice.call(e, 0).indexOf(i.target);
            return (
              -1 !== e && i.wheelTo(e, i.options.adjustTime, m.swipe),
              !0
            );
          }),
          t.hooks.on(t.hooks.eventTypes.scrollTo, function (e) {
            e.y = i.findNearestValidWheel(e.y).y;
          }),
          t.hooks.on(t.hooks.eventTypes.minDistanceScroll, function () {
            var e = t.animater;
            !0 === e.forceStopped && (e.forceStopped = !1);
          }),
          t.hooks.on(t.hooks.eventTypes.scrollToElement, function (e, t) {
            return (
              !pe(e, i.options.wheelItemClass) ||
              void (t.top = i.findNearestValidWheel(t.top).y)
            );
          }),
          s.hooks.on(s.hooks.eventTypes.beforeStart, function (e) {
            i.target = e.target;
          }),
          o.hooks.on(o.hooks.eventTypes.computeBoundary, function (e) {
            ((e.maxScrollPos = 0), (e.minScrollPos = 0));
          }),
          n.hooks.on(n.hooks.eventTypes.computeBoundary, function (e) {
            ((i.items = i.scroll.scroller.content.children),
              i.checkWheelAllDisabled(),
              (i.itemHeight =
                0 < i.items.length ? n.contentSize / i.items.length : 0),
              (e.maxScrollPos = -i.itemHeight * (i.items.length - 1)),
              (e.minScrollPos = 0));
          }),
          n.hooks.on(n.hooks.eventTypes.momentum, function (e) {
            ((e.rate = 4),
              (e.destination = i.findNearestValidWheel(e.destination).y));
          }),
          n.hooks.on(n.hooks.eventTypes.end, function (e) {
            var t = i.findNearestValidWheel(n.currentPos);
            ((e.destination = t.y), (e.duration = i.options.adjustTime));
          }),
          r.hooks.on(r.hooks.eventTypes.time, function (e) {
            i.transitionDuration(e);
          }),
          r.hooks.on(r.hooks.eventTypes.timeFunction, function (e) {
            i.timeFunction(e);
          }),
          r.hooks.on(r.hooks.eventTypes.callStop, function () {
            var e = i.findNearestValidWheel(i.scroll.y).index;
            ((i.isAdjustingPosition = !0), i.wheelTo(e, 0));
          }),
          r.translater.hooks.on(
            r.translater.hooks.eventTypes.translate,
            function (e) {
              i.rotateX(e.y);
            },
          ));
      }),
      (M.prototype.refreshBoundary = function () {
        var e = (i = this.scroll.scroller).scrollBehaviorX,
          t = i.scrollBehaviorY,
          i = i.content;
        (e.refresh(i), t.refresh(i));
      }),
      (M.prototype.setSelectedIndex = function (e, t) {
        (void 0 === t && (t = !1),
          this.selectedIndex === (this.selectedIndex = e) ||
            t ||
            this.scroll.trigger(ct, e));
      }),
      (M.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
      }),
      (M.prototype.wheelTo = function (e, t, i) {
        ((e = -(e = void 0 === e ? 0 : e) * this.itemHeight),
          this.scroll.scrollTo(0, e, (t = void 0 === t ? 0 : t), i));
      }),
      (M.prototype.restorePosition = function () {
        var e;
        this.scroll.pending &&
          ((e = this.getSelectedIndex()),
          this.scroll.scroller.animater.clearTimer(),
          this.wheelTo(e, 0));
      }),
      (M.prototype.transitionDuration = function (e) {
        for (var t = 0; t < this.items.length; t++)
          this.items[t].style[d.transitionDuration] = e + "ms";
      }),
      (M.prototype.timeFunction = function (e) {
        for (var t = 0; t < this.items.length; t++)
          this.items[t].style[d.transitionTimingFunction] = e;
      }),
      (M.prototype.rotateX = function (e) {
        for (
          var t = this.options.rotate, i = void 0 === t ? 25 : t, s = 0;
          s < this.items.length;
          s++
        ) {
          var o = (i * (e / this.itemHeight + s)).toFixed(3);
          this.items[s].style[d.transform] = "rotateX(" + o + "deg)";
        }
      }),
      (M.prototype.findNearestValidWheel = function (e) {
        e = 0 < e ? 0 : e < this.scroll.maxScrollY ? this.scroll.maxScrollY : e;
        for (
          var t = Math.abs(Math.round(-e / this.itemHeight)),
            e = t,
            i = this.items,
            s = this.options.wheelDisabledItemClass;
          0 <= t && pe(i[t], s);
        )
          t--;
        if (t < 0) for (t = e; t <= i.length - 1 && pe(i[t], s);) t++;
        return (
          t === i.length && (t = e),
          {
            index: this.wheelItemsAllDisabled ? -1 : t,
            y: -t * this.itemHeight,
          }
        );
      }),
      (M.prototype.checkWheelAllDisabled = function () {
        var e = this.options.wheelDisabledItemClass,
          t = this.items;
        this.wheelItemsAllDisabled = !0;
        for (var i = 0; i < t.length; i++)
          if (!pe(t[i], e)) {
            this.wheelItemsAllDisabled = !1;
            break;
          }
      }),
      (M.pluginName = "wheel"),
      M);
  function M(e) {
    ((this.scroll = e), this.init());
  }
  var dt = [{ key: "zoomTo", name: "zoomTo" }].map(function (e) {
      return { key: e.key, sourceKey: "plugins.zoom." + e.name };
    }),
    pt =
      ((z.prototype.init = function () {
        (this.handleBScroll(),
          this.handleOptions(),
          this.handleHooks(),
          this.tryInitialZoomTo(this.zoomOpt));
      }),
      (z.prototype.zoomTo = function (e, t, i, s) {
        ((i = {
          x: (i = this.resolveOrigin(t, i)).originX,
          y: i.originY,
          baseScale: this.scale,
        }),
          this._doZoomTo(e, i, s, !0));
      }),
      (z.prototype.handleBScroll = function () {
        (this.scroll.proxy(dt),
          this.scroll.registerType([
            "beforeZoomStart",
            "zoomStart",
            "zooming",
            "zoomEnd",
          ]));
      }),
      (z.prototype.handleOptions = function () {
        var e = !0 === this.scroll.options.zoom ? {} : this.scroll.options.zoom;
        this.zoomOpt = r(
          {
            start: 1,
            min: 1,
            max: 4,
            initialOrigin: [0, 0],
            minimalZoomDistance: 5,
            bounceTime: 800,
          },
          e,
        );
      }),
      (z.prototype.handleHooks = function () {
        var i = this,
          e = this.scroll,
          t = this.scroll.scroller,
          s =
            ((this.wrapper = this.scroll.scroller.wrapper),
            this.setTransformOrigin(this.scroll.scroller.content),
            t.scrollBehaviorX),
          o = t.scrollBehaviorY;
        ((this.hooksFn = []),
          this.registerHooks(
            e.hooks,
            e.hooks.eventTypes.contentChanged,
            function (e) {
              (i.setTransformOrigin(e),
                (i.scale = 1),
                i.tryInitialZoomTo(i.zoomOpt));
            },
          ),
          this.registerHooks(
            e.hooks,
            e.hooks.eventTypes.beforeInitialScrollTo,
            function () {
              if (1 !== i.zoomOpt.start) return !0;
            },
          ),
          this.registerHooks(
            s.hooks,
            s.hooks.eventTypes.beforeComputeBoundary,
            function () {
              var e = le(i.scroll.scroller.content);
              s.contentSize = Math.floor(e.width * i.scale);
            },
          ),
          this.registerHooks(
            o.hooks,
            o.hooks.eventTypes.beforeComputeBoundary,
            function () {
              var e = le(i.scroll.scroller.content);
              o.contentSize = Math.floor(e.height * i.scale);
            },
          ),
          this.registerHooks(
            t.actions.hooks,
            t.actions.hooks.eventTypes.start,
            function (e) {
              var t = (e.touches && e.touches.length) || 0;
              (i.fingersOperation(t), 2 === t && i.zoomStart(e));
            },
          ),
          this.registerHooks(
            t.actions.hooks,
            t.actions.hooks.eventTypes.beforeMove,
            function (e) {
              var t = (e.touches && e.touches.length) || 0;
              if ((i.fingersOperation(t), 2 === t)) return (i.zoom(e), !0);
            },
          ),
          this.registerHooks(
            t.actions.hooks,
            t.actions.hooks.eventTypes.beforeEnd,
            function (e) {
              if (2 === i.fingersOperation()) return (i.zoomEnd(), !0);
            },
          ),
          this.registerHooks(
            t.translater.hooks,
            t.translater.hooks.eventTypes.beforeTranslate,
            function (e, t) {
              ((t = t.scale || i.prevScale),
                (i.prevScale = t),
                e.push("scale(" + t + ")"));
            },
          ),
          this.registerHooks(
            t.hooks,
            t.hooks.eventTypes.scrollEnd,
            function () {
              2 === i.fingersOperation() &&
                i.scroll.trigger(i.scroll.eventTypes.zoomEnd, {
                  scale: i.scale,
                });
            },
          ),
          this.registerHooks(this.scroll.hooks, "destroy", this.destroy));
      }),
      (z.prototype.setTransformOrigin = function (e) {
        e.style[d.transformOrigin] = "0 0";
      }),
      (z.prototype.tryInitialZoomTo = function (e) {
        var t = e.start,
          i = e.initialOrigin,
          e = (s = this.scroll.scroller).scrollBehaviorX,
          s = s.scrollBehaviorY;
        1 !== t &&
          (this.resetBoundaries([e, s]), this.zoomTo(t, i[0], i[1], 0));
      }),
      (z.prototype.fingersOperation = function (e) {
        if ("number" != typeof e) return this.numberOfFingers;
        this.numberOfFingers = e;
      }),
      (z.prototype._doZoomTo = function (e, t, i, s) {
        var o = this;
        (void 0 === i && (i = this.zoomOpt.bounceTime),
          void 0 === s && (s = !1));
        var n,
          r,
          a,
          l,
          h = (c = this.zoomOpt).min,
          c = c.max,
          d = this.scale,
          p = f(e, h, c);
        (0 !== i
          ? 0 < i &&
            ((r = u()),
            (a = r + i),
            (l = function () {
              var e = u();
              a <= e
                ? (o.scroll.trigger(o.scroll.eventTypes.zooming, { scale: p }),
                  g(n))
                : ((e = m.bounce.fn((e - r) / i)),
                  o.scroll.trigger(o.scroll.eventTypes.zooming, {
                    scale: e * (p - d) + d,
                  }),
                  (n = fe(l)));
            })())
          : o.scroll.trigger(o.scroll.eventTypes.zooming, { scale: p }),
          this.fingersOperation(2),
          this._zoomTo(p, d, t, i, s));
      }),
      (z.prototype._zoomTo = function (e, t, i, s, o) {
        void 0 === o && (o = !1);
        var n = e / i.baseScale,
          r = (this.setScale(e), this.scroll.scroller),
          a = r.scrollBehaviorX,
          l = r.scrollBehaviorY,
          h = (this.resetBoundaries([a, l]), this.getNewPos(i.x, n, a, !0, o)),
          o = this.getNewPos(i.y, n, l, !0, o);
        (a.currentPos === Math.round(h) &&
          l.currentPos === Math.round(o) &&
          e === t) ||
          r.scrollTo(h, o, s, m.bounce, {
            start: { scale: t },
            end: { scale: e },
          });
      }),
      (z.prototype.resolveOrigin = function (e, t) {
        var i = (o = this.scroll.scroller).scrollBehaviorX,
          s = o.scrollBehaviorY,
          o = {
            left: function () {
              return 0;
            },
            top: function () {
              return 0;
            },
            right: function () {
              return i.contentSize;
            },
            bottom: function () {
              return s.contentSize;
            },
            center: function (e) {
              return (0 === e ? i : s).contentSize / 2;
            },
          };
        return {
          originX: "number" == typeof e ? e : o[e](0),
          originY: "number" == typeof t ? t : o[t](1),
        };
      }),
      (z.prototype.zoomStart = function (e) {
        var t = e.touches[0],
          i = e.touches[1];
        ((this.startDistance = this.getFingerDistance(e)),
          (this.startScale = this.scale));
        var s = (e = {
            left: -(
              (s = (s = this.wrapper).getBoundingClientRect()).left +
              window.pageXOffset
            ),
            top: -(s.top + window.pageYOffset),
          }).left,
          e = e.top;
        ((this.origin = {
          x: Math.abs(t.pageX + i.pageX) / 2 + s - this.scroll.x,
          y: Math.abs(t.pageY + i.pageY) / 2 + e - this.scroll.y,
          baseScale: this.startScale,
        }),
          this.scroll.trigger(this.scroll.eventTypes.beforeZoomStart));
      }),
      (z.prototype.zoom = function (e) {
        var t,
          i,
          s,
          o = this.getFingerDistance(e);
        (!this.zoomed &&
          Math.abs(o - this.startDistance) <
            this.zoomOpt.minimalZoomDistance) ||
          ((i =
            (t = this.dampingScale(
              (o / this.startDistance) * this.startScale,
            )) / this.startScale),
          this.setScale(t),
          this.zoomed ||
            ((this.zoomed = !0),
            this.scroll.trigger(this.scroll.eventTypes.zoomStart)),
          (e = (s = this.scroll.scroller).scrollBehaviorX),
          (o = s.scrollBehaviorY),
          (e = this.getNewPos(this.origin.x, i, e, !1, !1)),
          (o = this.getNewPos(this.origin.y, i, o, !1, !1)),
          this.scroll.trigger(this.scroll.eventTypes.zooming, {
            scale: this.scale,
          }),
          s.translater.translate({ x: e, y: o, scale: t }));
      }),
      (z.prototype.zoomEnd = function () {
        this.zoomed &&
          (this.shouldRebound()
            ? this._doZoomTo(this.scale, this.origin, this.zoomOpt.bounceTime)
            : this.scroll.trigger(this.scroll.eventTypes.zoomEnd, {
                scale: this.scale,
              }));
      }),
      (z.prototype.getFingerDistance = function (e) {
        var t = e.touches[0],
          i = e.touches[1],
          e = Math.abs(t.pageX - i.pageX),
          i = Math.abs(t.pageY - i.pageY);
        return Math.sqrt(e * e + i * i);
      }),
      (z.prototype.shouldRebound = function () {
        var e = this.zoomOpt,
          t = e.min,
          i = e.max;
        return (
          (e = this.scale) !== f(e, t, i) ||
          ((i = (t = this.scroll.scroller).scrollBehaviorX),
          (t = t.scrollBehaviorY),
          this.resetBoundaries([i, t]),
          (t = i.checkInBoundary().inBoundary),
          (i = i.checkInBoundary().inBoundary),
          !(t && i))
        );
      }),
      (z.prototype.dampingScale = function (e) {
        var t = (i = this.zoomOpt).min,
          i = i.max;
        return (
          e < t
            ? (e = 0.5 * t * Math.pow(2, e / t))
            : i < e && (e = 2 * i * Math.pow(0.5, i / e)),
          e
        );
      }),
      (z.prototype.setScale = function (e) {
        this.scale = e;
      }),
      (z.prototype.resetBoundaries = function (e) {
        e.forEach(function (e) {
          return e.computeBoundary();
        });
      }),
      (z.prototype.getNewPos = function (e, t, i, s, o) {
        return (
          (o =
            e - e * t + ((o = void 0 !== o && o) ? i.currentPos : i.startPos)),
          0 < (o = s ? f(o, i.maxScrollPos, i.minScrollPos) : o)
            ? Math.floor(o)
            : Math.ceil(o)
        );
      }),
      (z.prototype.registerHooks = function (e, t, i) {
        (e.on(t, i, this), this.hooksFn.push([e, t, i]));
      }),
      (z.prototype.destroy = function () {
        (this.hooksFn.forEach(function (e) {
          var t = e[0],
            i = e[1],
            e = e[2];
          t.off(i, e);
        }),
          (this.hooksFn.length = 0));
      }),
      (z.pluginName = "zoom"),
      z);
  function z(e) {
    ((this.scroll = e), (this.scale = 1), (this.prevScale = 1), this.init());
  }
  ((D.create = function (e) {
    return new D(e);
  }),
    (D.prototype.hasAncestors = function (t) {
      return (
        -1 <
        K(this.ancestors, function (e) {
          return e[0] === t;
        })
      );
    }),
    (D.prototype.hasDescendants = function (t) {
      return (
        -1 <
        K(this.descendants, function (e) {
          return e[0] === t;
        })
      );
    }),
    (D.prototype.addAncestor = function (e, t) {
      var i = this.ancestors;
      (i.push([e, t]),
        i.sort(function (e, t) {
          return e[1] - t[1];
        }));
    }),
    (D.prototype.addDescendant = function (e, t) {
      var i = this.descendants;
      (i.push([e, t]),
        i.sort(function (e, t) {
          return e[1] - t[1];
        }));
    }),
    (D.prototype.removeAncestor = function (t) {
      var e = this.ancestors;
      if (e.length) {
        var i = K(this.ancestors, function (e) {
          return e[0] === t;
        });
        if (-1 < i) return e.splice(i, 1);
      }
    }),
    (D.prototype.removeDescendant = function (t) {
      var e = this.descendants;
      if (e.length) {
        var i = K(this.descendants, function (e) {
          return e[0] === t;
        });
        if (-1 < i) return e.splice(i, 1);
      }
    }),
    (D.prototype.registerHooks = function (e, t, i) {
      (e.on(t, i), this.hooksManager.push([e, t, i]));
    }),
    (D.prototype.setAnalyzed = function (e) {
      this.analyzed = e = void 0 !== e && e;
    }),
    (D.prototype.purge = function () {
      var t = this;
      (this.ancestors.forEach(function (e) {
        e[0].removeDescendant(t);
      }),
        this.descendants.forEach(function (e) {
          e[0].removeAncestor(t);
        }),
        this.hooksManager.forEach(function (e) {
          var t = e[0],
            i = e[1],
            e = e[2];
          t.off(i, e);
        }),
        (this.hooksManager = []));
    }));
  var ut = D;
  function D(e) {
    ((this.ancestors = []),
      (this.descendants = []),
      (this.hooksManager = []),
      (this.analyzed = !1),
      (this.selfScroll = e));
  }
  function ft(e) {
    e.forEach(function (e) {
      e.enable();
    });
  }
  function mt(e, t) {
    e.forEach(function (e) {
      (e.hasHorizontalScroll !== t.hasHorizontalScroll &&
        e.hasVerticalScroll !== t.hasVerticalScroll) ||
        e.disable();
    });
  }
  var gt = [{ key: "purgeNestedScroll", name: "purgeNestedScroll" }].map(
      function (e) {
        return { key: e.key, sourceKey: "plugins.nestedScroll." + e.name };
      },
    ),
    vt =
      ((L.getAllNestedScrolls = function () {
        var t = L.instancesMap;
        return Object.keys(t).map(function (e) {
          return t[e];
        });
      }),
      (L.purgeAllNestedScrolls = function () {
        L.getAllNestedScrolls().forEach(function (e) {
          return e.purgeNestedScroll();
        });
      }),
      (L.prototype.handleOptions = function (e) {
        return (
          (e = !0 === e.options.nestedScroll ? {} : e.options.nestedScroll),
          (this.options = r({ groupId: "INTERNAL_NESTED_SCROLL" }, e)),
          "string" != (e = typeof this.options.groupId) &&
            "number" != e &&
            s("groupId must be string or number for NestedScroll plugin"),
          this.options.groupId
        );
      }),
      (L.prototype.init = function (e) {
        (e.proxy(gt),
          this.addBScroll(e),
          this.buildBScrollGraph(),
          this.analyzeBScrollGraph(),
          this.ensureEventInvokeSequence(),
          this.handleHooks(e));
      }),
      (L.prototype.handleHooks = function (e) {
        var t = this;
        this.registerHooks(e.hooks, e.hooks.eventTypes.destroy, function () {
          t.deleteScroll(e);
        });
      }),
      (L.prototype.deleteScroll = function (t) {
        t.wrapper.isBScrollContainer = void 0;
        var e = this.store,
          i = this.hooksFn,
          s = K(e, function (e) {
            return e.selfScroll === t;
          });
        -1 < s && (e[s].purge(), e.splice(s, 1));
        var o,
          n = K(i, function (e) {
            return e[0] === t.hooks;
          });
        -1 < n &&
          ((e = (o = i[n])[0]),
          (s = o[1]),
          (o = o[2]),
          e.off(s, o),
          i.splice(n, 1));
      }),
      (L.prototype.addBScroll = function (e) {
        this.store.push(ut.create(e));
      }),
      (L.prototype.buildBScrollGraph = function () {
        for (var e, t = this.store, i = this.store.length, s = 0; s < i; s++)
          for (var o, n = (o = t[s]).selfScroll.wrapper, r = 0; r < i; r++) {
            var a = (e = t[r]).selfScroll.wrapper;
            o !== e &&
              n.contains(a) &&
              ((a = (function (e) {
                for (var t = 0, i = a.parentNode; i && i !== e;)
                  (t++, (i = i.parentNode));
                return t;
              })(n)),
              o.hasDescendants(e) || o.addDescendant(e, a),
              e.hasAncestors(o) || e.addAncestor(o, a));
          }
      }),
      (L.prototype.analyzeBScrollGraph = function () {
        this.store.forEach(function (e) {
          var u, c, f, t;
          e.analyzed ||
            ((u = e.ancestors),
            (c = e.descendants),
            (f = e.selfScroll),
            e.registerHooks(f, f.eventTypes.beforeScrollStart, function () {
              var e,
                t,
                i,
                s,
                o,
                n,
                r,
                a,
                l,
                h = u.map(function (e) {
                  return e[0].selfScroll;
                });
              ($(
                h,
                c.map(function (e) {
                  return e[0].selfScroll;
                }),
              ).forEach(function (e) {
                e.pending && (e.stop(), e.resetPosition());
              }),
                (t = (e = f).hasHorizontalScroll),
                (i = f.hasVerticalScroll),
                (s = f.x),
                (o = f.y),
                (n = f.minScrollX),
                (r = f.maxScrollX),
                (a = f.minScrollY),
                (l = f.maxScrollY),
                (e = !1),
                i ? (e = a < o || o < l) : t && (e = n < s || s < r),
                e && ((e = f).scroller.reflow(), e.resetPosition(0)),
                h.forEach(function (e) {
                  var t = (i = e.scroller).actions,
                    e = i.scrollBehaviorX,
                    i = i.scrollBehaviorY;
                  ((t.fingerMoved = !0),
                    (t.contentMoved = !1),
                    t.directionLockAction.reset(),
                    e.start(),
                    i.start(),
                    e.resetStartPos(),
                    i.resetStartPos(),
                    (t.startTime = +new Date()));
                }),
                mt(h, f));
            }),
            e.registerHooks(f, f.eventTypes.touchEnd, function () {
              ft(
                $(
                  u.map(function (e) {
                    return e[0].selfScroll;
                  }),
                  c.map(function (e) {
                    return e[0].selfScroll;
                  }),
                ),
              );
            }),
            (t = f.scroller.actions.hooks),
            e.registerHooks(t, t.eventTypes.detectMovingDirection, function () {
              var e,
                t,
                i,
                s,
                o,
                n,
                r,
                a,
                l = u.map(function (e) {
                  return e[0].selfScroll;
                }),
                h = l[0],
                c = l.slice(1),
                d = f.scroller.actions.contentMoved,
                p = 0 === l.length;
              if (d) mt(l, f);
              else if (
                !p &&
                ((t = (e = f).hasHorizontalScroll),
                (i = f.hasVerticalScroll),
                (s = f.x),
                (o = f.y),
                (n = f.minScrollX),
                (r = f.maxScrollX),
                (a = f.minScrollY),
                (d = f.maxScrollY),
                (l = f.movingDirectionX),
                (p = f.movingDirectionY),
                (e = !1),
                i
                  ? (e = (a <= o && -1 === p) || (o <= d && 1 === p))
                  : t && (e = (n <= s && -1 === l) || (s <= r && 1 === l)),
                e)
              )
                return (mt([f], f), h && ft([h]), mt(c, f), !0);
            }),
            e.setAnalyzed(!0));
        });
      }),
      (L.prototype.ensureEventInvokeSequence = function () {
        this.store
          .slice()
          .sort(function (e, t) {
            return e.descendants.length - t.descendants.length;
          })
          .forEach(function (e) {
            e.selfScroll.scroller.actionsHandler.rebindDOMEvents();
          });
      }),
      (L.prototype.registerHooks = function (e, t, i) {
        (e.on(t, i, this), this.hooksFn.push([e, t, i]));
      }),
      (L.prototype.purgeNestedScroll = function () {
        var e = this.options.groupId;
        (this.store.forEach(function (e) {
          e.purge();
        }),
          (this.store = []),
          this.hooksFn.forEach(function (e) {
            var t = e[0],
              i = e[1],
              e = e[2];
            t.off(i, e);
          }),
          (this.hooksFn = []),
          delete L.instancesMap[e]);
      }),
      (L.pluginName = "nestedScroll"),
      (L.instancesMap = {}),
      L);
  function L(e) {
    var t = this.handleOptions(e),
      i = L.instancesMap[t];
    return (
      i || (((i = L.instancesMap[t] = this).store = []), (i.hooksFn = [])),
      i.init(e),
      i
    );
  }
  ((bt.prototype.calculate = function (e, t) {
    var i = e - this.lastPos,
      s = ((this.lastPos = e), this.getDirection(i)),
      i = this.calculateIndex(0, e, t),
      t = this.calculateIndex(i, e + this.wrapperHeight, t);
    return (
      1 === s ? ((i -= 10), (t += 30)) : ((i -= 30), (t += 10)),
      { start: (i = i < 0 ? 0 : i), end: t }
    );
  }),
    (bt.prototype.getDirection = function (e) {
      var t;
      if (0 < e) t = 1;
      else {
        if (!(e < 0)) return this.lastDirection;
        t = 0;
      }
      return (this.lastDirection = t);
    }),
    (bt.prototype.calculateIndex = function (e, t, i) {
      if (t <= 0) return e;
      for (
        var s = e, o = i[s] && -1 !== i[s].pos ? i[s].pos : 0, e = 0;
        s < i.length && i[s].pos < t;
      )
        ((o = i[s].pos), s++);
      return (
        s + (s === i.length ? Math.floor((t - o) / this.tombstoneHeight) : e)
      );
    }),
    (bt.prototype.resetState = function () {
      ((this.lastDirection = 1), (this.lastPos = 0));
    }));
  var yt = bt;
  function bt(e, t) {
    ((this.wrapperHeight = e),
      (this.tombstoneHeight = t),
      (this.lastDirection = 1),
      (this.lastPos = 0));
  }
  function wt() {
    ((this.data = null),
      (this.dom = null),
      (this.tombstone = null),
      (this.width = 0),
      (this.height = 0),
      (this.pos = 0));
  }
  ((St.prototype.update = function (i) {
    return A(this, void 0, void 0, function () {
      var t;
      return N(this, function (e) {
        return (
          (i = this.hasMore ? i : Math.min(i, this.list.length)) >
            this.list.length &&
            ((t = i - this.list.length), this.addEmptyData(t)),
          [2, this.checkToFetch(i)]
        );
      });
    });
  }),
    (St.prototype.add = function (e) {
      for (var t = 0; t < e.length; t++)
        (this.list[this.loadedNum]
          ? (this.list[this.loadedNum] = c(c({}, this.list[this.loadedNum]), {
              data: e[t],
            }))
          : (this.list[this.loadedNum] = { data: e[t] }),
          this.loadedNum++);
      return this.list;
    }),
    (St.prototype.addEmptyData = function (e) {
      for (var t = 0; t < e; t++) this.list.push(new wt());
      return this.list;
    }),
    (St.prototype.fetch = function (i) {
      return A(this, void 0, void 0, function () {
        var t;
        return N(this, function (e) {
          switch (e.label) {
            case 0:
              return this.fetching
                ? [2, []]
                : ((this.fetching = !0), [4, this.fetchFn(i)]);
            case 1:
              return ((t = e.sent()), (this.fetching = !1), [2, t]);
          }
        });
      });
    }),
    (St.prototype.checkToFetch = function (s) {
      return A(this, void 0, void 0, function () {
        var t, i;
        return N(this, function (e) {
          switch (e.label) {
            case 0:
              return !this.hasMore || s <= this.loadedNum
                ? [2]
                : ((i = s - this.loadedNum), [4, this.fetch(i)]);
            case 1:
              return (t = e.sent()) instanceof Array && t.length
                ? (this.add(t),
                  (i = this.onFetchFinish(this.list, !0)),
                  [2, this.checkToFetch(i)])
                : ("boolean" == typeof t &&
                    !1 === t &&
                    ((this.hasMore = !1),
                    this.list.splice(this.loadedNum),
                    this.onFetchFinish(this.list, !1)),
                  [2]);
          }
        });
      });
    }),
    (St.prototype.getList = function () {
      return this.list;
    }),
    (St.prototype.resetState = function () {
      ((this.loadedNum = 0),
        (this.fetching = !1),
        (this.hasMore = !0),
        (this.list = []));
    }));
  var Tt = St;
  function St(e, t, i) {
    ((this.fetchFn = t),
      (this.onFetchFinish = i),
      (this.loadedNum = 0),
      (this.fetching = !1),
      (this.hasMore = !0),
      (this.list = e || []));
  }
  ((kt.isTombstone = function (e) {
    return !(!e || !e.classList) && e.classList.contains("tombstone");
  }),
    (kt.prototype.getSize = function () {
      var e;
      this.initialed ||
        (((e = this.create()).style.position = "absolute"),
        document.body.appendChild(e),
        (e.style.display = ""),
        (this.height = e.offsetHeight),
        (this.width = e.offsetWidth),
        document.body.removeChild(e),
        this.cached.push(e));
    }),
    (kt.prototype.getOne = function () {
      var e,
        t = this.cached.pop();
      return t
        ? (((e = t.style).display = ""),
          (e.opacity = "1"),
          (e[d.transform] = ""),
          (e[d.transition] = ""),
          t)
        : this.create();
    }),
    (kt.prototype.recycle = function (e) {
      for (var t = 0, i = e; t < i.length; t++) {
        var s = i[t];
        ((s.style.display = "none"), this.cached.push(s));
      }
      return this.cached;
    }),
    (kt.prototype.recycleOne = function (e) {
      return (this.cached.push(e), this.cached);
    }));
  var xt = kt;
  function kt(e) {
    ((this.create = e),
      (this.cached = []),
      (this.width = 0),
      (this.height = 0),
      (this.initialed = !1),
      this.getSize());
  }
  ((O.prototype.update = function (e, t, i) {
    return (
      t >= e.length && (t = e.length - 1),
      i > e.length && (i = e.length),
      this.collectUnusedDom(e, t, i),
      this.createDom(e, t, i),
      this.cacheHeight(e, t, i),
      {
        start: t,
        startPos: (e = this.positionDom(e, t, i)).startPos,
        startDelta: e.startDelta,
        end: i,
        endPos: e.endPos,
      }
    );
  }),
    (O.prototype.collectUnusedDom = function (e, t, i) {
      for (var s, o = 0; o < e.length; o++)
        o !== t
          ? e[o].dom &&
            ((s = e[o].dom),
            xt.isTombstone(s)
              ? (this.tombstone.recycleOne(s), (s.style.display = "none"))
              : this.unusedDom.push(s),
            (e[o].dom = null))
          : (o = i - 1);
      return e;
    }),
    (O.prototype.createDom = function (e, t, i) {
      for (var s = t; s < i; s++) {
        var o = e[s].dom,
          n = e[s].data;
        if (o) {
          if (!xt.isTombstone(o) || !n) continue;
          ((e[s].tombstone = o), (e[s].dom = null));
        }
        (((o = n
          ? this.renderFn(n, this.unusedDom.pop())
          : this.tombstone.getOne()).style.position = "absolute"),
          (e[s].dom = o),
          (e[s].pos = -1),
          this.content.appendChild(o));
      }
    }),
    (O.prototype.cacheHeight = function (e, t, i) {
      for (var s = t; s < i; s++)
        e[s].data && !e[s].height && (e[s].height = e[s].dom.offsetHeight);
    }),
    (O.prototype.positionDom = function (e, t, i) {
      for (
        var s = this,
          o = [],
          n = (r = this.getStartPos(e, t, i)).start,
          r = r.delta,
          a = n,
          l = t;
        l < i;
        l++
      ) {
        var h,
          c = e[l].tombstone;
        (c &&
          (((h = c.style)[d.transition] =
            ie + "transform 200ms, opacity 200ms"),
          (h[d.transform] = "translateY(" + a + "px)"),
          (h.opacity = "0"),
          (e[l].tombstone = null),
          o.push(c)),
          e[l].dom &&
            e[l].pos !== a &&
            ((e[l].dom.style[d.transform] = "translateY(" + a + "px)"),
            (e[l].pos = a)),
          (a += e[l].height || this.tombstone.height));
      }
      return (
        (t = window.setTimeout(function () {
          s.tombstone.recycle(o);
        }, 200)),
        this.timers.push(t),
        { startPos: n, startDelta: r, endPos: a }
      );
    }),
    (O.prototype.getStartPos = function (e, t, i) {
      if (e[t] && -1 !== e[t].pos) return { start: e[t].pos, delta: 0 };
      for (var s = -1 === e[0].pos ? 0 : e[0].pos, o = 0; o < t; o++)
        s += e[o].height || this.tombstone.height;
      for (var n = s, r = t; r < i; r++)
        if (!xt.isTombstone(e[r].dom) && -1 !== e[r].pos) {
          s = e[r].pos;
          break;
        }
      var a = r;
      if (a < i) for (; t < a;) ((s -= e[a - 1].height), a--);
      return { start: s, delta: n - s };
    }),
    (O.prototype.removeTombstone = function () {
      for (
        var e = this.content.querySelectorAll(".tombstone"), t = e.length - 1;
        0 <= t;
        t--
      )
        this.content.removeChild(e[t]);
    }),
    (O.prototype.setContent = function (e) {
      e !== this.content && (this.content = e);
    }),
    (O.prototype.destroy = function () {
      (this.removeTombstone(),
        this.timers.forEach(function (e) {
          clearTimeout(e);
        }));
    }),
    (O.prototype.resetState = function () {
      (this.destroy(), (this.timers = []), (this.unusedDom = []));
    }));
  var Et = O;
  function O(e, t, i) {
    ((this.renderFn = t),
      (this.tombstone = i),
      (this.unusedDom = []),
      (this.timers = []),
      this.setContent(e));
  }
  ((B.prototype.init = function () {
    var t = this;
    this.handleOptions();
    var e = (s = this.options).fetch,
      i = s.render,
      s = s.createTombstone;
    ((this.tombstone = new xt(s)),
      (this.indexCalculator = new yt(
        this.scroll.scroller.scrollBehaviorY.wrapperSize,
        this.tombstone.height,
      )),
      (this.domManager = new Et(
        this.scroll.scroller.content,
        i,
        this.tombstone,
      )),
      (this.dataManager = new Tt([], e, this.onFetchFinish.bind(this))),
      this.scroll.on(this.scroll.eventTypes.destroy, this.destroy, this),
      this.scroll.on(this.scroll.eventTypes.scroll, this.update, this),
      this.scroll.on(this.scroll.eventTypes.contentChanged, function (e) {
        (t.domManager.setContent(e),
          t.indexCalculator.resetState(),
          t.domManager.resetState(),
          t.dataManager.resetState(),
          t.update({ y: 0 }));
      }),
      (e = this.scroll.scroller.scrollBehaviorY).hooks.on(
        e.hooks.eventTypes.computeBoundary,
        this.modifyBoundary,
        this,
      ),
      this.update({ y: 0 }));
  }),
    (B.prototype.modifyBoundary = function (e) {
      e.maxScrollPos = -2e3;
    }),
    (B.prototype.handleOptions = function () {
      var e = this.scroll.options.infinity;
      (e &&
        ("function" != typeof e.fetch &&
          s("Infinity plugin need fetch Function to new data."),
        "function" != typeof e.render &&
          s("Infinity plugin need render Function to render each item."),
        "function" != typeof e.render &&
          s(
            "Infinity plugin need createTombstone Function to create tombstone.",
          ),
        (this.options = e)),
        (this.scroll.options.probeType = 3));
    }),
    (B.prototype.update = function (e) {
      var t = Math.round(-e.y),
        t = (e = this.indexCalculator.calculate(t, this.dataManager.getList()))
          .start,
        e = e.end;
      ((this.start = t),
        (this.end = e),
        this.dataManager.update(e),
        this.updateDom(this.dataManager.getList()));
    }),
    (B.prototype.onFetchFinish = function (e, t) {
      return (
        (e = this.updateDom(e).end),
        t ||
          (this.domManager.removeTombstone(),
          this.scroll.scroller.animater.stop(),
          this.scroll.resetPosition()),
        e
      );
    }),
    (B.prototype.updateDom = function (e) {
      var t = this.domManager.update(e, this.start, this.end),
        i = t.end,
        s = t.startPos,
        e = t.endPos;
      return (
        (t = t.startDelta) && (this.scroll.minScrollY = t),
        e > this.scroll.maxScrollY &&
          (this.scroll.maxScrollY = -(
            e - this.scroll.scroller.scrollBehaviorY.wrapperSize
          )),
        { end: i, startPos: s, endPos: e }
      );
    }),
    (B.prototype.destroy = function () {
      for (
        var e = (t = this.scroll.scroller).content, t = t.scrollBehaviorY;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      (this.domManager.destroy(),
        this.scroll.off("scroll", this.update),
        this.scroll.off("destroy", this.destroy),
        t.hooks.off(t.hooks.eventTypes.computeBoundary));
    }),
    (B.pluginName = "infinity"));
  var Ct = B;
  function B(e) {
    ((this.scroll = e), (this.start = 0), (this.end = 0), this.init());
  }
  var Pt = [{ key: "putAt", name: "putAt" }].map(function (e) {
      return { key: e.key, sourceKey: "plugins.movable." + e.name };
    }),
    Mt =
      ((I.prototype.handleBScroll = function () {
        this.scroll.proxy(Pt);
      }),
      (I.prototype.handleHooks = function () {
        var e = this;
        function t(e, t) {
          0 < e.maxScrollPos &&
            ((e.minScrollPos = t.wrapperSize - t.contentSize),
            (e.maxScrollPos = 0));
        }
        this.hooksFn = [];
        var i = this.scroll.scroller,
          s = i.scrollBehaviorX,
          o = i.scrollBehaviorY;
        (this.registerHooks(
          s.hooks,
          s.hooks.eventTypes.ignoreHasScroll,
          function () {
            return !0;
          },
        ),
          this.registerHooks(
            s.hooks,
            s.hooks.eventTypes.computeBoundary,
            function (e) {
              t(e, s);
            },
          ),
          this.registerHooks(
            o.hooks,
            o.hooks.eventTypes.ignoreHasScroll,
            function () {
              return !0;
            },
          ),
          this.registerHooks(
            o.hooks,
            o.hooks.eventTypes.computeBoundary,
            function (e) {
              t(e, o);
            },
          ),
          this.registerHooks(
            this.scroll.hooks,
            this.scroll.hooks.eventTypes.destroy,
            function () {
              e.destroy();
            },
          ));
      }),
      (I.prototype.putAt = function (e, t, i, s) {
        (void 0 === i && (i = this.scroll.options.bounceTime),
          void 0 === s && (s = m.bounce),
          (t = this.resolvePostion(e, t)),
          this.scroll.scrollTo(t.x, t.y, i, s));
      }),
      (I.prototype.resolvePostion = function (e, t) {
        var i = (o = this.scroll.scroller).scrollBehaviorX,
          s = o.scrollBehaviorY,
          o = {
            left: function () {
              return 0;
            },
            top: function () {
              return 0;
            },
            right: function () {
              return i.minScrollPos;
            },
            bottom: function () {
              return s.minScrollPos;
            },
            center: function (e) {
              return (0 === e ? i : s).minScrollPos / 2;
            },
          };
        return {
          x: "number" == typeof e ? e : o[e](0),
          y: "number" == typeof t ? t : o[t](1),
        };
      }),
      (I.prototype.destroy = function () {
        (this.hooksFn.forEach(function (e) {
          var t = e[0],
            i = e[1],
            e = e[2];
          t.off(i, e);
        }),
          (this.hooksFn.length = 0));
      }),
      (I.prototype.registerHooks = function (e, t, i) {
        (e.on(t, i, this), this.hooksFn.push([e, t, i]));
      }),
      (I.pluginName = "movable"),
      (I.applyOrder = "pre"),
      I);
  function I(e) {
    ((this.scroll = e), this.handleBScroll(), this.handleHooks());
  }
  ((Dt.prototype.init = function () {
    (this.handleOptions(this.scroll.options.observeImage),
      this.bindEventsToWrapper());
  }),
    (Dt.prototype.handleOptions = function (e) {
      this.options = r(
        { debounceTime: 100 },
        (e = !0 === (e = void 0 === e ? {} : e) ? {} : e),
      );
    }),
    (Dt.prototype.bindEventsToWrapper = function () {
      var e = this.scroll.scroller.wrapper;
      ((this.imageLoadEventRegister = new p(e, [
        { name: "load", handler: this.load.bind(this), capture: !0 },
      ])),
        (this.imageErrorEventRegister = new p(e, [
          { name: "error", handler: this.load.bind(this), capture: !0 },
        ])));
    }),
    (Dt.prototype.load = function (e) {
      var t = this,
        i = e.target,
        e = this.options.debounceTime;
      i &&
        "img" === i.tagName.toLowerCase() &&
        (0 === e
          ? this.scroll.refresh()
          : (clearTimeout(this.refreshTimer),
            (this.refreshTimer = window.setTimeout(function () {
              t.scroll.refresh();
            }, this.options.debounceTime))));
    }),
    (Dt.pluginName = "observeImage"));
  var zt = Dt;
  function Dt(e) {
    ((this.scroll = e), (this.refreshTimer = 0), this.init());
  }
  function Lt(e) {
    (e.preventDefault(), e.stopPropagation());
  }
  ((Y.prototype.handleDOM = function () {
    var e = (t = this.options).relationElement,
      t = void 0 === (t = t.relationElementHandleElementIndex) ? 0 : t;
    ((this.wrapper = e), (this.indicatorEl = this.wrapper.children[t]));
  }),
    (Y.prototype.handleHooks = function () {
      var t = this,
        e = (s = this.scroll).hooks,
        i = s.scroller.translater.hooks,
        s = s.scroller.animater.hooks;
      (this.registerHooks(e, e.eventTypes.refresh, this.refresh),
        this.registerHooks(i, i.eventTypes.translate, function (e) {
          t.updatePosition(e);
        }),
        this.registerHooks(s, s.eventTypes.time, this.transitionTime),
        this.registerHooks(
          s,
          s.eventTypes.timeFunction,
          this.transitionTimingFunction,
        ));
    }),
    (Y.prototype.transitionTime = function (e) {
      this.indicatorEl.style[d.transitionDuration] =
        (e = void 0 === e ? 0 : e) + "ms";
    }),
    (Y.prototype.transitionTimingFunction = function (e) {
      this.indicatorEl.style[d.transitionTimingFunction] = e;
    }),
    (Y.prototype.handleInteractive = function () {
      !1 !== this.options.interactive && this.registerEvents();
    }),
    (Y.prototype.registerHooks = function (e, t, i) {
      (e.on(t, i, this), this.hooksFn.push([e, t, i]));
    }),
    (Y.prototype.registerEvents = function () {
      var e = (o = this.scroll.options).disableMouse,
        t = o.disableTouch,
        i = [],
        s = [],
        o = [];
      (e ||
        (i.push({ name: "mousedown", handler: this.start.bind(this) }),
        s.push({ name: "mousemove", handler: this.move.bind(this) }),
        o.push({ name: "mouseup", handler: this.end.bind(this) })),
        t ||
          (i.push({ name: "touchstart", handler: this.start.bind(this) }),
          s.push({ name: "touchmove", handler: this.move.bind(this) }),
          o.push(
            { name: "touchend", handler: this.end.bind(this) },
            { name: "touchcancel", handler: this.end.bind(this) },
          )),
        (this.startEventRegister = new p(this.indicatorEl, i)),
        (this.moveEventRegister = new p(window, s)),
        (this.endEventRegister = new p(window, o)));
    }),
    (Y.prototype.refresh = function () {
      var e = (d = this.scroll).x,
        t = d.y,
        i = d.hasHorizontalScroll,
        s = d.hasVerticalScroll,
        o = d.maxScrollX,
        n = d.maxScrollY,
        r =
          ((l = { ratioX: 0, ratioY: 0 }),
          (c = this.options.ratio) &&
            ("number" == typeof c
              ? (l.ratioX = l.ratioY = c)
              : "object" == typeof c &&
                c &&
                ((l.ratioX = c.x || 0), (l.ratioY = c.y || 0))),
          l.ratioX),
        a = l.ratioY,
        l = (c = {
          width: (d = this.wrapper).clientWidth,
          height: d.clientHeight,
        }).width,
        h = c.height,
        c = (d = le(this.indicatorEl)).width,
        d = d.height;
      (i &&
        ((this.maxScrollX = l - c),
        (this.translateXSign = 0 < this.maxScrollX ? -1 : 1),
        (this.minScrollX = 0),
        (this.ratioX = r || Math.abs(this.maxScrollX / o))),
        s &&
          ((this.maxScrollY = h - d),
          (this.translateYSign = 0 < this.maxScrollY ? -1 : 1),
          (this.minScrollY = 0),
          (this.ratioY = a || Math.abs(this.maxScrollY / n))),
        this.updatePosition({ x: e, y: t }));
    }),
    (Y.prototype.start = function (e) {
      var t;
      this.BScrollIsDisabled() ||
        ((t = e.touches ? e.touches[0] : e),
        Lt(e),
        (this.initiated = !0),
        (this.moved = !1),
        (this.lastPointX = t.pageX),
        (this.lastPointY = t.pageY),
        (this.startTime = u()),
        this.scroll.scroller.hooks.trigger(
          this.scroll.scroller.hooks.eventTypes.beforeScrollStart,
        ));
    }),
    (Y.prototype.BScrollIsDisabled = function () {
      return !this.scroll.enabled;
    }),
    (Y.prototype.move = function (e) {
      var t, i, s;
      this.initiated &&
        ((t = (s = e.touches ? e.touches[0] : e).pageX),
        (i = s.pageY),
        Lt(e),
        (s = t - this.lastPointX),
        (e = i - this.lastPointY),
        (this.lastPointX = t),
        (this.lastPointY = i),
        this.moved ||
          this.indicatorNotMoved(s, e) ||
          ((this.moved = !0),
          this.scroll.scroller.hooks.trigger(
            this.scroll.scroller.hooks.eventTypes.scrollStart,
          )),
        this.moved) &&
        ((e = this.getBScrollPosByRatio(this.currentPos, s, e)),
        this.syncBScroll(e));
    }),
    (Y.prototype.end = function (e) {
      var t;
      this.initiated &&
        ((this.initiated = !1), Lt(e), this.moved) &&
        ((e = (t = this.scroll).x),
        (t = t.y),
        this.scroll.scroller.hooks.trigger(
          this.scroll.scroller.hooks.eventTypes.scrollEnd,
          { x: e, y: t },
        ));
    }),
    (Y.prototype.getBScrollPosByRatio = function (e, t, i) {
      var s = e.x,
        o = e.y,
        n = (d = this.scroll).hasHorizontalScroll,
        r = d.hasVerticalScroll,
        a = d.minScrollX,
        l = d.maxScrollX,
        h = d.minScrollY,
        c = d.maxScrollY,
        d = (e = this.scroll).x,
        e = e.y;
      return (
        n &&
          ((t = f(
            s + t,
            Math.min(this.minScrollX, this.maxScrollX),
            Math.max(this.minScrollX, this.maxScrollX),
          )),
          (d = f(Math.round((t / this.ratioX) * this.translateXSign), l, a))),
        r &&
          ((i = f(
            o + i,
            Math.min(this.minScrollY, this.maxScrollY),
            Math.max(this.minScrollY, this.maxScrollY),
          )),
          (e = f(Math.round((i / this.ratioY) * this.translateYSign), c, h))),
        { x: d, y: e }
      );
    }),
    (Y.prototype.indicatorNotMoved = function (e, t) {
      var i = (s = this.currentPos).x,
        s = s.y,
        e =
          (i === this.minScrollX && e <= 0) ||
          (i === this.maxScrollX && 0 <= e),
        t =
          (s === this.minScrollY && t <= 0) ||
          (s === this.maxScrollY && 0 <= t);
      return e && t;
    }),
    (Y.prototype.syncBScroll = function (e) {
      var t = u(),
        i = (o = this.scroll).options,
        s = o.scroller,
        o = i.probeType,
        i = i.momentumLimitTime;
      (s.translater.translate(e),
        t - this.startTime > i &&
          ((this.startTime = t), 1 === o) &&
          s.hooks.trigger(s.hooks.eventTypes.scroll, e),
        1 < o && s.hooks.trigger(s.hooks.eventTypes.scroll, e));
    }),
    (Y.prototype.updatePosition = function (e) {
      ((e = this.getIndicatorPosByRatio(e)),
        this.applyTransformProperty(e),
        (this.currentPos = c({}, e)));
    }),
    (Y.prototype.applyTransformProperty = function (e) {
      var t = this.scroll.options.translateZ,
        t = ["translateX(" + e.x + "px)", "translateY(" + e.y + "px)", "" + t];
      this.indicatorEl.style[d.transform] = t.join(" ");
    }),
    (Y.prototype.getIndicatorPosByRatio = function (e) {
      var t = e.x,
        i = e.y,
        s = (o = this.scroll).hasHorizontalScroll,
        e = o.hasVerticalScroll,
        o = c({}, this.currentPos);
      return (
        s &&
          ((t = Math.round(this.ratioX * t * this.translateXSign)),
          (o.x = f(
            t,
            Math.min(this.minScrollX, this.maxScrollX),
            Math.max(this.minScrollX, this.maxScrollX),
          ))),
        e &&
          ((i = Math.round(this.ratioY * i * this.translateYSign)),
          (o.y = f(
            i,
            Math.min(this.minScrollY, this.maxScrollY),
            Math.max(this.minScrollY, this.maxScrollY),
          ))),
        o
      );
    }),
    (Y.prototype.destroy = function () {
      (!1 !== this.options.interactive &&
        (this.startEventRegister.destroy(),
        this.moveEventRegister.destroy(),
        this.endEventRegister.destroy()),
        this.hooksFn.forEach(function (e) {
          var t = e[0],
            i = e[1],
            e = e[2];
          t.off(i, e);
        }),
        (this.hooksFn.length = 0));
    }));
  var Ot = Y;
  function Y(e, t) {
    ((this.scroll = e),
      (this.options = t),
      (this.currentPos = { x: 0, y: 0 }),
      (this.hooksFn = []),
      this.handleDOM(),
      this.handleHooks(),
      this.handleInteractive());
  }
  ((It.prototype.handleOptions = function () {
    var e = this.scroll.options.indicators;
    R(Array.isArray(e), "'indicators' must be an array.");
    for (var t = 0, i = e; t < i.length; t++) {
      var s = i[t];
      (R(!!s.relationElement, "'relationElement' must be a HTMLElement."),
        this.createIndicators(s));
    }
  }),
    (It.prototype.createIndicators = function (e) {
      this.indicators.push(new Ot(this.scroll, e));
    }),
    (It.prototype.handleHooks = function () {
      var i = this,
        e = this.scroll.hooks;
      e.on(e.eventTypes.destroy, function () {
        for (var e = 0, t = i.indicators; e < t.length; e++) t[e].destroy();
        i.indicators = [];
      });
    }),
    (It.pluginName = "indicators"));
  var Bt = It;
  function It(e) {
    ((this.scroll = e),
      (this.options = []),
      (this.indicators = []),
      this.handleOptions(),
      this.handleHooks());
  }
  (Ve.use(je)
    .use(qe)
    .use(q)
    .use(W)
    .use(t)
    .use(se)
    .use(n)
    .use(pt)
    .use(vt)
    .use(Ct)
    .use(Mt)
    .use(zt)
    .use(Bt),
    (e.Behavior = Be),
    (e.CustomOptions = be),
    (e.Indicators = Bt),
    (e.InfinityScroll = Ct),
    (e.MouseWheel = je),
    (e.Movable = Mt),
    (e.NestedScroll = vt),
    (e.ObserveDom = qe),
    (e.ObserveImage = zt),
    (e.PullDownRefresh = q),
    (e.PullUpLoad = W),
    (e.ScrollBar = t),
    (e.Slide = se),
    (e.Wheel = n),
    (e.Zoom = pt),
    (e.createBScroll = Ge),
    (e.default = Ve),
    Object.defineProperty(e, "__esModule", { value: !0 }));
}),
  (function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e)
          : function (e) {
              if (e.document) return t(e);
              throw new Error("Geetest requires a window with a document");
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (a, e) {
    if (void 0 === a) throw new Error("Geetest requires browser environment");
    var o = a.document,
      t = a.Math,
      n = o.getElementsByTagName("head")[0];
    function s(e) {
      this._obj = e;
    }
    function l(e) {
      var i = this;
      new s(e)._each(function (e, t) {
        i[e] = t;
      });
    }
    ((s.prototype = {
      _each: function (e) {
        var t,
          i = this._obj;
        for (t in i) i.hasOwnProperty(t) && e(t, i[t]);
        return this;
      },
    }),
      (l.prototype = {
        api_server: "api.geetest.com",
        protocol: "http://",
        type_path: "/gettype.php",
        fallback_config: {
          slide: {
            static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
            type: "slide",
            slide: "/static/js/geetest.0.0.0.js",
          },
          fullpage: {
            static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
            type: "fullpage",
            fullpage: "/static/js/fullpage.0.0.0.js",
          },
        },
        _get_fallback_config: function () {
          var e = this;
          return c(e.type)
            ? e.fallback_config[e.type]
            : e.new_captcha
              ? e.fallback_config.fullpage
              : e.fallback_config.slide;
        },
        _extend: function (e) {
          var i = this;
          new s(e)._each(function (e, t) {
            i[e] = t;
          });
        },
      }));
    function h(e, t) {
      var i = { networkError: "网络错误" };
      if ("function" != typeof t.onError) throw new Error(i[e]);
      t.onError(i[e]);
    }
    function i(e, s) {
      var t,
        i,
        o,
        n,
        r = new l(e);
      (e.https
        ? (r.protocol = "https://")
        : e.protocol || (r.protocol = a.location.protocol + "//"),
        (e = [r.api_server || r.apiserver]),
        (t = r.type_path),
        (o = function (e) {
          function t() {
            (r._extend(e), s(new a.Geetest(r)));
          }
          var n = e.type,
            i = ((u[n] = u[n] || []), f[n] || "init");
          "init" === i
            ? ((f[n] = "loading"),
              u[n].push(t),
              T(
                r.protocol,
                e.static_servers || e.domains,
                e[n] || e.path,
                null,
                function (e) {
                  if (e) ((f[n] = "fail"), h("networkError", r));
                  else {
                    f[n] = "loaded";
                    for (var t = u[n], i = 0, s = t.length; i < s; i += 1) {
                      var o = t[i];
                      "function" == typeof o && o();
                    }
                    u[n] = [];
                  }
                },
              ))
            : "loaded" === i
              ? t()
              : "fail" === i
                ? h("networkError", r)
                : "loading" === i && u[n].push(t);
        }),
        p((i = r).getLib)
          ? (i._extend(i.getLib), o(i))
          : i.offline
            ? o(i._get_fallback_config())
            : ((n = "geetest_" + m()),
              (a[n] = function (e) {
                ("success" === e.status
                  ? o(e.data)
                  : e.status
                    ? o(i._get_fallback_config())
                    : o(e),
                  (a[n] = void 0));
                try {
                  delete a[n];
                } catch (e) {}
              }),
              T(i.protocol, e, t, { gt: i.gt, callback: n }, function (e) {
                e && o(i._get_fallback_config());
              })));
    }
    var r = function (e) {
        return "number" == typeof e;
      },
      c = function (e) {
        return "string" == typeof e;
      },
      d = function (e) {
        return "boolean" == typeof e;
      },
      p = function (e) {
        return "object" == typeof e && null !== e;
      },
      u = {},
      f = {},
      m = function () {
        return parseInt(1e4 * t.random()) + new Date().valueOf();
      },
      g = function (e, t) {
        var i = o.createElement("script"),
          s =
            ((i.charset = "UTF-8"),
            (i.async = !0),
            !(i.onerror = function () {
              t(!0);
            }));
        ((i.onload = i.onreadystatechange =
          function () {
            s ||
              (i.readyState &&
                "loaded" !== i.readyState &&
                "complete" !== i.readyState) ||
              ((s = !0),
              setTimeout(function () {
                t(!1);
              }, 0));
          }),
          (i.src = e),
          n.appendChild(i));
      },
      v = function (e) {
        return e.replace(/^https?:\/\/|\/$/g, "");
      },
      y = function (e) {
        return (e =
          0 !== (e = e.replace(/\/+/g, "/")).indexOf("/") ? "/" + e : e);
      },
      b = function (e) {
        var i;
        return e
          ? ((i = "?"),
            new s(e)._each(function (e, t) {
              (c(t) || r(t) || d(t)) &&
                (i =
                  i +
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(t) +
                  "&");
            }),
            (i = "?" === i ? "" : i).replace(/&$/, ""))
          : "";
      },
      w = function (e, t, i, s) {
        t = v(t);
        i = y(i) + b(s);
        return (i = t ? e + t + i : i);
      },
      T = function (i, s, o, n, r) {
        function a(t) {
          var e = w(i, s[t], o, n);
          g(e, function (e) {
            e ? (t >= s.length - 1 ? r(!0) : a(t + 1)) : r(!1);
          });
        }
        a(0);
      };
    a.Geetest && (f.slide = "loaded");
    return (a.initGeetest = i);
  }),
  (function (f) {
    f.fn.qrcode = function (h) {
      function t(e) {
        ((this.mode = i), (this.data = e));
      }
      function c(e, t) {
        ((this.typeNumber = e),
          (this.errorCorrectLevel = t),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []));
      }
      function d(e, t) {
        if (null == e.length) throw Error(e.length + "/" + t);
        for (var i = 0; i < e.length && 0 == e[i];) i++;
        this.num = Array(e.length - i + t);
        for (var s = 0; s < e.length - i; s++) this.num[s] = e[s + i];
      }
      function p(e, t) {
        ((this.totalCount = e), (this.dataCount = t));
      }
      function r() {
        ((this.buffer = []), (this.length = 0));
      }
      ((t.prototype = {
        getLength: function () {
          return this.data.length;
        },
        write: function (e) {
          for (var t = 0; t < this.data.length; t++)
            e.put(this.data.charCodeAt(t), 8);
        },
      }),
        (c.prototype = {
          addData: function (e) {
            (this.dataList.push(new t(e)), (this.dataCache = null));
          },
          isDark: function (e, t) {
            if (
              e < 0 ||
              this.moduleCount <= e ||
              t < 0 ||
              this.moduleCount <= t
            )
              throw Error(e + "," + t);
            return this.modules[e][t];
          },
          getModuleCount: function () {
            return this.moduleCount;
          },
          make: function () {
            if (this.typeNumber < 1) {
              for (var e = 1, e = 1; e < 40; e++) {
                for (
                  var t = p.getRSBlocks(e, this.errorCorrectLevel),
                    i = new r(),
                    s = 0,
                    o = 0;
                  o < t.length;
                  o++
                )
                  s += t[o].dataCount;
                for (o = 0; o < this.dataList.length; o++)
                  ((t = this.dataList[o]),
                    i.put(t.mode, 4),
                    i.put(t.getLength(), u.getLengthInBits(t.mode, e)),
                    t.write(i));
                if (i.getLengthInBits() <= 8 * s) break;
              }
              this.typeNumber = e;
            }
            this.makeImpl(!1, this.getBestMaskPattern());
          },
          makeImpl: function (e, t) {
            ((this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = Array(this.moduleCount)));
            for (var i = 0; i < this.moduleCount; i++) {
              this.modules[i] = Array(this.moduleCount);
              for (var s = 0; s < this.moduleCount; s++)
                this.modules[i][s] = null;
            }
            (this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(e, t),
              7 <= this.typeNumber && this.setupTypeNumber(e),
              null == this.dataCache &&
                (this.dataCache = c.createData(
                  this.typeNumber,
                  this.errorCorrectLevel,
                  this.dataList,
                )),
              this.mapData(this.dataCache, t));
          },
          setupPositionProbePattern: function (e, t) {
            for (var i = -1; i <= 7; i++)
              if (!(e + i <= -1 || this.moduleCount <= e + i))
                for (var s = -1; s <= 7; s++)
                  t + s <= -1 ||
                    this.moduleCount <= t + s ||
                    (this.modules[e + i][t + s] =
                      (0 <= i && i <= 6 && (0 == s || 6 == s)) ||
                      (0 <= s && s <= 6 && (0 == i || 6 == i)) ||
                      (2 <= i && i <= 4 && 2 <= s && s <= 4));
          },
          getBestMaskPattern: function () {
            for (var e = 0, t = 0, i = 0; i < 8; i++) {
              this.makeImpl(!0, i);
              var s = u.getLostPoint(this);
              (0 == i || s < e) && ((e = s), (t = i));
            }
            return t;
          },
          createMovieClip: function (e, t, i) {
            for (
              e = e.createEmptyMovieClip(t, i), this.make(), t = 0;
              t < this.modules.length;
              t++
            )
              for (var i = +t, s = 0; s < this.modules[t].length; s++) {
                var o = +s;
                this.modules[t][s] &&
                  (e.beginFill(0, 100),
                  e.moveTo(o, i),
                  e.lineTo(1 + o, i),
                  e.lineTo(1 + o, i + 1),
                  e.lineTo(o, i + 1),
                  e.endFill());
              }
            return e;
          },
          setupTimingPattern: function () {
            for (var e = 8; e < this.moduleCount - 8; e++)
              null == this.modules[e][6] && (this.modules[e][6] = 0 == e % 2);
            for (e = 8; e < this.moduleCount - 8; e++)
              null == this.modules[6][e] && (this.modules[6][e] = 0 == e % 2);
          },
          setupPositionAdjustPattern: function () {
            for (
              var e = u.getPatternPosition(this.typeNumber), t = 0;
              t < e.length;
              t++
            )
              for (var i = 0; i < e.length; i++) {
                var s = e[t],
                  o = e[i];
                if (null == this.modules[s][o])
                  for (var n = -2; n <= 2; n++)
                    for (var r = -2; r <= 2; r++)
                      this.modules[s + n][o + r] =
                        -2 == n ||
                        2 == n ||
                        -2 == r ||
                        2 == r ||
                        (0 == n && 0 == r);
              }
          },
          setupTypeNumber: function (e) {
            for (
              var t = u.getBCHTypeNumber(this.typeNumber), i = 0;
              i < 18;
              i++
            ) {
              var s = !e && 1 == ((t >> i) & 1);
              this.modules[Math.floor(i / 3)][
                (i % 3) + this.moduleCount - 8 - 3
              ] = s;
            }
            for (i = 0; i < 18; i++)
              ((s = !e && 1 == ((t >> i) & 1)),
                (this.modules[(i % 3) + this.moduleCount - 8 - 3][
                  Math.floor(i / 3)
                ] = s));
          },
          setupTypeInfo: function (e, t) {
            for (
              var i = u.getBCHTypeInfo((this.errorCorrectLevel << 3) | t),
                s = 0;
              s < 15;
              s++
            ) {
              var o = !e && 1 == ((i >> s) & 1);
              s < 6
                ? (this.modules[s][8] = o)
                : s < 8
                  ? (this.modules[s + 1][8] = o)
                  : (this.modules[this.moduleCount - 15 + s][8] = o);
            }
            for (s = 0; s < 15; s++)
              ((o = !e && 1 == ((i >> s) & 1)),
                s < 8
                  ? (this.modules[8][this.moduleCount - s - 1] = o)
                  : s < 9
                    ? (this.modules[8][15 - s - 1 + 1] = o)
                    : (this.modules[8][15 - s - 1] = o));
            this.modules[this.moduleCount - 8][8] = !e;
          },
          mapData: function (e, t) {
            for (
              var i = -1,
                s = this.moduleCount - 1,
                o = 7,
                n = 0,
                r = this.moduleCount - 1;
              0 < r;
              r -= 2
            )
              for (6 == r && r--; ;) {
                for (var a, l = 0; l < 2; l++)
                  null == this.modules[s][r - l] &&
                    ((a = !1),
                    n < e.length && (a = 1 == ((e[n] >>> o) & 1)),
                    u.getMask(t, s, r - l) && (a = !a),
                    (this.modules[s][r - l] = a),
                    -1 == --o) &&
                    (n++, (o = 7));
                if ((s += i) < 0 || this.moduleCount <= s) {
                  ((s -= i), (i = -i));
                  break;
                }
              }
          },
        }),
        (c.PAD0 = 236),
        (c.PAD1 = 17),
        (c.createData = function (e, t, i) {
          for (
            var t = p.getRSBlocks(e, t), s = new r(), o = 0;
            o < i.length;
            o++
          ) {
            var n = i[o];
            (s.put(n.mode, 4),
              s.put(n.getLength(), u.getLengthInBits(n.mode, e)),
              n.write(s));
          }
          for (o = e = 0; o < t.length; o++) e += t[o].dataCount;
          if (s.getLengthInBits() > 8 * e)
            throw Error(
              "code length overflow. (" +
                s.getLengthInBits() +
                ">" +
                8 * e +
                ")",
            );
          for (
            s.getLengthInBits() + 4 <= 8 * e && s.put(0, 4);
            0 != s.getLengthInBits() % 8;
          )
            s.putBit(!1);
          for (
            ;
            !(s.getLengthInBits() >= 8 * e) &&
            (s.put(c.PAD0, 8), !(s.getLengthInBits() >= 8 * e));
          )
            s.put(c.PAD1, 8);
          return c.createBytes(s, t);
        }),
        (c.createBytes = function (e, t) {
          for (
            var i = 0,
              s = 0,
              o = 0,
              n = Array(t.length),
              r = Array(t.length),
              a = 0;
            a < t.length;
            a++
          ) {
            var l = t[a].dataCount,
              h = t[a].totalCount - l,
              s = Math.max(s, l),
              o = Math.max(o, h);
            n[a] = Array(l);
            for (var c = 0; c < n[a].length; c++)
              n[a][c] = 255 & e.buffer[c + i];
            for (
              i += l,
                c = u.getErrorCorrectPolynomial(h),
                l = new d(n[a], c.getLength() - 1).mod(c),
                r[a] = Array(c.getLength() - 1),
                c = 0;
              c < r[a].length;
              c++
            )
              ((h = c + l.getLength() - r[a].length),
                (r[a][c] = 0 <= h ? l.get(h) : 0));
          }
          for (c = a = 0; c < t.length; c++) a += t[c].totalCount;
          for (i = Array(a), c = l = 0; c < s; c++)
            for (a = 0; a < t.length; a++)
              c < n[a].length && (i[l++] = n[a][c]);
          for (c = 0; c < o; c++)
            for (a = 0; a < t.length; a++)
              c < r[a].length && (i[l++] = r[a][c]);
          return i;
        }));
      for (
        var i = 4,
          u = {
            PATTERN_POSITION_TABLE: [
              [],
              [6, 18],
              [6, 22],
              [6, 26],
              [6, 30],
              [6, 34],
              [6, 22, 38],
              [6, 24, 42],
              [6, 26, 46],
              [6, 28, 50],
              [6, 30, 54],
              [6, 32, 58],
              [6, 34, 62],
              [6, 26, 46, 66],
              [6, 26, 48, 70],
              [6, 26, 50, 74],
              [6, 30, 54, 78],
              [6, 30, 56, 82],
              [6, 30, 58, 86],
              [6, 34, 62, 90],
              [6, 28, 50, 72, 94],
              [6, 26, 50, 74, 98],
              [6, 30, 54, 78, 102],
              [6, 28, 54, 80, 106],
              [6, 32, 58, 84, 110],
              [6, 30, 58, 86, 114],
              [6, 34, 62, 90, 118],
              [6, 26, 50, 74, 98, 122],
              [6, 30, 54, 78, 102, 126],
              [6, 26, 52, 78, 104, 130],
              [6, 30, 56, 82, 108, 134],
              [6, 34, 60, 86, 112, 138],
              [6, 30, 58, 86, 114, 142],
              [6, 34, 62, 90, 118, 146],
              [6, 30, 54, 78, 102, 126, 150],
              [6, 24, 50, 76, 102, 128, 154],
              [6, 28, 54, 80, 106, 132, 158],
              [6, 32, 58, 84, 110, 136, 162],
              [6, 26, 54, 82, 110, 138, 166],
              [6, 30, 58, 86, 114, 142, 170],
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (e) {
              for (
                var t = e << 10;
                0 <= u.getBCHDigit(t) - u.getBCHDigit(u.G15);
              )
                t ^= u.G15 << (u.getBCHDigit(t) - u.getBCHDigit(u.G15));
              return ((e << 10) | t) ^ u.G15_MASK;
            },
            getBCHTypeNumber: function (e) {
              for (
                var t = e << 12;
                0 <= u.getBCHDigit(t) - u.getBCHDigit(u.G18);
              )
                t ^= u.G18 << (u.getBCHDigit(t) - u.getBCHDigit(u.G18));
              return (e << 12) | t;
            },
            getBCHDigit: function (e) {
              for (var t = 0; 0 != e;) (t++, (e >>>= 1));
              return t;
            },
            getPatternPosition: function (e) {
              return u.PATTERN_POSITION_TABLE[e - 1];
            },
            getMask: function (e, t, i) {
              switch (e) {
                case 0:
                  return 0 == (t + i) % 2;
                case 1:
                  return 0 == t % 2;
                case 2:
                  return 0 == i % 3;
                case 3:
                  return 0 == (t + i) % 3;
                case 4:
                  return 0 == (Math.floor(t / 2) + Math.floor(i / 3)) % 2;
                case 5:
                  return 0 == ((t * i) % 2) + ((t * i) % 3);
                case 6:
                  return 0 == (((t * i) % 2) + ((t * i) % 3)) % 2;
                case 7:
                  return 0 == (((t * i) % 3) + ((t + i) % 2)) % 2;
                default:
                  throw Error("bad maskPattern:" + e);
              }
            },
            getErrorCorrectPolynomial: function (e) {
              for (var t = new d([1], 0), i = 0; i < e; i++)
                t = t.multiply(new d([1, o.gexp(i)], 0));
              return t;
            },
            getLengthInBits: function (e, t) {
              if (1 <= t && t < 10)
                switch (e) {
                  case 1:
                    return 10;
                  case 2:
                    return 9;
                  case i:
                  case 8:
                    return 8;
                  default:
                    throw Error("mode:" + e);
                }
              else if (t < 27)
                switch (e) {
                  case 1:
                    return 12;
                  case 2:
                    return 11;
                  case i:
                    return 16;
                  case 8:
                    return 10;
                  default:
                    throw Error("mode:" + e);
                }
              else {
                if (!(t < 41)) throw Error("type:" + t);
                switch (e) {
                  case 1:
                    return 14;
                  case 2:
                    return 13;
                  case i:
                    return 16;
                  case 8:
                    return 12;
                  default:
                    throw Error("mode:" + e);
                }
              }
            },
            getLostPoint: function (e) {
              for (var t = e.getModuleCount(), i = 0, s = 0; s < t; s++)
                for (var o = 0; o < t; o++) {
                  for (var n = 0, r = e.isDark(s, o), a = -1; a <= 1; a++)
                    if (!(s + a < 0 || t <= s + a))
                      for (var l = -1; l <= 1; l++)
                        o + l < 0 ||
                          t <= o + l ||
                          (0 == a && 0 == l) ||
                          (r == e.isDark(s + a, o + l) && n++);
                  5 < n && (i += 3 + n - 5);
                }
              for (s = 0; s < t - 1; s++)
                for (o = 0; o < t - 1; o++)
                  ((n = 0),
                    e.isDark(s, o) && n++,
                    e.isDark(s + 1, o) && n++,
                    e.isDark(s, o + 1) && n++,
                    e.isDark(s + 1, o + 1) && n++,
                    (0 != n && 4 != n) || (i += 3));
              for (s = 0; s < t; s++)
                for (o = 0; o < t - 6; o++)
                  e.isDark(s, o) &&
                    !e.isDark(s, o + 1) &&
                    e.isDark(s, o + 2) &&
                    e.isDark(s, o + 3) &&
                    e.isDark(s, o + 4) &&
                    !e.isDark(s, o + 5) &&
                    e.isDark(s, o + 6) &&
                    (i += 40);
              for (o = 0; o < t; o++)
                for (s = 0; s < t - 6; s++)
                  e.isDark(s, o) &&
                    !e.isDark(s + 1, o) &&
                    e.isDark(s + 2, o) &&
                    e.isDark(s + 3, o) &&
                    e.isDark(s + 4, o) &&
                    !e.isDark(s + 5, o) &&
                    e.isDark(s + 6, o) &&
                    (i += 40);
              for (o = n = 0; o < t; o++)
                for (s = 0; s < t; s++) e.isDark(s, o) && n++;
              return i + 10 * (e = Math.abs((100 * n) / t / t - 50) / 5);
            },
          },
          o = {
            glog: function (e) {
              if (e < 1) throw Error("glog(" + e + ")");
              return o.LOG_TABLE[e];
            },
            gexp: function (e) {
              for (; e < 0;) e += 255;
              for (; 256 <= e;) e -= 255;
              return o.EXP_TABLE[e];
            },
            EXP_TABLE: Array(256),
            LOG_TABLE: Array(256),
          },
          e = 0;
        e < 8;
        e++
      )
        o.EXP_TABLE[e] = 1 << e;
      for (e = 8; e < 256; e++)
        o.EXP_TABLE[e] =
          o.EXP_TABLE[e - 4] ^
          o.EXP_TABLE[e - 5] ^
          o.EXP_TABLE[e - 6] ^
          o.EXP_TABLE[e - 8];
      for (e = 0; e < 255; e++) o.LOG_TABLE[o.EXP_TABLE[e]] = e;
      return (
        (d.prototype = {
          get: function (e) {
            return this.num[e];
          },
          getLength: function () {
            return this.num.length;
          },
          multiply: function (e) {
            for (
              var t = Array(this.getLength() + e.getLength() - 1), i = 0;
              i < this.getLength();
              i++
            )
              for (var s = 0; s < e.getLength(); s++)
                t[i + s] ^= o.gexp(o.glog(this.get(i)) + o.glog(e.get(s)));
            return new d(t, 0);
          },
          mod: function (e) {
            if (this.getLength() - e.getLength() < 0) return this;
            for (
              var t = o.glog(this.get(0)) - o.glog(e.get(0)),
                i = Array(this.getLength()),
                s = 0;
              s < this.getLength();
              s++
            )
              i[s] = this.get(s);
            for (s = 0; s < e.getLength(); s++)
              i[s] ^= o.gexp(o.glog(e.get(s)) + t);
            return new d(i, 0).mod(e);
          },
        }),
        (p.RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16],
        ]),
        (p.getRSBlocks = function (e, t) {
          var i = p.getRsBlockTable(e, t);
          if (null == i)
            throw Error(
              "bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t,
            );
          for (var s = i.length / 3, o = [], n = 0; n < s; n++)
            for (
              var r = i[3 * n + 0], a = i[3 * n + 1], l = i[3 * n + 2], h = 0;
              h < r;
              h++
            )
              o.push(new p(a, l));
          return o;
        }),
        (p.getRsBlockTable = function (e, t) {
          switch (t) {
            case 1:
              return p.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case 0:
              return p.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case 3:
              return p.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case 2:
              return p.RS_BLOCK_TABLE[4 * (e - 1) + 3];
          }
        }),
        (r.prototype = {
          get: function (e) {
            return (
              1 == ((this.buffer[Math.floor(e / 8)] >>> (7 - (e % 8))) & 1)
            );
          },
          put: function (e, t) {
            for (var i = 0; i < t; i++)
              this.putBit(1 == ((e >>> (t - i - 1)) & 1));
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (e) {
            var t = Math.floor(this.length / 8);
            (this.buffer.length <= t && this.buffer.push(0),
              e && (this.buffer[t] |= 128 >>> (this.length % 8)),
              this.length++);
          },
        }),
        "string" == typeof h && (h = { text: h }),
        (h = f.extend(
          {},
          {
            render: "canvas",
            width: 256,
            height: 256,
            typeNumber: -1,
            correctLevel: 2,
            background: "#ffffff",
            foreground: "#000000",
          },
          h,
        )),
        this.each(function () {
          var e;
          if ("canvas" == h.render) {
            ((e = new c(h.typeNumber, h.correctLevel)).addData(h.text),
              e.make());
            var t = document.createElement("canvas");
            ((t.width = h.width), (t.height = h.height));
            for (
              var i = t.getContext("2d"),
                s = h.width / e.getModuleCount(),
                o = h.height / e.getModuleCount(),
                n = 0;
              n < e.getModuleCount();
              n++
            )
              for (var r = 0; r < e.getModuleCount(); r++) {
                i.fillStyle = e.isDark(n, r) ? h.foreground : h.background;
                var a = Math.ceil((r + 1) * s) - Math.floor(r * s),
                  l = Math.ceil((n + 1) * s) - Math.floor(n * s);
                i.fillRect(Math.round(r * s), Math.round(n * o), a, l);
              }
          } else
            for (
              (e = new c(h.typeNumber, h.correctLevel)).addData(h.text),
                e.make(),
                t = f("<table></table>")
                  .css("width", h.width + "px")
                  .css("height", h.height + "px")
                  .css("border", "0px")
                  .css("border-collapse", "collapse")
                  .css("background-color", h.background),
                i = h.width / e.getModuleCount(),
                s = h.height / e.getModuleCount(),
                o = 0;
              o < e.getModuleCount();
              o++
            )
              for (
                n = f("<tr></tr>")
                  .css("height", s + "px")
                  .appendTo(t),
                  r = 0;
                r < e.getModuleCount();
                r++
              )
                f("<td></td>")
                  .css("width", i + "px")
                  .css(
                    "background-color",
                    e.isDark(o, r) ? h.foreground : h.background,
                  )
                  .appendTo(n);
          ((e = t), jQuery(e).appendTo(this));
        })
      );
    };
  })(jQuery),
  (function () {
    function i(e) {
      document.documentElement.style.setProperty("--root-font-size", e);
    }
    function e() {
      window.devicePixelRatio;
      var e = Math.ceil(window.innerWidth.toFixed(2));
      let t = (200 / 1920) * 100;
      i(
        1920 <= e || e <= 1024
          ? ""
          : (t = 1024 < e ? (window.innerWidth / 1920) * 200 + "px" : t),
      );
    }
    (window.addEventListener("resize", e), e());
  })(),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
        ? define(t)
        : ((e = e || self).Swiper = t());
  })(this, function () {
    function I(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function s(t, i) {
      (void 0 === t && (t = {}),
        void 0 === i && (i = {}),
        Object.keys(i).forEach(function (e) {
          void 0 === t[e]
            ? (t[e] = i[e])
            : I(i[e]) &&
              I(t[e]) &&
              0 < Object.keys(i[e]).length &&
              s(t[e], i[e]);
        }));
    }
    function l(e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return ((this.length = e.length), this);
    }
    var v = "undefined" != typeof document ? document : {},
      e = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      },
      K = (s(v, e), "undefined" != typeof window ? window : {});
    s(K, {
      document: e,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {},
      },
      CustomEvent: function () {
        return this;
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return "";
          },
        };
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {},
      matchMedia: function () {
        return {};
      },
    });
    function x(e, t) {
      var i = [],
        s = 0;
      if (e && !t && e instanceof l) return e;
      if (e)
        if ("string" == typeof e) {
          var o,
            n,
            r = e.trim();
          if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
            var a = "div";
            for (
              0 === r.indexOf("<li") && (a = "ul"),
                0 === r.indexOf("<tr") && (a = "tbody"),
                (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) ||
                  (a = "tr"),
                0 === r.indexOf("<tbody") && (a = "table"),
                0 === r.indexOf("<option") && (a = "select"),
                (n = v.createElement(a)).innerHTML = r,
                s = 0;
              s < n.childNodes.length;
              s += 1
            )
              i.push(n.childNodes[s]);
          } else
            for (
              o =
                t || "#" !== e[0] || e.match(/[ .<>:~]/)
                  ? (t || v).querySelectorAll(e.trim())
                  : [v.getElementById(e.trim().split("#")[1])],
                s = 0;
              s < o.length;
              s += 1
            )
              o[s] && i.push(o[s]);
        } else if (e.nodeType || e === K || e === v) i.push(e);
        else if (0 < e.length && e[0].nodeType)
          for (s = 0; s < e.length; s += 1) i.push(e[s]);
      return new l(i);
    }
    function n(e) {
      for (var t = [], i = 0; i < e.length; i += 1)
        -1 === t.indexOf(e[i]) && t.push(e[i]);
      return t;
    }
    ((x.fn = l.prototype), (x.Class = l), (x.Dom7 = l));
    function t(e) {
      var t = this;
      ((t.params = e = void 0 === e ? {} : e),
        (t.eventsListeners = {}),
        t.params &&
          t.params.on &&
          Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e]);
          }));
    }
    var Y = {
        addClass: function (e) {
          if (void 0 !== e)
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
              for (var s = 0; s < this.length; s += 1)
                void 0 !== this[s] &&
                  void 0 !== this[s].classList &&
                  this[s].classList.add(t[i]);
          return this;
        },
        removeClass: function (e) {
          for (var t = e.split(" "), i = 0; i < t.length; i += 1)
            for (var s = 0; s < this.length; s += 1)
              void 0 !== this[s] &&
                void 0 !== this[s].classList &&
                this[s].classList.remove(t[i]);
          return this;
        },
        hasClass: function (e) {
          return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
          for (var t = e.split(" "), i = 0; i < t.length; i += 1)
            for (var s = 0; s < this.length; s += 1)
              void 0 !== this[s] &&
                void 0 !== this[s].classList &&
                this[s].classList.toggle(t[i]);
          return this;
        },
        attr: function (e, t) {
          var i = arguments;
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var s = 0; s < this.length; s += 1)
            if (2 === i.length) this[s].setAttribute(e, t);
            else
              for (var o in e)
                ((this[s][o] = e[o]), this[s].setAttribute(o, e[o]));
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        data: function (e, t) {
          var i;
          if (void 0 === t)
            return (i = this[0])
              ? i.dom7ElementDataStorage && e in i.dom7ElementDataStorage
                ? i.dom7ElementDataStorage[e]
                : i.getAttribute("data-" + e) || void 0
              : void 0;
          for (var s = 0; s < this.length; s += 1)
            ((i = this[s]).dom7ElementDataStorage ||
              (i.dom7ElementDataStorage = {}),
              (i.dom7ElementDataStorage[e] = t));
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) {
            var i = this[t].style;
            ((i.webkitTransform = e), (i.transform = e));
          }
          return this;
        },
        transition: function (e) {
          "string" != typeof e && (e += "ms");
          for (var t = 0; t < this.length; t += 1) {
            var i = this[t].style;
            ((i.webkitTransitionDuration = e), (i.transitionDuration = e));
          }
          return this;
        },
        on: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var i = e[0],
            n = e[1],
            r = e[2],
            s = e[3];
          function o(e) {
            var t = e.target;
            if (t) {
              var i = e.target.dom7EventData || [];
              if ((i.indexOf(e) < 0 && i.unshift(e), x(t).is(n))) r.apply(t, i);
              else
                for (var s = x(t).parents(), o = 0; o < s.length; o += 1)
                  x(s[o]).is(n) && r.apply(s[o], i);
            }
          }
          function a(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            (t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t));
          }
          "function" == typeof e[1] &&
            ((i = e[0]), (r = e[1]), (s = e[2]), (n = void 0));
          for (
            var l, s = s || !1, h = i.split(" "), c = 0;
            c < this.length;
            c += 1
          ) {
            var d = this[c];
            if (n)
              for (l = 0; l < h.length; l += 1) {
                var p = h[l];
                (d.dom7LiveListeners || (d.dom7LiveListeners = {}),
                  d.dom7LiveListeners[p] || (d.dom7LiveListeners[p] = []),
                  d.dom7LiveListeners[p].push({
                    listener: r,
                    proxyListener: o,
                  }),
                  d.addEventListener(p, o, s));
              }
            else
              for (l = 0; l < h.length; l += 1) {
                var u = h[l];
                (d.dom7Listeners || (d.dom7Listeners = {}),
                  d.dom7Listeners[u] || (d.dom7Listeners[u] = []),
                  d.dom7Listeners[u].push({ listener: r, proxyListener: a }),
                  d.addEventListener(u, a, s));
              }
          }
          return this;
        },
        off: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          for (
            var i = e[0],
              s = e[1],
              o = e[2],
              n = e[3],
              r =
                ("function" == typeof e[1] &&
                  ((i = e[0]), (o = e[1]), (n = e[2]), (s = void 0)),
                (n = n || !1),
                i.split(" ")),
              a = 0;
            a < r.length;
            a += 1
          )
            for (var l = r[a], h = 0; h < this.length; h += 1) {
              var c = this[h],
                d = void 0;
              if (
                (!s && c.dom7Listeners
                  ? (d = c.dom7Listeners[l])
                  : s && c.dom7LiveListeners && (d = c.dom7LiveListeners[l]),
                d && d.length)
              )
                for (var p = d.length - 1; 0 <= p; --p) {
                  var u = d[p];
                  ((o && u.listener === o) ||
                    (o &&
                      u.listener &&
                      u.listener.dom7proxy &&
                      u.listener.dom7proxy === o) ||
                    !o) &&
                    (c.removeEventListener(l, u.proxyListener, n),
                    d.splice(p, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          for (var i = e[0].split(" "), s = e[1], o = 0; o < i.length; o += 1)
            for (var n = i[o], r = 0; r < this.length; r += 1) {
              var a = this[r],
                l = void 0;
              try {
                l = new K.CustomEvent(n, {
                  detail: s,
                  bubbles: !0,
                  cancelable: !0,
                });
              } catch (e) {
                ((l = v.createEvent("Event")).initEvent(n, !0, !0),
                  (l.detail = s));
              }
              ((a.dom7EventData = e.filter(function (e, t) {
                return 0 < t;
              })),
                a.dispatchEvent(l),
                (a.dom7EventData = []),
                delete a.dom7EventData);
            }
          return this;
        },
        transitionEnd: function (t) {
          var i,
            s = ["webkitTransitionEnd", "transitionend"],
            o = this;
          function n(e) {
            if (e.target === this)
              for (t.call(this, e), i = 0; i < s.length; i += 1) o.off(s[i], n);
          }
          if (t) for (i = 0; i < s.length; i += 1) o.on(s[i], n);
          return this;
        },
        outerWidth: function (e) {
          return 0 < this.length
            ? e
              ? ((e = this.styles()),
                this[0].offsetWidth +
                  parseFloat(e.getPropertyValue("margin-right")) +
                  parseFloat(e.getPropertyValue("margin-left")))
              : this[0].offsetWidth
            : null;
        },
        outerHeight: function (e) {
          return 0 < this.length
            ? e
              ? ((e = this.styles()),
                this[0].offsetHeight +
                  parseFloat(e.getPropertyValue("margin-top")) +
                  parseFloat(e.getPropertyValue("margin-bottom")))
              : this[0].offsetHeight
            : null;
        },
        offset: function () {
          var e, t, i, s, o;
          return 0 < this.length
            ? ((e = (o = this[0]).getBoundingClientRect()),
              (i = v.body),
              (t = o.clientTop || i.clientTop || 0),
              (i = o.clientLeft || i.clientLeft || 0),
              (s = o === K ? K.scrollY : o.scrollTop),
              (o = o === K ? K.scrollX : o.scrollLeft),
              { top: e.top + s - t, left: e.left + o - i })
            : null;
        },
        css: function (e, t) {
          var i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (var s in e) this[i].style[s] = e[s];
              return this;
            }
            if (this[0])
              return K.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e)
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        },
        each: function (e) {
          if (e)
            for (var t = 0; t < this.length; t += 1)
              if (!1 === e.call(this[t], t, this[t])) return this;
          return this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            i,
            s = this[0];
          if (s && void 0 !== e)
            if ("string" == typeof e) {
              if (s.matches) return s.matches(e);
              if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
              if (s.msMatchesSelector) return s.msMatchesSelector(e);
              for (t = x(e), i = 0; i < t.length; i += 1)
                if (t[i] === s) return !0;
            } else {
              if (e === v) return s === v;
              if (e === K) return s === K;
              if (e.nodeType || e instanceof l)
                for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
                  if (t[i] === s) return !0;
            }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling);)
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          var t;
          return void 0 === e
            ? this
            : (t = this.length) - 1 < e
              ? new l([])
              : e < 0
                ? (t = t + e) < 0
                  ? new l([])
                  : new l([this[t]])
                : new l([this[e]]);
        },
        append: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          for (var i = 0; i < e.length; i += 1)
            for (var s = e[i], o = 0; o < this.length; o += 1)
              if ("string" == typeof s) {
                var n = v.createElement("div");
                for (n.innerHTML = s; n.firstChild;)
                  this[o].appendChild(n.firstChild);
              } else if (s instanceof l)
                for (var r = 0; r < s.length; r += 1) this[o].appendChild(s[r]);
              else this[o].appendChild(s);
          return this;
        },
        prepend: function (e) {
          for (var t, i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              var s = v.createElement("div");
              for (s.innerHTML = e, t = s.childNodes.length - 1; 0 <= t; --t)
                this[i].insertBefore(s.childNodes[t], this[i].childNodes[0]);
            } else if (e instanceof l)
              for (t = 0; t < e.length; t += 1)
                this[i].insertBefore(e[t], this[i].childNodes[0]);
            else this[i].insertBefore(e, this[i].childNodes[0]);
          return this;
        },
        next: function (e) {
          return 0 < this.length
            ? e
              ? this[0].nextElementSibling &&
                x(this[0].nextElementSibling).is(e)
                ? new l([this[0].nextElementSibling])
                : new l([])
              : this[0].nextElementSibling
                ? new l([this[0].nextElementSibling])
                : new l([])
            : new l([]);
        },
        nextAll: function (e) {
          var t = [],
            i = this[0];
          if (!i) return new l([]);
          for (; i.nextElementSibling;) {
            var s = i.nextElementSibling;
            ((!e || x(s).is(e)) && t.push(s), (i = s));
          }
          return new l(t);
        },
        prev: function (e) {
          var t;
          return 0 < this.length
            ? ((t = this[0]),
              e
                ? t.previousElementSibling && x(t.previousElementSibling).is(e)
                  ? new l([t.previousElementSibling])
                  : new l([])
                : t.previousElementSibling
                  ? new l([t.previousElementSibling])
                  : new l([]))
            : new l([]);
        },
        prevAll: function (e) {
          var t = [],
            i = this[0];
          if (!i) return new l([]);
          for (; i.previousElementSibling;) {
            var s = i.previousElementSibling;
            ((!e || x(s).is(e)) && t.push(s), (i = s));
          }
          return new l(t);
        },
        parent: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            null === this[i].parentNode ||
              (e && !x(this[i].parentNode).is(e)) ||
              t.push(this[i].parentNode);
          return x(n(t));
        },
        parents: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            for (var s = this[i].parentNode; s;)
              ((e && !x(s).is(e)) || t.push(s), (s = s.parentNode));
          return x(n(t));
        },
        closest: function (e) {
          var t = this;
          return void 0 === e ? new l([]) : t.is(e) ? t : t.parents(e).eq(0);
        },
        find: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            for (
              var s = this[i].querySelectorAll(e), o = 0;
              o < s.length;
              o += 1
            )
              t.push(s[o]);
          return new l(t);
        },
        children: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            for (var s = this[i].childNodes, o = 0; o < s.length; o += 1)
              e
                ? 1 === s[o].nodeType && x(s[o]).is(e) && t.push(s[o])
                : 1 === s[o].nodeType && t.push(s[o]);
          return new l(n(t));
        },
        filter: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            e.call(this[i], i, this[i]) && t.push(this[i]);
          return new l(t);
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
        add: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          for (var i = 0; i < e.length; i += 1)
            for (var s = x(e[i]), o = 0; o < s.length; o += 1)
              ((this[this.length] = s[o]), (this.length += 1));
          return this;
        },
        styles: function () {
          return this[0] ? K.getComputedStyle(this[0], null) : {};
        },
      },
      U =
        (Object.keys(Y).forEach(function (e) {
          x.fn[e] = x.fn[e] || Y[e];
        }),
        {
          deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
              try {
                t[e] = null;
              } catch (e) {}
              try {
                delete t[e];
              } catch (e) {}
            });
          },
          nextTick: function (e, t) {
            return (void 0 === t && (t = 0), setTimeout(e, t));
          },
          now: function () {
            return Date.now();
          },
          getTranslate: function (e, t) {
            void 0 === t && (t = "x");
            var i,
              s,
              o,
              e = K.getComputedStyle(e, null);
            return (
              K.WebKitCSSMatrix
                ? (6 <
                    (s = e.transform || e.webkitTransform).split(",").length &&
                    (s = s
                      .split(", ")
                      .map(function (e) {
                        return e.replace(",", ".");
                      })
                      .join(", ")),
                  (o = new K.WebKitCSSMatrix("none" === s ? "" : s)))
                : (i = (o =
                    e.MozTransform ||
                    e.OTransform ||
                    e.MsTransform ||
                    e.msTransform ||
                    e.transform ||
                    e
                      .getPropertyValue("transform")
                      .replace("translate(", "matrix(1, 0, 0, 1,"))
                    .toString()
                    .split(",")),
              "x" === t &&
                (s = K.WebKitCSSMatrix
                  ? o.m41
                  : 16 === i.length
                    ? parseFloat(i[12])
                    : parseFloat(i[4])),
              (s =
                "y" === t
                  ? K.WebKitCSSMatrix
                    ? o.m42
                    : 16 === i.length
                      ? parseFloat(i[13])
                      : parseFloat(i[5])
                  : s) || 0
            );
          },
          parseUrlQuery: function (e) {
            var t,
              i,
              s,
              o,
              n = {},
              e = e || K.location.href;
            if ("string" == typeof e && e.length)
              for (
                o = (i = (e = -1 < e.indexOf("?") ? e.replace(/\S*\?/, "") : "")
                  .split("&")
                  .filter(function (e) {
                    return "" !== e;
                  })).length,
                  t = 0;
                t < o;
                t += 1
              )
                ((s = i[t].replace(/#\S+/g, "").split("=")),
                  (n[decodeURIComponent(s[0])] =
                    void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || ""));
            return n;
          },
          isObject: function (e) {
            return (
              "object" == typeof e &&
              null !== e &&
              e.constructor &&
              e.constructor === Object
            );
          },
          extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
              var o = e[s];
              if (null != o)
                for (
                  var n = Object.keys(Object(o)), r = 0, a = n.length;
                  r < a;
                  r += 1
                ) {
                  var l = n[r],
                    h = Object.getOwnPropertyDescriptor(o, l);
                  void 0 !== h &&
                    h.enumerable &&
                    (U.isObject(i[l]) && U.isObject(o[l])
                      ? U.extend(i[l], o[l])
                      : !U.isObject(i[l]) && U.isObject(o[l])
                        ? ((i[l] = {}), U.extend(i[l], o[l]))
                        : (i[l] = o[l]));
                }
            }
            return i;
          },
        }),
      T = {
        touch: !!(
          "ontouchstart" in K ||
          (K.DocumentTouch && v instanceof K.DocumentTouch)
        ),
        pointerEvents:
          !!K.PointerEvent &&
          "maxTouchPoints" in K.navigator &&
          0 <= K.navigator.maxTouchPoints,
        observer: "MutationObserver" in K || "WebkitMutationObserver" in K,
        passiveListener: (function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
            K.addEventListener("testPassiveListener", null, t);
          } catch (e) {}
          return e;
        })(),
        gestures: "ongesturestart" in K,
      },
      e = { components: { configurable: !0 } };
    ((t.prototype.on = function (e, t, i) {
      var s,
        o = this;
      return (
        "function" == typeof t &&
          ((s = i ? "unshift" : "push"),
          e.split(" ").forEach(function (e) {
            (o.eventsListeners[e] || (o.eventsListeners[e] = []),
              o.eventsListeners[e][s](t));
          })),
        o
      );
    }),
      (t.prototype.once = function (i, s, e) {
        var o = this;
        return "function" != typeof s ? o : ((n.f7proxy = s), o.on(i, n, e));
        function n() {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          (o.off(i, n), n.f7proxy && delete n.f7proxy, s.apply(o, e));
        }
      }),
      (t.prototype.off = function (e, s) {
        var o = this;
        return (
          o.eventsListeners &&
            e.split(" ").forEach(function (i) {
              void 0 === s
                ? (o.eventsListeners[i] = [])
                : o.eventsListeners[i] &&
                  o.eventsListeners[i].length &&
                  o.eventsListeners[i].forEach(function (e, t) {
                    (e === s || (e.f7proxy && e.f7proxy === s)) &&
                      o.eventsListeners[i].splice(t, 1);
                  });
            }),
          o
        );
      }),
      (t.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i,
          s,
          o,
          n = this;
        return (
          n.eventsListeners &&
            ((o =
              "string" == typeof e[0] || Array.isArray(e[0])
                ? ((i = e[0]), (s = e.slice(1, e.length)), n)
                : ((i = e[0].events), (s = e[0].data), e[0].context || n)),
            (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
              var t;
              n.eventsListeners &&
                n.eventsListeners[e] &&
                ((t = []),
                n.eventsListeners[e].forEach(function (e) {
                  t.push(e);
                }),
                t.forEach(function (e) {
                  e.apply(o, s);
                }));
            })),
          n
        );
      }),
      (t.prototype.useModulesParams = function (t) {
        var i = this;
        i.modules &&
          Object.keys(i.modules).forEach(function (e) {
            e = i.modules[e];
            e.params && U.extend(t, e.params);
          });
      }),
      (t.prototype.useModules = function (t) {
        void 0 === t && (t = {});
        var s = this;
        s.modules &&
          Object.keys(s.modules).forEach(function (e) {
            var i = s.modules[e],
              e = t[e] || {};
            (i.instance &&
              Object.keys(i.instance).forEach(function (e) {
                var t = i.instance[e];
                s[e] = "function" == typeof t ? t.bind(s) : t;
              }),
              i.on &&
                s.on &&
                Object.keys(i.on).forEach(function (e) {
                  s.on(e, i.on[e]);
                }),
              i.create && i.create.bind(s)(e));
          });
      }),
      (e.components.set = function (e) {
        this.use && this.use(e);
      }),
      (t.installModule = function (t) {
        for (var e = [], i = arguments.length - 1; 0 < i--;)
          e[i] = arguments[i + 1];
        var s = this,
          o =
            (s.prototype.modules || (s.prototype.modules = {}),
            t.name || Object.keys(s.prototype.modules).length + "_" + U.now());
        return (
          (s.prototype.modules[o] = t).proto &&
            Object.keys(t.proto).forEach(function (e) {
              s.prototype[e] = t.proto[e];
            }),
          t.static &&
            Object.keys(t.static).forEach(function (e) {
              s[e] = t.static[e];
            }),
          t.install && t.install.apply(s, e),
          s
        );
      }),
      (t.use = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;)
          t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e)
          ? (e.forEach(function (e) {
              return s.installModule(e);
            }),
            s)
          : s.installModule.apply(s, [e].concat(t));
      }),
      Object.defineProperties(t, e));
    e = {
      updateSize: function () {
        var e = this,
          t = e.$el,
          i = void 0 !== e.params.width ? e.params.width : t[0].clientWidth,
          s = void 0 !== e.params.height ? e.params.height : t[0].clientHeight;
        (0 === i && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((i =
            i -
            parseInt(t.css("padding-left"), 10) -
            parseInt(t.css("padding-right"), 10)),
          (s =
            s -
            parseInt(t.css("padding-top"), 10) -
            parseInt(t.css("padding-bottom"), 10)),
          U.extend(e, { width: i, height: s, size: e.isHorizontal() ? i : s }));
      },
      updateSlides: function () {
        var e = this,
          t = e.params,
          i = e.$wrapperEl,
          s = e.size,
          o = e.rtlTranslate,
          X = e.wrongRTL,
          H = ((u = e.virtual && t.virtual.enabled) ? e.virtual : e).slides
            .length,
          n = i.children("." + e.params.slideClass),
          r = (u ? e.virtual.slides : n).length,
          a = [],
          l = [],
          h = [];
        function c(e) {
          return !t.cssMode || e !== n.length - 1;
        }
        var d = t.slidesOffsetBefore,
          p =
            ("function" == typeof d && (d = t.slidesOffsetBefore.call(e)),
            t.slidesOffsetAfter),
          u =
            ("function" == typeof p && (p = t.slidesOffsetAfter.call(e)),
            e.snapGrid.length),
          A = e.snapGrid.length,
          f = t.spaceBetween,
          m = -d,
          g = 0,
          v = 0;
        if (void 0 !== s) {
          ("string" == typeof f &&
            0 <= f.indexOf("%") &&
            (f = (parseFloat(f.replace("%", "")) / 100) * s),
            (e.virtualSize = -f),
            o
              ? n.css({ marginLeft: "", marginTop: "" })
              : n.css({ marginRight: "", marginBottom: "" }),
            1 < t.slidesPerColumn &&
              ((y =
                Math.floor(r / t.slidesPerColumn) ===
                r / e.params.slidesPerColumn
                  ? r
                  : Math.ceil(r / t.slidesPerColumn) * t.slidesPerColumn),
              "auto" !== t.slidesPerView) &&
              "row" === t.slidesPerColumnFill &&
              (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));
          for (
            var y,
              N,
              $,
              b,
              F,
              w = t.slidesPerColumn,
              R = y / w,
              W = Math.floor(r / t.slidesPerColumn),
              T = 0;
            T < r;
            T += 1
          ) {
            M = 0;
            var S,
              x,
              k,
              E,
              C,
              P,
              M,
              z,
              D,
              L,
              G,
              V,
              j,
              O = n.eq(T);
            (1 < t.slidesPerColumn &&
              ((P = C = E = void 0),
              "row" === t.slidesPerColumnFill && 1 < t.slidesPerGroup
                ? ((k = Math.floor(T / (t.slidesPerGroup * t.slidesPerColumn))),
                  (S = T - t.slidesPerColumn * t.slidesPerGroup * k),
                  (x =
                    0 === k
                      ? t.slidesPerGroup
                      : Math.min(
                          Math.ceil((r - k * w * t.slidesPerGroup) / w),
                          t.slidesPerGroup,
                        )),
                  (C = S - (P = Math.floor(S / x)) * x + k * t.slidesPerGroup),
                  O.css({
                    "-webkit-box-ordinal-group": (E = C + (P * y) / w),
                    "-moz-box-ordinal-group": E,
                    "-ms-flex-order": E,
                    "-webkit-order": E,
                    order: E,
                  }))
                : "column" === t.slidesPerColumnFill
                  ? ((P = T - (C = Math.floor(T / w)) * w),
                    (W < C || (C === W && P === w - 1)) &&
                      w <= (P += 1) &&
                      ((P = 0), (C += 1)))
                  : (C = T - (P = Math.floor(T / R)) * R),
              O.css(
                "margin-" + (e.isHorizontal() ? "top" : "left"),
                0 !== P && t.spaceBetween && t.spaceBetween + "px",
              )),
              "none" !== O.css("display") &&
                ("auto" === t.slidesPerView
                  ? ((S = K.getComputedStyle(O[0], null)),
                    (x = O[0].style.transform),
                    (k = O[0].style.webkitTransform),
                    x && (O[0].style.transform = "none"),
                    k && (O[0].style.webkitTransform = "none"),
                    (M = t.roundLengths
                      ? e.isHorizontal()
                        ? O.outerWidth(!0)
                        : O.outerHeight(!0)
                      : e.isHorizontal()
                        ? ((E = parseFloat(S.getPropertyValue("width"))),
                          (C = parseFloat(S.getPropertyValue("padding-left"))),
                          (P = parseFloat(S.getPropertyValue("padding-right"))),
                          (D = parseFloat(S.getPropertyValue("margin-left"))),
                          (L = parseFloat(S.getPropertyValue("margin-right"))),
                          (z = S.getPropertyValue("box-sizing")) &&
                          "border-box" === z
                            ? E + D + L
                            : E + C + P + D + L)
                        : ((z = parseFloat(S.getPropertyValue("height"))),
                          (D = parseFloat(S.getPropertyValue("padding-top"))),
                          (L = parseFloat(
                            S.getPropertyValue("padding-bottom"),
                          )),
                          (G = parseFloat(S.getPropertyValue("margin-top"))),
                          (V = parseFloat(S.getPropertyValue("margin-bottom"))),
                          (j = S.getPropertyValue("box-sizing")) &&
                          "border-box" === j
                            ? z + G + V
                            : z + D + L + G + V)),
                    x && (O[0].style.transform = x),
                    k && (O[0].style.webkitTransform = k),
                    t.roundLengths && (M = Math.floor(M)))
                  : ((M = (s - (t.slidesPerView - 1) * f) / t.slidesPerView),
                    t.roundLengths && (M = Math.floor(M)),
                    n[T] &&
                      (e.isHorizontal()
                        ? (n[T].style.width = M + "px")
                        : (n[T].style.height = M + "px"))),
                n[T] && (n[T].swiperSlideSize = M),
                h.push(M),
                t.centeredSlides
                  ? ((m = m + M / 2 + g / 2 + f),
                    0 === g && 0 !== T && (m = m - s / 2 - f),
                    0 === T && (m = m - s / 2 - f),
                    Math.abs(m) < 0.001 && (m = 0),
                    t.roundLengths && (m = Math.floor(m)),
                    v % t.slidesPerGroup == 0 && a.push(m),
                    l.push(m))
                  : (t.roundLengths && (m = Math.floor(m)),
                    (v - Math.min(e.params.slidesPerGroupSkip, v)) %
                      e.params.slidesPerGroup ==
                      0 && a.push(m),
                    l.push(m),
                    (m = m + M + f)),
                (e.virtualSize += M + f),
                (g = M),
                (v += 1)));
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, s) + p),
            o &&
              X &&
              ("slide" === t.effect || "coverflow" === t.effect) &&
              i.css({ width: e.virtualSize + t.spaceBetween + "px" }),
            t.setWrapperSize &&
              (e.isHorizontal()
                ? i.css({ width: e.virtualSize + t.spaceBetween + "px" })
                : i.css({ height: e.virtualSize + t.spaceBetween + "px" })),
            1 < t.slidesPerColumn &&
              ((e.virtualSize = (M + t.spaceBetween) * y),
              (e.virtualSize =
                Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
              e.isHorizontal()
                ? i.css({ width: e.virtualSize + t.spaceBetween + "px" })
                : i.css({ height: e.virtualSize + t.spaceBetween + "px" }),
              t.centeredSlides))
          ) {
            for (var B = [], I = 0; I < a.length; I += 1) {
              var q = a[I];
              (t.roundLengths && (q = Math.floor(q)),
                a[I] < e.virtualSize + a[0] && B.push(q));
            }
            a = B;
          }
          if (!t.centeredSlides) {
            B = [];
            for (var Y = 0; Y < a.length; Y += 1) {
              var _ = a[Y];
              (t.roundLengths && (_ = Math.floor(_)),
                a[Y] <= e.virtualSize - s && B.push(_));
            }
            ((a = B),
              1 < Math.floor(e.virtualSize - s) - Math.floor(a[a.length - 1]) &&
                a.push(e.virtualSize - s));
          }
          (0 === a.length && (a = [0]),
            0 !== t.spaceBetween &&
              (e.isHorizontal()
                ? o
                  ? n.filter(c).css({ marginLeft: f + "px" })
                  : n.filter(c).css({ marginRight: f + "px" })
                : n.filter(c).css({ marginBottom: f + "px" })),
            t.centeredSlides &&
              t.centeredSlidesBounds &&
              ((N = 0),
              h.forEach(function (e) {
                N += e + (t.spaceBetween || 0);
              }),
              ($ = (N -= t.spaceBetween) - s),
              (a = a.map(function (e) {
                return e < 0 ? -d : $ < e ? $ + p : e;
              }))),
            t.centerInsufficientSlides &&
              ((b = 0),
              h.forEach(function (e) {
                b += e + (t.spaceBetween || 0);
              }),
              (b -= t.spaceBetween) < s) &&
              ((F = (s - b) / 2),
              a.forEach(function (e, t) {
                a[t] = e - F;
              }),
              l.forEach(function (e, t) {
                l[t] = e + F;
              })),
            U.extend(e, {
              slides: n,
              snapGrid: a,
              slidesGrid: l,
              slidesSizesGrid: h,
            }),
            r !== H && e.emit("slidesLengthChange"),
            a.length !== u &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            l.length !== A && e.emit("slidesGridLengthChange"),
            (t.watchSlidesProgress || t.watchSlidesVisibility) &&
              e.updateSlidesOffset());
        }
      },
      updateAutoHeight: function (e) {
        var t,
          i,
          s = this,
          o = [],
          n = 0;
        if (
          ("number" == typeof e
            ? s.setTransition(e)
            : !0 === e && s.setTransition(s.params.speed),
          "auto" !== s.params.slidesPerView && 1 < s.params.slidesPerView)
        )
          if (s.params.centeredSlides)
            s.visibleSlides.each(function (e, t) {
              o.push(t);
            });
          else
            for (t = 0; t < Math.ceil(s.params.slidesPerView); t += 1) {
              var r = s.activeIndex + t;
              if (r > s.slides.length) break;
              o.push(s.slides.eq(r)[0]);
            }
        else o.push(s.slides.eq(s.activeIndex)[0]);
        for (t = 0; t < o.length; t += 1)
          void 0 !== o[t] && (n = n < (i = o[t].offsetHeight) ? i : n);
        n && s.$wrapperEl.css("height", n + "px");
      },
      updateSlidesOffset: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1)
          e[t].swiperSlideOffset = this.isHorizontal()
            ? e[t].offsetLeft
            : e[t].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        var t = this,
          i = t.params,
          s = t.slides,
          o = t.rtlTranslate;
        if (0 !== s.length) {
          void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
          var n = o ? e : -e;
          (s.removeClass(i.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []));
          for (var r = 0; r < s.length; r += 1) {
            var a,
              l,
              h = s[r],
              c =
                (n +
                  (i.centeredSlides ? t.minTranslate() : 0) -
                  h.swiperSlideOffset) /
                (h.swiperSlideSize + i.spaceBetween);
            ((i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) &&
              ((l = (a = -(n - h.swiperSlideOffset)) + t.slidesSizesGrid[r]),
              (0 <= a && a < t.size - 1) ||
                (1 < l && l <= t.size) ||
                (a <= 0 && l >= t.size)) &&
              (t.visibleSlides.push(h),
              t.visibleSlidesIndexes.push(r),
              s.eq(r).addClass(i.slideVisibleClass)),
              (h.progress = o ? -c : c));
          }
          t.visibleSlides = x(t.visibleSlides);
        }
      },
      updateProgress: function (e) {
        var t = this,
          i =
            (void 0 === e &&
              ((i = t.rtlTranslate ? -1 : 1),
              (e = (t && t.translate && t.translate * i) || 0)),
            t.params),
          s = t.maxTranslate() - t.minTranslate(),
          o = t.progress,
          n = t.isBeginning,
          r = n,
          a = (l = t.isEnd),
          l =
            0 == s
              ? (n = !(o = 0))
              : ((n = (o = (e - t.minTranslate()) / s) <= 0), 1 <= o);
        (U.extend(t, { progress: o, isBeginning: n, isEnd: l }),
          (i.watchSlidesProgress ||
            i.watchSlidesVisibility ||
            (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          n && !r && t.emit("reachBeginning toEdge"),
          l && !a && t.emit("reachEnd toEdge"),
          ((r && !n) || (a && !l)) && t.emit("fromEdge"),
          t.emit("progress", o));
      },
      updateSlidesClasses: function () {
        var e = (r = this).slides,
          t = r.params,
          i = r.$wrapperEl,
          s = r.activeIndex,
          o = r.realIndex,
          n = r.virtual && t.virtual.enabled,
          r =
            (e.removeClass(
              t.slideActiveClass +
                " " +
                t.slideNextClass +
                " " +
                t.slidePrevClass +
                " " +
                t.slideDuplicateActiveClass +
                " " +
                t.slideDuplicateNextClass +
                " " +
                t.slideDuplicatePrevClass,
            ),
            (n = n
              ? r.$wrapperEl.find(
                  "." + t.slideClass + '[data-swiper-slide-index="' + s + '"]',
                )
              : e.eq(s)).addClass(t.slideActiveClass),
            t.loop &&
              (n.hasClass(t.slideDuplicateClass)
                ? i.children(
                    "." +
                      t.slideClass +
                      ":not(." +
                      t.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      o +
                      '"]',
                  )
                : i.children(
                    "." +
                      t.slideClass +
                      "." +
                      t.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      o +
                      '"]',
                  )
              ).addClass(t.slideDuplicateActiveClass),
            n
              .nextAll("." + t.slideClass)
              .eq(0)
              .addClass(t.slideNextClass)),
          s =
            (t.loop &&
              0 === r.length &&
              (r = e.eq(0)).addClass(t.slideNextClass),
            n
              .prevAll("." + t.slideClass)
              .eq(0)
              .addClass(t.slidePrevClass));
        (t.loop && 0 === s.length && (s = e.eq(-1)).addClass(t.slidePrevClass),
          t.loop &&
            ((r.hasClass(t.slideDuplicateClass)
              ? i.children(
                  "." +
                    t.slideClass +
                    ":not(." +
                    t.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    r.attr("data-swiper-slide-index") +
                    '"]',
                )
              : i.children(
                  "." +
                    t.slideClass +
                    "." +
                    t.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    r.attr("data-swiper-slide-index") +
                    '"]',
                )
            ).addClass(t.slideDuplicateNextClass),
            (s.hasClass(t.slideDuplicateClass)
              ? i.children(
                  "." +
                    t.slideClass +
                    ":not(." +
                    t.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    s.attr("data-swiper-slide-index") +
                    '"]',
                )
              : i.children(
                  "." +
                    t.slideClass +
                    "." +
                    t.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    s.attr("data-swiper-slide-index") +
                    '"]',
                )
            ).addClass(t.slideDuplicatePrevClass)));
      },
      updateActiveIndex: function (e) {
        var t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          s = t.slidesGrid,
          o = t.snapGrid,
          n = t.params,
          r = t.activeIndex,
          a = t.realIndex,
          l = t.snapIndex,
          h = e;
        if (void 0 === h) {
          for (var c = 0; c < s.length; c += 1)
            void 0 !== s[c + 1]
              ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2
                ? (h = c)
                : i >= s[c] && i < s[c + 1] && (h = c + 1)
              : i >= s[c] && (h = c);
          n.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
        }
        ((e =
          0 <= o.indexOf(i)
            ? o.indexOf(i)
            : (e = Math.min(n.slidesPerGroupSkip, h)) +
              Math.floor((h - e) / n.slidesPerGroup)) >= o.length &&
          (e = o.length - 1),
          h === r
            ? e !== l && ((t.snapIndex = e), t.emit("snapIndexChange"))
            : ((n = parseInt(
                t.slides.eq(h).attr("data-swiper-slide-index") || h,
                10,
              )),
              U.extend(t, {
                snapIndex: e,
                realIndex: n,
                previousIndex: r,
                activeIndex: h,
              }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              a !== n && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange")));
      },
      updateClickedSlide: function (e) {
        var t = this,
          i = t.params,
          s = x(e.target).closest("." + i.slideClass)[0],
          o = !1;
        if (s)
          for (var n = 0; n < t.slides.length; n += 1)
            t.slides[n] === s && (o = !0);
        s && o
          ? ((t.clickedSlide = s),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  x(s).attr("data-swiper-slide-index"),
                  10,
                ))
              : (t.clickedIndex = x(s).index()),
            i.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide())
          : ((t.clickedSlide = void 0), (t.clickedIndex = void 0));
      },
    };
    var X = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
          i = this.rtlTranslate,
          s = this.translate,
          o = this.$wrapperEl;
        return t.virtualTranslate
          ? i
            ? -s
            : s
          : t.cssMode
            ? s
            : ((t = U.getTranslate(o[0], e)), (t = i ? -t : t) || 0);
      },
      setTranslate: function (e, t) {
        var i = this,
          s = i.rtlTranslate,
          o = i.params,
          n = i.$wrapperEl,
          r = i.wrapperEl,
          a = i.progress,
          l = 0,
          h = 0;
        (i.isHorizontal() ? (l = s ? -e : e) : (h = e),
          o.roundLengths && ((l = Math.floor(l)), (h = Math.floor(h))),
          o.cssMode
            ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -l : -h)
            : o.virtualTranslate ||
              n.transform("translate3d(" + l + "px, " + h + "px, 0px)"),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? l : h),
          (r =
            0 == (s = i.maxTranslate() - i.minTranslate())
              ? 0
              : (e - i.minTranslate()) / s) !== a && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t));
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, i, s, o) {
        (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          void 0 === s && (s = !0));
        var n,
          r,
          a = this,
          l = a.params,
          h = a.wrapperEl;
        return !(
          (a.animating && l.preventInteractionOnTransition) ||
          ((r = a.minTranslate()),
          (n = a.maxTranslate()),
          a.updateProgress((r = s && r < e ? r : s && e < n ? n : e)),
          l.cssMode
            ? ((s = a.isHorizontal()),
              0 !== t && h.scrollTo
                ? h.scrollTo(
                    (((n = {})[s ? "left" : "top"] = -r),
                    (n.behavior = "smooth"),
                    n),
                  )
                : (h[s ? "scrollLeft" : "scrollTop"] = -r))
            : 0 === t
              ? (a.setTransition(0),
                a.setTranslate(r),
                i &&
                  (a.emit("beforeTransitionStart", t, o),
                  a.emit("transitionEnd")))
              : (a.setTransition(t),
                a.setTranslate(r),
                i &&
                  (a.emit("beforeTransitionStart", t, o),
                  a.emit("transitionStart")),
                a.animating ||
                  ((a.animating = !0),
                  a.onTranslateToWrapperTransitionEnd ||
                    (a.onTranslateToWrapperTransitionEnd = function (e) {
                      a &&
                        !a.destroyed &&
                        e.target === this &&
                        (a.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          a.onTranslateToWrapperTransitionEnd,
                        ),
                        a.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          a.onTranslateToWrapperTransitionEnd,
                        ),
                        (a.onTranslateToWrapperTransitionEnd = null),
                        delete a.onTranslateToWrapperTransitionEnd,
                        i) &&
                        a.emit("transitionEnd");
                    }),
                  a.$wrapperEl[0].addEventListener(
                    "transitionend",
                    a.onTranslateToWrapperTransitionEnd,
                  ),
                  a.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    a.onTranslateToWrapperTransitionEnd,
                  ))),
          0)
        );
      },
    };
    var H = {
      setTransition: function (e, t) {
        (this.params.cssMode || this.$wrapperEl.transition(e),
          this.emit("setTransition", e, t));
      },
      transitionStart: function (e, t) {
        void 0 === e && (e = !0);
        var i = this,
          s = i.activeIndex,
          o = i.params,
          n = i.previousIndex;
        o.cssMode ||
          (o.autoHeight && i.updateAutoHeight(),
          (o = (o = t) || (n < s ? "next" : s < n ? "prev" : "reset")),
          i.emit("transitionStart"),
          e &&
            s !== n &&
            ("reset" === o
              ? i.emit("slideResetTransitionStart")
              : (i.emit("slideChangeTransitionStart"),
                "next" === o
                  ? i.emit("slideNextTransitionStart")
                  : i.emit("slidePrevTransitionStart"))));
      },
      transitionEnd: function (e, t) {
        void 0 === e && (e = !0);
        var i = this,
          s = i.activeIndex,
          o = i.previousIndex,
          n = i.params;
        ((i.animating = !1),
          n.cssMode ||
            (i.setTransition(0),
            (n = (n = t) || (o < s ? "next" : s < o ? "prev" : "reset")),
            i.emit("transitionEnd"),
            e &&
              s !== o &&
              ("reset" === n
                ? i.emit("slideResetTransitionEnd")
                : (i.emit("slideChangeTransitionEnd"),
                  "next" === n
                    ? i.emit("slideNextTransitionEnd")
                    : i.emit("slidePrevTransitionEnd")))));
      },
    };
    var A = {
      slideTo: function (e, t, i, s) {
        (void 0 === t && (t = this.params.speed), void 0 === i && (i = !0));
        var o = this,
          n = (e = void 0 === e ? 0 : e),
          e = (n < 0 && (n = 0), o.params),
          r = o.snapGrid,
          a = o.slidesGrid,
          l = o.previousIndex,
          h = o.activeIndex,
          c = o.rtlTranslate,
          d = o.wrapperEl;
        if (o.animating && e.preventInteractionOnTransition) return !1;
        var p,
          u = Math.min(o.params.slidesPerGroupSkip, n),
          f =
            ((u = u + Math.floor((n - u) / o.params.slidesPerGroup)) >=
              r.length && (u = r.length - 1),
            (h || e.initialSlide || 0) === (l || 0) &&
              i &&
              o.emit("beforeSlideChangeStart"),
            -r[u]);
        if ((o.updateProgress(f), e.normalizeSlideIndex))
          for (var m = 0; m < a.length; m += 1)
            -Math.floor(100 * f) >= Math.floor(100 * a[m]) && (n = m);
        if (o.initialized && n !== h) {
          if (!o.allowSlideNext && f < o.translate && f < o.minTranslate())
            return !1;
          if (
            !o.allowSlidePrev &&
            f > o.translate &&
            f > o.maxTranslate() &&
            (h || 0) !== n
          )
            return !1;
        }
        return (
          (p = h < n ? "next" : n < h ? "prev" : "reset"),
          (c && -f === o.translate) || (!c && f === o.translate)
            ? (o.updateActiveIndex(n),
              e.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              "slide" !== e.effect && o.setTranslate(f),
              "reset" !== p && (o.transitionStart(i, p), o.transitionEnd(i, p)),
              !1)
            : (e.cssMode
                ? ((l = o.isHorizontal()),
                  (r = -f),
                  c && (r = d.scrollWidth - d.offsetWidth - r),
                  0 !== t && d.scrollTo
                    ? d.scrollTo(
                        (((u = {})[l ? "left" : "top"] = r),
                        (u.behavior = "smooth"),
                        u),
                      )
                    : (d[l ? "scrollLeft" : "scrollTop"] = r))
                : 0 === t
                  ? (o.setTransition(0),
                    o.setTranslate(f),
                    o.updateActiveIndex(n),
                    o.updateSlidesClasses(),
                    o.emit("beforeTransitionStart", t, s),
                    o.transitionStart(i, p),
                    o.transitionEnd(i, p))
                  : (o.setTransition(t),
                    o.setTranslate(f),
                    o.updateActiveIndex(n),
                    o.updateSlidesClasses(),
                    o.emit("beforeTransitionStart", t, s),
                    o.transitionStart(i, p),
                    o.animating ||
                      ((o.animating = !0),
                      o.onSlideToWrapperTransitionEnd ||
                        (o.onSlideToWrapperTransitionEnd = function (e) {
                          o &&
                            !o.destroyed &&
                            e.target === this &&
                            (o.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              o.onSlideToWrapperTransitionEnd,
                            ),
                            o.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              o.onSlideToWrapperTransitionEnd,
                            ),
                            (o.onSlideToWrapperTransitionEnd = null),
                            delete o.onSlideToWrapperTransitionEnd,
                            o.transitionEnd(i, p));
                        }),
                      o.$wrapperEl[0].addEventListener(
                        "transitionend",
                        o.onSlideToWrapperTransitionEnd,
                      ),
                      o.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        o.onSlideToWrapperTransitionEnd,
                      ))),
              !0)
        );
      },
      slideToLoop: function (e, t, i, s) {
        return (
          void 0 === t && (t = this.params.speed),
          (e = void 0 === e ? 0 : e),
          this.params.loop && (e += this.loopedSlides),
          this.slideTo(e, t, (i = void 0 === i ? !0 : i), s)
        );
      },
      slideNext: function (e, t, i) {
        (void 0 === e && (e = this.params.speed), void 0 === t && (t = !0));
        var s = this,
          o = s.params,
          n = s.animating,
          r = s.activeIndex < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup;
        if (o.loop) {
          if (n) return !1;
          (s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft));
        }
        return s.slideTo(s.activeIndex + r, e, t, i);
      },
      slidePrev: function (e, t, i) {
        (void 0 === e && (e = this.params.speed), void 0 === t && (t = !0));
        var s = this,
          o = s.params,
          n = s.animating,
          r = s.snapGrid,
          a = s.slidesGrid,
          l = s.rtlTranslate;
        if (o.loop) {
          if (n) return !1;
          (s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft));
        }
        function h(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        var c,
          d = h(l ? s.translate : -s.translate),
          n = r.map(h),
          p = (a.map(h), r[n.indexOf(d)], r[n.indexOf(d) - 1]);
        return (
          void 0 === p &&
            o.cssMode &&
            r.forEach(function (e) {
              !p && e <= d && (p = e);
            }),
          void 0 !== p && (c = a.indexOf(p)) < 0 && (c = s.activeIndex - 1),
          s.slideTo(c, e, t, i)
        );
      },
      slideReset: function (e, t, i) {
        return (
          void 0 === e && (e = this.params.speed),
          this.slideTo(this.activeIndex, e, (t = void 0 === t ? !0 : t), i)
        );
      },
      slideToClosest: function (e, t, i, s) {
        (void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === s && (s = 0.5));
        var o,
          n = this,
          r = n.activeIndex,
          a =
            (a = Math.min(n.params.slidesPerGroupSkip, r)) +
            Math.floor((r - a) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        return (
          l >= n.snapGrid[a]
            ? ((o = n.snapGrid[a]),
              (n.snapGrid[a + 1] - o) * s < l - o &&
                (r += n.params.slidesPerGroup))
            : l - (o = n.snapGrid[a - 1]) <= (n.snapGrid[a] - o) * s &&
              (r -= n.params.slidesPerGroup),
          (r = Math.max(r, 0)),
          (r = Math.min(r, n.slidesGrid.length - 1)),
          n.slideTo(r, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        var e,
          t = this,
          i = t.params,
          s = t.$wrapperEl,
          o =
            "auto" === i.slidesPerView
              ? t.slidesPerViewDynamic()
              : i.slidesPerView,
          n = t.clickedIndex;
        i.loop
          ? t.animating ||
            ((e = parseInt(
              x(t.clickedSlide).attr("data-swiper-slide-index"),
              10,
            )),
            i.centeredSlides
              ? n < t.loopedSlides - o / 2 ||
                n > t.slides.length - t.loopedSlides + o / 2
                ? (t.loopFix(),
                  (n = s
                    .children(
                      "." +
                        i.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        i.slideDuplicateClass +
                        ")",
                    )
                    .eq(0)
                    .index()),
                  U.nextTick(function () {
                    t.slideTo(n);
                  }))
                : t.slideTo(n)
              : n > t.slides.length - o
                ? (t.loopFix(),
                  (n = s
                    .children(
                      "." +
                        i.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        i.slideDuplicateClass +
                        ")",
                    )
                    .eq(0)
                    .index()),
                  U.nextTick(function () {
                    t.slideTo(n);
                  }))
                : t.slideTo(n))
          : t.slideTo(n);
      },
    };
    var N = {
      loopCreate: function () {
        var s = this,
          e = s.params,
          t = s.$wrapperEl,
          o =
            (t
              .children("." + e.slideClass + "." + e.slideDuplicateClass)
              .remove(),
            t.children("." + e.slideClass));
        if (e.loopFillGroupWithBlank) {
          var i = e.slidesPerGroup - (o.length % e.slidesPerGroup);
          if (i !== e.slidesPerGroup) {
            for (var n = 0; n < i; n += 1) {
              var r = x(v.createElement("div")).addClass(
                e.slideClass + " " + e.slideBlankClass,
              );
              t.append(r);
            }
            o = t.children("." + e.slideClass);
          }
        }
        ("auto" !== e.slidesPerView ||
          e.loopedSlides ||
          (e.loopedSlides = o.length),
          (s.loopedSlides = Math.ceil(
            parseFloat(e.loopedSlides || e.slidesPerView, 10),
          )),
          (s.loopedSlides += e.loopAdditionalSlides),
          s.loopedSlides > o.length && (s.loopedSlides = o.length));
        var a = [],
          l = [];
        o.each(function (e, t) {
          var i = x(t);
          (e < s.loopedSlides && l.push(t),
            e < o.length && e >= o.length - s.loopedSlides && a.push(t),
            i.attr("data-swiper-slide-index", e));
        });
        for (var h = 0; h < l.length; h += 1)
          t.append(x(l[h].cloneNode(!0)).addClass(e.slideDuplicateClass));
        for (var c = a.length - 1; 0 <= c; --c)
          t.prepend(x(a[c].cloneNode(!0)).addClass(e.slideDuplicateClass));
      },
      loopFix: function () {
        var e = this,
          t = (e.emit("beforeLoopFix"), e.activeIndex),
          i = e.slides,
          s = e.loopedSlides,
          o = e.allowSlidePrev,
          n = e.allowSlideNext,
          r = e.snapGrid,
          a = e.rtlTranslate;
        ((e.allowSlidePrev = !0), (e.allowSlideNext = !0));
        var l,
          r = -r[t] - e.getTranslate();
        (t < s
          ? ((l = i.length - 3 * s + t),
            e.slideTo((l += s), 0, !1, !0) &&
              0 != r &&
              e.setTranslate((a ? -e.translate : e.translate) - r))
          : t >= i.length - s &&
            ((l = -i.length + t + s), e.slideTo((l += s), 0, !1, !0)) &&
            0 != r &&
            e.setTranslate((a ? -e.translate : e.translate) - r),
          (e.allowSlidePrev = o),
          (e.allowSlideNext = n),
          e.emit("loopFix"));
      },
      loopDestroy: function () {
        var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;
        (e
          .children(
            "." +
              t.slideClass +
              "." +
              t.slideDuplicateClass +
              ",." +
              t.slideClass +
              "." +
              t.slideBlankClass,
          )
          .remove(),
          i.removeAttr("data-swiper-slide-index"));
      },
    };
    var $ = {
      setGrabCursor: function (e) {
        var t = this;
        T.touch ||
          !t.params.simulateTouch ||
          (t.params.watchOverflow && t.isLocked) ||
          t.params.cssMode ||
          (((t = t.el).style.cursor = "move"),
          (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
          (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
          (t.style.cursor = e ? "grabbing" : "grab"));
      },
      unsetGrabCursor: function () {
        T.touch ||
          (this.params.watchOverflow && this.isLocked) ||
          this.params.cssMode ||
          (this.el.style.cursor = "");
      },
    };
    var i,
      o,
      r,
      a,
      h,
      F = {
        appendSlide: function (e) {
          var t = this,
            i = t.$wrapperEl,
            s = t.params;
          if (
            (s.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
          )
            for (var o = 0; o < e.length; o += 1) e[o] && i.append(e[o]);
          else i.append(e);
          (s.loop && t.loopCreate(), (s.observer && T.observer) || t.update());
        },
        prependSlide: function (e) {
          var t = this,
            i = t.params,
            s = t.$wrapperEl,
            o = t.activeIndex,
            n = (i.loop && t.loopDestroy(), o + 1);
          if ("object" == typeof e && "length" in e) {
            for (var r = 0; r < e.length; r += 1) e[r] && s.prepend(e[r]);
            n = o + e.length;
          } else s.prepend(e);
          (i.loop && t.loopCreate(),
            (i.observer && T.observer) || t.update(),
            t.slideTo(n, 0, !1));
        },
        addSlide: function (e, t) {
          var i = this,
            s = i.$wrapperEl,
            o = i.params,
            n = i.activeIndex,
            r =
              (o.loop &&
                ((n -= i.loopedSlides),
                i.loopDestroy(),
                (i.slides = s.children("." + o.slideClass))),
              i.slides.length);
          if (e <= 0) i.prependSlide(t);
          else if (r <= e) i.appendSlide(t);
          else {
            for (var a = e < n ? n + 1 : n, l = [], h = r - 1; e <= h; --h) {
              var c = i.slides.eq(h);
              (c.remove(), l.unshift(c));
            }
            if ("object" == typeof t && "length" in t) {
              for (var d = 0; d < t.length; d += 1) t[d] && s.append(t[d]);
              a = e < n ? n + t.length : n;
            } else s.append(t);
            for (var p = 0; p < l.length; p += 1) s.append(l[p]);
            (o.loop && i.loopCreate(),
              (o.observer && T.observer) || i.update(),
              o.loop
                ? i.slideTo(a + i.loopedSlides, 0, !1)
                : i.slideTo(a, 0, !1));
          }
        },
        removeSlide: function (e) {
          var t,
            i = this,
            s = i.params,
            o = i.$wrapperEl,
            n = i.activeIndex,
            r =
              (s.loop &&
                ((n -= i.loopedSlides),
                i.loopDestroy(),
                (i.slides = o.children("." + s.slideClass))),
              n);
          if ("object" == typeof e && "length" in e)
            for (var a = 0; a < e.length; a += 1)
              ((t = e[a]),
                i.slides[t] && i.slides.eq(t).remove(),
                t < r && --r);
          else (i.slides[(t = e)] && i.slides.eq(t).remove(), t < r && --r);
          ((r = Math.max(r, 0)),
            s.loop && i.loopCreate(),
            (s.observer && T.observer) || i.update(),
            s.loop
              ? i.slideTo(r + i.loopedSlides, 0, !1)
              : i.slideTo(r, 0, !1));
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        },
      },
      c =
        ((i = K.navigator.platform),
        (o = K.navigator.userAgent),
        (r = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          edge: !1,
          ie: !1,
          firefox: !1,
          macos: !1,
          windows: !1,
          cordova: !(!K.cordova && !K.phonegap),
          phonegap: !(!K.cordova && !K.phonegap),
          electron: !1,
        }),
        (f = K.screen.width),
        (m = K.screen.height),
        (y = o.match(/(Android);?[\s\/]+([\d.]+)?/)),
        (S = o.match(/(iPad).*OS\s([\d_]+)/)),
        (B = o.match(/(iPod)(.*OS\s([\d_]+))?/)),
        (w = !S && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
        (p = 0 <= o.indexOf("MSIE ") || 0 <= o.indexOf("Trident/")),
        (q = 0 <= o.indexOf("Edge/")),
        (_ = 0 <= o.indexOf("Gecko/") && 0 <= o.indexOf("Firefox/")),
        (a = "Win32" === i),
        (h = 0 <= o.toLowerCase().indexOf("electron")),
        (i = "MacIntel" === i),
        !S &&
          i &&
          T.touch &&
          ((1024 === f && 1366 === m) ||
            (834 === f && 1194 === m) ||
            (834 === f && 1112 === m) ||
            (768 === f && 1024 === m)) &&
          ((S = o.match(/(Version)\/([\d.]+)/)), (i = !1)),
        (r.ie = p),
        (r.edge = q),
        (r.firefox = _),
        y &&
          !a &&
          ((r.os = "android"),
          (r.osVersion = y[2]),
          (r.android = !0),
          (r.androidChrome = 0 <= o.toLowerCase().indexOf("chrome"))),
        (S || w || B) && ((r.os = "ios"), (r.ios = !0)),
        w && !B && ((r.osVersion = w[2].replace(/_/g, ".")), (r.iphone = !0)),
        S && ((r.osVersion = S[2].replace(/_/g, ".")), (r.ipad = !0)),
        B &&
          ((r.osVersion = B[3] ? B[3].replace(/_/g, ".") : null),
          (r.ipod = !0)),
        r.ios &&
          r.osVersion &&
          0 <= o.indexOf("Version/") &&
          "10" === r.osVersion.split(".")[0] &&
          (r.osVersion = o.toLowerCase().split("version/")[1].split(" ")[0]),
        (r.webView =
          !(
            !(w || S || B) ||
            (!o.match(/.*AppleWebKit(?!.*Safari)/i) && !K.navigator.standalone)
          ) ||
          (K.matchMedia && K.matchMedia("(display-mode: standalone)").matches)),
        (r.webview = r.webView),
        (r.standalone = r.webView),
        (r.desktop = !(r.ios || r.android) || h),
        r.desktop &&
          ((r.electron = h),
          (r.macos = i),
          (r.windows = a),
          r.macos && (r.os = "macos"),
          r.windows) &&
          (r.os = "windows"),
        (r.pixelRatio = K.devicePixelRatio || 1),
        r);
    function d() {
      var e,
        t,
        i = this,
        s = i.params,
        o = i.el;
      (o && 0 === o.offsetWidth) ||
        (s.breakpoints && i.setBreakpoint(),
        (o = i.allowSlideNext),
        (e = i.allowSlidePrev),
        (t = i.snapGrid),
        (i.allowSlideNext = !0),
        (i.allowSlidePrev = !0),
        i.updateSize(),
        i.updateSlides(),
        i.updateSlidesClasses(),
        ("auto" === s.slidesPerView || 1 < s.slidesPerView) &&
        i.isEnd &&
        !i.isBeginning &&
        !i.params.centeredSlides
          ? i.slideTo(i.slides.length - 1, 0, !1, !0)
          : i.slideTo(i.activeIndex, 0, !1, !0),
        i.autoplay &&
          i.autoplay.running &&
          i.autoplay.paused &&
          i.autoplay.run(),
        (i.allowSlidePrev = e),
        (i.allowSlideNext = o),
        i.params.watchOverflow && t !== i.snapGrid && i.checkOverflow());
    }
    var R = !1;
    function W() {}
    var p,
      G = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
      },
      V = {
        update: e,
        translate: X,
        transition: H,
        slide: A,
        loop: N,
        grabCursor: $,
        manipulation: F,
        events: {
          attachEvents: function () {
            var e,
              t = this,
              i = t.params,
              s = t.touchEvents,
              o = t.el,
              n = t.wrapperEl,
              r =
                ((t.onTouchStart = function (e) {
                  var t,
                    i,
                    s,
                    o,
                    n,
                    r = this,
                    a = r.touchEventsData,
                    l = r.params,
                    h = r.touches;
                  (r.animating && l.preventInteractionOnTransition) ||
                    ((t = x(
                      (e = (e = e).originalEvent ? e.originalEvent : e).target,
                    )),
                    "wrapper" === l.touchEventsTarget &&
                      !t.closest(r.wrapperEl).length) ||
                    ((a.isTouchEvent = "touchstart" === e.type),
                    !a.isTouchEvent && "which" in e && 3 === e.which) ||
                    (!a.isTouchEvent && "button" in e && 0 < e.button) ||
                    (a.isTouched && a.isMoved) ||
                    (l.noSwiping &&
                    t.closest(l.noSwipingSelector || "." + l.noSwipingClass)[0]
                      ? (r.allowClick = !0)
                      : (l.swipeHandler && !t.closest(l.swipeHandler)[0]) ||
                        ((h.currentX = (
                          "touchstart" === e.type ? e.targetTouches[0] : e
                        ).pageX),
                        (h.currentY = (
                          "touchstart" === e.type ? e.targetTouches[0] : e
                        ).pageY),
                        (i = h.currentX),
                        (s = h.currentY),
                        (o = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection),
                        (n = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold),
                        o && (i <= n || i >= K.screen.width - n)) ||
                        (U.extend(a, {
                          isTouched: !0,
                          isMoved: !1,
                          allowTouchCallbacks: !0,
                          isScrolling: void 0,
                          startMoving: void 0,
                        }),
                        (h.startX = i),
                        (h.startY = s),
                        (a.touchStartTime = U.now()),
                        (r.allowClick = !0),
                        r.updateSize(),
                        (r.swipeDirection = void 0),
                        0 < l.threshold && (a.allowThresholdMove = !1),
                        "touchstart" !== e.type &&
                          ((o = !0),
                          t.is(a.formElements) && (o = !1),
                          v.activeElement &&
                            x(v.activeElement).is(a.formElements) &&
                            v.activeElement !== t[0] &&
                            v.activeElement.blur(),
                          (n =
                            o &&
                            r.allowTouchMove &&
                            l.touchStartPreventDefault),
                          l.touchStartForcePreventDefault || n) &&
                          e.preventDefault(),
                        r.emit("touchStart", e)));
                }.bind(t)),
                (t.onTouchMove = function (e) {
                  var t = this,
                    i = t.touchEventsData,
                    s = t.params,
                    o = t.touches,
                    n = t.rtlTranslate;
                  if ((e.originalEvent && (e = e.originalEvent), i.isTouched)) {
                    if (!i.isTouchEvent || "touchmove" === e.type) {
                      var r =
                          "touchmove" === e.type &&
                          e.targetTouches &&
                          (e.targetTouches[0] || e.changedTouches[0]),
                        a = ("touchmove" === e.type ? r : e).pageX,
                        r = ("touchmove" === e.type ? r : e).pageY;
                      if (e.preventedByNestedSwiper)
                        ((o.startX = a), (o.startY = r));
                      else if (t.allowTouchMove) {
                        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                          if (t.isVertical()) {
                            if (
                              (r < o.startY &&
                                t.translate <= t.maxTranslate()) ||
                              (r > o.startY && t.translate >= t.minTranslate())
                            )
                              return (
                                (i.isTouched = !1),
                                void (i.isMoved = !1)
                              );
                          } else if (
                            (a < o.startX && t.translate <= t.maxTranslate()) ||
                            (a > o.startX && t.translate >= t.minTranslate())
                          )
                            return;
                        if (
                          i.isTouchEvent &&
                          v.activeElement &&
                          e.target === v.activeElement &&
                          x(e.target).is(i.formElements)
                        )
                          ((i.isMoved = !0), (t.allowClick = !1));
                        else if (
                          (i.allowTouchCallbacks && t.emit("touchMove", e),
                          !(e.targetTouches && 1 < e.targetTouches.length))
                        ) {
                          ((o.currentX = a), (o.currentY = r));
                          var l = o.currentX - o.startX,
                            h = o.currentY - o.startY;
                          if (!(
                            t.params.threshold &&
                            Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2)) <
                              t.params.threshold
                          ))
                            if (
                              (void 0 === i.isScrolling &&
                                ((t.isHorizontal() &&
                                  o.currentY === o.startY) ||
                                (t.isVertical() && o.currentX === o.startX)
                                  ? (i.isScrolling = !1)
                                  : 25 <= l * l + h * h &&
                                    ((c =
                                      (180 *
                                        Math.atan2(Math.abs(h), Math.abs(l))) /
                                      Math.PI),
                                    (i.isScrolling = t.isHorizontal()
                                      ? c > s.touchAngle
                                      : 90 - c > s.touchAngle))),
                              i.isScrolling && t.emit("touchMoveOpposite", e),
                              void 0 !== i.startMoving ||
                                (o.currentX === o.startX &&
                                  o.currentY === o.startY) ||
                                (i.startMoving = !0),
                              i.isScrolling)
                            )
                              i.isTouched = !1;
                            else if (i.startMoving) {
                              ((t.allowClick = !1),
                                !s.cssMode &&
                                  e.cancelable &&
                                  e.preventDefault(),
                                s.touchMoveStopPropagation &&
                                  !s.nested &&
                                  e.stopPropagation(),
                                i.isMoved ||
                                  (s.loop && t.loopFix(),
                                  (i.startTranslate = t.getTranslate()),
                                  t.setTransition(0),
                                  t.animating &&
                                    t.$wrapperEl.trigger(
                                      "webkitTransitionEnd transitionend",
                                    ),
                                  (i.allowMomentumBounce = !1),
                                  !s.grabCursor ||
                                    (!0 !== t.allowSlideNext &&
                                      !0 !== t.allowSlidePrev) ||
                                    t.setGrabCursor(!0),
                                  t.emit("sliderFirstMove", e)),
                                t.emit("sliderMove", e),
                                (i.isMoved = !0));
                              var c = t.isHorizontal() ? l : h,
                                l =
                                  ((o.diff = c),
                                  (c *= s.touchRatio),
                                  (t.swipeDirection =
                                    0 < (c = n ? -c : c) ? "prev" : "next"),
                                  (i.currentTranslate = c + i.startTranslate),
                                  !0),
                                h = s.resistanceRatio;
                              if (
                                (s.touchReleaseOnEdges && (h = 0),
                                0 < c && i.currentTranslate > t.minTranslate()
                                  ? ((l = !1),
                                    s.resistance &&
                                      (i.currentTranslate =
                                        t.minTranslate() -
                                        1 +
                                        Math.pow(
                                          -t.minTranslate() +
                                            i.startTranslate +
                                            c,
                                          h,
                                        )))
                                  : c < 0 &&
                                    i.currentTranslate < t.maxTranslate() &&
                                    ((l = !1), s.resistance) &&
                                    (i.currentTranslate =
                                      t.maxTranslate() +
                                      1 -
                                      Math.pow(
                                        t.maxTranslate() - i.startTranslate - c,
                                        h,
                                      )),
                                l && (e.preventedByNestedSwiper = !0),
                                !t.allowSlideNext &&
                                  "next" === t.swipeDirection &&
                                  i.currentTranslate < i.startTranslate &&
                                  (i.currentTranslate = i.startTranslate),
                                !t.allowSlidePrev &&
                                  "prev" === t.swipeDirection &&
                                  i.currentTranslate > i.startTranslate &&
                                  (i.currentTranslate = i.startTranslate),
                                0 < s.threshold)
                              ) {
                                if (!(
                                  Math.abs(c) > s.threshold ||
                                  i.allowThresholdMove
                                ))
                                  return void (i.currentTranslate =
                                    i.startTranslate);
                                if (!i.allowThresholdMove)
                                  return (
                                    (i.allowThresholdMove = !0),
                                    (o.startX = o.currentX),
                                    (o.startY = o.currentY),
                                    (i.currentTranslate = i.startTranslate),
                                    void (o.diff = t.isHorizontal()
                                      ? o.currentX - o.startX
                                      : o.currentY - o.startY)
                                  );
                              }
                              s.followFinger &&
                                !s.cssMode &&
                                ((s.freeMode ||
                                  s.watchSlidesProgress ||
                                  s.watchSlidesVisibility) &&
                                  (t.updateActiveIndex(),
                                  t.updateSlidesClasses()),
                                s.freeMode &&
                                  (0 === i.velocities.length &&
                                    i.velocities.push({
                                      position:
                                        o[
                                          t.isHorizontal() ? "startX" : "startY"
                                        ],
                                      time: i.touchStartTime,
                                    }),
                                  i.velocities.push({
                                    position:
                                      o[
                                        t.isHorizontal()
                                          ? "currentX"
                                          : "currentY"
                                      ],
                                    time: U.now(),
                                  })),
                                t.updateProgress(i.currentTranslate),
                                t.setTranslate(i.currentTranslate));
                            }
                        }
                      } else
                        ((t.allowClick = !1),
                          i.isTouched &&
                            (U.extend(o, {
                              startX: a,
                              startY: r,
                              currentX: a,
                              currentY: r,
                            }),
                            (i.touchStartTime = U.now())));
                    }
                  } else
                    i.startMoving &&
                      i.isScrolling &&
                      t.emit("touchMoveOpposite", e);
                }.bind(t)),
                (t.onTouchEnd = function (e) {
                  var t = this,
                    i = t.touchEventsData,
                    s = t.params,
                    o = t.touches,
                    n = t.rtlTranslate,
                    r = t.$wrapperEl,
                    a = t.slidesGrid,
                    l = t.snapGrid;
                  if (
                    (e.originalEvent && (e = e.originalEvent),
                    i.allowTouchCallbacks && t.emit("touchEnd", e),
                    (i.allowTouchCallbacks = !1),
                    i.isTouched)
                  ) {
                    s.grabCursor &&
                      i.isMoved &&
                      i.isTouched &&
                      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                      t.setGrabCursor(!1);
                    var h,
                      c = U.now(),
                      d = c - i.touchStartTime;
                    if (
                      (t.allowClick &&
                        (t.updateClickedSlide(e),
                        t.emit("tap click", e),
                        d < 300) &&
                        c - i.lastClickTime < 300 &&
                        t.emit("doubleTap doubleClick", e),
                      (i.lastClickTime = U.now()),
                      U.nextTick(function () {
                        t.destroyed || (t.allowClick = !0);
                      }),
                      i.isTouched &&
                        i.isMoved &&
                        t.swipeDirection &&
                        0 !== o.diff &&
                        i.currentTranslate !== i.startTranslate)
                    ) {
                      if (
                        ((i.isTouched = !1),
                        (i.isMoved = !1),
                        (i.startMoving = !1),
                        (h = s.followFinger
                          ? n
                            ? t.translate
                            : -t.translate
                          : -i.currentTranslate),
                        !s.cssMode)
                      )
                        if (s.freeMode)
                          if (h < -t.minTranslate()) t.slideTo(t.activeIndex);
                          else if (h > -t.maxTranslate())
                            t.slides.length < l.length
                              ? t.slideTo(l.length - 1)
                              : t.slideTo(t.slides.length - 1);
                          else {
                            if (s.freeModeMomentum) {
                              ((!(1 < i.velocities.length) ||
                                ((c = i.velocities.pop()),
                                (o = i.velocities.pop()),
                                (f = c.position - o.position),
                                (o = c.time - o.time),
                                (t.velocity = f / o),
                                (t.velocity /= 2),
                                Math.abs(t.velocity) <
                                  s.freeModeMinimumVelocity && (t.velocity = 0),
                                150 < o) ||
                                300 < U.now() - c.time) &&
                                (t.velocity = 0),
                                (t.velocity *= s.freeModeMomentumVelocityRatio),
                                (i.velocities.length = 0));
                              var p,
                                u,
                                f = 1e3 * s.freeModeMomentumRatio,
                                o = t.velocity * f,
                                m = t.translate + o,
                                c = (n && (m = -m), !1),
                                o =
                                  20 *
                                  Math.abs(t.velocity) *
                                  s.freeModeMomentumBounceRatio;
                              if (m < t.maxTranslate())
                                (s.freeModeMomentumBounce
                                  ? (m + t.maxTranslate() < -o &&
                                      (m = t.maxTranslate() - o),
                                    (p = t.maxTranslate()),
                                    (i.allowMomentumBounce = c = !0))
                                  : (m = t.maxTranslate()),
                                  s.loop && s.centeredSlides && (u = !0));
                              else if (m > t.minTranslate())
                                (s.freeModeMomentumBounce
                                  ? (m - t.minTranslate() > o &&
                                      (m = t.minTranslate() + o),
                                    (p = t.minTranslate()),
                                    (i.allowMomentumBounce = c = !0))
                                  : (m = t.minTranslate()),
                                  s.loop && s.centeredSlides && (u = !0));
                              else if (s.freeModeSticky) {
                                for (var g, v = 0; v < l.length; v += 1)
                                  if (l[v] > -m) {
                                    g = v;
                                    break;
                                  }
                                m = -(m =
                                  Math.abs(l[g] - m) < Math.abs(l[g - 1] - m) ||
                                  "next" === t.swipeDirection
                                    ? l[g]
                                    : l[g - 1]);
                              }
                              if (
                                (u &&
                                  t.once("transitionEnd", function () {
                                    t.loopFix();
                                  }),
                                0 !== t.velocity)
                              )
                                ((f = n
                                  ? Math.abs((-m - t.translate) / t.velocity)
                                  : Math.abs((m - t.translate) / t.velocity)),
                                  s.freeModeSticky &&
                                    (f =
                                      (o = Math.abs(
                                        (n ? -m : m) - t.translate,
                                      )) <
                                      (u = t.slidesSizesGrid[t.activeIndex])
                                        ? s.speed
                                        : o < 2 * u
                                          ? 1.5 * s.speed
                                          : 2.5 * s.speed));
                              else if (s.freeModeSticky)
                                return void t.slideToClosest();
                              (s.freeModeMomentumBounce && c
                                ? (t.updateProgress(p),
                                  t.setTransition(f),
                                  t.setTranslate(m),
                                  t.transitionStart(!0, t.swipeDirection),
                                  (t.animating = !0),
                                  r.transitionEnd(function () {
                                    t &&
                                      !t.destroyed &&
                                      i.allowMomentumBounce &&
                                      (t.emit("momentumBounce"),
                                      t.setTransition(s.speed),
                                      setTimeout(function () {
                                        (t.setTranslate(p),
                                          r.transitionEnd(function () {
                                            t &&
                                              !t.destroyed &&
                                              t.transitionEnd();
                                          }));
                                      }, 0));
                                  }))
                                : t.velocity
                                  ? (t.updateProgress(m),
                                    t.setTransition(f),
                                    t.setTranslate(m),
                                    t.transitionStart(!0, t.swipeDirection),
                                    t.animating ||
                                      ((t.animating = !0),
                                      r.transitionEnd(function () {
                                        t && !t.destroyed && t.transitionEnd();
                                      })))
                                  : t.updateProgress(m),
                                t.updateActiveIndex(),
                                t.updateSlidesClasses());
                            } else if (s.freeModeSticky)
                              return void t.slideToClosest();
                            (!s.freeModeMomentum || d >= s.longSwipesMs) &&
                              (t.updateProgress(),
                              t.updateActiveIndex(),
                              t.updateSlidesClasses());
                          }
                        else {
                          for (
                            var y = 0, b = t.slidesSizesGrid[0], w = 0;
                            w < a.length;
                            w += w < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
                          ) {
                            var T =
                              w < s.slidesPerGroupSkip - 1
                                ? 1
                                : s.slidesPerGroup;
                            void 0 !== a[w + T]
                              ? h >= a[w] &&
                                h < a[w + T] &&
                                (b = a[(y = w) + T] - a[w])
                              : h >= a[w] &&
                                ((y = w),
                                (b = a[a.length - 1] - a[a.length - 2]));
                          }
                          ((n = (h - a[y]) / b),
                            (o =
                              y < s.slidesPerGroupSkip - 1
                                ? 1
                                : s.slidesPerGroup));
                          d > s.longSwipesMs
                            ? s.longSwipes
                              ? ("next" === t.swipeDirection &&
                                  (n >= s.longSwipesRatio
                                    ? t.slideTo(y + o)
                                    : t.slideTo(y)),
                                "prev" === t.swipeDirection &&
                                  (n > 1 - s.longSwipesRatio
                                    ? t.slideTo(y + o)
                                    : t.slideTo(y)))
                              : t.slideTo(t.activeIndex)
                            : s.shortSwipes
                              ? t.navigation &&
                                (e.target === t.navigation.nextEl ||
                                  e.target === t.navigation.prevEl)
                                ? e.target === t.navigation.nextEl
                                  ? t.slideTo(y + o)
                                  : t.slideTo(y)
                                : ("next" === t.swipeDirection &&
                                    t.slideTo(y + o),
                                  "prev" === t.swipeDirection && t.slideTo(y))
                              : t.slideTo(t.activeIndex);
                        }
                    } else
                      ((i.isTouched = !1),
                        (i.isMoved = !1),
                        (i.startMoving = !1));
                  } else
                    (i.isMoved && s.grabCursor && t.setGrabCursor(!1),
                      (i.isMoved = !1),
                      (i.startMoving = !1));
                }.bind(t)),
                i.cssMode &&
                  (t.onScroll = function () {
                    var e = this,
                      t = e.wrapperEl,
                      i = e.rtlTranslate;
                    ((e.previousTranslate = e.translate),
                      e.isHorizontal()
                        ? (e.translate = i
                            ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                            : -t.scrollLeft)
                        : (e.translate = -t.scrollTop),
                      -0 === e.translate && (e.translate = 0),
                      e.updateActiveIndex(),
                      e.updateSlidesClasses(),
                      (t =
                        0 == (t = e.maxTranslate() - e.minTranslate())
                          ? 0
                          : (e.translate - e.minTranslate()) / t) !==
                        e.progress &&
                        e.updateProgress(i ? -e.translate : e.translate),
                      e.emit("setTranslate", e.translate, !1));
                  }.bind(t)),
                (t.onClick = function (e) {
                  this.allowClick ||
                    (this.params.preventClicks && e.preventDefault(),
                    this.params.preventClicksPropagation &&
                      this.animating &&
                      (e.stopPropagation(), e.stopImmediatePropagation()));
                }.bind(t)),
                !!i.nested);
            (!T.touch && T.pointerEvents
              ? (o.addEventListener(s.start, t.onTouchStart, !1),
                v.addEventListener(s.move, t.onTouchMove, r),
                v.addEventListener(s.end, t.onTouchEnd, !1))
              : (T.touch &&
                  ((e = !(
                    "touchstart" !== s.start ||
                    !T.passiveListener ||
                    !i.passiveListeners
                  ) && { passive: !0, capture: !1 }),
                  o.addEventListener(s.start, t.onTouchStart, e),
                  o.addEventListener(
                    s.move,
                    t.onTouchMove,
                    T.passiveListener ? { passive: !1, capture: r } : r,
                  ),
                  o.addEventListener(s.end, t.onTouchEnd, e),
                  s.cancel && o.addEventListener(s.cancel, t.onTouchEnd, e),
                  R || (v.addEventListener("touchstart", W), (R = !0))),
                ((i.simulateTouch && !c.ios && !c.android) ||
                  (i.simulateTouch && !T.touch && c.ios)) &&
                  (o.addEventListener("mousedown", t.onTouchStart, !1),
                  v.addEventListener("mousemove", t.onTouchMove, r),
                  v.addEventListener("mouseup", t.onTouchEnd, !1))),
              (i.preventClicks || i.preventClicksPropagation) &&
                o.addEventListener("click", t.onClick, !0),
              i.cssMode && n.addEventListener("scroll", t.onScroll),
              i.updateOnWindowResize
                ? t.on(
                    c.ios || c.android
                      ? "resize orientationchange observerUpdate"
                      : "resize observerUpdate",
                    d,
                    !0,
                  )
                : t.on("observerUpdate", d, !0));
          },
          detachEvents: function () {
            var e,
              t = this,
              i = t.params,
              s = t.touchEvents,
              o = t.el,
              n = t.wrapperEl,
              r = !!i.nested;
            (!T.touch && T.pointerEvents
              ? (o.removeEventListener(s.start, t.onTouchStart, !1),
                v.removeEventListener(s.move, t.onTouchMove, r),
                v.removeEventListener(s.end, t.onTouchEnd, !1))
              : (T.touch &&
                  ((e = !(
                    "onTouchStart" !== s.start ||
                    !T.passiveListener ||
                    !i.passiveListeners
                  ) && { passive: !0, capture: !1 }),
                  o.removeEventListener(s.start, t.onTouchStart, e),
                  o.removeEventListener(s.move, t.onTouchMove, r),
                  o.removeEventListener(s.end, t.onTouchEnd, e),
                  s.cancel) &&
                  o.removeEventListener(s.cancel, t.onTouchEnd, e),
                ((i.simulateTouch && !c.ios && !c.android) ||
                  (i.simulateTouch && !T.touch && c.ios)) &&
                  (o.removeEventListener("mousedown", t.onTouchStart, !1),
                  v.removeEventListener("mousemove", t.onTouchMove, r),
                  v.removeEventListener("mouseup", t.onTouchEnd, !1))),
              (i.preventClicks || i.preventClicksPropagation) &&
                o.removeEventListener("click", t.onClick, !0),
              i.cssMode && n.removeEventListener("scroll", t.onScroll),
              t.off(
                c.ios || c.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                d,
              ));
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            var e,
              i,
              t,
              s,
              o = this,
              n = o.activeIndex,
              r = o.initialized,
              a = o.loopedSlides,
              l = (void 0 === a && (a = 0), o.params),
              h = o.$el,
              c = l.breakpoints;
            c &&
              0 !== Object.keys(c).length &&
              (e = o.getBreakpoint(c)) &&
              o.currentBreakpoint !== e &&
              ((i = e in c ? c[e] : void 0) &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn",
                ].forEach(function (e) {
                  var t = i[e];
                  void 0 !== t &&
                    (i[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                }),
              (c = i || o.originalParams),
              (t = 1 < l.slidesPerColumn),
              (s = 1 < c.slidesPerColumn),
              t && !s
                ? h.removeClass(
                    l.containerModifierClass +
                      "multirow " +
                      l.containerModifierClass +
                      "multirow-column",
                  )
                : !t &&
                  s &&
                  (h.addClass(l.containerModifierClass + "multirow"),
                  "column" === c.slidesPerColumnFill) &&
                  h.addClass(l.containerModifierClass + "multirow-column"),
              (t = c.direction && c.direction !== l.direction),
              (s = l.loop && (c.slidesPerView !== l.slidesPerView || t)),
              t && r && o.changeDirection(),
              U.extend(o.params, c),
              U.extend(o, {
                allowTouchMove: o.params.allowTouchMove,
                allowSlideNext: o.params.allowSlideNext,
                allowSlidePrev: o.params.allowSlidePrev,
              }),
              (o.currentBreakpoint = e),
              s &&
                r &&
                (o.loopDestroy(),
                o.loopCreate(),
                o.updateSlides(),
                o.slideTo(n - a + o.loopedSlides, 0, !1)),
              o.emit("breakpoint", c));
          },
          getBreakpoint: function (e) {
            if (e) {
              var t = !1,
                i = Object.keys(e).map(function (e) {
                  var t;
                  return "string" == typeof e && 0 === e.indexOf("@")
                    ? ((t = parseFloat(e.substr(1))),
                      { value: K.innerHeight * t, point: e })
                    : { value: e, point: e };
                });
              i.sort(function (e, t) {
                return parseInt(e.value, 10) - parseInt(t.value, 10);
              });
              for (var s = 0; s < i.length; s += 1) {
                var o = i[s],
                  n = o.point;
                o.value <= K.innerWidth && (t = n);
              }
              return t || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
              t = e.params,
              i = e.isLocked,
              s =
                0 < e.slides.length &&
                t.slidesOffsetBefore +
                  t.spaceBetween * (e.slides.length - 1) +
                  e.slides[0].offsetWidth * e.slides.length;
            (t.slidesOffsetBefore && t.slidesOffsetAfter && s
              ? (e.isLocked = s <= e.size)
              : (e.isLocked = 1 === e.snapGrid.length),
              (e.allowSlideNext = !e.isLocked),
              (e.allowSlidePrev = !e.isLocked),
              i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
              i &&
                i !== e.isLocked &&
                ((e.isEnd = !1), e.navigation) &&
                e.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            var t = this.classNames,
              i = this.params,
              e = this.rtl,
              s = this.$el,
              o = [];
            (o.push("initialized"),
              o.push(i.direction),
              i.freeMode && o.push("free-mode"),
              i.autoHeight && o.push("autoheight"),
              e && o.push("rtl"),
              1 < i.slidesPerColumn &&
                (o.push("multirow"), "column" === i.slidesPerColumnFill) &&
                o.push("multirow-column"),
              c.android && o.push("android"),
              c.ios && o.push("ios"),
              i.cssMode && o.push("css-mode"),
              o.forEach(function (e) {
                t.push(i.containerModifierClass + e);
              }),
              s.addClass(t.join(" ")));
          },
          removeClasses: function () {
            var e = this.$el,
              t = this.classNames;
            e.removeClass(t.join(" "));
          },
        },
        images: {
          loadImage: function (e, t, i, s, o, n) {
            function r() {
              n && n();
            }
            !(x(e).parent("picture")[0] || (e.complete && o)) && t
              ? (((e = new K.Image()).onload = r),
                (e.onerror = r),
                s && (e.sizes = s),
                i && (e.srcset = i),
                t && (e.src = t))
              : r();
          },
          preloadImages: function () {
            var e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length) &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady"));
            }
            e.imagesToLoad = e.$el.find("img");
            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
              var s = e.imagesToLoad[i];
              e.loadImage(
                s,
                s.currentSrc || s.getAttribute("src"),
                s.srcset || s.getAttribute("srcset"),
                s.sizes || s.getAttribute("sizes"),
                !0,
                t,
              );
            }
          },
        },
      },
      j = {},
      u = (function (h) {
        function c() {
          for (var i, e = [], t = arguments.length; t--;) e[t] = arguments[t];
          ((i =
            (i =
              1 === e.length && e[0].constructor && e[0].constructor === Object
                ? e[0]
                : ((n = e[0]), e[1])) || {}),
            (i = U.extend({}, i)),
            n && !i.el && (i.el = n),
            h.call(this, i),
            Object.keys(V).forEach(function (t) {
              Object.keys(V[t]).forEach(function (e) {
                c.prototype[e] || (c.prototype[e] = V[t][e]);
              });
            }));
          var s,
            o,
            n,
            r = this,
            a =
              (void 0 === r.modules && (r.modules = {}),
              Object.keys(r.modules).forEach(function (e) {
                var t,
                  e = r.modules[e];
                e.params &&
                  ((t = Object.keys(e.params)[0]),
                  "object" == typeof (e = e.params[t])) &&
                  null !== e &&
                  t in i &&
                  "enabled" in e &&
                  (!0 === i[t] && (i[t] = { enabled: !0 }),
                  "object" != typeof i[t] ||
                    "enabled" in i[t] ||
                    (i[t].enabled = !0),
                  i[t] || (i[t] = { enabled: !1 }));
              }),
              U.extend({}, G)),
            l =
              (r.useModulesParams(a),
              (r.params = U.extend({}, a, j, i)),
              (r.originalParams = U.extend({}, r.params)),
              (r.passedParams = U.extend({}, i)),
              (r.$ = x)(r.params.el));
          if ((n = l[0]))
            return 1 < l.length
              ? ((s = []),
                l.each(function (e, t) {
                  t = U.extend({}, i, { el: t });
                  s.push(new c(t));
                }),
                s)
              : ((n.swiper = r),
                l.data("swiper", r),
                n && n.shadowRoot && n.shadowRoot.querySelector
                  ? ((o = x(
                      n.shadowRoot.querySelector("." + r.params.wrapperClass),
                    )).children = function (e) {
                      return l.children(e);
                    })
                  : (o = l.children("." + r.params.wrapperClass)),
                U.extend(r, {
                  $el: l,
                  el: n,
                  $wrapperEl: o,
                  wrapperEl: o[0],
                  classNames: [],
                  slides: x(),
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal: function () {
                    return "horizontal" === r.params.direction;
                  },
                  isVertical: function () {
                    return "vertical" === r.params.direction;
                  },
                  rtl:
                    "rtl" === n.dir.toLowerCase() ||
                    "rtl" === l.css("direction"),
                  rtlTranslate:
                    "horizontal" === r.params.direction &&
                    ("rtl" === n.dir.toLowerCase() ||
                      "rtl" === l.css("direction")),
                  wrongRTL: "-webkit-box" === o.css("display"),
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: !0,
                  isEnd: !1,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: !1,
                  allowSlideNext: r.params.allowSlideNext,
                  allowSlidePrev: r.params.allowSlidePrev,
                  touchEvents:
                    ((a = [
                      "touchstart",
                      "touchmove",
                      "touchend",
                      "touchcancel",
                    ]),
                    (n = T.pointerEvents
                      ? ["pointerdown", "pointermove", "pointerup"]
                      : ["mousedown", "mousemove", "mouseup"]),
                    (r.touchEventsTouch = {
                      start: a[0],
                      move: a[1],
                      end: a[2],
                      cancel: a[3],
                    }),
                    (r.touchEventsDesktop = {
                      start: n[0],
                      move: n[1],
                      end: n[2],
                    }),
                    T.touch || !r.params.simulateTouch
                      ? r.touchEventsTouch
                      : r.touchEventsDesktop),
                  touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements:
                      "input, select, option, textarea, button, video, label",
                    lastClickTime: U.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0,
                  },
                  allowClick: !0,
                  allowTouchMove: r.params.allowTouchMove,
                  touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                  },
                  imagesToLoad: [],
                  imagesLoaded: 0,
                }),
                r.useModules(),
                r.params.init && r.init(),
                r);
        }
        h && (c.__proto__ = h);
        var e = {
          extendedDefaults: { configurable: !0 },
          defaults: { configurable: !0 },
          Class: { configurable: !0 },
          $: { configurable: !0 },
        };
        return (
          (((c.prototype = Object.create(h && h.prototype)).constructor =
            c).prototype.slidesPerViewDynamic = function () {
            var e = this,
              t = e.params,
              i = e.slides,
              s = e.slidesGrid,
              o = e.size,
              n = e.activeIndex,
              r = 1;
            if (t.centeredSlides) {
              for (
                var a, l = i[n].swiperSlideSize, h = n + 1;
                h < i.length;
                h += 1
              )
                i[h] &&
                  !a &&
                  ((r += 1), o < (l += i[h].swiperSlideSize)) &&
                  (a = !0);
              for (var c = n - 1; 0 <= c; --c)
                i[c] &&
                  !a &&
                  ((r += 1), o < (l += i[c].swiperSlideSize)) &&
                  (a = !0);
            } else
              for (var d = n + 1; d < i.length; d += 1)
                s[d] - s[n] < o && (r += 1);
            return r;
          }),
          (c.prototype.update = function () {
            var e,
              t,
              i = this;
            function s() {
              var e = i.rtlTranslate ? -1 * i.translate : i.translate,
                e = Math.min(Math.max(e, i.maxTranslate()), i.minTranslate());
              (i.setTranslate(e),
                i.updateActiveIndex(),
                i.updateSlidesClasses());
            }
            i &&
              !i.destroyed &&
              ((e = i.snapGrid),
              (t = i.params).breakpoints && i.setBreakpoint(),
              i.updateSize(),
              i.updateSlides(),
              i.updateProgress(),
              i.updateSlidesClasses(),
              i.params.freeMode
                ? (s(), i.params.autoHeight && i.updateAutoHeight())
                : (("auto" === i.params.slidesPerView ||
                    1 < i.params.slidesPerView) &&
                  i.isEnd &&
                  !i.params.centeredSlides
                    ? i.slideTo(i.slides.length - 1, 0, !1, !0)
                    : i.slideTo(i.activeIndex, 0, !1, !0)) || s(),
              t.watchOverflow && e !== i.snapGrid && i.checkOverflow(),
              i.emit("update"));
          }),
          (c.prototype.changeDirection = function (i, e) {
            void 0 === e && (e = !0);
            var t = this,
              s = t.params.direction;
            return (
              (i = i || ("horizontal" === s ? "vertical" : "horizontal")) ===
                s ||
                ("horizontal" !== i && "vertical" !== i) ||
                (t.$el
                  .removeClass("" + t.params.containerModifierClass + s)
                  .addClass("" + t.params.containerModifierClass + i),
                (t.params.direction = i),
                t.slides.each(function (e, t) {
                  "vertical" === i
                    ? (t.style.width = "")
                    : (t.style.height = "");
                }),
                t.emit("changeDirection"),
                e && t.update()),
              t
            );
          }),
          (c.prototype.init = function () {
            var e = this;
            e.initialized ||
              (e.emit("beforeInit"),
              e.params.breakpoints && e.setBreakpoint(),
              e.addClasses(),
              e.params.loop && e.loopCreate(),
              e.updateSize(),
              e.updateSlides(),
              e.params.watchOverflow && e.checkOverflow(),
              e.params.grabCursor && e.setGrabCursor(),
              e.params.preloadImages && e.preloadImages(),
              e.params.loop
                ? e.slideTo(
                    e.params.initialSlide + e.loopedSlides,
                    0,
                    e.params.runCallbacksOnInit,
                  )
                : e.slideTo(
                    e.params.initialSlide,
                    0,
                    e.params.runCallbacksOnInit,
                  ),
              e.attachEvents(),
              (e.initialized = !0),
              e.emit("init"));
          }),
          (c.prototype.destroy = function (e, t) {
            (void 0 === e && (e = !0), void 0 === t && (t = !0));
            var i = this,
              s = i.params,
              o = i.$el,
              n = i.$wrapperEl,
              r = i.slides;
            return (
              void 0 === i.params ||
                i.destroyed ||
                (i.emit("beforeDestroy"),
                (i.initialized = !1),
                i.detachEvents(),
                s.loop && i.loopDestroy(),
                t &&
                  (i.removeClasses(),
                  o.removeAttr("style"),
                  n.removeAttr("style"),
                  r) &&
                  r.length &&
                  r
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" "),
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index"),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach(function (e) {
                  i.off(e);
                }),
                !1 !== e &&
                  ((i.$el[0].swiper = null),
                  i.$el.data("swiper", null),
                  U.deleteProps(i)),
                (i.destroyed = !0)),
              null
            );
          }),
          (c.extendDefaults = function (e) {
            U.extend(j, e);
          }),
          (e.extendedDefaults.get = function () {
            return j;
          }),
          (e.defaults.get = function () {
            return G;
          }),
          (e.Class.get = function () {
            return h;
          }),
          (e.$.get = function () {
            return x;
          }),
          Object.defineProperties(c, e),
          c
        );
      })(t),
      f = { name: "device", proto: { device: c }, static: { device: c } },
      m = { name: "support", proto: { support: T }, static: { support: T } },
      k = {
        isEdge: !!K.navigator.userAgent.match(/Edge/g),
        isSafari:
          0 <= (p = K.navigator.userAgent.toLowerCase()).indexOf("safari") &&
          p.indexOf("chrome") < 0 &&
          p.indexOf("android") < 0,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          K.navigator.userAgent,
        ),
      },
      q = { name: "browser", proto: { browser: k }, static: { browser: k } },
      _ = {
        name: "resize",
        create: function () {
          var e = this;
          U.extend(e, {
            resize: {
              resizeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  e.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init: function () {
            (K.addEventListener("resize", this.resize.resizeHandler),
              K.addEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler,
              ));
          },
          destroy: function () {
            (K.removeEventListener("resize", this.resize.resizeHandler),
              K.removeEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler,
              ));
          },
        },
      },
      g = {
        func: K.MutationObserver || K.WebkitMutationObserver,
        attach: function (e, t) {
          void 0 === t && (t = {});
          var i = this,
            s = new g.func(function (e) {
              var t;
              1 === e.length
                ? i.emit("observerUpdate", e[0])
                : ((t = function () {
                    i.emit("observerUpdate", e[0]);
                  }),
                  K.requestAnimationFrame
                    ? K.requestAnimationFrame(t)
                    : K.setTimeout(t, 0));
            });
          (s.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            i.observer.observers.push(s));
        },
        init: function () {
          var e = this;
          if (T.observer && e.params.observer) {
            if (e.params.observeParents)
              for (var t = e.$el.parents(), i = 0; i < t.length; i += 1)
                e.observer.attach(t[i]);
            (e.observer.attach(e.$el[0], {
              childList: e.params.observeSlideChildren,
            }),
              e.observer.attach(e.$wrapperEl[0], { attributes: !1 }));
          }
        },
        destroy: function () {
          (this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
            (this.observer.observers = []));
        },
      },
      y = {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create: function () {
          U.extend(this, {
            observer: {
              init: g.init.bind(this),
              attach: g.attach.bind(this),
              destroy: g.destroy.bind(this),
              observers: [],
            },
          });
        },
        on: {
          init: function () {
            this.observer.init();
          },
          destroy: function () {
            this.observer.destroy();
          },
        },
      },
      b = {
        update: function (e) {
          var t,
            i = this,
            s = i.params,
            o = s.slidesPerView,
            n = s.slidesPerGroup,
            s = s.centeredSlides,
            r = i.params.virtual,
            a = r.addSlidesBefore,
            r = r.addSlidesAfter,
            l = i.virtual,
            h = l.from,
            c = l.to,
            d = l.slides,
            p = l.slidesGrid,
            u = l.renderSlide,
            l = l.offset,
            f = (i.updateActiveIndex(), i.activeIndex || 0),
            m = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top",
            s = s
              ? ((t = Math.floor(o / 2) + n + a), Math.floor(o / 2) + n + r)
              : ((t = o + (n - 1) + a), n + r),
            g = Math.max((f || 0) - s, 0),
            v = Math.min((f || 0) + t, d.length - 1),
            o = (i.slidesGrid[g] || 0) - (i.slidesGrid[0] || 0);
          function y() {
            (i.updateSlides(),
              i.updateProgress(),
              i.updateSlidesClasses(),
              i.lazy && i.params.lazy.enabled && i.lazy.load());
          }
          if (
            (U.extend(i.virtual, {
              from: g,
              to: v,
              offset: o,
              slidesGrid: i.slidesGrid,
            }),
            h !== g || c !== v || e)
          ) {
            if (i.params.virtual.renderExternal)
              i.params.virtual.renderExternal.call(i, {
                offset: o,
                from: g,
                to: v,
                slides: (function () {
                  for (var e = [], t = g; t <= v; t += 1) e.push(d[t]);
                  return e;
                })(),
              });
            else {
              var b = [],
                w = [];
              if (e) i.$wrapperEl.find("." + i.params.slideClass).remove();
              else
                for (var T = h; T <= c; T += 1)
                  (T < g || v < T) &&
                    i.$wrapperEl
                      .find(
                        "." +
                          i.params.slideClass +
                          '[data-swiper-slide-index="' +
                          T +
                          '"]',
                      )
                      .remove();
              for (var S = 0; S < d.length; S += 1)
                g <= S &&
                  S <= v &&
                  (void 0 === c || e
                    ? w.push(S)
                    : (c < S && w.push(S), S < h && b.push(S)));
              (w.forEach(function (e) {
                i.$wrapperEl.append(u(d[e], e));
              }),
                b
                  .sort(function (e, t) {
                    return t - e;
                  })
                  .forEach(function (e) {
                    i.$wrapperEl.prepend(u(d[e], e));
                  }),
                i.$wrapperEl.children(".swiper-slide").css(m, o + "px"));
            }
            y();
          } else
            (i.slidesGrid !== p && o !== l && i.slides.css(m, o + "px"),
              i.updateProgress());
        },
        renderSlide: function (e, t) {
          var i = this,
            s = i.params.virtual;
          return s.cache && i.virtual.cache[t]
            ? i.virtual.cache[t]
            : ((e = s.renderSlide
                ? x(s.renderSlide.call(i, e, t))
                : x(
                    '<div class="' +
                      i.params.slideClass +
                      '" data-swiper-slide-index="' +
                      t +
                      '">' +
                      e +
                      "</div>",
                  )).attr("data-swiper-slide-index") ||
                e.attr("data-swiper-slide-index", t),
              s.cache && (i.virtual.cache[t] = e),
              e);
        },
        appendSlide: function (e) {
          if ("object" == typeof e && "length" in e)
            for (var t = 0; t < e.length; t += 1)
              e[t] && this.virtual.slides.push(e[t]);
          else this.virtual.slides.push(e);
          this.virtual.update(!0);
        },
        prependSlide: function (e) {
          var s,
            o,
            t = this,
            i = t.activeIndex,
            n = i + 1,
            r = 1;
          if (Array.isArray(e)) {
            for (var a = 0; a < e.length; a += 1)
              e[a] && t.virtual.slides.unshift(e[a]);
            ((n = i + e.length), (r = e.length));
          } else t.virtual.slides.unshift(e);
          (t.params.virtual.cache &&
            ((s = t.virtual.cache),
            (o = {}),
            Object.keys(s).forEach(function (e) {
              var t = s[e],
                i = t.attr("data-swiper-slide-index");
              (i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
                (o[parseInt(e, 10) + r] = t));
            }),
            (t.virtual.cache = o)),
            t.virtual.update(!0),
            t.slideTo(n, 0));
        },
        removeSlide: function (e) {
          var t = this;
          if (null != e) {
            var i = t.activeIndex;
            if (Array.isArray(e))
              for (var s = e.length - 1; 0 <= s; --s)
                (t.virtual.slides.splice(e[s], 1),
                  t.params.virtual.cache && delete t.virtual.cache[e[s]],
                  e[s] < i && --i,
                  (i = Math.max(i, 0)));
            else
              (t.virtual.slides.splice(e, 1),
                t.params.virtual.cache && delete t.virtual.cache[e],
                e < i && --i,
                (i = Math.max(i, 0)));
            (t.virtual.update(!0), t.slideTo(i, 0));
          }
        },
        removeAllSlides: function () {
          var e = this;
          ((e.virtual.slides = []),
            e.params.virtual.cache && (e.virtual.cache = {}),
            e.virtual.update(!0),
            e.slideTo(0, 0));
        },
      },
      w = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        },
        create: function () {
          var e = this;
          U.extend(e, {
            virtual: {
              update: b.update.bind(e),
              appendSlide: b.appendSlide.bind(e),
              prependSlide: b.prependSlide.bind(e),
              removeSlide: b.removeSlide.bind(e),
              removeAllSlides: b.removeAllSlides.bind(e),
              renderSlide: b.renderSlide.bind(e),
              slides: e.params.virtual.slides,
              cache: {},
            },
          });
        },
        on: {
          beforeInit: function () {
            var e,
              t = this;
            t.params.virtual.enabled &&
              (t.classNames.push(t.params.containerModifierClass + "virtual"),
              U.extend(t.params, (e = { watchSlidesProgress: !0 })),
              U.extend(t.originalParams, e),
              t.params.initialSlide || t.virtual.update());
          },
          setTranslate: function () {
            this.params.virtual.enabled && this.virtual.update();
          },
        },
      },
      Z = {
        handle: function (e) {
          var t = this,
            i = t.rtlTranslate,
            s =
              (e = e.originalEvent ? e.originalEvent : e).keyCode || e.charCode,
            o = t.params.keyboard.pageUpDown,
            n = o && 33 === s,
            o = o && 34 === s,
            r = 37 === s,
            a = 39 === s,
            l = 38 === s,
            h = 40 === s;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && a) || (t.isVertical() && h) || o)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && r) || (t.isVertical() && l) || n)
          )
            return !1;
          if (!(
            e.shiftKey ||
            e.altKey ||
            e.ctrlKey ||
            e.metaKey ||
            (v.activeElement &&
              v.activeElement.nodeName &&
              ("input" === v.activeElement.nodeName.toLowerCase() ||
                "textarea" === v.activeElement.nodeName.toLowerCase()))
          )) {
            if (
              t.params.keyboard.onlyInViewport &&
              (n || o || r || a || l || h)
            ) {
              var c = !1;
              if (
                0 < t.$el.parents("." + t.params.slideClass).length &&
                0 === t.$el.parents("." + t.params.slideActiveClass).length
              )
                return;
              for (
                var d = K.innerWidth,
                  p = K.innerHeight,
                  u = t.$el.offset(),
                  f =
                    (i && (u.left -= t.$el[0].scrollLeft),
                    [
                      [u.left, u.top],
                      [u.left + t.width, u.top],
                      [u.left, u.top + t.height],
                      [u.left + t.width, u.top + t.height],
                    ]),
                  m = 0;
                m < f.length;
                m += 1
              ) {
                var g = f[m];
                0 <= g[0] && g[0] <= d && 0 <= g[1] && g[1] <= p && (c = !0);
              }
              if (!c) return;
            }
            (t.isHorizontal()
              ? ((n || o || r || a) &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : (e.returnValue = !1)),
                (((o || a) && !i) || ((n || r) && i)) && t.slideNext(),
                (((n || r) && !i) || ((o || a) && i)) && t.slidePrev())
              : ((n || o || l || h) &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : (e.returnValue = !1)),
                (o || h) && t.slideNext(),
                (n || l) && t.slidePrev()),
              t.emit("keyPress", s));
          }
        },
        enable: function () {
          this.keyboard.enabled ||
            (x(v).on("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !0));
        },
        disable: function () {
          this.keyboard.enabled &&
            (x(v).off("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !1));
        },
      },
      S = {
        name: "keyboard",
        params: {
          keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
        },
        create: function () {
          U.extend(this, {
            keyboard: {
              enabled: !1,
              enable: Z.enable.bind(this),
              disable: Z.disable.bind(this),
              handle: Z.handle.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.keyboard.enabled && this.keyboard.enable();
          },
          destroy: function () {
            this.keyboard.enabled && this.keyboard.disable();
          },
        },
      };
    var E = {
        lastScrollTime: U.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function () {
          return -1 < K.navigator.userAgent.indexOf("firefox")
            ? "DOMMouseScroll"
            : ((i = (t = "onwheel") in v) ||
                ((e = v.createElement("div")).setAttribute(t, "return;"),
                (i = "function" == typeof e[t])),
              (i =
                !i &&
                v.implementation &&
                v.implementation.hasFeature &&
                !0 !== v.implementation.hasFeature("", "")
                  ? v.implementation.hasFeature("Events.wheel", "3.0")
                  : i)
                ? "wheel"
                : "mousewheel");
          var e, t, i;
        },
        normalize: function (e) {
          var t = 0,
            i = 0,
            s = 0,
            o = 0;
          return (
            "detail" in e && (i = e.detail),
            "wheelDelta" in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
            "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
            (s = 10 * t),
            (o = 10 * i),
            "deltaY" in e && (o = e.deltaY),
            "deltaX" in e && (s = e.deltaX),
            e.shiftKey && !s && ((s = o), (o = 0)),
            (s || o) &&
              e.deltaMode &&
              (1 === e.deltaMode
                ? ((s *= 40), (o *= 40))
                : ((s *= 800), (o *= 800))),
            {
              spinX: (t = s && !t ? (s < 1 ? -1 : 1) : t),
              spinY: (i = o && !i ? (o < 1 ? -1 : 1) : i),
              pixelX: s,
              pixelY: o,
            }
          );
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0;
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1;
        },
        handle: function (e) {
          var t = e,
            i = this,
            s = i.params.mousewheel,
            o = (i.params.cssMode && t.preventDefault(), i.$el);
          if (
            ("container" !== i.params.mousewheel.eventsTarged &&
              (o = x(i.params.mousewheel.eventsTarged)),
            !i.mouseEntered && !o[0].contains(t.target) && !s.releaseOnEdges)
          )
            return !0;
          t.originalEvent && (t = t.originalEvent);
          var o = 0,
            n = i.rtlTranslate ? -1 : 1,
            r = E.normalize(t);
          if (s.forceToAxis)
            if (i.isHorizontal()) {
              if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
              o = -r.pixelX * n;
            } else {
              if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
              o = -r.pixelY;
            }
          else
            o =
              Math.abs(r.pixelX) > Math.abs(r.pixelY)
                ? -r.pixelX * n
                : -r.pixelY;
          if (0 === o) return !0;
          if ((s.invert && (o = -o), i.params.freeMode)) {
            var a = {
                time: U.now(),
                delta: Math.abs(o),
                direction: Math.sign(o),
              },
              n = i.mousewheel.lastEventBeforeSnap,
              r =
                n &&
                a.time < n.time + 500 &&
                a.delta <= n.delta &&
                a.direction === n.direction;
            if (!r) {
              ((i.mousewheel.lastEventBeforeSnap = void 0),
                i.params.loop && i.loopFix());
              var l,
                h,
                n = i.getTranslate() + o * s.sensitivity,
                s = i.isBeginning,
                c = i.isEnd;
              if (
                ((n = n >= i.minTranslate() ? i.minTranslate() : n) <=
                  i.maxTranslate() && (n = i.maxTranslate()),
                i.setTransition(0),
                i.setTranslate(n),
                i.updateProgress(),
                i.updateActiveIndex(),
                i.updateSlidesClasses(),
                ((!s && i.isBeginning) || (!c && i.isEnd)) &&
                  i.updateSlidesClasses(),
                i.params.freeModeSticky &&
                  (clearTimeout(i.mousewheel.timeout),
                  (i.mousewheel.timeout = void 0),
                  15 <= (l = i.mousewheel.recentWheelEvents).length &&
                    l.shift(),
                  (s = l.length ? l[l.length - 1] : void 0),
                  (c = l[0]),
                  l.push(a),
                  s && (a.delta > s.delta || a.direction !== s.direction)
                    ? l.splice(0)
                    : 15 <= l.length &&
                      a.time - c.time < 500 &&
                      1 <= c.delta - a.delta &&
                      a.delta <= 6 &&
                      ((h = 0 < o ? 0.8 : 0.2),
                      (i.mousewheel.lastEventBeforeSnap = a),
                      l.splice(0),
                      (i.mousewheel.timeout = U.nextTick(function () {
                        i.slideToClosest(i.params.speed, !0, void 0, h);
                      }, 0))),
                  i.mousewheel.timeout ||
                    (i.mousewheel.timeout = U.nextTick(function () {
                      ((i.mousewheel.lastEventBeforeSnap = a),
                        l.splice(0),
                        i.slideToClosest(i.params.speed, !0, void 0, 0.5));
                    }, 500))),
                r || i.emit("scroll", t),
                i.params.autoplay &&
                  i.params.autoplayDisableOnInteraction &&
                  i.autoplay.stop(),
                n === i.minTranslate() || n === i.maxTranslate())
              )
                return !0;
            }
          } else {
            ((s = {
              time: U.now(),
              delta: Math.abs(o),
              direction: Math.sign(o),
              raw: e,
            }),
              (c = i.mousewheel.recentWheelEvents),
              (r =
                (2 <= c.length && c.shift(),
                c.length ? c[c.length - 1] : void 0)));
            if (
              (c.push(s),
              (!r ||
                s.direction !== r.direction ||
                s.delta > r.delta ||
                s.time > r.time + 150) &&
                i.mousewheel.animateSlider(s),
              i.mousewheel.releaseScroll(s))
            )
              return !0;
          }
          return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
            !1
          );
        },
        animateSlider: function (e) {
          var t = this;
          return (
            (6 <= e.delta && U.now() - t.mousewheel.lastScrollTime < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), t.emit("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), t.emit("scroll", e.raw)),
            (t.mousewheel.lastScrollTime = new K.Date().getTime()),
            !1)
          );
        },
        releaseScroll: function (e) {
          var t = this,
            i = t.params.mousewheel;
          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges)
            return !0;
          return !1;
        },
        enable: function () {
          var e = this,
            t = E.event();
          if (e.params.cssMode)
            e.wrapperEl.removeEventListener(t, e.mousewheel.handle);
          else {
            if (!t) return !1;
            if (e.mousewheel.enabled) return !1;
            var i = e.$el;
            ((i =
              "container" !== e.params.mousewheel.eventsTarged
                ? x(e.params.mousewheel.eventsTarged)
                : i).on("mouseenter", e.mousewheel.handleMouseEnter),
              i.on("mouseleave", e.mousewheel.handleMouseLeave),
              i.on(t, e.mousewheel.handle),
              (e.mousewheel.enabled = !0));
          }
          return !0;
        },
        disable: function () {
          var e = this,
            t = E.event();
          if (e.params.cssMode)
            e.wrapperEl.addEventListener(t, e.mousewheel.handle);
          else {
            if (!t) return !1;
            if (!e.mousewheel.enabled) return !1;
            var i = e.$el;
            ((i =
              "container" !== e.params.mousewheel.eventsTarged
                ? x(e.params.mousewheel.eventsTarged)
                : i).off(t, e.mousewheel.handle),
              (e.mousewheel.enabled = !1));
          }
          return !0;
        },
      },
      C = {
        update: function () {
          var e,
            t,
            i = this,
            s = i.params.navigation;
          i.params.loop ||
            ((e = (t = i.navigation).$nextEl),
            (t = t.$prevEl) &&
              0 < t.length &&
              (i.isBeginning
                ? t.addClass(s.disabledClass)
                : t.removeClass(s.disabledClass),
              t[
                i.params.watchOverflow && i.isLocked
                  ? "addClass"
                  : "removeClass"
              ](s.lockClass)),
            e &&
              0 < e.length &&
              (i.isEnd
                ? e.addClass(s.disabledClass)
                : e.removeClass(s.disabledClass),
              e[
                i.params.watchOverflow && i.isLocked
                  ? "addClass"
                  : "removeClass"
              ](s.lockClass)));
        },
        onPrevClick: function (e) {
          (e.preventDefault(),
            (this.isBeginning && !this.params.loop) || this.slidePrev());
        },
        onNextClick: function (e) {
          (e.preventDefault(),
            (this.isEnd && !this.params.loop) || this.slideNext());
        },
        init: function () {
          var e,
            t,
            i = this,
            s = i.params.navigation;
          (s.nextEl || s.prevEl) &&
            (s.nextEl &&
              ((e = x(s.nextEl)), i.params.uniqueNavElements) &&
              "string" == typeof s.nextEl &&
              1 < e.length &&
              1 === i.$el.find(s.nextEl).length &&
              (e = i.$el.find(s.nextEl)),
            s.prevEl &&
              ((t = x(s.prevEl)), i.params.uniqueNavElements) &&
              "string" == typeof s.prevEl &&
              1 < t.length &&
              1 === i.$el.find(s.prevEl).length &&
              (t = i.$el.find(s.prevEl)),
            e && 0 < e.length && e.on("click", i.navigation.onNextClick),
            t && 0 < t.length && t.on("click", i.navigation.onPrevClick),
            U.extend(i.navigation, {
              $nextEl: e,
              nextEl: e && e[0],
              $prevEl: t,
              prevEl: t && t[0],
            }));
        },
        destroy: function () {
          var e = this,
            t = e.navigation,
            i = t.$nextEl,
            t = t.$prevEl;
          (i &&
            i.length &&
            (i.off("click", e.navigation.onNextClick),
            i.removeClass(e.params.navigation.disabledClass)),
            t &&
              t.length &&
              (t.off("click", e.navigation.onPrevClick),
              t.removeClass(e.params.navigation.disabledClass)));
        },
      },
      P = {
        update: function () {
          var e = this,
            t = e.rtl,
            s = e.params.pagination;
          if (
            s.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var o,
              i = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides
                .length,
              n = e.pagination.$el,
              r = e.params.loop
                ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((o = Math.ceil(
                    (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup,
                  )) >
                    i - 1 - 2 * e.loopedSlides && (o -= i - 2 * e.loopedSlides),
                  r - 1 < o && (o -= r),
                  o < 0 && "bullets" !== e.params.paginationType && (o = r + o))
                : (o =
                    void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              "bullets" === s.type &&
                e.pagination.bullets &&
                0 < e.pagination.bullets.length)
            ) {
              var a,
                l,
                h,
                c = e.pagination.bullets;
              if (
                (s.dynamicBullets &&
                  ((e.pagination.bulletSize = c
                    .eq(0)
                    [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  n.css(
                    e.isHorizontal() ? "width" : "height",
                    e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px",
                  ),
                  1 < s.dynamicMainBullets &&
                    void 0 !== e.previousIndex &&
                    ((e.pagination.dynamicBulletIndex += o - e.previousIndex),
                    e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1
                      ? (e.pagination.dynamicBulletIndex =
                          s.dynamicMainBullets - 1)
                      : e.pagination.dynamicBulletIndex < 0 &&
                        (e.pagination.dynamicBulletIndex = 0)),
                  (a = o - e.pagination.dynamicBulletIndex),
                  (h =
                    ((l = a + (Math.min(c.length, s.dynamicMainBullets) - 1)) +
                      a) /
                    2)),
                c.removeClass(
                  s.bulletActiveClass +
                    " " +
                    s.bulletActiveClass +
                    "-next " +
                    s.bulletActiveClass +
                    "-next-next " +
                    s.bulletActiveClass +
                    "-prev " +
                    s.bulletActiveClass +
                    "-prev-prev " +
                    s.bulletActiveClass +
                    "-main",
                ),
                1 < n.length)
              )
                c.each(function (e, t) {
                  var t = x(t),
                    i = t.index();
                  (i === o && t.addClass(s.bulletActiveClass),
                    s.dynamicBullets &&
                      (a <= i &&
                        i <= l &&
                        t.addClass(s.bulletActiveClass + "-main"),
                      i === a &&
                        t
                          .prev()
                          .addClass(s.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(s.bulletActiveClass + "-prev-prev"),
                      i === l) &&
                      t
                        .next()
                        .addClass(s.bulletActiveClass + "-next")
                        .next()
                        .addClass(s.bulletActiveClass + "-next-next"));
                });
              else {
                var i = c.eq(o),
                  d = i.index();
                if ((i.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                  for (var i = c.eq(a), p = c.eq(l), u = a; u <= l; u += 1)
                    c.eq(u).addClass(s.bulletActiveClass + "-main");
                  if (e.params.loop)
                    if (d >= c.length - s.dynamicMainBullets) {
                      for (var f = s.dynamicMainBullets; 0 <= f; --f)
                        c.eq(c.length - f).addClass(
                          s.bulletActiveClass + "-main",
                        );
                      c.eq(c.length - s.dynamicMainBullets - 1).addClass(
                        s.bulletActiveClass + "-prev",
                      );
                    } else
                      (i
                        .prev()
                        .addClass(s.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(s.bulletActiveClass + "-prev-prev"),
                        p
                          .next()
                          .addClass(s.bulletActiveClass + "-next")
                          .next()
                          .addClass(s.bulletActiveClass + "-next-next"));
                  else
                    (i
                      .prev()
                      .addClass(s.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(s.bulletActiveClass + "-prev-prev"),
                      p
                        .next()
                        .addClass(s.bulletActiveClass + "-next")
                        .next()
                        .addClass(s.bulletActiveClass + "-next-next"));
                }
              }
              s.dynamicBullets &&
                ((d = Math.min(c.length, s.dynamicMainBullets + 4)),
                (i =
                  (e.pagination.bulletSize * d - e.pagination.bulletSize) / 2 -
                  h * e.pagination.bulletSize),
                (p = t ? "right" : "left"),
                c.css(e.isHorizontal() ? p : "top", i + "px"));
            }
            ("fraction" === s.type &&
              (n
                .find("." + s.currentClass)
                .text(s.formatFractionCurrent(o + 1)),
              n.find("." + s.totalClass).text(s.formatFractionTotal(r))),
              "progressbar" === s.type &&
                ((d = s.progressbarOpposite
                  ? e.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : e.isHorizontal()
                    ? "horizontal"
                    : "vertical"),
                (h = (o + 1) / r),
                (p = t = 1),
                "horizontal" === d ? (t = h) : (p = h),
                n
                  .find("." + s.progressbarFillClass)
                  .transform(
                    "translate3d(0,0,0) scaleX(" + t + ") scaleY(" + p + ")",
                  )
                  .transition(e.params.speed)),
              "custom" === s.type && s.renderCustom
                ? (n.html(s.renderCustom(e, o + 1, r)),
                  e.emit("paginationRender", e, n[0]))
                : e.emit("paginationUpdate", e, n[0]),
              n[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](s.lockClass));
          }
        },
        render: function () {
          var e = this,
            t = e.params.pagination;
          if (
            t.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var i = (e.virtual && e.params.virtual.enabled ? e.virtual : e)
                .slides.length,
              s = e.pagination.$el,
              o = "";
            if ("bullets" === t.type) {
              for (
                var n = e.params.loop
                    ? Math.ceil(
                        (i - 2 * e.loopedSlides) / e.params.slidesPerGroup,
                      )
                    : e.snapGrid.length,
                  r = 0;
                r < n;
                r += 1
              )
                t.renderBullet
                  ? (o += t.renderBullet.call(e, r, t.bulletClass))
                  : (o +=
                      "<" +
                      t.bulletElement +
                      ' class="' +
                      t.bulletClass +
                      '"></' +
                      t.bulletElement +
                      ">");
              (s.html(o), (e.pagination.bullets = s.find("." + t.bulletClass)));
            }
            ("fraction" === t.type &&
              ((o = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : '<span class="' +
                  t.currentClass +
                  '"></span> / <span class="' +
                  t.totalClass +
                  '"></span>'),
              s.html(o)),
              "progressbar" === t.type &&
                ((o = t.renderProgressbar
                  ? t.renderProgressbar.call(e, t.progressbarFillClass)
                  : '<span class="' + t.progressbarFillClass + '"></span>'),
                s.html(o)),
              "custom" !== t.type &&
                e.emit("paginationRender", e.pagination.$el[0]));
          }
        },
        init: function () {
          var e,
            t = this,
            i = t.params.pagination;
          i.el &&
            0 !== (e = x(i.el)).length &&
            (t.params.uniqueNavElements &&
              "string" == typeof i.el &&
              1 < e.length &&
              (e = t.$el.find(i.el)),
            "bullets" === i.type && i.clickable && e.addClass(i.clickableClass),
            e.addClass(i.modifierClass + i.type),
            "bullets" === i.type &&
              i.dynamicBullets &&
              (e.addClass("" + i.modifierClass + i.type + "-dynamic"),
              (t.pagination.dynamicBulletIndex = 0),
              i.dynamicMainBullets < 1) &&
              (i.dynamicMainBullets = 1),
            "progressbar" === i.type &&
              i.progressbarOpposite &&
              e.addClass(i.progressbarOppositeClass),
            i.clickable &&
              e.on("click", "." + i.bulletClass, function (e) {
                e.preventDefault();
                e = x(this).index() * t.params.slidesPerGroup;
                (t.params.loop && (e += t.loopedSlides), t.slideTo(e));
              }),
            U.extend(t.pagination, { $el: e, el: e[0] }));
        },
        destroy: function () {
          var e,
            t = this,
            i = t.params.pagination;
          i.el &&
            t.pagination.el &&
            t.pagination.$el &&
            0 !== t.pagination.$el.length &&
            ((e = t.pagination.$el).removeClass(i.hiddenClass),
            e.removeClass(i.modifierClass + i.type),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass(i.bulletActiveClass),
            i.clickable) &&
            e.off("click", "." + i.bulletClass);
        },
      },
      M = {
        setTranslate: function () {
          var e,
            t,
            i,
            s,
            o,
            n,
            r,
            a,
            l = this;
          l.params.scrollbar.el &&
            l.scrollbar.el &&
            ((n = l.scrollbar),
            (e = l.rtlTranslate),
            (a = l.progress),
            (t = n.dragSize),
            (i = n.trackSize),
            (s = n.$dragEl),
            (o = n.$el),
            (n = l.params.scrollbar),
            (a = (i - (r = t)) * a),
            e
              ? 0 < (a = -a)
                ? ((r = t - a), (a = 0))
                : i < -a + t && (r = i + a)
              : a < 0
                ? ((r = t + a), (a = 0))
                : i < a + t && (r = i - a),
            l.isHorizontal()
              ? (s.transform("translate3d(" + a + "px, 0, 0)"),
                (s[0].style.width = r + "px"))
              : (s.transform("translate3d(0px, " + a + "px, 0)"),
                (s[0].style.height = r + "px")),
            n.hide) &&
            (clearTimeout(l.scrollbar.timeout),
            (o[0].style.opacity = 1),
            (l.scrollbar.timeout = setTimeout(function () {
              ((o[0].style.opacity = 0), o.transition(400));
            }, 1e3)));
        },
        setTransition: function (e) {
          this.params.scrollbar.el &&
            this.scrollbar.el &&
            this.scrollbar.$dragEl.transition(e);
        },
        updateSize: function () {
          var e,
            t,
            i,
            s,
            o,
            n,
            r,
            a = this;
          a.params.scrollbar.el &&
            a.scrollbar.el &&
            ((t = (e = a.scrollbar).$dragEl),
            (i = e.$el),
            (t[0].style.width = ""),
            (t[0].style.height = ""),
            (s = a.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight),
            (n = (o = a.size / a.virtualSize) * (s / a.size)),
            (r =
              "auto" === a.params.scrollbar.dragSize
                ? s * o
                : parseInt(a.params.scrollbar.dragSize, 10)),
            a.isHorizontal()
              ? (t[0].style.width = r + "px")
              : (t[0].style.height = r + "px"),
            (i[0].style.display = 1 <= o ? "none" : ""),
            a.params.scrollbar.hide && (i[0].style.opacity = 0),
            U.extend(e, {
              trackSize: s,
              divider: o,
              moveDivider: n,
              dragSize: r,
            }),
            e.$el[
              a.params.watchOverflow && a.isLocked ? "addClass" : "removeClass"
            ](a.params.scrollbar.lockClass));
        },
        getPointerPosition: function (e) {
          return this.isHorizontal()
            ? ("touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0]
                : e
              ).clientX
            : ("touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0]
                : e
              ).clientY;
        },
        setDragPosition: function (e) {
          var t = this,
            i = t.scrollbar,
            s = t.rtlTranslate,
            o = i.$el,
            n = i.dragSize,
            r = i.trackSize,
            a = i.dragStartPos,
            i =
              (i.getPointerPosition(e) -
                o.offset()[t.isHorizontal() ? "left" : "top"] -
                (null !== a ? a : n / 2)) /
              (r - n),
            e =
              ((i = Math.max(Math.min(i, 1), 0)),
              s && (i = 1 - i),
              t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * i);
          (t.updateProgress(e),
            t.setTranslate(e),
            t.updateActiveIndex(),
            t.updateSlidesClasses());
        },
        onDragStart: function (e) {
          var t = this,
            i = t.params.scrollbar,
            s = t.scrollbar,
            o = t.$wrapperEl,
            n = s.$el,
            r = s.$dragEl;
          ((t.scrollbar.isTouched = !0),
            (t.scrollbar.dragStartPos =
              e.target === r[0] || e.target === r
                ? s.getPointerPosition(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            o.transition(100),
            r.transition(100),
            s.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            n.transition(0),
            i.hide && n.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            t.emit("scrollbarDragStart", e));
        },
        onDragMove: function (e) {
          var t = this.scrollbar,
            i = this.$wrapperEl,
            s = t.$el,
            o = t.$dragEl;
          this.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            t.setDragPosition(e),
            i.transition(0),
            s.transition(0),
            o.transition(0),
            this.emit("scrollbarDragMove", e));
        },
        onDragEnd: function (e) {
          var t = this,
            i = t.params.scrollbar,
            s = t.scrollbar,
            o = t.$wrapperEl,
            n = s.$el;
          t.scrollbar.isTouched &&
            ((t.scrollbar.isTouched = !1),
            t.params.cssMode &&
              (t.$wrapperEl.css("scroll-snap-type", ""), o.transition("")),
            i.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = U.nextTick(function () {
                (n.css("opacity", 0), n.transition(400));
              }, 1e3))),
            t.emit("scrollbarDragEnd", e),
            i.snapOnRelease) &&
            t.slideToClosest();
        },
        enableDraggable: function () {
          var e,
            t,
            i,
            s,
            o,
            n = this;
          n.params.scrollbar.el &&
            ((i = n.scrollbar),
            (e = n.touchEventsTouch),
            (t = n.touchEventsDesktop),
            (o = n.params),
            (i = i.$el[0]),
            (s = !(!T.passiveListener || !o.passiveListeners) && {
              passive: !1,
              capture: !1,
            }),
            (o = !(!T.passiveListener || !o.passiveListeners) && {
              passive: !0,
              capture: !1,
            }),
            T.touch
              ? (i.addEventListener(e.start, n.scrollbar.onDragStart, s),
                i.addEventListener(e.move, n.scrollbar.onDragMove, s),
                i.addEventListener(e.end, n.scrollbar.onDragEnd, o))
              : (i.addEventListener(t.start, n.scrollbar.onDragStart, s),
                v.addEventListener(t.move, n.scrollbar.onDragMove, s),
                v.addEventListener(t.end, n.scrollbar.onDragEnd, o)));
        },
        disableDraggable: function () {
          var e,
            t,
            i,
            s,
            o,
            n = this;
          n.params.scrollbar.el &&
            ((i = n.scrollbar),
            (e = n.touchEventsTouch),
            (t = n.touchEventsDesktop),
            (o = n.params),
            (i = i.$el[0]),
            (s = !(!T.passiveListener || !o.passiveListeners) && {
              passive: !1,
              capture: !1,
            }),
            (o = !(!T.passiveListener || !o.passiveListeners) && {
              passive: !0,
              capture: !1,
            }),
            T.touch
              ? (i.removeEventListener(e.start, n.scrollbar.onDragStart, s),
                i.removeEventListener(e.move, n.scrollbar.onDragMove, s),
                i.removeEventListener(e.end, n.scrollbar.onDragEnd, o))
              : (i.removeEventListener(t.start, n.scrollbar.onDragStart, s),
                v.removeEventListener(t.move, n.scrollbar.onDragMove, s),
                v.removeEventListener(t.end, n.scrollbar.onDragEnd, o)));
        },
        init: function () {
          var e,
            t,
            i,
            s,
            o = this;
          o.params.scrollbar.el &&
            ((e = o.scrollbar),
            (s = o.$el),
            (i = x((t = o.params.scrollbar).el)),
            0 ===
              (s = (i =
                o.params.uniqueNavElements &&
                "string" == typeof t.el &&
                1 < i.length &&
                1 === s.find(t.el).length
                  ? s.find(t.el)
                  : i).find("." + o.params.scrollbar.dragClass)).length &&
              ((s = x(
                '<div class="' + o.params.scrollbar.dragClass + '"></div>',
              )),
              i.append(s)),
            U.extend(e, { $el: i, el: i[0], $dragEl: s, dragEl: s[0] }),
            t.draggable) &&
            e.enableDraggable();
        },
        destroy: function () {
          this.scrollbar.disableDraggable();
        },
      },
      Q = {
        setTransform: function (e, t) {
          var i = this.rtl,
            e = x(e),
            i = i ? -1 : 1,
            s = e.attr("data-swiper-parallax") || "0",
            o = e.attr("data-swiper-parallax-x"),
            n = e.attr("data-swiper-parallax-y"),
            r = e.attr("data-swiper-parallax-scale"),
            a = e.attr("data-swiper-parallax-opacity");
          (o || n
            ? ((o = o || "0"), (n = n || "0"))
            : this.isHorizontal()
              ? ((o = s), (n = "0"))
              : ((n = s), (o = "0")),
            (o =
              0 <= o.indexOf("%")
                ? parseInt(o, 10) * t * i + "%"
                : o * t * i + "px"),
            (n =
              0 <= n.indexOf("%") ? parseInt(n, 10) * t + "%" : n * t + "px"),
            null != a &&
              ((s = a - (a - 1) * (1 - Math.abs(t))), (e[0].style.opacity = s)),
            null == r
              ? e.transform("translate3d(" + o + ", " + n + ", 0px)")
              : ((i = r - (r - 1) * (1 - Math.abs(t))),
                e.transform(
                  "translate3d(" + o + ", " + n + ", 0px) scale(" + i + ")",
                )));
        },
        setTranslate: function () {
          var s = this,
            e = s.$el,
            t = s.slides,
            o = s.progress,
            n = s.snapGrid;
          (e
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
            )
            .each(function (e, t) {
              s.parallax.setTransform(t, o);
            }),
            t.each(function (e, t) {
              var i = t.progress;
              (1 < s.params.slidesPerGroup &&
                "auto" !== s.params.slidesPerView &&
                (i += Math.ceil(e / 2) - o * (n.length - 1)),
                (i = Math.min(Math.max(i, -1), 1)),
                x(t)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
                  )
                  .each(function (e, t) {
                    s.parallax.setTransform(t, i);
                  }));
            }));
        },
        setTransition: function (s) {
          void 0 === s && (s = this.params.speed);
          this.$el
            .find(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
            )
            .each(function (e, t) {
              var t = x(t),
                i = parseInt(t.attr("data-swiper-parallax-duration"), 10) || s;
              (0 === s && (i = 0), t.transition(i));
            });
        },
      },
      J = {
        getDistanceBetweenTouches: function (e) {
          var t, i, s;
          return e.targetTouches.length < 2
            ? 1
            : ((t = e.targetTouches[0].pageX),
              (i = e.targetTouches[0].pageY),
              (s = e.targetTouches[1].pageX),
              (e = e.targetTouches[1].pageY),
              Math.sqrt(Math.pow(s - t, 2) + Math.pow(e - i, 2)));
        },
        onGestureStart: function (e) {
          var t = this,
            i = t.params.zoom,
            s = t.zoom,
            o = s.gesture;
          if (
            ((s.fakeGestureTouched = !1),
            (s.fakeGestureMoved = !1),
            !T.gestures)
          ) {
            if (
              "touchstart" !== e.type ||
              ("touchstart" === e.type && e.targetTouches.length < 2)
            )
              return;
            ((s.fakeGestureTouched = !0),
              (o.scaleStart = J.getDistanceBetweenTouches(e)));
          }
          (o.$slideEl && o.$slideEl.length) ||
          ((o.$slideEl = x(e.target).closest("." + t.params.slideClass)),
          0 === o.$slideEl.length && (o.$slideEl = t.slides.eq(t.activeIndex)),
          (o.$imageEl = o.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target",
          )),
          (o.$imageWrapEl = o.$imageEl.parent("." + i.containerClass)),
          (o.maxRatio = o.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
          0 !== o.$imageWrapEl.length)
            ? (o.$imageEl && o.$imageEl.transition(0), (t.zoom.isScaling = !0))
            : (o.$imageEl = void 0);
        },
        onGestureChange: function (e) {
          var t = this.params.zoom,
            i = this.zoom,
            s = i.gesture;
          if (!T.gestures) {
            if (
              "touchmove" !== e.type ||
              ("touchmove" === e.type && e.targetTouches.length < 2)
            )
              return;
            ((i.fakeGestureMoved = !0),
              (s.scaleMove = J.getDistanceBetweenTouches(e)));
          }
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            ((i.scale = T.gestures
              ? e.scale * i.currentScale
              : (s.scaleMove / s.scaleStart) * i.currentScale),
            i.scale > s.maxRatio &&
              (i.scale =
                s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
            i.scale < t.minRatio &&
              (i.scale =
                t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
            s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
        },
        onGestureEnd: function (e) {
          var t = this.params.zoom,
            i = this.zoom,
            s = i.gesture;
          if (!T.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
            if (
              "touchend" !== e.type ||
              ("touchend" === e.type &&
                e.changedTouches.length < 2 &&
                !c.android)
            )
              return;
            ((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1));
          }
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
            s.$imageEl
              .transition(this.params.speed)
              .transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            (i.currentScale = i.scale),
            (i.isScaling = !1),
            1 === i.scale) &&
            (s.$slideEl = void 0);
        },
        onTouchStart: function (e) {
          var t = this.zoom,
            i = t.gesture,
            t = t.image;
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            !t.isTouched &&
            (c.android && e.cancelable && e.preventDefault(),
            (t.isTouched = !0),
            (t.touchesStart.x = (
              "touchstart" === e.type ? e.targetTouches[0] : e
            ).pageX),
            (t.touchesStart.y = (
              "touchstart" === e.type ? e.targetTouches[0] : e
            ).pageY));
        },
        onTouchMove: function (e) {
          var t = this,
            i = t.zoom,
            s = i.gesture,
            o = i.image,
            n = i.velocity;
          if (
            s.$imageEl &&
            0 !== s.$imageEl.length &&
            ((t.allowClick = !1), o.isTouched) &&
            s.$slideEl
          ) {
            o.isMoved ||
              ((o.width = s.$imageEl[0].offsetWidth),
              (o.height = s.$imageEl[0].offsetHeight),
              (o.startX = U.getTranslate(s.$imageWrapEl[0], "x") || 0),
              (o.startY = U.getTranslate(s.$imageWrapEl[0], "y") || 0),
              (s.slideWidth = s.$slideEl[0].offsetWidth),
              (s.slideHeight = s.$slideEl[0].offsetHeight),
              s.$imageWrapEl.transition(0),
              t.rtl && ((o.startX = -o.startX), (o.startY = -o.startY)));
            var r = o.width * i.scale,
              a = o.height * i.scale;
            if (!(r < s.slideWidth && a < s.slideHeight)) {
              if (
                ((o.minX = Math.min(s.slideWidth / 2 - r / 2, 0)),
                (o.maxX = -o.minX),
                (o.minY = Math.min(s.slideHeight / 2 - a / 2, 0)),
                (o.maxY = -o.minY),
                (o.touchesCurrent.x = (
                  "touchmove" === e.type ? e.targetTouches[0] : e
                ).pageX),
                (o.touchesCurrent.y = (
                  "touchmove" === e.type ? e.targetTouches[0] : e
                ).pageY),
                !o.isMoved && !i.isScaling)
              ) {
                if (
                  t.isHorizontal() &&
                  ((Math.floor(o.minX) === Math.floor(o.startX) &&
                    o.touchesCurrent.x < o.touchesStart.x) ||
                    (Math.floor(o.maxX) === Math.floor(o.startX) &&
                      o.touchesCurrent.x > o.touchesStart.x))
                )
                  return void (o.isTouched = !1);
                if (
                  !t.isHorizontal() &&
                  ((Math.floor(o.minY) === Math.floor(o.startY) &&
                    o.touchesCurrent.y < o.touchesStart.y) ||
                    (Math.floor(o.maxY) === Math.floor(o.startY) &&
                      o.touchesCurrent.y > o.touchesStart.y))
                )
                  return void (o.isTouched = !1);
              }
              (e.cancelable && e.preventDefault(),
                e.stopPropagation(),
                (o.isMoved = !0),
                (o.currentX = o.touchesCurrent.x - o.touchesStart.x + o.startX),
                (o.currentY = o.touchesCurrent.y - o.touchesStart.y + o.startY),
                o.currentX < o.minX &&
                  (o.currentX =
                    o.minX + 1 - Math.pow(o.minX - o.currentX + 1, 0.8)),
                o.currentX > o.maxX &&
                  (o.currentX =
                    o.maxX - 1 + Math.pow(o.currentX - o.maxX + 1, 0.8)),
                o.currentY < o.minY &&
                  (o.currentY =
                    o.minY + 1 - Math.pow(o.minY - o.currentY + 1, 0.8)),
                o.currentY > o.maxY &&
                  (o.currentY =
                    o.maxY - 1 + Math.pow(o.currentY - o.maxY + 1, 0.8)),
                n.prevPositionX || (n.prevPositionX = o.touchesCurrent.x),
                n.prevPositionY || (n.prevPositionY = o.touchesCurrent.y),
                n.prevTime || (n.prevTime = Date.now()),
                (n.x =
                  (o.touchesCurrent.x - n.prevPositionX) /
                  (Date.now() - n.prevTime) /
                  2),
                (n.y =
                  (o.touchesCurrent.y - n.prevPositionY) /
                  (Date.now() - n.prevTime) /
                  2),
                Math.abs(o.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
                Math.abs(o.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
                (n.prevPositionX = o.touchesCurrent.x),
                (n.prevPositionY = o.touchesCurrent.y),
                (n.prevTime = Date.now()),
                s.$imageWrapEl.transform(
                  "translate3d(" + o.currentX + "px, " + o.currentY + "px,0)",
                ));
            }
          }
        },
        onTouchEnd: function () {
          var e,
            t,
            i,
            s,
            o = this.zoom,
            n = o.gesture,
            r = o.image,
            a = o.velocity;
          n.$imageEl &&
            0 !== n.$imageEl.length &&
            (r.isTouched && r.isMoved
              ? ((r.isTouched = !1),
                (r.isMoved = !1),
                (e = a.x * (i = 300)),
                (e = r.currentX + e),
                (t = a.y * (s = 300)),
                (t = r.currentY + t),
                0 !== a.x && (i = Math.abs((e - r.currentX) / a.x)),
                0 !== a.y && (s = Math.abs((t - r.currentY) / a.y)),
                (a = Math.max(i, s)),
                (r.currentX = e),
                (r.currentY = t),
                (i = r.width * o.scale),
                (s = r.height * o.scale),
                (r.minX = Math.min(n.slideWidth / 2 - i / 2, 0)),
                (r.maxX = -r.minX),
                (r.minY = Math.min(n.slideHeight / 2 - s / 2, 0)),
                (r.maxY = -r.minY),
                (r.currentX = Math.max(Math.min(r.currentX, r.maxX), r.minX)),
                (r.currentY = Math.max(Math.min(r.currentY, r.maxY), r.minY)),
                n.$imageWrapEl
                  .transition(a)
                  .transform(
                    "translate3d(" + r.currentX + "px, " + r.currentY + "px,0)",
                  ))
              : ((r.isTouched = !1), (r.isMoved = !1)));
        },
        onTransitionEnd: function () {
          var e = this.zoom,
            t = e.gesture;
          t.$slideEl &&
            this.previousIndex !== this.activeIndex &&
            (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
            (e.scale = 1),
            (e.currentScale = 1),
            (t.$slideEl = void 0),
            (t.$imageEl = void 0),
            (t.$imageWrapEl = void 0));
        },
        toggle: function (e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in: function (e) {
          var t,
            i,
            s,
            o = this,
            n = o.zoom,
            r = o.params.zoom,
            a = n.gesture,
            l = n.image;
          (a.$slideEl ||
            (o.params.virtual && o.params.virtual.enabled && o.virtual
              ? (a.$slideEl = o.$wrapperEl.children(
                  "." + o.params.slideActiveClass,
                ))
              : (a.$slideEl = o.slides.eq(o.activeIndex)),
            (a.$imageEl = a.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target",
            )),
            (a.$imageWrapEl = a.$imageEl.parent("." + r.containerClass))),
            a.$imageEl &&
              0 !== a.$imageEl.length &&
              (a.$slideEl.addClass("" + r.zoomedSlideClass),
              (o =
                void 0 === l.touchesStart.x && e
                  ? ((t = ("touchend" === e.type ? e.changedTouches[0] : e)
                      .pageX),
                    ("touchend" === e.type ? e.changedTouches[0] : e).pageY)
                  : ((t = l.touchesStart.x), l.touchesStart.y)),
              (n.scale = a.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio),
              (n.currentScale =
                a.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio),
              e
                ? ((l = a.$slideEl[0].offsetWidth),
                  (r = a.$slideEl[0].offsetHeight),
                  (e = a.$slideEl.offset().left + l / 2 - t),
                  (t = a.$slideEl.offset().top + r / 2 - o),
                  (o = a.$imageEl[0].offsetWidth),
                  (s = a.$imageEl[0].offsetHeight),
                  (o = o * n.scale),
                  (s = s * n.scale),
                  (l = Math.min(l / 2 - o / 2, 0)),
                  (o = Math.min(r / 2 - s / 2, 0)),
                  (r = -l) < (s = (s = e * n.scale) < l ? l : s) && (s = r),
                  (e = -o) < (i = (i = t * n.scale) < o ? o : i) && (i = e))
                : (i = s = 0),
              a.$imageWrapEl
                .transition(300)
                .transform("translate3d(" + s + "px, " + i + "px,0)"),
              a.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(" + n.scale + ")")));
        },
        out: function () {
          var e = this,
            t = e.zoom,
            i = e.params.zoom,
            s = t.gesture;
          (s.$slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (s.$slideEl = e.$wrapperEl.children(
                  "." + e.params.slideActiveClass,
                ))
              : (s.$slideEl = e.slides.eq(e.activeIndex)),
            (s.$imageEl = s.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target",
            )),
            (s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass))),
            s.$imageEl &&
              0 !== s.$imageEl.length &&
              ((t.scale = 1),
              (t.currentScale = 1),
              s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              s.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              s.$slideEl.removeClass("" + i.zoomedSlideClass),
              (s.$slideEl = void 0)));
        },
        enable: function () {
          var e,
            t,
            i,
            s = this,
            o = s.zoom;
          o.enabled ||
            ((o.enabled = !0),
            (e = !(
              "touchstart" !== s.touchEvents.start ||
              !T.passiveListener ||
              !s.params.passiveListeners
            ) && { passive: !0, capture: !1 }),
            (t = !T.passiveListener || { passive: !1, capture: !0 }),
            (i = "." + s.params.slideClass),
            T.gestures
              ? (s.$wrapperEl.on("gesturestart", i, o.onGestureStart, e),
                s.$wrapperEl.on("gesturechange", i, o.onGestureChange, e),
                s.$wrapperEl.on("gestureend", i, o.onGestureEnd, e))
              : "touchstart" === s.touchEvents.start &&
                (s.$wrapperEl.on(s.touchEvents.start, i, o.onGestureStart, e),
                s.$wrapperEl.on(s.touchEvents.move, i, o.onGestureChange, t),
                s.$wrapperEl.on(s.touchEvents.end, i, o.onGestureEnd, e),
                s.touchEvents.cancel) &&
                s.$wrapperEl.on(s.touchEvents.cancel, i, o.onGestureEnd, e),
            s.$wrapperEl.on(
              s.touchEvents.move,
              "." + s.params.zoom.containerClass,
              o.onTouchMove,
              t,
            ));
        },
        disable: function () {
          var e,
            t,
            i,
            s = this,
            o = s.zoom;
          o.enabled &&
            ((s.zoom.enabled = !1),
            (e = !(
              "touchstart" !== s.touchEvents.start ||
              !T.passiveListener ||
              !s.params.passiveListeners
            ) && { passive: !0, capture: !1 }),
            (t = !T.passiveListener || { passive: !1, capture: !0 }),
            (i = "." + s.params.slideClass),
            T.gestures
              ? (s.$wrapperEl.off("gesturestart", i, o.onGestureStart, e),
                s.$wrapperEl.off("gesturechange", i, o.onGestureChange, e),
                s.$wrapperEl.off("gestureend", i, o.onGestureEnd, e))
              : "touchstart" === s.touchEvents.start &&
                (s.$wrapperEl.off(s.touchEvents.start, i, o.onGestureStart, e),
                s.$wrapperEl.off(s.touchEvents.move, i, o.onGestureChange, t),
                s.$wrapperEl.off(s.touchEvents.end, i, o.onGestureEnd, e),
                s.touchEvents.cancel) &&
                s.$wrapperEl.off(s.touchEvents.cancel, i, o.onGestureEnd, e),
            s.$wrapperEl.off(
              s.touchEvents.move,
              "." + s.params.zoom.containerClass,
              o.onTouchMove,
              t,
            ));
        },
      },
      ee = {
        loadInSlide: function (e, l) {
          void 0 === l && (l = !0);
          var h,
            c = this,
            d = c.params.lazy;
          void 0 !== e &&
            0 !== c.slides.length &&
            ((e = (h =
              c.virtual && c.params.virtual.enabled
                ? c.$wrapperEl.children(
                    "." +
                      c.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]',
                  )
                : c.slides.eq(e)).find(
              "." +
                d.elementClass +
                ":not(." +
                d.loadedClass +
                "):not(." +
                d.loadingClass +
                ")",
            )),
            0 !==
              (e =
                !h.hasClass(d.elementClass) ||
                h.hasClass(d.loadedClass) ||
                h.hasClass(d.loadingClass)
                  ? e
                  : e.add(h[0])).length) &&
            e.each(function (e, t) {
              var i = x(t),
                s = (i.addClass(d.loadingClass), i.attr("data-background")),
                o = i.attr("data-src"),
                n = i.attr("data-srcset"),
                r = i.attr("data-sizes"),
                a = i.parent("picture");
              (c.loadImage(i[0], o || s, n, r, !1, function () {
                var e, t;
                null == c ||
                  !c ||
                  (c && !c.params) ||
                  c.destroyed ||
                  (s
                    ? (i.css("background-image", 'url("' + s + '")'),
                      i.removeAttr("data-background"))
                    : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")),
                      r && (i.attr("sizes", r), i.removeAttr("data-sizes")),
                      a.length &&
                        a.children("source").each(function (e, t) {
                          t = x(t);
                          t.attr("data-srcset") &&
                            (t.attr("srcset", t.attr("data-srcset")),
                            t.removeAttr("data-srcset"));
                        }),
                      o && (i.attr("src", o), i.removeAttr("data-src"))),
                  i.addClass(d.loadedClass).removeClass(d.loadingClass),
                  h.find("." + d.preloaderClass).remove(),
                  c.params.loop &&
                    l &&
                    ((e = h.attr("data-swiper-slide-index")),
                    h.hasClass(c.params.slideDuplicateClass)
                      ? ((t = c.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            c.params.slideDuplicateClass +
                            ")",
                        )),
                        c.lazy.loadInSlide(t.index(), !1))
                      : ((t = c.$wrapperEl.children(
                          "." +
                            c.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]',
                        )),
                        c.lazy.loadInSlide(t.index(), !1))),
                  c.emit("lazyImageReady", h[0], i[0]),
                  c.params.autoHeight && c.updateAutoHeight());
              }),
                c.emit("lazyImageLoad", h[0], i[0]));
            });
        },
        load: function () {
          var i = this,
            t = i.$wrapperEl,
            s = i.params,
            o = i.slides,
            e = i.activeIndex,
            n = i.virtual && s.virtual.enabled,
            r = s.lazy,
            a = s.slidesPerView;
          function l(e) {
            if (n) {
              if (
                t.children(
                  "." + s.slideClass + '[data-swiper-slide-index="' + e + '"]',
                ).length
              )
                return 1;
            } else if (o[e]) return 1;
          }
          function h(e) {
            return n ? x(e).attr("data-swiper-slide-index") : x(e).index();
          }
          if (
            ("auto" === a && (a = 0),
            i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
            i.params.watchSlidesVisibility)
          )
            t.children("." + s.slideVisibleClass).each(function (e, t) {
              t = n ? x(t).attr("data-swiper-slide-index") : x(t).index();
              i.lazy.loadInSlide(t);
            });
          else if (1 < a)
            for (var c = e; c < e + a; c += 1) l(c) && i.lazy.loadInSlide(c);
          else i.lazy.loadInSlide(e);
          if (r.loadPrevNext)
            if (1 < a || (r.loadPrevNextAmount && 1 < r.loadPrevNextAmount)) {
              for (
                var r = r.loadPrevNextAmount,
                  d = a,
                  p = Math.min(e + d + Math.max(r, d), o.length),
                  d = Math.max(e - Math.max(d, r), 0),
                  u = e + a;
                u < p;
                u += 1
              )
                l(u) && i.lazy.loadInSlide(u);
              for (var f = d; f < e; f += 1) l(f) && i.lazy.loadInSlide(f);
            } else {
              ((r = t.children("." + s.slideNextClass)),
                (d =
                  (0 < r.length && i.lazy.loadInSlide(h(r)),
                  t.children("." + s.slidePrevClass))));
              0 < d.length && i.lazy.loadInSlide(h(d));
            }
        },
      },
      z = {
        LinearSpline: function (e, t) {
          var i,
            s,
            o,
            n,
            r,
            a = function (e, t) {
              for (s = -1, i = e.length; 1 < i - s;)
                e[(o = (i + s) >> 1)] <= t ? (s = o) : (i = o);
              return i;
            };
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((r = a(this.x, e)),
                  (n = r - 1),
                  ((e - this.x[n]) * (this.y[r] - this.y[n])) /
                    (this.x[r] - this.x[n]) +
                    this.y[n])
                : 0;
            }),
            this
          );
        },
        getInterpolateFunction: function (e) {
          var t = this;
          t.controller.spline ||
            (t.controller.spline = t.params.loop
              ? new z.LinearSpline(t.slidesGrid, e.slidesGrid)
              : new z.LinearSpline(t.snapGrid, e.snapGrid));
        },
        setTranslate: function (e, t) {
          var i,
            s,
            o = this,
            n = o.controller.control;
          function r(e) {
            var t = o.rtlTranslate ? -o.translate : o.translate;
            ("slide" === o.params.controller.by &&
              (o.controller.getInterpolateFunction(e),
              (s = -o.controller.spline.interpolate(-t))),
              (s && "container" !== o.params.controller.by) ||
                ((i =
                  (e.maxTranslate() - e.minTranslate()) /
                  (o.maxTranslate() - o.minTranslate())),
                (s = (t - o.minTranslate()) * i + e.minTranslate())),
              o.params.controller.inverse && (s = e.maxTranslate() - s),
              e.updateProgress(s),
              e.setTranslate(s, o),
              e.updateActiveIndex(),
              e.updateSlidesClasses());
          }
          if (Array.isArray(n))
            for (var a = 0; a < n.length; a += 1)
              n[a] !== t && n[a] instanceof u && r(n[a]);
          else n instanceof u && t !== n && r(n);
        },
        setTransition: function (t, e) {
          var i,
            s = this,
            o = s.controller.control;
          function n(e) {
            (e.setTransition(t, s),
              0 !== t &&
                (e.transitionStart(),
                e.params.autoHeight &&
                  U.nextTick(function () {
                    e.updateAutoHeight();
                  }),
                e.$wrapperEl.transitionEnd(function () {
                  o &&
                    (e.params.loop &&
                      "slide" === s.params.controller.by &&
                      e.loopFix(),
                    e.transitionEnd());
                })));
          }
          if (Array.isArray(o))
            for (i = 0; i < o.length; i += 1)
              o[i] !== e && o[i] instanceof u && n(o[i]);
          else o instanceof u && e !== o && n(o);
        },
      },
      te = {
        makeElFocusable: function (e) {
          return (e.attr("tabIndex", "0"), e);
        },
        makeElNotFocusable: function (e) {
          return (e.attr("tabIndex", "-1"), e);
        },
        addElRole: function (e, t) {
          return (e.attr("role", t), e);
        },
        addElLabel: function (e, t) {
          return (e.attr("aria-label", t), e);
        },
        disableEl: function (e) {
          return (e.attr("aria-disabled", !0), e);
        },
        enableEl: function (e) {
          return (e.attr("aria-disabled", !1), e);
        },
        onEnterKey: function (e) {
          var t = this,
            i = t.params.a11y;
          13 === e.keyCode &&
            ((e = x(e.target)),
            t.navigation &&
              t.navigation.$nextEl &&
              e.is(t.navigation.$nextEl) &&
              ((t.isEnd && !t.params.loop) || t.slideNext(),
              t.isEnd
                ? t.a11y.notify(i.lastSlideMessage)
                : t.a11y.notify(i.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              e.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(i.firstSlideMessage)
                : t.a11y.notify(i.prevSlideMessage)),
            t.pagination) &&
            e.is("." + t.params.pagination.bulletClass) &&
            e[0].click();
        },
        notify: function (e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation: function () {
          var e,
            t,
            i = this;
          !i.params.loop &&
            i.navigation &&
            ((e = (t = i.navigation).$nextEl),
            (t = t.$prevEl) &&
              0 < t.length &&
              (i.isBeginning
                ? (i.a11y.disableEl(t), i.a11y.makeElNotFocusable(t))
                : (i.a11y.enableEl(t), i.a11y.makeElFocusable(t))),
            e) &&
            0 < e.length &&
            (i.isEnd
              ? (i.a11y.disableEl(e), i.a11y.makeElNotFocusable(e))
              : (i.a11y.enableEl(e), i.a11y.makeElFocusable(e)));
        },
        updatePagination: function () {
          var i = this,
            s = i.params.a11y;
          i.pagination &&
            i.params.pagination.clickable &&
            i.pagination.bullets &&
            i.pagination.bullets.length &&
            i.pagination.bullets.each(function (e, t) {
              t = x(t);
              (i.a11y.makeElFocusable(t),
                i.a11y.addElRole(t, "button"),
                i.a11y.addElLabel(
                  t,
                  s.paginationBulletMessage.replace(
                    /\{\{index\}\}/,
                    t.index() + 1,
                  ),
                ));
            });
        },
        init: function () {
          var e,
            t,
            i = this,
            s = (i.$el.append(i.a11y.liveRegion), i.params.a11y);
          (i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl),
            i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl),
            e &&
              (i.a11y.makeElFocusable(e),
              i.a11y.addElRole(e, "button"),
              i.a11y.addElLabel(e, s.nextSlideMessage),
              e.on("keydown", i.a11y.onEnterKey)),
            t &&
              (i.a11y.makeElFocusable(t),
              i.a11y.addElRole(t, "button"),
              i.a11y.addElLabel(t, s.prevSlideMessage),
              t.on("keydown", i.a11y.onEnterKey)),
            i.pagination &&
              i.params.pagination.clickable &&
              i.pagination.bullets &&
              i.pagination.bullets.length &&
              i.pagination.$el.on(
                "keydown",
                "." + i.params.pagination.bulletClass,
                i.a11y.onEnterKey,
              ));
        },
        destroy: function () {
          var e,
            t,
            i = this;
          (i.a11y.liveRegion &&
            0 < i.a11y.liveRegion.length &&
            i.a11y.liveRegion.remove(),
            i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl),
            i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl),
            e && e.off("keydown", i.a11y.onEnterKey),
            t && t.off("keydown", i.a11y.onEnterKey),
            i.pagination &&
              i.params.pagination.clickable &&
              i.pagination.bullets &&
              i.pagination.bullets.length &&
              i.pagination.$el.off(
                "keydown",
                "." + i.params.pagination.bulletClass,
                i.a11y.onEnterKey,
              ));
        },
      },
      D = {
        init: function () {
          var e;
          this.params.history &&
            (K.history && K.history.pushState
              ? (((e = this.history).initialized = !0),
                (e.paths = D.getPathValues()),
                (e.paths.key || e.paths.value) &&
                  (e.scrollToSlide(
                    0,
                    e.paths.value,
                    this.params.runCallbacksOnInit,
                  ),
                  this.params.history.replaceState ||
                    K.addEventListener(
                      "popstate",
                      this.history.setHistoryPopState,
                    )))
              : ((this.params.history.enabled = !1),
                (this.params.hashNavigation.enabled = !0)));
        },
        destroy: function () {
          this.params.history.replaceState ||
            K.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function () {
          ((this.history.paths = D.getPathValues()),
            this.history.scrollToSlide(
              this.params.speed,
              this.history.paths.value,
              !1,
            ));
        },
        getPathValues: function () {
          var e = K.location.pathname
              .slice(1)
              .split("/")
              .filter(function (e) {
                return "" !== e;
              }),
            t = e.length;
          return { key: e[t - 2], value: e[t - 1] };
        },
        setHistory: function (e, t) {
          this.history.initialized &&
            this.params.history.enabled &&
            ((t = this.slides.eq(t)),
            (t = D.slugify(t.attr("data-history"))),
            K.location.pathname.includes(e) || (t = e + "/" + t),
            ((e = K.history.state) && e.value === t) ||
              (this.params.history.replaceState
                ? K.history.replaceState({ value: t }, null, t)
                : K.history.pushState({ value: t }, null, t)));
        },
        slugify: function (e) {
          return e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
        },
        scrollToSlide: function (e, t, i) {
          if (t)
            for (var s = 0, o = this.slides.length; s < o; s += 1) {
              var n = this.slides.eq(s);
              D.slugify(n.attr("data-history")) !== t ||
                n.hasClass(this.params.slideDuplicateClass) ||
                ((n = n.index()), this.slideTo(n, e, i));
            }
          else this.slideTo(0, e, i);
        },
      },
      L = {
        onHashCange: function () {
          this.emit("hashChange");
          var e = v.location.hash.replace("#", "");
          e !== this.slides.eq(this.activeIndex).attr("data-hash") &&
            void 0 !==
              (e = this.$wrapperEl
                .children(
                  "." + this.params.slideClass + '[data-hash="' + e + '"]',
                )
                .index()) &&
            this.slideTo(e);
        },
        setHash: function () {
          var e;
          this.hashNavigation.initialized &&
            this.params.hashNavigation.enabled &&
            (this.params.hashNavigation.replaceState &&
            K.history &&
            K.history.replaceState
              ? K.history.replaceState(
                  null,
                  null,
                  "#" + this.slides.eq(this.activeIndex).attr("data-hash") ||
                    "",
                )
              : ((e =
                  (e = this.slides.eq(this.activeIndex)).attr("data-hash") ||
                  e.attr("data-history")),
                (v.location.hash = e || "")),
            this.emit("hashSet"));
        },
        init: function () {
          var e = this;
          if (!(
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )) {
            e.hashNavigation.initialized = !0;
            var t = v.location.hash.replace("#", "");
            if (t)
              for (var i = 0, s = e.slides.length; i < s; i += 1) {
                var o = e.slides.eq(i);
                (o.attr("data-hash") || o.attr("data-history")) !== t ||
                  o.hasClass(e.params.slideDuplicateClass) ||
                  ((o = o.index()),
                  e.slideTo(o, 0, e.params.runCallbacksOnInit, !0));
              }
            e.params.hashNavigation.watchState &&
              x(K).on("hashchange", e.hashNavigation.onHashCange);
          }
        },
        destroy: function () {
          this.params.hashNavigation.watchState &&
            x(K).off("hashchange", this.hashNavigation.onHashCange);
        },
      },
      O = {
        run: function () {
          var e = this,
            t = e.slides.eq(e.activeIndex),
            i = e.params.autoplay.delay;
          (t.attr("data-swiper-autoplay") &&
            (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = U.nextTick(function () {
              (e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    e.slidePrev(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isBeginning
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                : e.params.loop
                  ? (e.loopFix(),
                    e.slideNext(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isEnd
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(0, e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
                e.params.cssMode && e.autoplay.running && e.autoplay.run());
            }, i)));
        },
        start: function () {
          return (
            void 0 === this.autoplay.timeout &&
            !this.autoplay.running &&
            ((this.autoplay.running = !0),
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0)
          );
        },
        stop: function () {
          return (
            !!this.autoplay.running &&
            void 0 !== this.autoplay.timeout &&
            (this.autoplay.timeout &&
              (clearTimeout(this.autoplay.timeout),
              (this.autoplay.timeout = void 0)),
            (this.autoplay.running = !1),
            this.emit("autoplayStop"),
            !0)
          );
        },
        pause: function (e) {
          var t = this;
          t.autoplay.running &&
            !t.autoplay.paused &&
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  "transitionend",
                  t.autoplay.onTransitionEnd,
                ),
                t.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  t.autoplay.onTransitionEnd,
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run()));
        },
      },
      ie = {
        setTranslate: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1) {
            var i = this.slides.eq(t),
              s = -i[0].swiperSlideOffset,
              o = (this.params.virtualTranslate || (s -= this.translate), 0),
              n =
                (this.isHorizontal() || ((o = s), (s = 0)),
                this.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(i[0].progress), 0)
                  : 1 + Math.min(Math.max(i[0].progress, -1), 0));
            i.css({ opacity: n }).transform(
              "translate3d(" + s + "px, " + o + "px, 0px)",
            );
          }
        },
        setTransition: function (e) {
          var i,
            s = this,
            t = s.slides,
            o = s.$wrapperEl;
          (t.transition(e),
            s.params.virtualTranslate &&
              0 !== e &&
              ((i = !1),
              t.transitionEnd(function () {
                if (!i && s && !s.destroyed) {
                  ((i = !0), (s.animating = !1));
                  for (
                    var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                    t < e.length;
                    t += 1
                  )
                    o.trigger(e[t]);
                }
              })));
        },
      },
      se = {
        setTranslate: function () {
          var e,
            t = this,
            i = t.$el,
            s = t.$wrapperEl,
            o = t.slides,
            n = t.width,
            r = t.height,
            a = t.rtlTranslate,
            l = t.size,
            h = t.params.cubeEffect,
            c = t.isHorizontal(),
            d = t.virtual && t.params.virtual.enabled,
            p = 0;
          h.shadow &&
            (c
              ? (0 === (e = s.find(".swiper-cube-shadow")).length &&
                  ((e = x('<div class="swiper-cube-shadow"></div>')),
                  s.append(e)),
                e.css({ height: n + "px" }))
              : 0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = x('<div class="swiper-cube-shadow"></div>')),
                i.append(e)));
          for (var u, f = 0; f < o.length; f += 1) {
            var m = o.eq(f),
              g = f,
              v =
                90 *
                (g = d ? parseInt(m.attr("data-swiper-slide-index"), 10) : g),
              y = Math.floor(v / 360),
              b =
                (a && ((v = -v), (y = Math.floor(-v / 360))),
                Math.max(Math.min(m[0].progress, 1), -1)),
              w = 0,
              T = 0,
              S = 0,
              y =
                (g % 4 == 0
                  ? ((w = 4 * -y * l), (S = 0))
                  : (g - 1) % 4 == 0
                    ? ((w = 0), (S = 4 * -y * l))
                    : (g - 2) % 4 == 0
                      ? ((w = l + 4 * y * l), (S = l))
                      : (g - 3) % 4 == 0 && ((w = -l), (S = 3 * l + 4 * l * y)),
                a && (w = -w),
                c || ((T = w), (w = 0)),
                "rotateX(" +
                  (c ? 0 : -v) +
                  "deg) rotateY(" +
                  (c ? v : 0) +
                  "deg) translate3d(" +
                  w +
                  "px, " +
                  T +
                  "px, " +
                  S +
                  "px)");
            (b <= 1 &&
              -1 < b &&
              ((p = 90 * g + 90 * b), a) &&
              (p = 90 * -g - 90 * b),
              m.transform(y),
              h.slideShadows &&
                ((v = c
                  ? m.find(".swiper-slide-shadow-left")
                  : m.find(".swiper-slide-shadow-top")),
                (w = c
                  ? m.find(".swiper-slide-shadow-right")
                  : m.find(".swiper-slide-shadow-bottom")),
                0 === v.length &&
                  ((v = x(
                    '<div class="swiper-slide-shadow-' +
                      (c ? "left" : "top") +
                      '"></div>',
                  )),
                  m.append(v)),
                0 === w.length &&
                  ((w = x(
                    '<div class="swiper-slide-shadow-' +
                      (c ? "right" : "bottom") +
                      '"></div>',
                  )),
                  m.append(w)),
                v.length && (v[0].style.opacity = Math.max(-b, 0)),
                w.length) &&
                (w[0].style.opacity = Math.max(b, 0)));
          }
          (s.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px",
          }),
            h.shadow &&
              (c
                ? e.transform(
                    "translate3d(0px, " +
                      (n / 2 + h.shadowOffset) +
                      "px, " +
                      -n / 2 +
                      "px) rotateX(90deg) rotateZ(0deg) scale(" +
                      h.shadowScale +
                      ")",
                  )
                : ((i = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90)),
                  (n =
                    1.5 -
                    (Math.sin((2 * i * Math.PI) / 360) / 2 +
                      Math.cos((2 * i * Math.PI) / 360) / 2)),
                  (i = h.shadowScale),
                  (n = h.shadowScale / n),
                  (u = h.shadowOffset),
                  e.transform(
                    "scale3d(" +
                      i +
                      ", 1, " +
                      n +
                      ") translate3d(0px, " +
                      (r / 2 + u) +
                      "px, " +
                      -r / 2 / n +
                      "px) rotateX(-90deg)",
                  ))),
            s.transform(
              "translate3d(0px,0," +
                (k.isSafari || k.isWebView ? -l / 2 : 0) +
                "px) rotateX(" +
                (t.isHorizontal() ? 0 : p) +
                "deg) rotateY(" +
                (t.isHorizontal() ? -p : 0) +
                "deg)",
            ));
        },
        setTransition: function (e) {
          var t = this.$el;
          (this.slides
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
            )
            .transition(e),
            this.params.cubeEffect.shadow &&
              !this.isHorizontal() &&
              t.find(".swiper-cube-shadow").transition(e));
        },
      },
      oe = {
        setTranslate: function () {
          for (
            var e = this.slides, t = this.rtlTranslate, i = 0;
            i < e.length;
            i += 1
          ) {
            var s,
              o,
              n = e.eq(i),
              r = n[0].progress,
              a =
                (this.params.flipEffect.limitRotation &&
                  (r = Math.max(Math.min(n[0].progress, 1), -1)),
                n[0].swiperSlideOffset),
              l = -180 * r,
              h = 0,
              a = -a,
              c = 0;
            (this.isHorizontal()
              ? t && (l = -l)
              : ((c = a), (h = -l), (l = a = 0)),
              (n[0].style.zIndex = -Math.abs(Math.round(r)) + e.length),
              this.params.flipEffect.slideShadows &&
                ((s = this.isHorizontal()
                  ? n.find(".swiper-slide-shadow-left")
                  : n.find(".swiper-slide-shadow-top")),
                (o = this.isHorizontal()
                  ? n.find(".swiper-slide-shadow-right")
                  : n.find(".swiper-slide-shadow-bottom")),
                0 === s.length &&
                  ((s = x(
                    '<div class="swiper-slide-shadow-' +
                      (this.isHorizontal() ? "left" : "top") +
                      '"></div>',
                  )),
                  n.append(s)),
                0 === o.length &&
                  ((o = x(
                    '<div class="swiper-slide-shadow-' +
                      (this.isHorizontal() ? "right" : "bottom") +
                      '"></div>',
                  )),
                  n.append(o)),
                s.length && (s[0].style.opacity = Math.max(-r, 0)),
                o.length) &&
                (o[0].style.opacity = Math.max(r, 0)),
              n.transform(
                "translate3d(" +
                  a +
                  "px, " +
                  c +
                  "px, 0px) rotateX(" +
                  h +
                  "deg) rotateY(" +
                  l +
                  "deg)",
              ));
          }
        },
        setTransition: function (e) {
          var i,
            s = this,
            t = s.slides,
            o = s.activeIndex,
            n = s.$wrapperEl;
          (t
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
            )
            .transition(e),
            s.params.virtualTranslate &&
              0 !== e &&
              ((i = !1),
              t.eq(o).transitionEnd(function () {
                if (!i && s && !s.destroyed) {
                  ((i = !0), (s.animating = !1));
                  for (
                    var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                    t < e.length;
                    t += 1
                  )
                    n.trigger(e[t]);
                }
              })));
        },
      },
      ne = {
        setTranslate: function () {
          for (
            var e = this.width,
              t = this.height,
              i = this.slides,
              s = this.$wrapperEl,
              o = this.slidesSizesGrid,
              n = this.params.coverflowEffect,
              r = this.isHorizontal(),
              a = this.translate,
              l = r ? e / 2 - a : t / 2 - a,
              h = r ? n.rotate : -n.rotate,
              c = n.depth,
              d = 0,
              p = i.length;
            d < p;
            d += 1
          ) {
            var u = i.eq(d),
              f = o[d],
              m = ((l - u[0].swiperSlideOffset - f / 2) / f) * n.modifier,
              g = r ? h * m : 0,
              v = r ? 0 : h * m,
              y = -c * Math.abs(m),
              b = n.stretch,
              f =
                ("string" == typeof b &&
                  -1 !== b.indexOf("%") &&
                  (b = (parseFloat(n.stretch) / 100) * f),
                r ? 0 : b * m),
              b = r ? b * m : 0,
              w = 1 - (1 - n.scale) * Math.abs(m),
              b =
                (Math.abs(b) < 0.001 && (b = 0),
                Math.abs(f) < 0.001 && (f = 0),
                Math.abs(y) < 0.001 && (y = 0),
                Math.abs(g) < 0.001 && (g = 0),
                "translate3d(" +
                  b +
                  "px," +
                  f +
                  "px," +
                  y +
                  "px)  rotateX(" +
                  (v = Math.abs(v) < 0.001 ? 0 : v) +
                  "deg) rotateY(" +
                  g +
                  "deg) scale(" +
                  (w = Math.abs(w) < 0.001 ? 0 : w) +
                  ")");
            (u.transform(b),
              (u[0].style.zIndex = 1 - Math.abs(Math.round(m))),
              n.slideShadows &&
                ((f = r
                  ? u.find(".swiper-slide-shadow-left")
                  : u.find(".swiper-slide-shadow-top")),
                (y = r
                  ? u.find(".swiper-slide-shadow-right")
                  : u.find(".swiper-slide-shadow-bottom")),
                0 === f.length &&
                  ((f = x(
                    '<div class="swiper-slide-shadow-' +
                      (r ? "left" : "top") +
                      '"></div>',
                  )),
                  u.append(f)),
                0 === y.length &&
                  ((y = x(
                    '<div class="swiper-slide-shadow-' +
                      (r ? "right" : "bottom") +
                      '"></div>',
                  )),
                  u.append(y)),
                f.length && (f[0].style.opacity = 0 < m ? m : 0),
                y.length) &&
                (y[0].style.opacity = 0 < -m ? -m : 0));
          }
          (T.pointerEvents || T.prefixedPointerEvents) &&
            (s[0].style.perspectiveOrigin = l + "px 50%");
        },
        setTransition: function (e) {
          this.slides
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
            )
            .transition(e);
        },
      },
      re = {
        init: function () {
          var e = this,
            t = e.params.thumbs,
            i = e.constructor;
          (t.swiper instanceof i
            ? ((e.thumbs.swiper = t.swiper),
              U.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              U.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : U.isObject(t.swiper) &&
              ((e.thumbs.swiper = new i(
                U.extend({}, t.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
              )),
              (e.thumbs.swiperCreated = !0)),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick));
        },
        onThumbClick: function () {
          var e,
            t,
            i,
            s = this,
            o = s.thumbs.swiper;
          o &&
            ((e = o.clickedIndex),
            ((i = o.clickedSlide) &&
              x(i).hasClass(s.params.thumbs.slideThumbActiveClass)) ||
              (null != e &&
                ((i = o.params.loop
                  ? parseInt(
                      x(o.clickedSlide).attr("data-swiper-slide-index"),
                      10,
                    )
                  : e),
                s.params.loop &&
                  ((o = s.activeIndex),
                  s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
                    (s.loopFix(),
                    (s._clientLeft = s.$wrapperEl[0].clientLeft),
                    (o = s.activeIndex)),
                  (e = s.slides
                    .eq(o)
                    .prevAll('[data-swiper-slide-index="' + i + '"]')
                    .eq(0)
                    .index()),
                  (t = s.slides
                    .eq(o)
                    .nextAll('[data-swiper-slide-index="' + i + '"]')
                    .eq(0)
                    .index()),
                  (i =
                    void 0 === e || (void 0 !== t && t - o < o - e) ? t : e)),
                s.slideTo(i))));
        },
        update: function (e) {
          var t = this,
            i = t.thumbs.swiper;
          if (i) {
            var s,
              o,
              n,
              r =
                "auto" === i.params.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : i.params.slidesPerView,
              a = t.params.thumbs.autoScrollOffset,
              l = a && !i.params.loop,
              h =
                ((t.realIndex !== i.realIndex || l) &&
                  ((s = i.activeIndex),
                  (n = i.params.loop
                    ? (i.slides.eq(s).hasClass(i.params.slideDuplicateClass) &&
                        (i.loopFix(),
                        (i._clientLeft = i.$wrapperEl[0].clientLeft),
                        (s = i.activeIndex)),
                      (n = i.slides
                        .eq(s)
                        .prevAll(
                          '[data-swiper-slide-index="' + t.realIndex + '"]',
                        )
                        .eq(0)
                        .index()),
                      (o = i.slides
                        .eq(s)
                        .nextAll(
                          '[data-swiper-slide-index="' + t.realIndex + '"]',
                        )
                        .eq(0)
                        .index()),
                      (o =
                        void 0 === n
                          ? o
                          : void 0 === o
                            ? n
                            : o - s == s - n
                              ? s
                              : o - s < s - n
                                ? o
                                : n),
                      t.activeIndex > t.previousIndex ? "next" : "prev")
                    : (o = t.realIndex) > t.previousIndex
                      ? "next"
                      : "prev"),
                  l && (o += "next" === n ? a : -1 * a),
                  i.visibleSlidesIndexes) &&
                  i.visibleSlidesIndexes.indexOf(o) < 0 &&
                  (i.params.centeredSlides
                    ? (o =
                        s < o
                          ? o - Math.floor(r / 2) + 1
                          : o + Math.floor(r / 2) - 1)
                    : s < o && (o = o - r + 1),
                  i.slideTo(o, e ? 0 : void 0)),
                1),
              c = t.params.thumbs.slideThumbActiveClass;
            if (
              (1 < t.params.slidesPerView &&
                !t.params.centeredSlides &&
                (h = t.params.slidesPerView),
              t.params.thumbs.multipleActiveThumbs || (h = 1),
              (h = Math.floor(h)),
              i.slides.removeClass(c),
              i.params.loop || (i.params.virtual && i.params.virtual.enabled))
            )
              for (var d = 0; d < h; d += 1)
                i.$wrapperEl
                  .children(
                    '[data-swiper-slide-index="' + (t.realIndex + d) + '"]',
                  )
                  .addClass(c);
            else
              for (var p = 0; p < h; p += 1)
                i.slides.eq(t.realIndex + p).addClass(c);
          }
        },
      },
      B = [
        f,
        m,
        q,
        _,
        y,
        w,
        S,
        {
          name: "mousewheel",
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarged: "container",
            },
          },
          create: function () {
            var e = this;
            U.extend(e, {
              mousewheel: {
                enabled: !1,
                enable: E.enable.bind(e),
                disable: E.disable.bind(e),
                handle: E.handle.bind(e),
                handleMouseEnter: E.handleMouseEnter.bind(e),
                handleMouseLeave: E.handleMouseLeave.bind(e),
                animateSlider: E.animateSlider.bind(e),
                releaseScroll: E.releaseScroll.bind(e),
                lastScrollTime: U.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
              },
            });
          },
          on: {
            init: function () {
              var e = this;
              (!e.params.mousewheel.enabled &&
                e.params.cssMode &&
                e.mousewheel.disable(),
                e.params.mousewheel.enabled && e.mousewheel.enable());
            },
            destroy: function () {
              (this.params.cssMode && this.mousewheel.enable(),
                this.mousewheel.enabled && this.mousewheel.disable());
            },
          },
        },
        {
          name: "navigation",
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
            },
          },
          create: function () {
            var e = this;
            U.extend(e, {
              navigation: {
                init: C.init.bind(e),
                update: C.update.bind(e),
                destroy: C.destroy.bind(e),
                onNextClick: C.onNextClick.bind(e),
                onPrevClick: C.onPrevClick.bind(e),
              },
            });
          },
          on: {
            init: function () {
              (this.navigation.init(), this.navigation.update());
            },
            toEdge: function () {
              this.navigation.update();
            },
            fromEdge: function () {
              this.navigation.update();
            },
            destroy: function () {
              this.navigation.destroy();
            },
            click: function (e) {
              var t,
                i = this,
                s = i.navigation,
                o = s.$nextEl,
                s = s.$prevEl;
              !i.params.navigation.hideOnClick ||
                x(e.target).is(s) ||
                x(e.target).is(o) ||
                (o
                  ? (t = o.hasClass(i.params.navigation.hiddenClass))
                  : s && (t = s.hasClass(i.params.navigation.hiddenClass)),
                !0 === t
                  ? i.emit("navigationShow", i)
                  : i.emit("navigationHide", i),
                o && o.toggleClass(i.params.navigation.hiddenClass),
                s && s.toggleClass(i.params.navigation.hiddenClass));
            },
          },
        },
        {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (e) {
                return e;
              },
              formatFractionTotal: function (e) {
                return e;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass:
                "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create: function () {
            var e = this;
            U.extend(e, {
              pagination: {
                init: P.init.bind(e),
                render: P.render.bind(e),
                update: P.update.bind(e),
                destroy: P.destroy.bind(e),
                dynamicBulletIndex: 0,
              },
            });
          },
          on: {
            init: function () {
              (this.pagination.init(),
                this.pagination.render(),
                this.pagination.update());
            },
            activeIndexChange: function () {
              (!this.params.loop && void 0 !== this.snapIndex) ||
                this.pagination.update();
            },
            snapIndexChange: function () {
              this.params.loop || this.pagination.update();
            },
            slidesLengthChange: function () {
              this.params.loop &&
                (this.pagination.render(), this.pagination.update());
            },
            snapGridLengthChange: function () {
              this.params.loop ||
                (this.pagination.render(), this.pagination.update());
            },
            destroy: function () {
              this.pagination.destroy();
            },
            click: function (e) {
              var t = this;
              t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                0 < t.pagination.$el.length &&
                !x(e.target).hasClass(t.params.pagination.bulletClass) &&
                (!0 ===
                t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                  ? t.emit("paginationShow", t)
                  : t.emit("paginationHide", t),
                t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
            },
          },
        },
        {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
            },
          },
          create: function () {
            var e = this;
            U.extend(e, {
              scrollbar: {
                init: M.init.bind(e),
                destroy: M.destroy.bind(e),
                updateSize: M.updateSize.bind(e),
                setTranslate: M.setTranslate.bind(e),
                setTransition: M.setTransition.bind(e),
                enableDraggable: M.enableDraggable.bind(e),
                disableDraggable: M.disableDraggable.bind(e),
                setDragPosition: M.setDragPosition.bind(e),
                getPointerPosition: M.getPointerPosition.bind(e),
                onDragStart: M.onDragStart.bind(e),
                onDragMove: M.onDragMove.bind(e),
                onDragEnd: M.onDragEnd.bind(e),
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
            });
          },
          on: {
            init: function () {
              (this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate());
            },
            update: function () {
              this.scrollbar.updateSize();
            },
            resize: function () {
              this.scrollbar.updateSize();
            },
            observerUpdate: function () {
              this.scrollbar.updateSize();
            },
            setTranslate: function () {
              this.scrollbar.setTranslate();
            },
            setTransition: function (e) {
              this.scrollbar.setTransition(e);
            },
            destroy: function () {
              this.scrollbar.destroy();
            },
          },
        },
        {
          name: "parallax",
          params: { parallax: { enabled: !1 } },
          create: function () {
            U.extend(this, {
              parallax: {
                setTransform: Q.setTransform.bind(this),
                setTranslate: Q.setTranslate.bind(this),
                setTransition: Q.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              this.params.parallax.enabled &&
                ((this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            init: function () {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTranslate: function () {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTransition: function (e) {
              this.params.parallax.enabled && this.parallax.setTransition(e);
            },
          },
        },
        {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          },
          create: function () {
            var s = this,
              t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              },
              o =
                ("onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
                  .split(" ")
                  .forEach(function (e) {
                    t[e] = J[e].bind(s);
                  }),
                U.extend(s, { zoom: t }),
                1);
            Object.defineProperty(s.zoom, "scale", {
              get: function () {
                return o;
              },
              set: function (e) {
                var t, i;
                (o !== e &&
                  ((t = s.zoom.gesture.$imageEl
                    ? s.zoom.gesture.$imageEl[0]
                    : void 0),
                  (i = s.zoom.gesture.$slideEl
                    ? s.zoom.gesture.$slideEl[0]
                    : void 0),
                  s.emit("zoomChange", e, t, i)),
                  (o = e));
              },
            });
          },
          on: {
            init: function () {
              this.params.zoom.enabled && this.zoom.enable();
            },
            destroy: function () {
              this.zoom.disable();
            },
            touchStart: function (e) {
              this.zoom.enabled && this.zoom.onTouchStart(e);
            },
            touchEnd: function (e) {
              this.zoom.enabled && this.zoom.onTouchEnd(e);
            },
            doubleTap: function (e) {
              this.params.zoom.enabled &&
                this.zoom.enabled &&
                this.params.zoom.toggle &&
                this.zoom.toggle(e);
            },
            transitionEnd: function () {
              this.zoom.enabled &&
                this.params.zoom.enabled &&
                this.zoom.onTransitionEnd();
            },
            slideChange: function () {
              this.zoom.enabled &&
                this.params.zoom.enabled &&
                this.params.cssMode &&
                this.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: "lazy",
          params: {
            lazy: {
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader",
            },
          },
          create: function () {
            U.extend(this, {
              lazy: {
                initialImageLoaded: !1,
                load: ee.load.bind(this),
                loadInSlide: ee.loadInSlide.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              this.params.lazy.enabled &&
                this.params.preloadImages &&
                (this.params.preloadImages = !1);
            },
            init: function () {
              this.params.lazy.enabled &&
                !this.params.loop &&
                0 === this.params.initialSlide &&
                this.lazy.load();
            },
            scroll: function () {
              this.params.freeMode &&
                !this.params.freeModeSticky &&
                this.lazy.load();
            },
            resize: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            scrollbarDragMove: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            transitionStart: function () {
              var e = this;
              e.params.lazy.enabled &&
                (e.params.lazy.loadOnTransitionStart ||
                  (!e.params.lazy.loadOnTransitionStart &&
                    !e.lazy.initialImageLoaded)) &&
                e.lazy.load();
            },
            transitionEnd: function () {
              this.params.lazy.enabled &&
                !this.params.lazy.loadOnTransitionStart &&
                this.lazy.load();
            },
            slideChange: function () {
              this.params.lazy.enabled &&
                this.params.cssMode &&
                this.lazy.load();
            },
          },
        },
        {
          name: "controller",
          params: { controller: { control: void 0, inverse: !1, by: "slide" } },
          create: function () {
            var e = this;
            U.extend(e, {
              controller: {
                control: e.params.controller.control,
                getInterpolateFunction: z.getInterpolateFunction.bind(e),
                setTranslate: z.setTranslate.bind(e),
                setTransition: z.setTransition.bind(e),
              },
            });
          },
          on: {
            update: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            resize: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            observerUpdate: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            setTranslate: function (e, t) {
              this.controller.control && this.controller.setTranslate(e, t);
            },
            setTransition: function (e, t) {
              this.controller.control && this.controller.setTransition(e, t);
            },
          },
        },
        {
          name: "a11y",
          params: {
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
            },
          },
          create: function () {
            var t = this;
            (U.extend(t, {
              a11y: {
                liveRegion: x(
                  '<span class="' +
                    t.params.a11y.notificationClass +
                    '" aria-live="assertive" aria-atomic="true"></span>',
                ),
              },
            }),
              Object.keys(te).forEach(function (e) {
                t.a11y[e] = te[e].bind(t);
              }));
          },
          on: {
            init: function () {
              this.params.a11y.enabled &&
                (this.a11y.init(), this.a11y.updateNavigation());
            },
            toEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            fromEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            paginationUpdate: function () {
              this.params.a11y.enabled && this.a11y.updatePagination();
            },
            destroy: function () {
              this.params.a11y.enabled && this.a11y.destroy();
            },
          },
        },
        {
          name: "history",
          params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
          create: function () {
            U.extend(this, {
              history: {
                init: D.init.bind(this),
                setHistory: D.setHistory.bind(this),
                setHistoryPopState: D.setHistoryPopState.bind(this),
                scrollToSlide: D.scrollToSlide.bind(this),
                destroy: D.destroy.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.params.history.enabled && this.history.init();
            },
            destroy: function () {
              this.params.history.enabled && this.history.destroy();
            },
            transitionEnd: function () {
              this.history.initialized &&
                this.history.setHistory(
                  this.params.history.key,
                  this.activeIndex,
                );
            },
            slideChange: function () {
              this.history.initialized &&
                this.params.cssMode &&
                this.history.setHistory(
                  this.params.history.key,
                  this.activeIndex,
                );
            },
          },
        },
        {
          name: "hash-navigation",
          params: {
            hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
          },
          create: function () {
            U.extend(this, {
              hashNavigation: {
                initialized: !1,
                init: L.init.bind(this),
                destroy: L.destroy.bind(this),
                setHash: L.setHash.bind(this),
                onHashCange: L.onHashCange.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.params.hashNavigation.enabled && this.hashNavigation.init();
            },
            destroy: function () {
              this.params.hashNavigation.enabled &&
                this.hashNavigation.destroy();
            },
            transitionEnd: function () {
              this.hashNavigation.initialized && this.hashNavigation.setHash();
            },
            slideChange: function () {
              this.hashNavigation.initialized &&
                this.params.cssMode &&
                this.hashNavigation.setHash();
            },
          },
        },
        {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create: function () {
            var t = this;
            U.extend(t, {
              autoplay: {
                running: !1,
                paused: !1,
                run: O.run.bind(t),
                start: O.start.bind(t),
                stop: O.stop.bind(t),
                pause: O.pause.bind(t),
                onVisibilityChange: function () {
                  ("hidden" === document.visibilityState &&
                    t.autoplay.running &&
                    t.autoplay.pause(),
                    "visible" === document.visibilityState &&
                      t.autoplay.paused &&
                      (t.autoplay.run(), (t.autoplay.paused = !1)));
                },
                onTransitionEnd: function (e) {
                  t &&
                    !t.destroyed &&
                    t.$wrapperEl &&
                    e.target === this &&
                    (t.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      t.autoplay.onTransitionEnd,
                    ),
                    t.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      t.autoplay.onTransitionEnd,
                    ),
                    (t.autoplay.paused = !1),
                    t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                },
              },
            });
          },
          on: {
            init: function () {
              this.params.autoplay.enabled &&
                (this.autoplay.start(),
                document.addEventListener(
                  "visibilitychange",
                  this.autoplay.onVisibilityChange,
                ));
            },
            beforeTransitionStart: function (e, t) {
              this.autoplay.running &&
                (t || !this.params.autoplay.disableOnInteraction
                  ? this.autoplay.pause(e)
                  : this.autoplay.stop());
            },
            sliderFirstMove: function () {
              this.autoplay.running &&
                (this.params.autoplay.disableOnInteraction
                  ? this.autoplay.stop()
                  : this.autoplay.pause());
            },
            touchEnd: function () {
              this.params.cssMode &&
                this.autoplay.paused &&
                !this.params.autoplay.disableOnInteraction &&
                this.autoplay.run();
            },
            destroy: function () {
              (this.autoplay.running && this.autoplay.stop(),
                document.removeEventListener(
                  "visibilitychange",
                  this.autoplay.onVisibilityChange,
                ));
            },
          },
        },
        {
          name: "effect-fade",
          params: { fadeEffect: { crossFade: !1 } },
          create: function () {
            U.extend(this, {
              fadeEffect: {
                setTranslate: ie.setTranslate.bind(this),
                setTransition: ie.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              var e;
              "fade" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "fade",
                ),
                U.extend(
                  this.params,
                  (e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  }),
                ),
                U.extend(this.originalParams, e));
            },
            setTranslate: function () {
              "fade" === this.params.effect && this.fadeEffect.setTranslate();
            },
            setTransition: function (e) {
              "fade" === this.params.effect && this.fadeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-cube",
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          },
          create: function () {
            U.extend(this, {
              cubeEffect: {
                setTranslate: se.setTranslate.bind(this),
                setTransition: se.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              var e;
              "cube" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "cube",
                ),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                U.extend(
                  this.params,
                  (e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0,
                  }),
                ),
                U.extend(this.originalParams, e));
            },
            setTranslate: function () {
              "cube" === this.params.effect && this.cubeEffect.setTranslate();
            },
            setTransition: function (e) {
              "cube" === this.params.effect && this.cubeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-flip",
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create: function () {
            U.extend(this, {
              flipEffect: {
                setTranslate: oe.setTranslate.bind(this),
                setTransition: oe.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              var e;
              "flip" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "flip",
                ),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                U.extend(
                  this.params,
                  (e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  }),
                ),
                U.extend(this.originalParams, e));
            },
            setTranslate: function () {
              "flip" === this.params.effect && this.flipEffect.setTranslate();
            },
            setTransition: function (e) {
              "flip" === this.params.effect && this.flipEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-coverflow",
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
            },
          },
          create: function () {
            U.extend(this, {
              coverflowEffect: {
                setTranslate: ne.setTranslate.bind(this),
                setTransition: ne.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              "coverflow" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "coverflow",
                ),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                (this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            setTranslate: function () {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTranslate();
            },
            setTransition: function (e) {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTransition(e);
            },
          },
        },
        {
          name: "thumbs",
          params: {
            thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-container-thumbs",
            },
          },
          create: function () {
            U.extend(this, {
              thumbs: {
                swiper: null,
                init: re.init.bind(this),
                update: re.update.bind(this),
                onThumbClick: re.onThumbClick.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              var e = this.params.thumbs;
              e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
            },
            slideChange: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            update: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            resize: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            observerUpdate: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            setTransition: function (e) {
              var t = this.thumbs.swiper;
              t && t.setTransition(e);
            },
            beforeDestroy: function () {
              var e = this.thumbs.swiper;
              e && this.thumbs.swiperCreated && e && e.destroy();
            },
          },
        },
      ];
    return (
      void 0 === u.use &&
        ((u.use = u.Class.use), (u.installModule = u.Class.installModule)),
      u.use(B),
      u
    );
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
        ? define(t)
        : ((e =
            "undefined" != typeof globalThis ? globalThis : e || self).Viewer =
            t());
  })(this, function () {
    function n(t, e) {
      var i,
        s = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((i = Object.getOwnPropertySymbols(t)),
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          s.push.apply(s, i)),
        s
      );
    }
    function $(s) {
      for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? n(Object(o), !0).forEach(function (e) {
              var t = s,
                i = o[e];
              e in t
                ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o))
            : n(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  s,
                  e,
                  Object.getOwnPropertyDescriptor(o, e),
                );
              });
      }
      return s;
    }
    function s(e) {
      return (s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function a(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        ((s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(e, s.key, s));
      }
    }
    var l = {
        backdrop: !0,
        button: !0,
        navbar: !0,
        title: !0,
        toolbar: !0,
        className: "",
        container: "body",
        filter: null,
        fullscreen: !0,
        inheritedAttributes: [
          "crossOrigin",
          "decoding",
          "isMap",
          "loading",
          "referrerPolicy",
          "sizes",
          "srcset",
          "useMap",
        ],
        initialCoverage: 0.9,
        initialViewIndex: 0,
        inline: !1,
        interval: 5e3,
        keyboard: !0,
        focus: !0,
        loading: !0,
        loop: !0,
        minWidth: 200,
        minHeight: 100,
        movable: !0,
        rotatable: !0,
        scalable: !0,
        zoomable: !0,
        zoomOnTouch: !0,
        zoomOnWheel: !0,
        slideOnTouch: !0,
        toggleOnDblclick: !0,
        tooltip: !0,
        transition: !0,
        zIndex: 2015,
        zIndexInline: 0,
        zoomRatio: 0.1,
        minZoomRatio: 0.01,
        maxZoomRatio: 100,
        url: "src",
        ready: null,
        show: null,
        shown: null,
        hide: null,
        hidden: null,
        view: null,
        viewed: null,
        move: null,
        moved: null,
        rotate: null,
        rotated: null,
        scale: null,
        scaled: null,
        zoom: null,
        zoomed: null,
        play: null,
        stop: null,
      },
      e = (i = "undefined" != typeof window && void 0 !== window.document)
        ? window
        : {},
      r =
        !(!i || !e.document.documentElement) &&
        "ontouchstart" in e.document.documentElement,
      t = i && "PointerEvent" in e,
      f = "viewer",
      h = "move",
      c = "zoom",
      m = "".concat(f, "-active"),
      F = "".concat(f, "-close"),
      R = "".concat(f, "-fade"),
      W = "".concat(f, "-fixed"),
      G = "".concat(f, "-fullscreen"),
      V = "".concat(f, "-fullscreen-exit"),
      g = "".concat(f, "-hide"),
      j = "".concat(f, "-hide-md-down"),
      q = "".concat(f, "-hide-sm-down"),
      _ = "".concat(f, "-hide-xs-down"),
      d = "".concat(f, "-in"),
      v = "".concat(f, "-invisible"),
      y = "".concat(f, "-loading"),
      K = "".concat(f, "-move"),
      U = "".concat(f, "-open"),
      p = "".concat(f, "-show"),
      u = "".concat(f, "-transition"),
      b = "click",
      Z = "dblclick",
      w = "load",
      T = "error",
      Q = t ? "pointerdown" : r ? "touchstart" : "mousedown",
      J = t ? "pointermove" : r ? "touchmove" : "mousemove",
      ee = t
        ? "pointerup pointercancel"
        : r
          ? "touchend touchcancel"
          : "mouseup",
      S = "transitionend",
      x = "viewed",
      te = "".concat(f, "Action"),
      ie = /\s\s*/,
      se = [
        "zoom-in",
        "zoom-out",
        "one-to-one",
        "reset",
        "prev",
        "play",
        "next",
        "rotate-left",
        "rotate-right",
        "flip-horizontal",
        "flip-vertical",
      ];
    function k(e) {
      return "string" == typeof e;
    }
    var oe = Number.isNaN || e.isNaN;
    function E(e) {
      return "number" == typeof e && !oe(e);
    }
    function C(e) {
      return void 0 === e;
    }
    function o(e) {
      return "object" === s(e) && null !== e;
    }
    var ne = Object.prototype.hasOwnProperty;
    function P(e) {
      if (!o(e)) return !1;
      try {
        var t = e.constructor,
          i = t.prototype;
        return t && i && ne.call(i, "isPrototypeOf");
      } catch (e) {
        return !1;
      }
    }
    function M(e) {
      return "function" == typeof e;
    }
    function z(t, i) {
      if (t && M(i))
        if (Array.isArray(t) || E(t.length))
          for (
            var e = t.length, s = 0;
            s < e && !1 !== i.call(t, t[s], s, t);
            s += 1
          );
        else
          o(t) &&
            Object.keys(t).forEach(function (e) {
              i.call(t, t[e], e, t);
            });
    }
    var D =
        Object.assign ||
        function (i) {
          for (
            var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), s = 1;
            s < e;
            s++
          )
            t[s - 1] = arguments[s];
          return (
            o(i) &&
              0 < t.length &&
              t.forEach(function (t) {
                o(t) &&
                  Object.keys(t).forEach(function (e) {
                    i[e] = t[e];
                  });
              }),
            i
          );
        },
      re = /^(?:width|height|left|top|marginLeft|marginTop)$/;
    function L(e, t) {
      var i = e.style;
      z(t, function (e, t) {
        (re.test(t) && E(e) && (e += "px"), (i[t] = e));
      });
    }
    function O(e, t) {
      return (
        e &&
        t &&
        (e.classList ? e.classList.contains(t) : -1 < e.className.indexOf(t))
      );
    }
    function B(e, t) {
      var i;
      e &&
        t &&
        (E(e.length)
          ? z(e, function (e) {
              B(e, t);
            })
          : e.classList
            ? e.classList.add(t)
            : (i = e.className.trim())
              ? i.indexOf(t) < 0 && (e.className = "".concat(i, " ").concat(t))
              : (e.className = t));
    }
    function I(e, t) {
      e &&
        t &&
        (E(e.length)
          ? z(e, function (e) {
              I(e, t);
            })
          : e.classList
            ? e.classList.remove(t)
            : 0 <= e.className.indexOf(t) &&
              (e.className = e.className.replace(t, "")));
    }
    function Y(e, t, i) {
      t &&
        (E(e.length)
          ? z(e, function (e) {
              Y(e, t, i);
            })
          : (i ? B : I)(e, t));
    }
    var ae = /([a-z\d])([A-Z])/g;
    function le(e) {
      return e.replace(ae, "$1-$2").toLowerCase();
    }
    function X(e, t) {
      return o(e[t])
        ? e[t]
        : e.dataset
          ? e.dataset[t]
          : e.getAttribute("data-".concat(le(t)));
    }
    function he(e, t, i) {
      o(i)
        ? (e[t] = i)
        : e.dataset
          ? (e.dataset[t] = i)
          : e.setAttribute("data-".concat(le(t)), i);
    }
    ((de = !1),
      i &&
        ((ce = !1),
        (t = function () {}),
        (i = Object.defineProperty({}, "once", {
          get: function () {
            return ((de = !0), ce);
          },
          set: function (e) {
            ce = e;
          },
        })),
        e.addEventListener("test", t, i),
        e.removeEventListener("test", t, i)));
    var ce,
      de,
      pe = de;
    function H(i, e, s, t) {
      var o = 3 < arguments.length && void 0 !== t ? t : {},
        n = s;
      e.trim()
        .split(ie)
        .forEach(function (e) {
          var t;
          (pe ||
            ((t = i.listeners) &&
              t[e] &&
              t[e][s] &&
              ((n = t[e][s]),
              delete t[e][s],
              0 === Object.keys(t[e]).length && delete t[e],
              0 === Object.keys(t).length) &&
              delete i.listeners),
            i.removeEventListener(e, n, o));
        });
    }
    function A(n, e, r, t) {
      var a = 3 < arguments.length && void 0 !== t ? t : {},
        l = r;
      e.trim()
        .split(ie)
        .forEach(function (s) {
          var e, o;
          (a.once &&
            !pe &&
            ((e = n.listeners),
            (l = function () {
              (delete o[s][r], n.removeEventListener(s, l, a));
              for (
                var e = arguments.length, t = new Array(e), i = 0;
                i < e;
                i++
              )
                t[i] = arguments[i];
              r.apply(n, t);
            }),
            (o = void 0 === e ? {} : e)[s] || (o[s] = {}),
            o[s][r] && n.removeEventListener(s, o[s][r], a),
            (o[s][r] = l),
            (n.listeners = o)),
            n.addEventListener(s, l, a));
        });
    }
    function N(e, t, i, s) {
      var o;
      return (
        M(Event) && M(CustomEvent)
          ? (o = new CustomEvent(
              t,
              $({ bubbles: !0, cancelable: !0, detail: i }, s),
            ))
          : (o = document.createEvent("CustomEvent")).initCustomEvent(
              t,
              !0,
              !0,
              i,
            ),
        e.dispatchEvent(o)
      );
    }
    function ue(e) {
      var t = e.rotate,
        i = e.scaleX,
        s = e.scaleY,
        o = e.translateX,
        e = e.translateY,
        n = [];
      return (
        E(o) && 0 !== o && n.push("translateX(".concat(o, "px)")),
        E(e) && 0 !== e && n.push("translateY(".concat(e, "px)")),
        E(t) && 0 !== t && n.push("rotate(".concat(t, "deg)")),
        E(i) && 1 !== i && n.push("scaleX(".concat(i, ")")),
        E(s) && 1 !== s && n.push("scaleY(".concat(s, ")")),
        {
          WebkitTransform: (o = n.length ? n.join(" ") : "none"),
          msTransform: o,
          transform: o,
        }
      );
    }
    var fe =
      e.navigator &&
      /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(e.navigator.userAgent);
    function me(i, e, t) {
      var s,
        o = document.createElement("img");
      return (
        i.naturalWidth && !fe
          ? t(i.naturalWidth, i.naturalHeight)
          : ((s = document.body || document.documentElement),
            (o.onload = function () {
              (t(o.width, o.height), fe || s.removeChild(o));
            }),
            z(e.inheritedAttributes, function (e) {
              var t = i.getAttribute(e);
              null !== t && o.setAttribute(e, t);
            }),
            (o.src = i.src),
            fe ||
              ((o.style.cssText =
                "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
              s.appendChild(o))),
        o
      );
    }
    function ge(e) {
      switch (e) {
        case 2:
          return _;
        case 3:
          return q;
        case 4:
          return j;
        default:
          return "";
      }
    }
    function ve(e, t) {
      var i = e.pageX,
        s = { endX: i, endY: (e = e.pageY) };
      return t ? s : $({ timeStamp: Date.now(), startX: i, startY: e }, s);
    }
    var ye,
      be,
      we,
      t = {
        render: function () {
          (this.initContainer(),
            this.initViewer(),
            this.initList(),
            this.renderViewer());
        },
        initBody: function () {
          var e = this.element.ownerDocument,
            t = e.body || e.documentElement;
          ((this.body = t),
            (this.scrollbarWidth =
              window.innerWidth - e.documentElement.clientWidth),
            (this.initialBodyPaddingRight = t.style.paddingRight),
            (this.initialBodyComputedPaddingRight =
              window.getComputedStyle(t).paddingRight));
        },
        initContainer: function () {
          this.containerData = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        initViewer: function () {
          var e,
            t = this.options,
            i = this.parent;
          (t.inline &&
            ((e = {
              width: Math.max(i.offsetWidth, t.minWidth),
              height: Math.max(i.offsetHeight, t.minHeight),
            }),
            (this.parentData = e)),
            (!this.fulled && e) || (e = this.containerData),
            (this.viewerData = D({}, e)));
        },
        renderViewer: function () {
          this.options.inline &&
            !this.fulled &&
            L(this.viewer, this.viewerData);
        },
        initList: function () {
          var a = this,
            e = this.element,
            l = this.options,
            h = this.list,
            c = [];
          ((h.innerHTML = ""),
            z(this.images, function (i, e) {
              var t,
                s,
                o = i.src,
                n =
                  i.alt ||
                  (k((n = o))
                    ? decodeURIComponent(
                        n.replace(/^.*\//, "").replace(/[?&#].*$/, ""),
                      )
                    : ""),
                r = a.getImageURL(i);
              (o || r) &&
                ((t = document.createElement("li")),
                (s = document.createElement("img")),
                z(l.inheritedAttributes, function (e) {
                  var t = i.getAttribute(e);
                  null !== t && s.setAttribute(e, t);
                }),
                l.navbar && (s.src = o || r),
                (s.alt = n),
                s.setAttribute("data-original-url", r || o),
                t.setAttribute("data-index", e),
                t.setAttribute("data-viewer-action", "view"),
                t.setAttribute("role", "button"),
                l.keyboard && t.setAttribute("tabindex", 0),
                t.appendChild(s),
                h.appendChild(t),
                c.push(t));
            }),
            z((this.items = c), function (t) {
              var e,
                i,
                s = t.firstElementChild;
              (he(s, "filled", !0),
                l.loading && B(t, y),
                A(
                  s,
                  w,
                  (e = function (e) {
                    (H(s, T, i), l.loading && I(t, y), a.loadImage(e));
                  }),
                  { once: !0 },
                ),
                A(
                  s,
                  T,
                  (i = function () {
                    (H(s, w, e), l.loading && I(t, y));
                  }),
                  { once: !0 },
                ));
            }),
            l.transition &&
              A(
                e,
                x,
                function () {
                  B(h, u);
                },
                { once: !0 },
              ));
        },
        renderList: function () {
          var e,
            t,
            i = this.index,
            s = this.items[i];
          s &&
            ((e = s.nextElementSibling),
            (e = parseInt(window.getComputedStyle(e || s).marginLeft, 10)),
            (s = s.offsetWidth),
            L(
              this.list,
              D(
                { width: (t = s + e) * this.length - e },
                ue({ translateX: (this.viewerData.width - s) / 2 - t * i }),
              ),
            ));
        },
        resetList: function () {
          var e = this.list;
          ((e.innerHTML = ""), I(e, u), L(e, ue({ translateX: 0 })));
        },
        initImage: function (a) {
          var e,
            l = this,
            h = this.options,
            t = this.image,
            i = this.viewerData,
            s = this.footer.offsetHeight,
            c = i.width,
            d = Math.max(i.height - s, s),
            p = this.imageData || {};
          ((this.imageInitializing = {
            abort: function () {
              e.onload = null;
            },
          }),
            (e = me(t, h, function (e, t) {
              var i = e / t,
                s = Math.max(0, Math.min(1, h.initialCoverage)),
                o = c,
                n = d,
                o =
                  ((l.imageInitializing = !1),
                  c < d * i ? (n = c / i) : (o = d * i),
                  (s = E(s) ? s : 0.9),
                  Math.min(o * s, e)),
                n = Math.min(n * s, t),
                r = D(
                  {},
                  (s = {
                    left: (s = (c - o) / 2),
                    top: (r = (d - n) / 2),
                    x: s,
                    y: r,
                    width: o,
                    height: n,
                    oldRatio: 1,
                    ratio: o / e,
                    aspectRatio: i,
                    naturalWidth: e,
                    naturalHeight: t,
                  }),
                );
              (h.rotatable && ((s.rotate = p.rotate || 0), (r.rotate = 0)),
                h.scalable &&
                  ((s.scaleX = p.scaleX || 1),
                  (s.scaleY = p.scaleY || 1),
                  (r.scaleX = 1),
                  (r.scaleY = 1)),
                (l.imageData = s),
                (l.initialImageData = r),
                a && a());
            })));
        },
        renderImage: function (e) {
          var t,
            i = this,
            s = this.image,
            o = this.imageData;
          (L(
            s,
            D(
              {
                width: o.width,
                height: o.height,
                marginLeft: o.x,
                marginTop: o.y,
              },
              ue(o),
            ),
          ),
            e &&
              ((this.viewing ||
                this.moving ||
                this.rotating ||
                this.scaling ||
                this.zooming) &&
              this.options.transition &&
              O(s, u)
                ? ((t = function () {
                    ((i.imageRendering = !1), e());
                  }),
                  (this.imageRendering = {
                    abort: function () {
                      H(s, S, t);
                    },
                  }),
                  A(s, S, t, { once: !0 }))
                : e()));
        },
        resetImage: function () {
          var e;
          (this.viewing || this.viewed) &&
            ((e = this.image),
            this.viewing && this.viewing.abort(),
            e.parentNode.removeChild(e),
            (this.image = null));
        },
      },
      i = {
        bind: function () {
          var e = this.options,
            t = this.viewer,
            i = this.canvas,
            s = this.element.ownerDocument;
          (A(t, b, (this.onClick = this.click.bind(this))),
            A(t, "dragstart", (this.onDragStart = this.dragstart.bind(this))),
            A(i, Q, (this.onPointerDown = this.pointerdown.bind(this))),
            A(s, J, (this.onPointerMove = this.pointermove.bind(this))),
            A(s, ee, (this.onPointerUp = this.pointerup.bind(this))),
            A(s, "keydown", (this.onKeyDown = this.keydown.bind(this))),
            A(window, "resize", (this.onResize = this.resize.bind(this))),
            e.zoomable &&
              e.zoomOnWheel &&
              A(t, "wheel", (this.onWheel = this.wheel.bind(this)), {
                passive: !1,
                capture: !0,
              }),
            e.toggleOnDblclick &&
              A(i, Z, (this.onDblclick = this.dblclick.bind(this))));
        },
        unbind: function () {
          var e = this.options,
            t = this.viewer,
            i = this.canvas,
            s = this.element.ownerDocument;
          (H(t, b, this.onClick),
            H(t, "dragstart", this.onDragStart),
            H(i, Q, this.onPointerDown),
            H(s, J, this.onPointerMove),
            H(s, ee, this.onPointerUp),
            H(s, "keydown", this.onKeyDown),
            H(window, "resize", this.onResize),
            e.zoomable &&
              e.zoomOnWheel &&
              H(t, "wheel", this.onWheel, { passive: !1, capture: !0 }),
            e.toggleOnDblclick && H(i, Z, this.onDblclick));
        },
      },
      Te = {
        click: function (e) {
          var t = this.options,
            i = this.imageData,
            s = e.target,
            o = X(s, te);
          switch (
            (o ||
              "img" !== s.localName ||
              "li" !== s.parentElement.localName ||
              (o = X((s = s.parentElement), te)),
            r &&
              e.isTrusted &&
              s === this.canvas &&
              clearTimeout(this.clickCanvasTimeout),
            o)
          ) {
            case "mix":
              this.played
                ? this.stop()
                : t.inline
                  ? this.fulled
                    ? this.exit()
                    : this.full()
                  : this.hide();
              break;
            case "hide":
              this.hide();
              break;
            case "view":
              this.view(X(s, "index"));
              break;
            case "zoom-in":
              this.zoom(0.1, !0);
              break;
            case "zoom-out":
              this.zoom(-0.1, !0);
              break;
            case "one-to-one":
              this.toggle();
              break;
            case "reset":
              this.reset();
              break;
            case "prev":
              this.prev(t.loop);
              break;
            case "play":
              this.play(t.fullscreen);
              break;
            case "next":
              this.next(t.loop);
              break;
            case "rotate-left":
              this.rotate(-90);
              break;
            case "rotate-right":
              this.rotate(90);
              break;
            case "flip-horizontal":
              this.scaleX(-i.scaleX || -1);
              break;
            case "flip-vertical":
              this.scaleY(-i.scaleY || -1);
              break;
            default:
              this.played && this.stop();
          }
        },
        dblclick: function (e) {
          (e.preventDefault(),
            this.viewed &&
              e.target === this.image &&
              (r && e.isTrusted && clearTimeout(this.doubleClickImageTimeout),
              this.toggle(
                e.isTrusted ? e : e.detail && e.detail.originalEvent,
              )));
        },
        load: function () {
          var e = this,
            t =
              (this.timeout &&
                (clearTimeout(this.timeout), (this.timeout = !1)),
              this.element),
            i = this.options,
            s = this.image,
            o = this.index,
            n = this.viewerData;
          (I(s, v),
            i.loading && I(this.canvas, y),
            (s.style.cssText =
              "height:0;" +
              "margin-left:".concat(n.width / 2, "px;") +
              "margin-top:".concat(n.height / 2, "px;") +
              "max-width:none!important;position:relative;width:0;"),
            this.initImage(function () {
              (Y(s, K, i.movable),
                Y(s, u, i.transition),
                e.renderImage(function () {
                  ((e.viewed = !0),
                    (e.viewing = !1),
                    M(i.viewed) && A(t, x, i.viewed, { once: !0 }),
                    N(
                      t,
                      x,
                      { originalImage: e.images[o], index: o, image: s },
                      { cancelable: !1 },
                    ));
                }));
            }));
        },
        loadImage: function (e) {
          var s = e.target,
            o = (e = s.parentNode).offsetWidth || 30,
            n = e.offsetHeight || 50,
            r = !!X(s, "filled");
          me(s, this.options, function (e, t) {
            var e = e / t,
              t = o,
              i = n;
            (o < n * e
              ? r
                ? (t = n * e)
                : (i = o / e)
              : r
                ? (i = o / e)
                : (t = n * e),
              L(
                s,
                D(
                  { width: t, height: i },
                  ue({ translateX: (o - t) / 2, translateY: (n - i) / 2 }),
                ),
              ));
          });
        },
        keydown: function (e) {
          var t = this.options;
          if (t.keyboard) {
            var i = e.keyCode || e.which || e.charCode;
            if (
              (13 === i && this.viewer.contains(e.target) && this.click(e),
              this.fulled)
            )
              switch (i) {
                case 27:
                  this.played
                    ? this.stop()
                    : t.inline
                      ? this.fulled && this.exit()
                      : this.hide();
                  break;
                case 32:
                  this.played && this.stop();
                  break;
                case 37:
                  this.played && this.playing
                    ? this.playing.prev()
                    : this.prev(t.loop);
                  break;
                case 38:
                  (e.preventDefault(), this.zoom(t.zoomRatio, !0));
                  break;
                case 39:
                  this.played && this.playing
                    ? this.playing.next()
                    : this.next(t.loop);
                  break;
                case 40:
                  (e.preventDefault(), this.zoom(-t.zoomRatio, !0));
                  break;
                case 48:
                case 49:
                  e.ctrlKey && (e.preventDefault(), this.toggle());
              }
          }
        },
        dragstart: function (e) {
          "img" === e.target.localName && e.preventDefault();
        },
        pointerdown: function (e) {
          var t = this.options,
            i = this.pointers,
            s = e.buttons,
            o = e.button;
          !this.viewed ||
            this.showing ||
            this.viewing ||
            this.hiding ||
            (("mousedown" === e.type ||
              ("pointerdown" === e.type && "mouse" === e.pointerType)) &&
              ((E(s) && 1 !== s) || (E(o) && 0 !== o) || e.ctrlKey)) ||
            (e.preventDefault(),
            e.changedTouches
              ? z(e.changedTouches, function (e) {
                  i[e.identifier] = ve(e);
                })
              : (i[e.pointerId || 0] = ve(e)),
            (s = !!t.movable && h),
            t.zoomOnTouch && t.zoomable && 1 < Object.keys(i).length
              ? (s = c)
              : t.slideOnTouch &&
                ("touch" === e.pointerType || "touchstart" === e.type) &&
                this.isSwitchable() &&
                (s = "switch"),
            !t.transition || (s !== h && s !== c) || I(this.image, u),
            (this.action = s));
        },
        pointermove: function (e) {
          var t = this.pointers,
            i = this.action;
          this.viewed &&
            i &&
            (e.preventDefault(),
            e.changedTouches
              ? z(e.changedTouches, function (e) {
                  D(t[e.identifier] || {}, ve(e, !0));
                })
              : D(t[e.pointerId || 0] || {}, ve(e, !0)),
            this.change(e));
        },
        pointerup: function (e) {
          var t,
            i = this,
            s = this.options,
            o = this.action,
            n = this.pointers;
          (e.changedTouches
            ? z(e.changedTouches, function (e) {
                ((t = n[e.identifier]), delete n[e.identifier]);
              })
            : ((t = n[e.pointerId || 0]), delete n[e.pointerId || 0]),
            o &&
              (e.preventDefault(),
              !s.transition || (o !== h && o !== c) || B(this.image, u),
              (this.action = !1),
              r) &&
              o !== c &&
              t &&
              Date.now() - t.timeStamp < 500 &&
              (clearTimeout(this.clickCanvasTimeout),
              clearTimeout(this.doubleClickImageTimeout),
              s.toggleOnDblclick && this.viewed && e.target === this.image
                ? this.imageClicked
                  ? ((this.imageClicked = !1),
                    (this.doubleClickImageTimeout = setTimeout(function () {
                      N(i.image, Z, { originalEvent: e });
                    }, 50)))
                  : ((this.imageClicked = !0),
                    (this.doubleClickImageTimeout = setTimeout(function () {
                      i.imageClicked = !1;
                    }, 500)))
                : ((this.imageClicked = !1),
                  s.backdrop &&
                    "static" !== s.backdrop &&
                    e.target === this.canvas &&
                    (this.clickCanvasTimeout = setTimeout(function () {
                      N(i.canvas, b, { originalEvent: e });
                    }, 50)))));
        },
        resize: function () {
          var t = this;
          this.isShown &&
            !this.hiding &&
            (this.fulled && (this.close(), this.initBody(), this.open()),
            this.initContainer(),
            this.initViewer(),
            this.renderViewer(),
            this.renderList(),
            this.viewed &&
              this.initImage(function () {
                t.renderImage();
              }),
            this.played) &&
            (this.options.fullscreen &&
            this.fulled &&
            !(
              document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement
            )
              ? this.stop()
              : z(this.player.getElementsByTagName("img"), function (e) {
                  (A(e, w, t.loadImage.bind(t), { once: !0 }), N(e, w));
                }));
        },
        wheel: function (e) {
          var t,
            i,
            s = this;
          this.viewed &&
            (e.preventDefault(),
            this.wheeling ||
              ((this.wheeling = !0),
              setTimeout(function () {
                s.wheeling = !1;
              }, 50),
              (t = Number(this.options.zoomRatio) || 0.1),
              (i = 1),
              e.deltaY
                ? (i = 0 < e.deltaY ? 1 : -1)
                : e.wheelDelta
                  ? (i = -e.wheelDelta / 120)
                  : e.detail && (i = 0 < e.detail ? 1 : -1),
              this.zoom(-i * t, !0, null, e)));
        },
      },
      Se = {
        show: function () {
          var e,
            t,
            i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            s = this.element,
            o = this.options;
          return (
            o.inline ||
              this.showing ||
              this.isShown ||
              this.showing ||
              (this.ready
                ? (M(o.show) && A(s, "show", o.show, { once: !0 }),
                  !1 !== N(s, "show") &&
                    this.ready &&
                    (this.hiding && this.transitioning.abort(),
                    (this.showing = !0),
                    this.open(),
                    I((e = this.viewer), g),
                    e.setAttribute("role", "dialog"),
                    e.setAttribute("aria-labelledby", this.title.id),
                    e.setAttribute("aria-modal", !0),
                    e.removeAttribute("aria-hidden"),
                    o.transition && !i
                      ? ((t = this.shown.bind(this)),
                        (this.transitioning = {
                          abort: function () {
                            (H(e, S, t), I(e, d));
                          },
                        }),
                        B(e, u),
                        (e.initialOffsetWidth = e.offsetWidth),
                        A(e, S, t, { once: !0 }),
                        B(e, d))
                      : (B(e, d), this.shown())))
                : (this.build(), this.ready && this.show(i))),
            this
          );
        },
        hide: function () {
          var i,
            e,
            t,
            s,
            o,
            n = this,
            r = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            a = this.element,
            l = this.options;
          return (
            l.inline ||
              this.hiding ||
              (!this.isShown && !this.showing) ||
              (M(l.hide) && A(a, "hide", l.hide, { once: !0 }),
              !1 !== N(a, "hide") &&
                (this.showing && this.transitioning.abort(),
                (this.hiding = !0),
                this.played
                  ? this.stop()
                  : this.viewing && this.viewing.abort(),
                (i = this.viewer),
                (e = this.image),
                (t = function () {
                  (I(i, d), n.hidden());
                }),
                l.transition && !r
                  ? ((s = function e(t) {
                      t && t.target === i && (H(i, S, e), n.hidden());
                    }),
                    (o = function () {
                      O(i, u) ? (A(i, S, s), I(i, d)) : t();
                    }),
                    (this.transitioning = {
                      abort: function () {
                        n.viewed && O(e, u)
                          ? H(e, S, o)
                          : O(i, u) && H(i, S, s);
                      },
                    }),
                    this.viewed && O(e, u)
                      ? (A(e, S, o, { once: !0 }),
                        this.zoomTo(0, !1, null, null, !0))
                      : o())
                  : t())),
            this
          );
        },
        view: function () {
          var i = this,
            e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : this.options.initialViewIndex,
            e = Number(e) || 0;
          if (!(
            this.hiding ||
            this.played ||
            e < 0 ||
            e >= this.length ||
            (this.viewed && e === this.index)
          )) {
            if (!this.isShown) return ((this.index = e), this.show());
            this.viewing && this.viewing.abort();
            var t,
              s,
              o,
              n = this.element,
              r = this.options,
              a = this.title,
              l = this.canvas,
              h = this.items[e],
              c = h.querySelector("img"),
              d = X(c, "originalUrl"),
              p = c.getAttribute("alt"),
              u = document.createElement("img");
            (z(r.inheritedAttributes, function (e) {
              var t = c.getAttribute(e);
              null !== t && u.setAttribute(e, t);
            }),
              (u.src = d),
              (u.alt = p),
              M(r.view) && A(n, "view", r.view, { once: !0 }),
              !1 ===
                N(n, "view", {
                  originalImage: this.images[e],
                  index: e,
                  image: u,
                }) ||
                !this.isShown ||
                this.hiding ||
                this.played ||
                ((d = this.items[this.index]) &&
                  (I(d, m), d.removeAttribute("aria-selected")),
                B(h, m),
                h.setAttribute("aria-selected", !0),
                r.focus && h.focus(),
                (this.image = u),
                (this.viewed = !1),
                (this.index = e),
                (this.imageData = {}),
                B(u, v),
                r.loading && B(l, y),
                (l.innerHTML = ""),
                l.appendChild(u),
                this.renderList(),
                (a.innerHTML = ""),
                A(
                  n,
                  x,
                  (t = function () {
                    var e = i.imageData,
                      t = Array.isArray(r.title) ? r.title[1] : r.title;
                    a.innerHTML = k(
                      (t = M(t)
                        ? t.call(i, u, e)
                        : ""
                            .concat(p, " (")
                            .concat(e.naturalWidth, " × ")
                            .concat(e.naturalHeight, ")")),
                    )
                      ? t
                          .replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;")
                          .replace(/"/g, "&quot;")
                          .replace(/'/g, "&#39;")
                          .replace(/</g, "&lt;")
                          .replace(/>/g, "&gt;")
                      : t;
                  }),
                  { once: !0 },
                ),
                (this.viewing = {
                  abort: function () {
                    (H(n, x, t),
                      u.complete
                        ? i.imageRendering
                          ? i.imageRendering.abort()
                          : i.imageInitializing && i.imageInitializing.abort()
                        : ((u.src = ""),
                          H(u, w, s),
                          i.timeout && clearTimeout(i.timeout)));
                  },
                }),
                u.complete
                  ? this.load()
                  : (A(
                      u,
                      w,
                      (s = function () {
                        (H(u, T, o), i.load());
                      }),
                      { once: !0 },
                    ),
                    A(
                      u,
                      T,
                      (o = function () {
                        (H(u, w, s),
                          i.timeout &&
                            (clearTimeout(i.timeout), (i.timeout = !1)),
                          I(u, v),
                          r.loading && I(i.canvas, y));
                      }),
                      { once: !0 },
                    ),
                    this.timeout && clearTimeout(this.timeout),
                    (this.timeout = setTimeout(function () {
                      (I(u, v), (i.timeout = !1));
                    }, 1e3)))));
          }
          return this;
        },
        prev: function () {
          var e = this.index - 1;
          return (
            e < 0 &&
              (e =
                0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                  ? this.length - 1
                  : 0),
            this.view(e),
            this
          );
        },
        next: function () {
          var e = this.length - 1,
            t = this.index + 1;
          return (
            this.view(
              e < t
                ? 0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0]
                  ? 0
                  : e
                : t,
            ),
            this
          );
        },
        move: function (e) {
          var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : e,
            i = this.imageData;
          return (
            this.moveTo(C(e) ? e : i.x + Number(e), C(t) ? t : i.y + Number(t)),
            this
          );
        },
        moveTo: function (e) {
          var t = this,
            i =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : e,
            s =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            o = this.element,
            n = this.options,
            r = this.imageData;
          if (
            ((e = Number(e)),
            (i = Number(i)),
            this.viewed && !this.played && n.movable)
          ) {
            var a = r.x,
              l = r.y,
              h = !1;
            if ((E(e) ? (h = !0) : (e = a), E(i) ? (h = !0) : (i = l), h)) {
              if (
                (M(n.move) && A(o, "move", n.move, { once: !0 }),
                !1 ===
                  N(o, "move", {
                    x: e,
                    y: i,
                    oldX: a,
                    oldY: l,
                    originalEvent: s,
                  }))
              )
                return this;
              ((r.x = e),
                (r.y = i),
                (r.left = e),
                (r.top = i),
                (this.moving = !0),
                this.renderImage(function () {
                  ((t.moving = !1),
                    M(n.moved) && A(o, "moved", n.moved, { once: !0 }),
                    N(
                      o,
                      "moved",
                      { x: e, y: i, oldX: a, oldY: l, originalEvent: s },
                      { cancelable: !1 },
                    ));
                }));
            }
          }
          return this;
        },
        rotate: function (e) {
          return (
            this.rotateTo((this.imageData.rotate || 0) + Number(e)),
            this
          );
        },
        rotateTo: function (e) {
          var t = this,
            i = this.element,
            s = this.options,
            o = this.imageData;
          if (
            E((e = Number(e))) &&
            this.viewed &&
            !this.played &&
            s.rotatable
          ) {
            var n = o.rotate;
            if (
              (M(s.rotate) && A(i, "rotate", s.rotate, { once: !0 }),
              !1 === N(i, "rotate", { degree: e, oldDegree: n }))
            )
              return this;
            ((o.rotate = e),
              (this.rotating = !0),
              this.renderImage(function () {
                ((t.rotating = !1),
                  M(s.rotated) && A(i, "rotated", s.rotated, { once: !0 }),
                  N(
                    i,
                    "rotated",
                    { degree: e, oldDegree: n },
                    { cancelable: !1 },
                  ));
              }));
          }
          return this;
        },
        scaleX: function (e) {
          return (this.scale(e, this.imageData.scaleY), this);
        },
        scaleY: function (e) {
          return (this.scale(this.imageData.scaleX, e), this);
        },
        scale: function (e) {
          var t = this,
            i =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : e,
            s = this.element,
            o = this.options,
            n = this.imageData;
          if (
            ((e = Number(e)),
            (i = Number(i)),
            this.viewed && !this.played && o.scalable)
          ) {
            var r = n.scaleX,
              a = n.scaleY,
              l = !1;
            if ((E(e) ? (l = !0) : (e = r), E(i) ? (l = !0) : (i = a), l)) {
              if (
                (M(o.scale) && A(s, "scale", o.scale, { once: !0 }),
                !1 ===
                  N(s, "scale", {
                    scaleX: e,
                    scaleY: i,
                    oldScaleX: r,
                    oldScaleY: a,
                  }))
              )
                return this;
              ((n.scaleX = e),
                (n.scaleY = i),
                (this.scaling = !0),
                this.renderImage(function () {
                  ((t.scaling = !1),
                    M(o.scaled) && A(s, "scaled", o.scaled, { once: !0 }),
                    N(
                      s,
                      "scaled",
                      { scaleX: e, scaleY: i, oldScaleX: r, oldScaleY: a },
                      { cancelable: !1 },
                    ));
                }));
            }
          }
          return this;
        },
        zoom: function (e) {
          var t =
              1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            i =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            s =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            o = this.imageData;
          return (
            (e = Number(e)),
            this.zoomTo(
              (o.width * (e = e < 0 ? 1 / (1 - e) : 1 + e)) / o.naturalWidth,
              t,
              i,
              s,
            ),
            this
          );
        },
        zoomTo: function (e) {
          var i,
            s,
            o,
            t = this,
            n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            r =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            a =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            l = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            h = this.element,
            c = this.options,
            d = this.pointers,
            p = this.imageData,
            u = p.x,
            f = p.y,
            m = p.width,
            g = p.height,
            v = p.naturalWidth,
            y = p.naturalHeight;
          if (
            E((e = Math.max(0, e))) &&
            this.viewed &&
            !this.played &&
            (l || c.zoomable)
          ) {
            if (
              (l ||
                ((l = Math.max(0.01, c.minZoomRatio)),
                (w = Math.min(100, c.maxZoomRatio)),
                (e = Math.min(Math.max(e, l), w))),
              a)
            )
              switch (a.type) {
                case "wheel":
                  0.055 <= c.zoomRatio && 0.95 < e && e < 1.05 && (e = 1);
                  break;
                case "pointermove":
                case "touchmove":
                case "mousemove":
                  0.99 < e && e < 1.01 && (e = 1);
              }
            var b,
              w = y * e,
              v = (l = v * e) - m,
              y = w - g,
              T = p.ratio;
            if (
              (M(c.zoom) && A(h, "zoom", c.zoom, { once: !0 }),
              !1 === N(h, "zoom", { ratio: e, oldRatio: T, originalEvent: a }))
            )
              return this;
            ((this.zooming = !0),
              a
                ? ((b = {
                    left:
                      (b = (b = this.viewer).getBoundingClientRect()).left +
                      (window.pageXOffset -
                        document.documentElement.clientLeft),
                    top:
                      b.top +
                      (window.pageYOffset - document.documentElement.clientTop),
                  }),
                  (d =
                    d && 0 < Object.keys(d).length
                      ? ((o = s = i = 0),
                        z(d, function (e) {
                          var t = e.startX,
                            e = e.startY;
                          ((i += t), (s += e), (o += 1));
                        }),
                        { pageX: (i /= o), pageY: (s /= o) })
                      : { pageX: a.pageX, pageY: a.pageY }),
                  (p.x -= ((d.pageX - b.left - u) / m) * v),
                  (p.y -= ((d.pageY - b.top - f) / g) * y))
                : P(r) && E(r.x) && E(r.y)
                  ? ((p.x -= v * ((r.x - u) / m)), (p.y -= y * ((r.y - f) / g)))
                  : ((p.x -= v / 2), (p.y -= y / 2)),
              (p.left = p.x),
              (p.top = p.y),
              (p.width = l),
              (p.height = w),
              (p.oldRatio = T),
              (p.ratio = e),
              this.renderImage(function () {
                ((t.zooming = !1),
                  M(c.zoomed) && A(h, "zoomed", c.zoomed, { once: !0 }),
                  N(
                    h,
                    "zoomed",
                    { ratio: e, oldRatio: T, originalEvent: a },
                    { cancelable: !1 },
                  ));
              }),
              n && this.tooltip());
          }
          return this;
        },
        play: function () {
          var o,
            n,
            r,
            a,
            l,
            h,
            e,
            t = this,
            i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
          return (
            this.isShown &&
              !this.played &&
              ((e = this.element),
              M((o = this.options).play) && A(e, "play", o.play, { once: !0 }),
              !1 !== N(e, "play")) &&
              ((n = this.player),
              (r = this.loadImage.bind(this)),
              (a = []),
              (h = l = 0),
              (this.played = !0),
              (this.onLoadWhenPlay = r),
              i && this.requestFullscreen(i),
              B(n, p),
              z(this.items, function (e, t) {
                var i = e.querySelector("img"),
                  s = document.createElement("img");
                ((s.src = X(i, "originalUrl")),
                  (s.alt = i.getAttribute("alt")),
                  (s.referrerPolicy = i.referrerPolicy),
                  (l += 1),
                  B(s, R),
                  Y(s, u, o.transition),
                  O(e, m) && (B(s, d), (h = t)),
                  a.push(s),
                  A(s, w, r, { once: !0 }),
                  n.appendChild(s));
              }),
              E(o.interval)) &&
              0 < o.interval &&
              ((e = function e() {
                (clearTimeout(t.playing.timeout),
                  I(a[h], d),
                  B(a[(h = (h += 1) < l ? h : 0)], d),
                  (t.playing.timeout = setTimeout(e, o.interval)));
              }),
              1 < l) &&
              (this.playing = {
                prev: function e() {
                  (clearTimeout(t.playing.timeout),
                    I(a[h], d),
                    B(a[(h = 0 <= --h ? h : l - 1)], d),
                    (t.playing.timeout = setTimeout(e, o.interval)));
                },
                next: e,
                timeout: setTimeout(e, o.interval),
              }),
            this
          );
        },
        stop: function () {
          var e,
            t,
            i = this;
          return (
            this.played &&
              ((e = this.element),
              M((t = this.options).stop) && A(e, "stop", t.stop, { once: !0 }),
              !1 !== N(e, "stop")) &&
              ((t = this.player),
              clearTimeout(this.playing.timeout),
              (this.playing = !1),
              (this.played = !1),
              z(t.getElementsByTagName("img"), function (e) {
                H(e, w, i.onLoadWhenPlay);
              }),
              I(t, p),
              (t.innerHTML = ""),
              this.exitFullscreen()),
            this
          );
        },
        full: function () {
          var e = this,
            t = this.options,
            i = this.viewer,
            s = this.image,
            o = this.list;
          return (
            this.isShown &&
              !this.played &&
              !this.fulled &&
              t.inline &&
              ((this.fulled = !0),
              this.open(),
              B(this.button, V),
              t.transition && (I(o, u), this.viewed) && I(s, u),
              B(i, W),
              i.setAttribute("role", "dialog"),
              i.setAttribute("aria-labelledby", this.title.id),
              i.setAttribute("aria-modal", !0),
              i.removeAttribute("style"),
              L(i, { zIndex: t.zIndex }),
              t.focus && this.enforceFocus(),
              this.initContainer(),
              (this.viewerData = D({}, this.containerData)),
              this.renderList(),
              this.viewed) &&
              this.initImage(function () {
                e.renderImage(function () {
                  t.transition &&
                    setTimeout(function () {
                      (B(s, u), B(o, u));
                    }, 0);
                });
              }),
            this
          );
        },
        exit: function () {
          var e = this,
            t = this.options,
            i = this.viewer,
            s = this.image,
            o = this.list;
          return (
            this.isShown &&
              !this.played &&
              this.fulled &&
              t.inline &&
              ((this.fulled = !1),
              this.close(),
              I(this.button, V),
              t.transition && (I(o, u), this.viewed) && I(s, u),
              t.focus && this.clearEnforceFocus(),
              i.removeAttribute("role"),
              i.removeAttribute("aria-labelledby"),
              i.removeAttribute("aria-modal"),
              I(i, W),
              L(i, { zIndex: t.zIndexInline }),
              (this.viewerData = D({}, this.parentData)),
              this.renderViewer(),
              this.renderList(),
              this.viewed) &&
              this.initImage(function () {
                e.renderImage(function () {
                  t.transition &&
                    setTimeout(function () {
                      (B(s, u), B(o, u));
                    }, 0);
                });
              }),
            this
          );
        },
        tooltip: function () {
          var e = this,
            t = this.options,
            i = this.tooltipBox,
            s = this.imageData;
          return (
            this.viewed &&
              !this.played &&
              t.tooltip &&
              ((i.textContent = "".concat(Math.round(100 * s.ratio), "%")),
              this.tooltipping
                ? clearTimeout(this.tooltipping)
                : t.transition
                  ? (this.fading && N(i, S),
                    B(i, p),
                    B(i, R),
                    B(i, u),
                    i.removeAttribute("aria-hidden"),
                    (i.initialOffsetWidth = i.offsetWidth),
                    B(i, d))
                  : (B(i, p), i.removeAttribute("aria-hidden")),
              (this.tooltipping = setTimeout(function () {
                (t.transition
                  ? (A(
                      i,
                      S,
                      function () {
                        (I(i, p),
                          I(i, R),
                          I(i, u),
                          i.setAttribute("aria-hidden", !0),
                          (e.fading = !1));
                      },
                      { once: !0 },
                    ),
                    I(i, d),
                    (e.fading = !0))
                  : (I(i, p), i.setAttribute("aria-hidden", !0)),
                  (e.tooltipping = !1));
              }, 1e3))),
            this
          );
        },
        toggle: function () {
          var e =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          return (
            1 === this.imageData.ratio
              ? this.zoomTo(this.imageData.oldRatio, !0, null, e)
              : this.zoomTo(1, !0, null, e),
            this
          );
        },
        reset: function () {
          return (
            this.viewed &&
              !this.played &&
              ((this.imageData = D({}, this.initialImageData)),
              this.renderImage()),
            this
          );
        },
        update: function () {
          var s,
            o,
            t = this,
            e = this.element,
            i = this.options,
            n = this.isImg;
          return n && !e.parentNode
            ? this.destroy()
            : ((s = []),
              z(n ? [e] : e.querySelectorAll("img"), function (e) {
                M(i.filter)
                  ? i.filter.call(t, e) && s.push(e)
                  : t.getImageURL(e) && s.push(e);
              }),
              s.length &&
                ((this.images = s),
                (this.length = s.length),
                this.ready
                  ? ((o = []),
                    z(this.items, function (e, t) {
                      var e = e.querySelector("img"),
                        i = s[t];
                      (i && e && i.src === e.src && i.alt === e.alt) ||
                        o.push(t);
                    }),
                    L(this.list, { width: "auto" }),
                    this.initList(),
                    this.isShown &&
                      (this.length
                        ? this.viewed &&
                          (0 <= (n = o.indexOf(this.index))
                            ? ((this.viewed = !1),
                              this.view(
                                Math.max(
                                  Math.min(this.index - n, this.length - 1),
                                  0,
                                ),
                              ))
                            : (B((e = this.items[this.index]), m),
                              e.setAttribute("aria-selected", !0)))
                        : ((this.image = null),
                          (this.viewed = !1),
                          (this.index = 0),
                          (this.imageData = {}),
                          (this.canvas.innerHTML = ""),
                          (this.title.innerHTML = ""))))
                  : this.build()),
              this);
        },
        destroy: function () {
          var e = this.element,
            t = this.options;
          return (
            e[f] &&
              ((this.destroyed = !0),
              this.ready
                ? (this.played && this.stop(),
                  t.inline
                    ? (this.fulled && this.exit(), this.unbind())
                    : this.isShown
                      ? (this.viewing &&
                          (this.imageRendering
                            ? this.imageRendering.abort()
                            : this.imageInitializing &&
                              this.imageInitializing.abort()),
                        this.hiding && this.transitioning.abort(),
                        this.hidden())
                      : this.showing &&
                        (this.transitioning.abort(), this.hidden()),
                  (this.ready = !1),
                  this.viewer.parentNode.removeChild(this.viewer))
                : t.inline &&
                  (this.delaying
                    ? this.delaying.abort()
                    : this.initializing && this.initializing.abort()),
              t.inline || H(e, b, this.onStart),
              (e[f] = void 0)),
            this
          );
        },
      },
      xe = {
        getImageURL: function (e) {
          var t = this.options.url;
          return k(t) ? e.getAttribute(t) : M(t) ? t.call(this, e) : "";
        },
        enforceFocus: function () {
          var s = this;
          (this.clearEnforceFocus(),
            A(
              document,
              "focusin",
              (this.onFocusin = function (e) {
                var t = s.viewer,
                  i = e.target;
                if (i !== document && i !== t && !t.contains(i)) {
                  for (; i;) {
                    if (
                      null !== i.getAttribute("tabindex") ||
                      "true" === i.getAttribute("aria-modal")
                    )
                      return;
                    i = i.parentElement;
                  }
                  t.focus();
                }
              }),
            ));
        },
        clearEnforceFocus: function () {
          this.onFocusin &&
            (H(document, "focusin", this.onFocusin), (this.onFocusin = null));
        },
        open: function () {
          var e = this.body;
          (B(e, U),
            0 < this.scrollbarWidth &&
              (e.style.paddingRight = "".concat(
                this.scrollbarWidth +
                  (parseFloat(this.initialBodyComputedPaddingRight) || 0),
                "px",
              )));
        },
        close: function () {
          var e = this.body;
          (I(e, U),
            0 < this.scrollbarWidth &&
              (e.style.paddingRight = this.initialBodyPaddingRight));
        },
        shown: function () {
          var e = this.element,
            t = this.options,
            i = this.viewer;
          ((this.fulled = !0),
            (this.isShown = !0),
            this.render(),
            this.bind(),
            (this.showing = !1),
            t.focus && (i.focus(), this.enforceFocus()),
            M(t.shown) && A(e, "shown", t.shown, { once: !0 }),
            !1 !== N(e, "shown") &&
              this.ready &&
              this.isShown &&
              !this.hiding &&
              this.view(this.index));
        },
        hidden: function () {
          var e = this.element,
            t = this.options,
            i = this.viewer;
          (t.fucus && this.clearEnforceFocus(),
            (this.fulled = !1),
            (this.viewed = !1),
            (this.isShown = !1),
            this.close(),
            this.unbind(),
            B(i, g),
            i.removeAttribute("role"),
            i.removeAttribute("aria-labelledby"),
            i.removeAttribute("aria-modal"),
            i.setAttribute("aria-hidden", !0),
            this.resetList(),
            this.resetImage(),
            (this.hiding = !1),
            this.destroyed ||
              (M(t.hidden) && A(e, "hidden", t.hidden, { once: !0 }),
              N(e, "hidden", null, { cancelable: !1 })));
        },
        requestFullscreen: function (e) {
          var t = this.element.ownerDocument;
          this.fulled &&
            !(
              t.fullscreenElement ||
              t.webkitFullscreenElement ||
              t.mozFullScreenElement ||
              t.msFullscreenElement
            ) &&
            ((t = t.documentElement).requestFullscreen
              ? P(e)
                ? t.requestFullscreen(e)
                : t.requestFullscreen()
              : t.webkitRequestFullscreen
                ? t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                : t.mozRequestFullScreen
                  ? t.mozRequestFullScreen()
                  : t.msRequestFullscreen && t.msRequestFullscreen());
        },
        exitFullscreen: function () {
          var e = this.element.ownerDocument;
          this.fulled &&
            (e.fullscreenElement ||
              e.webkitFullscreenElement ||
              e.mozFullScreenElement ||
              e.msFullscreenElement) &&
            (e.exitFullscreen
              ? e.exitFullscreen()
              : e.webkitExitFullscreen
                ? e.webkitExitFullscreen()
                : e.mozCancelFullScreen
                  ? e.mozCancelFullScreen()
                  : e.msExitFullscreen && e.msExitFullscreen());
        },
        change: function (e) {
          var t = this.options,
            i = this.pointers,
            s = i[Object.keys(i)[0]];
          if (s) {
            var n,
              r,
              o = s.endX - s.startX,
              a = s.endY - s.startY;
            switch (this.action) {
              case h:
                this.move(o, a, e);
                break;
              case c:
                this.zoom(
                  ((n = $({}, (l = i))),
                  (r = []),
                  z(l, function (o, e) {
                    (delete n[e],
                      z(n, function (e) {
                        var t = Math.abs(o.startX - e.startX),
                          i = Math.abs(o.startY - e.startY),
                          s = Math.abs(o.endX - e.endX),
                          e = Math.abs(o.endY - e.endY),
                          t = Math.sqrt(t * t + i * i),
                          i = Math.sqrt(s * s + e * e);
                        r.push((i - t) / t);
                      }));
                  }),
                  r.sort(function (e, t) {
                    return Math.abs(e) < Math.abs(t);
                  }),
                  r[0]),
                  !1,
                  null,
                  e,
                );
                break;
              case "switch":
                this.action = "switched";
                var l = Math.abs(o);
                1 < l &&
                  l > Math.abs(a) &&
                  ((this.pointers = {}),
                  1 < o ? this.prev(t.loop) : o < -1 && this.next(t.loop));
            }
            z(i, function (e) {
              ((e.startX = e.endX), (e.startY = e.endY));
            });
          }
        },
        isSwitchable: function () {
          var e = this.imageData,
            t = this.viewerData;
          return (
            1 < this.length &&
            0 <= e.x &&
            0 <= e.y &&
            e.width <= t.width &&
            e.height <= t.height
          );
        },
      },
      ke = e.Viewer;
    ye = -1;
    function Ee(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      if (!(this instanceof Ee))
        throw new TypeError("Cannot call a class as a function");
      if (!e || 1 !== e.nodeType)
        throw new Error(
          "The first argument is required and must be an element.",
        );
      ((this.element = e),
        (this.options = D({}, l, P(t) && t)),
        (this.action = !1),
        (this.fading = !1),
        (this.fulled = !1),
        (this.hiding = !1),
        (this.imageClicked = !1),
        (this.imageData = {}),
        (this.index = this.options.initialViewIndex),
        (this.isImg = !1),
        (this.isShown = !1),
        (this.length = 0),
        (this.moving = !1),
        (this.played = !1),
        (this.playing = !1),
        (this.pointers = {}),
        (this.ready = !1),
        (this.rotating = !1),
        (this.scaling = !1),
        (this.showing = !1),
        (this.timeout = !1),
        (this.tooltipping = !1),
        (this.viewed = !1),
        (this.viewing = !1),
        (this.wheeling = !1),
        (this.zooming = !1),
        (this.id = ye += 1),
        this.init());
    }
    return (
      (we = [
        {
          key: "noConflict",
          value: function () {
            return ((window.Viewer = ke), Ee);
          },
        },
        {
          key: "setDefaults",
          value: function (e) {
            D(l, P(e) && e);
          },
        },
      ]),
      a((be = Ee).prototype, [
        {
          key: "init",
          value: function () {
            var e,
              t,
              i,
              s,
              o = this,
              n = this.element,
              r = this.options;
            n[f] ||
              ((n[f] = this),
              r.focus && !r.keyboard && (r.focus = !1),
              (e = "img" === n.localName),
              (t = []),
              z(e ? [n] : n.querySelectorAll("img"), function (e) {
                M(r.filter)
                  ? r.filter.call(o, e) && t.push(e)
                  : o.getImageURL(e) && t.push(e);
              }),
              (this.isImg = e),
              (this.length = t.length),
              (this.images = t),
              this.initBody(),
              C(document.createElement(f).style.transition) &&
                (r.transition = !1),
              r.inline
                ? ((i = 0),
                  (s = function () {
                    var e;
                    (i += 1) === o.length &&
                      ((o.initializing = !1),
                      (o.delaying = {
                        abort: function () {
                          clearTimeout(e);
                        },
                      }),
                      (e = setTimeout(function () {
                        ((o.delaying = !1), o.build());
                      }, 0)));
                  }),
                  (this.initializing = {
                    abort: function () {
                      z(t, function (e) {
                        e.complete || (H(e, w, s), H(e, T, s));
                      });
                    },
                  }),
                  z(t, function (e) {
                    var t, i;
                    e.complete
                      ? s()
                      : (A(
                          e,
                          w,
                          (t = function () {
                            (H(e, T, i), s());
                          }),
                          { once: !0 },
                        ),
                        A(
                          e,
                          T,
                          (i = function () {
                            (H(e, w, t), s());
                          }),
                          { once: !0 },
                        ));
                  }))
                : A(
                    n,
                    b,
                    (this.onStart = function (e) {
                      "img" !== (e = e.target).localName ||
                        (M(r.filter) && !r.filter.call(o, e)) ||
                        o.view(o.images.indexOf(e));
                    }),
                  ));
          },
        },
        {
          key: "build",
          value: function () {
            var e, n, t, i, s, o, r, a, l, h, c, d, p, u;
            this.ready ||
              ((e = this.element),
              (n = this.options),
              (t = e.parentNode),
              ((p = document.createElement("div")).innerHTML =
                '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>'),
              (p = (i = p.querySelector(
                ".".concat(f, "-container"),
              )).querySelector(".".concat(f, "-title"))),
              (s = i.querySelector(".".concat(f, "-toolbar"))),
              (u = i.querySelector(".".concat(f, "-navbar"))),
              (o = i.querySelector(".".concat(f, "-button"))),
              (r = i.querySelector(".".concat(f, "-canvas"))),
              (this.parent = t),
              (this.viewer = i),
              (this.title = p),
              (this.toolbar = s),
              (this.navbar = u),
              (this.button = o),
              (this.canvas = r),
              (this.footer = i.querySelector(".".concat(f, "-footer"))),
              (this.tooltipBox = i.querySelector(".".concat(f, "-tooltip"))),
              (this.player = i.querySelector(".".concat(f, "-player"))),
              (this.list = i.querySelector(".".concat(f, "-list"))),
              (i.id = "".concat(f).concat(this.id)),
              (p.id = "".concat(f, "Title").concat(this.id)),
              B(
                p,
                n.title ? ge(Array.isArray(n.title) ? n.title[0] : n.title) : g,
              ),
              B(u, n.navbar ? ge(n.navbar) : g),
              Y(o, g, !n.button),
              n.keyboard && o.setAttribute("tabindex", 0),
              n.backdrop &&
                (B(i, "".concat(f, "-backdrop")),
                n.inline || "static" === n.backdrop || he(r, te, "hide")),
              k(n.className) &&
                n.className &&
                n.className.split(ie).forEach(function (e) {
                  B(i, e);
                }),
              n.toolbar
                ? ((a = document.createElement("ul")),
                  (l = P(n.toolbar)),
                  (h = se.slice(0, 3)),
                  (c = se.slice(7, 9)),
                  (d = se.slice(9)),
                  l || B(s, ge(n.toolbar)),
                  z(l ? n.toolbar : se, function (e, t) {
                    var i,
                      s = l && P(e),
                      t = l ? le(t) : e,
                      o = s && !C(e.show) ? e.show : e;
                    !o ||
                      (!n.zoomable && -1 !== h.indexOf(t)) ||
                      (!n.rotatable && -1 !== c.indexOf(t)) ||
                      (!n.scalable && -1 !== d.indexOf(t)) ||
                      ((i = s && !C(e.size) ? e.size : e),
                      (s = s && !C(e.click) ? e.click : e),
                      (e = document.createElement("li")),
                      n.keyboard && e.setAttribute("tabindex", 0),
                      e.setAttribute("role", "button"),
                      B(e, "".concat(f, "-").concat(t)),
                      M(s) || he(e, te, t),
                      E(o) && B(e, ge(o)),
                      -1 !== ["small", "large"].indexOf(i)
                        ? B(e, "".concat(f, "-").concat(i))
                        : "play" === t && B(e, "".concat(f, "-large")),
                      M(s) && A(e, b, s),
                      a.appendChild(e));
                  }),
                  s.appendChild(a))
                : B(s, g),
              n.rotatable ||
                (B((p = s.querySelectorAll('li[class*="rotate"]')), v),
                z(p, function (e) {
                  s.appendChild(e);
                })),
              n.inline
                ? (B(o, G),
                  L(i, { zIndex: n.zIndexInline }),
                  "static" === window.getComputedStyle(t).position &&
                    L(t, { position: "relative" }),
                  t.insertBefore(i, e.nextSibling))
                : (B(o, F),
                  B(i, W),
                  B(i, R),
                  B(i, g),
                  L(i, { zIndex: n.zIndex }),
                  (u =
                    (u = k((u = n.container))
                      ? e.ownerDocument.querySelector(u)
                      : u) || this.body).appendChild(i)),
              n.inline && (this.render(), this.bind(), (this.isShown = !0)),
              (this.ready = !0),
              M(n.ready) && A(e, "ready", n.ready, { once: !0 }),
              !1 === N(e, "ready")
                ? (this.ready = !1)
                : this.ready && n.inline && this.view(this.index));
          },
        },
      ]),
      a(be, we),
      Object.defineProperty(be, "prototype", { writable: !1 }),
      D((e = Ee).prototype, t, i, Te, Se, xe),
      e
    );
  }),
  function () {
    function t(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    var s,
      e,
      i,
      l,
      o,
      r =
        [].indexOf ||
        function (e) {
          for (var t = 0, i = this.length; t < i; t++)
            if (t in this && this[t] === e) return t;
          return -1;
        };
    function n() {}
    function a() {
      ((this.keys = []), (this.values = []));
    }
    function h() {
      ("undefined" != typeof console &&
        null !== console &&
        console.warn("MutationObserver is not supported by your browser."),
        "undefined" != typeof console &&
          null !== console &&
          console.warn(
            "WOW.js cannot detect dom mutations, please call .sync() after loading new content.",
          ));
    }
    function c(e) {
      (null == e && (e = {}),
        (this.scrollCallback = t(this.scrollCallback, this)),
        (this.scrollHandler = t(this.scrollHandler, this)),
        (this.resetAnimation = t(this.resetAnimation, this)),
        (this.start = t(this.start, this)),
        (this.scrolled = !0),
        (this.config = this.util().extend(e, this.defaults)),
        null != e.scrollContainer &&
          (this.config.scrollContainer = document.querySelector(
            e.scrollContainer,
          )),
        (this.animationNameCache = new i()),
        (this.wowEvent = this.util().createEvent(this.config.boxClass)));
    }
    ((n.prototype.extend = function (e, t) {
      var i, s;
      for (i in t) ((s = t[i]), null == e[i] && (e[i] = s));
      return e;
    }),
      (n.prototype.isMobile = function (e) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          e,
        );
      }),
      (n.prototype.createEvent = function (e, t, i, s) {
        var o;
        return (
          null == t && (t = !1),
          null == i && (i = !1),
          null == s && (s = null),
          null != document.createEvent
            ? (o = document.createEvent("CustomEvent")).initCustomEvent(
                e,
                t,
                i,
                s,
              )
            : null != document.createEventObject
              ? ((o = document.createEventObject()).eventType = e)
              : (o.eventName = e),
          o
        );
      }),
      (n.prototype.emitEvent = function (e, t) {
        return null != e.dispatchEvent
          ? e.dispatchEvent(t)
          : t in (null != e)
            ? e[t]()
            : "on" + t in (null != e)
              ? e["on" + t]()
              : void 0;
      }),
      (n.prototype.addEvent = function (e, t, i) {
        return null != e.addEventListener
          ? e.addEventListener(t, i, !1)
          : null != e.attachEvent
            ? e.attachEvent("on" + t, i)
            : (e[t] = i);
      }),
      (n.prototype.removeEvent = function (e, t, i) {
        return null != e.removeEventListener
          ? e.removeEventListener(t, i, !1)
          : null != e.detachEvent
            ? e.detachEvent("on" + t, i)
            : delete e[t];
      }),
      (n.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      (e = n),
      (i =
        this.WeakMap ||
        this.MozWeakMap ||
        ((a.prototype.get = function (e) {
          for (var t, i = this.keys, s = (t = 0), o = i.length; t < o; s = ++t)
            if (i[s] === e) return this.values[s];
        }),
        (a.prototype.set = function (e, t) {
          for (var i, s = this.keys, o = (i = 0), n = s.length; i < n; o = ++i)
            if (s[o] === e) return void (this.values[o] = t);
          return (this.keys.push(e), this.values.push(t));
        }),
        a)),
      (s =
        this.MutationObserver ||
        this.WebkitMutationObserver ||
        this.MozMutationObserver ||
        ((h.notSupported = !0), (h.prototype.observe = function () {}), h)),
      (l =
        this.getComputedStyle ||
        function (i, e) {
          return (
            (this.getPropertyValue = function (e) {
              var t;
              return (
                o.test((e = "float" === e ? "styleFloat" : e)) &&
                  e.replace(o, function (e, t) {
                    return t.toUpperCase();
                  }),
                (null != (t = i.currentStyle) ? t[e] : void 0) || null
              );
            }),
            this
          );
        }),
      (o = /(\-([a-z]){1})/g),
      (this.WOW =
        ((c.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (c.prototype.init = function () {
          var e;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (e = document.readyState) || "complete" === e
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (c.prototype.start = function () {
          var o, e, t, i, r;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              for (
                var e = this.element.querySelectorAll(
                    "." + this.config.boxClass,
                  ),
                  t = [],
                  i = 0,
                  s = e.length;
                i < s;
                i++
              )
                ((o = e[i]), t.push(o));
              return t;
            }.call(this)),
            (this.all = function () {
              for (var e = this.boxes, t = [], i = 0, s = e.length; i < s; i++)
                ((o = e[i]), t.push(o));
              return t;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = 0, t = (i = this.boxes).length; e < t; e++)
                ((o = i[e]), this.applyStyle(o, !0));
          if (
            (this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler,
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live)
          )
            return new s(
              ((r = this),
              function (e) {
                for (var o, n, t = [], i = 0, s = e.length; i < s; i++)
                  ((n = e[i]),
                    t.push(
                      function () {
                        for (
                          var e = n.addedNodes || [],
                            t = [],
                            i = 0,
                            s = e.length;
                          i < s;
                          i++
                        )
                          ((o = e[i]), t.push(this.doSync(o)));
                        return t;
                      }.call(r),
                    ));
                return t;
              }),
            ).observe(document.body, { childList: !0, subtree: !0 });
        }),
        (c.prototype.stop = function () {
          if (
            ((this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler,
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval)
          )
            return clearInterval(this.interval);
        }),
        (c.prototype.sync = function (e) {
          if (s.notSupported) return this.doSync(this.element);
        }),
        (c.prototype.doSync = function (e) {
          var t, i, s, o, n;
          if (1 === (e = null == e ? this.element : e).nodeType) {
            for (
              n = [],
                i = 0,
                s = (o = (e = e.parentNode || e).querySelectorAll(
                  "." + this.config.boxClass,
                )).length;
              i < s;
              i++
            )
              ((t = o[i]),
                r.call(this.all, t) < 0
                  ? (this.boxes.push(t),
                    this.all.push(t),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(t, !0),
                    n.push((this.scrolled = !0)))
                  : n.push(void 0));
            return n;
          }
        }),
        (c.prototype.show = function (e) {
          return (
            this.applyStyle(e),
            (e.className = e.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(e),
            this.util().emitEvent(e, this.wowEvent),
            this.util().addEvent(e, "animationend", this.resetAnimation),
            this.util().addEvent(e, "oanimationend", this.resetAnimation),
            this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation),
            e
          );
        }),
        (c.prototype.applyStyle = function (e, t) {
          var i,
            s = e.getAttribute("data-wow-duration"),
            o = e.getAttribute("data-wow-delay"),
            n = e.getAttribute("data-wow-iteration");
          return this.animate(
            ((i = this),
            function () {
              return i.customStyle(e, t, s, o, n);
            }),
          );
        }),
        (c.prototype.animate =
          "requestAnimationFrame" in window
            ? function (e) {
                return window.requestAnimationFrame(e);
              }
            : function (e) {
                return e();
              }),
        (c.prototype.resetStyle = function () {
          for (var e, t = this.boxes, i = [], s = 0, o = t.length; s < o; s++)
            ((e = t[s]), i.push((e.style.visibility = "visible")));
          return i;
        }),
        (c.prototype.resetAnimation = function (e) {
          if (0 <= e.type.toLowerCase().indexOf("animationend"))
            return ((e = e.target || e.srcElement).className = e.className
              .replace(this.config.animateClass, "")
              .trim());
        }),
        (c.prototype.customStyle = function (e, t, i, s, o) {
          return (
            t && this.cacheAnimationName(e),
            (e.style.visibility = t ? "hidden" : "visible"),
            i && this.vendorSet(e.style, { animationDuration: i }),
            s && this.vendorSet(e.style, { animationDelay: s }),
            o && this.vendorSet(e.style, { animationIterationCount: o }),
            this.vendorSet(e.style, {
              animationName: t ? "none" : this.cachedAnimationName(e),
            }),
            e
          );
        }),
        (c.prototype.vendors = ["moz", "webkit"]),
        (c.prototype.vendorSet = function (o, e) {
          var n,
            r,
            a,
            t = [];
          for (n in e)
            ((r = e[n]),
              (o["" + n] = r),
              t.push(
                function () {
                  for (
                    var e = this.vendors, t = [], i = 0, s = e.length;
                    i < s;
                    i++
                  )
                    ((a = e[i]),
                      t.push(
                        (o["" + a + n.charAt(0).toUpperCase() + n.substr(1)] =
                          r),
                      ));
                  return t;
                }.call(this),
              ));
          return t;
        }),
        (c.prototype.vendorCSS = function (e, t) {
          for (
            var i,
              s = l(e),
              o = s.getPropertyCSSValue(t),
              n = this.vendors,
              r = 0,
              a = n.length;
            r < a;
            r++
          )
            ((i = n[r]), (o = o || s.getPropertyCSSValue("-" + i + "-" + t)));
          return o;
        }),
        (c.prototype.animationName = function (t) {
          var i;
          try {
            i = this.vendorCSS(t, "animation-name").cssText;
          } catch (e) {
            i = l(t).getPropertyValue("animation-name");
          }
          return "none" === i ? "" : i;
        }),
        (c.prototype.cacheAnimationName = function (e) {
          return this.animationNameCache.set(e, this.animationName(e));
        }),
        (c.prototype.cachedAnimationName = function (e) {
          return this.animationNameCache.get(e);
        }),
        (c.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (c.prototype.scrollCallback = function () {
          var o;
          if (
            this.scrolled &&
            ((this.scrolled = !1),
            (this.boxes = function () {
              for (var e = this.boxes, t = [], i = 0, s = e.length; i < s; i++)
                (o = e[i]) && (this.isVisible(o) ? this.show(o) : t.push(o));
              return t;
            }.call(this)),
            !this.boxes.length) &&
            !this.config.live
          )
            return this.stop();
        }),
        (c.prototype.offsetTop = function (e) {
          for (var t; void 0 === e.offsetTop;) e = e.parentNode;
          for (t = e.offsetTop; (e = e.offsetParent);) t += e.offsetTop;
          return t;
        }),
        (c.prototype.isVisible = function (e) {
          var t = e.getAttribute("data-wow-offset") || this.config.offset,
            i =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset,
            t =
              i +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              t,
            s = this.offsetTop(e),
            e = s + e.clientHeight;
          return s <= t && i <= e;
        }),
        (c.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new e());
        }),
        (c.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        c)));
  }.call(this));
