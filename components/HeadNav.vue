<template>
  <div
    :class="{'scroll-up': scrollStatus === 'down',
             'no-scroll': scrollStatus === 'no',
             'handle-bg': handleNavBg}"  
    class="head-nav">
    <div class="w1360">
      <i class="logo">logo</i>
      <div class="nav-wrapper">
        <ul class="item-navs">
          <li
            v-for="(navlist, index) in navLists"
            :key="index"
            :class="{'clicked': navlist.url === currRoute}">
            <nuxt-link
              :to="navlist.url"
              class="href">{{ navlist.name }}</nuxt-link>
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
    },
    handleNavBg: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      navLists: [
        {
          name: '首页',
          url: '/'
        },
        {
          name: '联机宝',
          url: '/main/ljb-overview'
        },
        {
          name: '手游加速器',
          url: '/main/qeeyou-mobile'
        },
        {
          name: '价格',
          url: '/main/service'
        },
        {
          name: '保障',
          url: '/main/SecurityPlan'
        },
        {
          name: '游戏',
          url: '/main/game'
        },
        {
          name: '帮助',
          url: '/main/help'
        },
        {
          name: '公告',
          url: '/main/notice'
        }
      ],
      currRoute: undefined
    }
  },
  watch: {
    $route: function() {
      this.currRoute = this.$route.path
    }
  },
  created() {
    this.currRoute = this.$route.path
  },
  beforeDestroy() {
    this.currRoute = null
  },
  motheds: {}
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
    top: -101px;
    transition: top 0.3s linear;
  }
  &.no-scroll {
    position: relative;
  }
  &.handle-bg {
    background-color: rgba(33, 39, 53, .98);
    border-bottom-color: transparent;
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
    &.clicked {
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
