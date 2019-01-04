<template>
  <div
    :class="{'scroll-up': scrollStatus === 'down', 'no-scroll': scrollStatus === 'no'}"
    class="head-nav">
    <div class="w1360">
      <i class="logo">logo</i>
      <div class="nav-wrapper">
        <ul class="item-navs">
          <li>
            <nuxt-link
              class="href"
              to="/">首页</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="href"
              to="/main/ljb-overview">联机宝</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="href"
              to="/main/qeeyou-mobile">手游加速器</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="href"
              to="/main/service">价格</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="href"
              to="//www.baidu.com">保障</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="href"
              to="/main/game">游戏</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="href"
              to="/main/help">帮助</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="href"
              to="/main/notice">公告</nuxt-link>
          </li>
        </ul>
        <ul class="user-navs">
          <li>
            <nuxt-link
              class="href"
              to="/login">登录</nuxt-link>
          </li>
          <li class="mgl20">
            <nuxt-link
              class="href"
              to="/register">免费注册</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadNav',
  props: {
    scrollStatus: {
      type: String,
      default: undefined
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.w1360 {
  max-width: 1360px;
  height: 100px;
  margin: 0 auto;
  position: relative;
}
.head-nav {
  width: 100%;
  height: 99px;
  border-bottom: 1px solid rgba(62, 69, 95, 1);
  font-size: 24px;
  position: fixed;
  top: 0px;
  transition: top 0.3s linear;
  z-index: 2;
  &.scroll-up {
    top: -99px;
    transition: top 0.3s linear;
  }
  &.no-scroll {
    position: relative;
  }
}
.nav-wrapper {
  float: right;
  height: 100px;
  line-height: 100px;
}
ul {
  display: inline;
  padding: 0;
}
li {
  float: left;
  list-style: none;
  padding: 0;
  padding-left: 20px;
  padding-right: 20px;
}
.logo {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 253px;
  height: 54px;
  background: url(~assets/images/common/logo-g-text.png) no-repeat;
  background-size: 100% 100%;
  font-size: 0;
}
.href {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}
.item-navs {
  // 处理页面导航
  li {
    height: 100px;
    border-bottom: 4px solid transparent;
    a {
      display: block;
      width: 100%;
      height: 100px;
    }
    &:hover {
      border-bottom-color: rgba(241, 142, 45, 1);
    }
  }
}
.user-navs {
  // 处理注册和登录
  li {
    float: right;
    width: 104px;
    height: 100px;
    background-color: transparent;
    transition: background-color 0.3s linear;
    &.mgl20 {
      margin-left: 20px;
    }
    &:nth-of-type(2) {
      background-color: rgba(241, 142, 45, 1);
    }
    &:nth-of-type(1) {
      &:hover {
        & + li {
          background-color: transparent;
        }
      }
    }
    a {
      display: block;
      width: 100%;
      height: 100px;
      text-align: center;
    }
    &:hover {
      background-color: #f8b62d;
    }
  }
}
</style>
