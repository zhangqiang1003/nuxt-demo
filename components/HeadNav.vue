<template>
  <div class="head-nav">
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
            <a
              class="href"
              href="//www.baidu.com">保障</a>
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
          <li class="mgl20">
            <nuxt-link
              class="href"
              to="/register">注册</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="href"
              to="/login">登录</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadNav'
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
    height: 100px;
    background-color: transparent;
    &.mgl20 {
      margin-left: 20px;
    }
    a {
      display: block;
      width: 100%;
      height: 100px;
    }
    &:hover {
      background-color: rgba(241, 142, 45, 1);
    }
  }
}
</style>
