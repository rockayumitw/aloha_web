<template>
  <div v-swiper:mySwiper="sliderSwiperOption" class="swiper">
    <div class="swiper-wrapper">
      <a
        v-for="slider in sliders"
        :key="slider.index"
        :href="slider.url"
        target="_blank"
        class="swiper-slide"
        :style="{ 'background-image': 'url(' + slider.image + ')' }"
      ></a>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  props: ["sliders"],
  data() {
    return {
      sliderSwiperOption: {
        //  Slider swiper loading
        // slidesPerColumn: 2,
        // spaceBetween: 30,
        loop: true,
        autoplay: { delay: 5000 },
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        observeParents: true,
        observer: true,
      },
    };
  },
};
</script>
