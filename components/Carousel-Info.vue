<template>
  <section>
    <div class="row no-gutters d-none">
      <ul class="col-sm-7 col-lg-7">
        <li class="card" v-for="item in bigGroup" :key="item.index">
          <div class="card-image-box"><img :src="item.image" alt="" /></div>
        </li>
      </ul>
      <ul class="col-sm-5 col-lg-5">
        <li class="card">
          <div class="card-image-box"><img :src="smallGroup[0].image" alt="" /></div>
        </li>
        <li class="card">
          <div class="card-image-box"><img :src="smallGroup[1].image" alt="" /></div>
        </li>
        <li class="card">
          <div class="card-image-box"><img :src="smallGroup[2].image" alt="" /></div>
          <button type="button " class="btn-lg btn-black">SEE ALL 10 PHOTOS</button>
        </li>
      </ul>
    </div>
    <div v-swiper:mySwiper="sliderSwiperOption" class="swiper d-block">
      <div class="swiper-wrapper">
        <a
          v-for="slider in phoneSliders"
          :key="slider.index"
          :href="slider.url"
          target="_blank"
          class="swiper-slide"
          :style="{ 'background-image': 'url(' + slider.image + ')' }"
        ></a>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<style scoped lang="scss" scoped>
ul {
  &:nth-child(1) {
    li {
      .card-image-box {
        width: 100%;
        max-width: 635px;
        max-height: 434px;
        margin-right: 8px;
      }
    }
  }
  &:nth-child(2) {
    max-width: 467px;
    li {
      &:nth-child(1) {
        max-width: 467px;
        max-height: 213px;
        margin-bottom: 8px;
      }
      &:nth-child(2) {
        display: inline-block;
        height: 213px;
        .card-image-box {
          display: inline-block;
          max-width: 200px;
          max-height: 213px;
          margin-right: 8px;
        }
      }
      &:nth-child(3) {
        display: inline-block;
        max-width: 245px;
        .card-image-box {
          display: inline-block;
          max-height: 150px;
        }
      }
    }
  }
}
</style>

<script>
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
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
      sliders: {
        big: [
          {
            id: 1,
            image: "../images/image3.jpg",
            url: "/",
          },
        ],
        small: [
          {
            id: 2,
            image: "../images/image2.jpg",
            url: "/",
          },
          {
            id: 3,
            image: "../images/image3.jpg",
            url: "/",
          },
          {
            id: 3,
            image: "../images/image4.jpg",
            url: "/",
          },
        ],
      },
    };
  },
  computed: {
    phoneSliders() {
      let slider = [];
      slider = this.sliders.big.concat(this.sliders.small);
      return slider;
    },
    bigGroup() {
      console.log(this.sliders.big);
      return this.sliders.big;
    },
    smallGroup() {
      return this.sliders.small;
    },
  },
};
</script>
