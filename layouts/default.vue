<template>
  <div class="default-layout">
    <div class="head-nav-wrapper">
      <HeadNav />
    </div>
    <nuxt/>
    <div class="footer-wrapper">
      底部
    </div>
  </div>
</template>

<script>
import HeadNav from '~/components/HeadNav.vue'
export default {
  name: 'Default',
  components: {
    HeadNav
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}
body {
  height: 100%;
  background-color: rgba(33, 39, 53, 1);
}
.default-layout {
  max-width: 1920px;
  min-width: 1360px;
  margin: 0 auto;
}
.head-nav-wrapper {
  width: 100%;
  height: 100px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
