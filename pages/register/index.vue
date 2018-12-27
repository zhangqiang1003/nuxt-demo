<template>
  <div class="register">
    <nuxt-link to="/">
      <i class="logo" />
    </nuxt-link>
    <div class="nav-btn">
      <nuxt-link
        :class="{'press': isRegisterRoute}"
        to="/register">注册</nuxt-link>
      <nuxt-link to="/login">登录</nuxt-link>
    </div>
    <div class="form-groups">
      <input
        type="text"
        placeholder="手机号码">
      <span
        :class="{'show': isErrPhone}"
        class="error-tip icon-error-tip"><i />请输入正确的手机号码</span>
      <i
        :class="{'show': isShowClearBtn}"
        class="clear-btn"/>
    </div>
    <div class="form-groups">
      <input
        type="password"
        placeholder="密码">
      <span
        :class="{'error-pass': isErrPass[0]}"
        class="show error-tip mgb10"><i />不能包含空格或特殊字符</span>
      <span
        :class="{'error-pass': isErrPass[1]}"
        class="show error-tip"><i />长度6-18位</span>
      <i
        :class="{'hide': isHidePass, 'show': !isHidePass}"
        class="handle-psd"/>
    </div>
    <div class="form-groups">
      <input
        class="verify-txt"
        type="text"
        placeholder="验证码">
      <span
        :class="{'canClick': canClickCodeBtn}"
        class="verify-btn">{{ verifyCode }}</span>
      <span
        :class="{'show': isErrCode}"
        class="error-tip icon-error-tip"><i />验证码不能为空</span>
    </div>
    <div
      :class="{'canClick': canClickRegisterBtn}"
      class="register-btn">立即注册</div>
    <span
      :class="{'show': isCheckedServePolicy}"
      class="error-tip icon-error-tip"><i />请先同意服务条款</span>
    <div class="form-groups mgt15">
      <span
        :class="{'hasChecked': isCheckedServePolicy}"
        class="checked" />
      <span class="serve-policy-txt">
        我已阅读并同意相关
        <nuxt-link to="/">服务条款和隐私政策</nuxt-link>
      </span>
    </div>
    <div class="footer-copy">©2018&nbsp;QeeYou.cn&nbsp;版权所有</div>
  </div>
</template>

<script>
let vm = {
  layout: 'user',
  name: 'Register',
  data() {
    return {
      isErrPhone: false, // 是否是错误的number true - 是 | false - 否
      isErrPass: [false, false], // 是否是错误的密码 true - 是 | false - 否
      isShowClearBtn: false, // 是否显示清除电话号码的按钮 true - 是 | false - 否
      isHidePass: true, // 是否隐藏密码 true - 隐藏 | false - 显示
      isErrCode: false, // 是否是错误的验证码 true - 是 | false - 不是
      isCheckedServePolicy: true, // 是否勾选服务条款 true - 是 | false - 否
      verifyCode: '发送验证码',
      canClickCodeBtn: false, // 能够点击短信验证码按钮 true - 能 | false - 不能
      canClickRegisterBtn: false, // 能够点击注册按钮 true - 能 | false - 不能
      isRegisterRoute: false // 是register路由
    }
  },
  watch: {},
  created() {
    this.getRoutes()
  },
  mounted() {},
  beforeDestroy() {
    this.isRegisterRoute = false
  },
  methods: {
    getRoutes:function() {
      let route = this.$route;
      // 控制导航按钮的颜色
      this.isRegisterRoute = route.name === 'register' ? true : false
    }
  }
}
export default vm
</script>

<style lang="scss" scoped>
.register {
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
    .verify-btn {
      // 发送验证码按钮
      width: 33%;
      height: 46px;
      float: right;
      background-color: #4a5161;
      border-radius: 3px;
      font-size: 16px;
      line-height: 46px;
      text-align: center;
      color: #fff;
      &.canClick {
        cursor: pointer;
        background-color: rgba(22, 190, 131, 1);
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
  .register-btn {
    // 立即注册按钮
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
  & > .form-groups {
    &.mgt15 {
      margin-top: 35px;
    }
    & > .checked {
      float: left;
      width: 20px;
      height: 20px;
      background-color: #fff;
      border-radius: 3px;
      padding-top: 15px;
      margin-right: 5px;
      cursor: pointer;
      background: url(~assets/images/icon/checkbox-icon.png) no-repeat;
      background-position: 0 0;
      background-size: 40px 100%;
      &.hasChecked {
        background: url(~assets/images/icon/checkbox-icon.png) no-repeat;
        background-position: -20px 0;
        background-size: 40px 100%;
      }
    }
    // 服务条款
    & > .serve-policy-txt {
      line-height: 20px;
      font-size: 14px;
      color: #9b9faa;
      a {
        color: #1eb470;
      }
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
