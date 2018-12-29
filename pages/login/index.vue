<template>
  <div class="login">
    <nuxt-link to="/">
      <i class="logo" />
    </nuxt-link>
    <div class="nav-btn">
      <nuxt-link to="/register">注册</nuxt-link>
      <nuxt-link
        :class="{'press': isLoginRoute}"
        to="/login">登录</nuxt-link>
    </div>
    <div class="form-groups">
      <input
        type="text"
        placeholder="手机号码/邮箱账号">
      <span
        :class="{'show': isErrUser}"
        class="error-tip icon-error-tip"><i />请输入正确的手机号码或邮箱</span>
      <i
        :class="{'show': isShowClearBtn}"
        class="clear-btn"/>
    </div>
    <div class="form-groups">
      <input
        type="password"
        placeholder="密码">
      <i
        :class="{'show': isHidePassBtn}"
        class="clear-btn"/>
    </div>
    <p class="forget-pass-btn">
      <nuxt-link to="/">忘记密码？</nuxt-link>
    </p>
    <div
      :class="{'canClick': canClickLoginBtn}"
      class="login-btn">登录</div>
    <div class="footer-copy">©2018&nbsp;QeeYou.cn&nbsp;版权所有</div>
  </div>
</template>

<script>
export default {
  layout: 'user',
  name: 'Login',
  data() {
    return {
      isErrUser: false, // 是错误的用户名
      isShowClearBtn: false, // 是否显示清空用户名的按钮
      isHidePassBtn: false, // 控制密码是否可见的按钮
      isLoginRoute: false, // 是登录路由地址
      canClickLoginBtn: false // 是否可以点击登录按钮
    }
  },
  created() {
    this.getRoute()
  },
  methods: {
    getRoute: function() {
      let route = this.$route
      // 控制导航条样式
      this.isLoginRoute = route.name === 'login' ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 340px;
  margin: 0 auto;
  height: 100%;
  padding-top: 120px;
  .logo {
    // logo
    width: 178px;
    height: 120px;
    display: block;
    margin: 0 auto;
    background: url(~assets/images/common/logo_vertical_white.png) no-repeat;
    background-size: 100% 100%;
  }
  & > .nav-btn {
    // 注册登录切换按钮
    margin-top: 40px;
    width: 100%;
    overflow: hidden;
    padding-bottom: 20px;
    a {
      float: left;
      width: 168px;
      text-align: center;
      color: rgba(110, 116, 130, 1);
      border-bottom: 1px solid rgba(49, 57, 76, 1);
      transition: color 0.3s linear;
      font-size: 16px;
      text-decoration: none;
      padding-bottom: 10px;
      &.press {
        border-bottom-color: rgba(241, 142, 45, 1);
        color: #fff;
      }
    }
  }
  & > .form-groups {
    margin-top: 20px;
    width: 100%;
    position: relative;
    & > input {
      width: 100%;
      outline: none;
      border-radius: 3px;
      background-color: #fff;
      height: 46px;
      border: none;
      padding: 20px;
      font-size: 16px;
      color: rgba(33, 39, 53, 1);
      &.verify-txt {
        width: 60%;
      }
    }
    .clear-btn {
      // 清除手机号的按钮
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 18px;
      right: 20px;
      top: 23px;
      transform: translateY(-50%);
      background: url(~assets/images/icon/register_icon_Input_box_delete_normal.png)
        no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      display: none;
      &:hover {
        background: url(~assets/images/icon/register_icon_Input_box_delete_hover.png)
          no-repeat;
        background-size: 100% 100%;
      }
      &.show {
        display: block;
      }
    }
    .handle-psd {
      // 控制密码是否可见
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 18px;
      right: 20px;
      top: 23px;
      transform: translateY(-50%);
      cursor: pointer;
      &.hide {
        background: url(~assets/images/icon/register_icon_Input_box_close_normal.png)
          no-repeat;
        background-size: 100% 100%;
        &:hover {
          background: url(~assets/images/icon/register_icon_Input_box_close_hover.png)
            no-repeat;
          background-size: 100% 100%;
        }
      }
      &.show {
        background: url(~assets/images/icon/register_icon_Input_box_open_normal.png)
          no-repeat;
        background-size: 100% 100%;
        &:hover {
          background: url(~assets/images/icon/register_icon_Input_box_open_hover.png)
            no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .error-tip {
      // 错误提醒
      display: none;
      font-size: 14px;
      color: #acafb8;
      padding-top: 10px;
      margin-bottom: -7px;
      line-height: 18px;
      &.show {
        display: block;
      }
      i {
        float: left;
        width: 18px;
        height: 18px;
        margin-right: 5px;
        background: url(~assets/images/icon/user-icon.png) no-repeat;
        background-size: 72px 100%;
        background-position: 0 0;
      }
      &.error-pass {
        // 密码错误
        i {
          background-position: -54px 0;
        }
      }
      &.success-pass {
        // 密码成功
        i {
          background-position: -36px 0;
        }
      }
      &.mgb10 {
        // 向下顶3px
        margin-bottom: 3px;
      }
      &.icon-error-tip {
        i {
          background-position: -54px 0;
        }
      }
    }
  }
  & > .forget-pass-btn {
    // 忘记密码按钮
    margin-top: 10px;
    text-align: right;
    a {
      font-size: 14px;
      color: rgba(172, 175, 184, 1);
      text-decoration: none;
      transition: color 0.2s linear;
      &:hover {
        text-decoration: underline;
        color: rgba(22, 190, 131, 1);
      }
    }
  }
  & > .login-btn {
    // 登录按钮
    width: 100%;
    height: 46px;
    border-radius: 3px;
    background-color: #4a5161;
    margin-top: 40px;
    text-align: center;
    line-height: 46px;
    font-size: 16px;
    color: #fff;
    &.canClick {
      cursor: pointer;
      background-color: rgba(241, 142, 45, 1);
    }
  }
  & > .footer-copy {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 30px;
    font-size: 14px;
    color: rgba(172, 175, 184, 1);
  }
}
</style>
