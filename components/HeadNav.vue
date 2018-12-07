<template>
  <div class="head-nav">
    <div class="w1360">
      <i class="logo">logo</i>
      <div class="nav-wrapper">
        <ul class="item-navs">
          <li>
            <nuxt-link to="/">首页</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/main/ljb-overview">联机宝</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/main/qeeyou-mobile">手游加速器</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/main/service">价格</nuxt-link>
          </li>
          <li>
            <a href="//www.baidu.com">保障</a>
          </li>
          <li>
            <nuxt-link to="/main/game">游戏</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/main/help">帮助</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/main/notice">公告</nuxt-link>
          </li>
        </ul>
        <ul class="user-navs">
          <li>
            <nuxt-link to="/register">注册</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/login">登录</nuxt-link>
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
  margin: 0 auto;
}
.head-nav {
  width: 100%;
  height: 99px;
  border-bottom: 1px solid rgba(62, 69, 95, 1);
}
.nav-wrapper {
  float: right;
}
ul {
  display: inline;
  padding: 0;
}
li {
  display: inline;
}
.logo {
  color: red;
}
</style>
