<template>
  <div
    :class="{'show': isShowLayout}"
    class="default-layout">
    <div class="head-nav-wrapper">
      <HeadNav
        :scroll-status="scrollStatus"
        :handle-nav-bg="handleNavBg"/>
    </div>
    <nuxt
      id="components"
      class="components"/>
    <div class="footer-wrapper">
      <Footer />
    </div>
  </div>
</template>

<script>
import HeadNav from '~/components/HeadNav.vue'
import Footer from '~/components/Footer.vue'
export default {
  name: 'Default',
  components: {
    HeadNav,
    Footer
  },
  data() {
    return {
      isShowLayout: true,
      scrollStatus: undefined, // 滚动状态 默认 - undefined | ‘up’ - 向上 | ‘down’ - 向下 | ‘no’ - 不支持相关事件
      distance: null,
      oDom: null,
      scrollDis: null,
      domPosition: null,
      handleNavBg: false
    }
  },
  head() {
    return {
      title: '1234'
    }
  },
  watch: {
    distance: function() {
      this.handleNavBg = this.distance < -20 ? true : false
    },
    $route: 'watchRoute'
  },
  mounted() {
    this.isShowLayout = true
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
      document.addEventListener('DOMMouseScroll', this.scrollDirection, false)
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = this.scrollDirection

    // 获取到顶部的距离的相关参数及方法
    this.oDom = document.getElementById('components')
    this.domPosition = parseInt(this.oDom.offsetTop)
    this.getPositionToY(0)
  },
  beforeDestroy() {
    this.distance = null
    this.oDom = null
    window.onscroll = null
  },
  methods: {
    // 监听滚动条的方向
    scrollDirection: function(e) {
      e = e || window.event
      if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
        this.scrollStatus = e.wheelDelta === 0 ? undefined : (e.wheelDelta > 0 ? 'up' : 'down')
      } else if (e.detail) { //Firefox滑轮事件
        this.scrollStatus = e.detail === 0 ? undefined : (e.detail > 0 ? 'up' : 'down')
      } else {
        this.scrollStatus = 'no' // 不支持
      }
    },
    // 滚动条滚动时，获取某个dom元素在Y轴方向上，距离某个特定位置的距离
    getPositionToY: function(size) {
      const that = this
      window.onscroll = function() {
        that.scrollDis = document.documentElement.scrollTop || document.body.scrollTop;
        if (that.oDom.getBoundingClientRect) {
          that.distance = that.oDom.getBoundingClientRect().y - size;
        } else {
          that.distance = that.domPosition - that.scrollDis - size;
        }
      }
    },
    watchRoute: function() {
      console.log(this.$route, 49)
      const route = this.$route.path
      this.resetWinScroll(route) // 切换路由时，重置window.scroll方法
    },
    resetWinScroll: function(route) {
      // 切换路由时，重置window.scroll方法
      const status =
        route === '/' ||
        route === '/main/ljb-overview' ||
        route === '/main/qeeyou-mobile' ||
        route === '/main/service' ||
        route === '/main/SecurityPlan' ||
        route === '/main/game' ||
        route === '/main/help' ||
        route === '/main/notice' ? true : false
      
      if (status) {
        window.onscroll = null
        this.getPositionToY(0);
      }
    }
  },
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
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.default-layout {
  display: none;
}
.default-layout.show {
  display: block;
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
.components {
  /* border: 1px solid red; */
  /* overflow: hidden; */
}
.footer-wrapper {
  font-size: 24px;
  max-width: 1920px;
  min-width: 1360px;
  /* border: 1px solid red; */
}
</style>
