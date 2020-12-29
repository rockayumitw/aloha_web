"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stickyMixins = void 0;

var _gsap = require("gsap/dist/gsap");

var _ScrollTrigger = require("gsap/dist/ScrollTrigger");

_gsap.gsap.registerPlugin(_ScrollTrigger.ScrollTrigger);

var stickyMixins = {
  data: function data() {
    return {
      stickyPos: 500,
      limitPos: 1000,
      scrolled: false,
      lastPos: 0,
      isActive: false // 判斷卷軸滑道位置

    };
  },
  mounted: function mounted() {},
  methods: {
    ScrollAnimation: function ScrollAnimation() {
      this.scrollY = window.scrollY;

      if (window.scrollY > 100) {
        this.isActive = true;
      }

      if (window.scrollY < 100) {
        this.isActive = false;
      }

      if (this.lastPos < window.scrollY && this.stickyPos < window.scrollY) {
        this.isActive = true;
      }

      if (this.lastPos < window.scrollY && this.limitPos < window.scrollY) {
        if (window.innerWidth < 992) {
          return false;
        }

        this.scrolled = true;
      }

      if (this.lastPos > window.scrollY) {
        this.scrolled = false;
      }

      this.lastPos = window.scrollY;
    }
  },
  created: function created() {
    if (process.client) {
      window.addEventListener("scroll", this.ScrollAnimation); // window.addEventListener("resize", this.Resize);
    }
  },
  destroyed: function destroyed() {
    if (process.client) {
      window.addEventListener("scroll", this.ScrollAnimation); // window.addEventListener("resize", this.Resize);
      // window.removeEventListener("scroll", this.ScrollAnimation);
    }
  }
};
exports.stickyMixins = stickyMixins;