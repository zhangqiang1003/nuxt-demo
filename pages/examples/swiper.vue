<template>
  <div class="swiper-wrapper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slider1</div>
        <div class="swiper-slide">slider2</div>
        <div class="swiper-slide">slider3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleSwiper',
  head() {
    return {
      title: this.title
    }
  },
  data() {
    return {
      title: 'swiper'
    }
  },
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      let a = new this.Swiper('.swiper-container', {
        autoplay: true
      })
      console.log(a)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../node_modules/swiper/dist/css/swiper.min.css';

.swiper-wrapper {
  color: #fff;
  width: 600px;
  height: 300px;
  background-color: antiquewhite;
}
</style>
