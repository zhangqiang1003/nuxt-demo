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
        v-model="mobilePhone"
        type="text"
        placeholder="手机号码"
        @input="checkMobilePhone()"
        @focus="isShowClearBtn = true">
      <span
        :class="{'show': isErrPhone}"
        class="error-tip icon-error-tip"><i />请输入正确的手机号码</span>
      <i
        :class="{'show': isShowClearBtn}"
        class="clear-btn"
        @click.stop.prevent="clickClearMobilePhone()"/>
    </div>
    <div class="form-groups">
      <input
        v-model="userPassword"
        :type="passType"
        placeholder="密码"
        @input="checkPassword()"
        @focus="isFirstFocusPassInput = true">
      <span
        :class="{'error-pass': isFirstFocusPassInput && (!userPassword || isErrPass[0]), 'success-pass': userPassword && isFirstFocusPassInput && !isErrPass[0]}"
        class="show error-tip mgb10"><i />不能包含空格或特殊字符</span>
      <span
        :class="{'error-pass': isFirstFocusPassInput && isErrPass[1], 'success-pass': isFirstFocusPassInput && !isErrPass[1]}"
        class="show error-tip"><i />长度6-18位</span>
      <i
        :class="{'hide': isHidePass, 'show': !isHidePass}"
        class="handle-psd"
        @click.stop.prevent="isHidePass = !isHidePass"/>
    </div>
    <div class="form-groups">
      <input
        v-model="verifyCode"
        class="verify-txt"
        type="text"
        placeholder="验证码"
        @input="checkVerifyCode()">
      <span
        ref="verifyBtn"
        :class="{'canClick': canClickCodeBtn}"
        class="verify-btn"
        @click="getVerifyCode()">{{ verifyCodeTxt }}</span>
    </div>
    <div
      :class="{'canClick': canClickRegisterBtn}"
      class="register-btn"
      @click="registerUser()">立即注册</div>
    <span
      :class="{'show': !isCheckedServePolicy}"
      class="error-tip icon-error-tip"><i />请先同意服务条款</span>
    <div class="form-groups mgt15">
      <span
        :class="{'hasChecked': isCheckedServePolicy}"
        class="checked"
        @click="isCheckedServePolicy = !isCheckedServePolicy"/>
      <span class="serve-policy-txt">
        我已阅读并同意相关
        <nuxt-link to="/">服务条款和隐私政策</nuxt-link>
      </span>
    </div>
    <div class="footer-copy">©2018&nbsp;QeeYou.cn&nbsp;版权所有</div>
  </div>
</template>

<script>
import utils from '~/service/utils.js'
import { getCaptcha, captchaValid, register } from '~/api'
// import initGeetest from '~/assets/js/lib/gt.js'

export default {
  layout: 'user',
  name: 'Register',
  data() {
    return {
      isErrPhone: false, // 是否是错误的number true - 是 | false - 否
      isErrPass: [true, true], // 是否是错误的密码 true - 是 | false - 否
      isShowClearBtn: false, // 是否显示清除电话号码的按钮 true - 是 | false - 否
      isHidePass: true, // 是否隐藏密码 true - 隐藏 | false - 显示
      passType: 'password', // 密码输入框的类型  password - 密码不可见 | text - 密码可见
      isErrCode: false, // 是否是错误的验证码 true - 是 | false - 不是
      isCheckedServePolicy: true, // 是否勾选服务条款 true - 是 | false - 否
      verifyCodeTxt: '发送验证码',
      canClickCodeBtn: false, // 能够点击短信验证码按钮 true - 能 | false - 不能
      canClickRegisterBtn: false, // 能够点击注册按钮 true - 能 | false - 不能
      isRegisterRoute: false, // 是register路由
      isFirstFocusPassInput: false, // 是否已经聚焦过密码输入框
      mobilePhone: undefined, // 注册手机号
      userPassword: undefined, // 用户注册密码
      geetestValid: false, // 极验证是否成功 true - 是 | false - 否
      verifyCode: undefined, // 验证码
      captchaObj: undefined // 极验证的一个变量
    }
  },
  watch: {
    mobilePhone: function() {
      this.isShowClearBtn = this.mobilePhone ? true : false
    },
    isErrPhone: function() {
      this.canClickCodeBtn = this.isErrPhone ? false : true
    },
    isHidePass: function() {
      this.passType = this.isHidePass ? 'password' : 'text'
    },
    isCheckedServePolicy: function() {
      this.checkRegisterBtn()
    }
  },
  created() {
    this.getRoutes()
  },
  mounted() {
    // this.geetest()
    console.log(this.$route)
  },
  beforeDestroy() {
    this.isRegisterRoute = false
  },
  methods: {
    // 获取路由
    getRoutes: function() {
      let route = this.$route;
      // 控制导航按钮的颜色
      this.isRegisterRoute = route.name === 'register' ? true : false
    },

    // 处理手机号
    checkMobilePhone: function() {
      // 校验手机号码
      let status1 = utils.checkMobilePhone(this.mobilePhone)
      let status2 = utils.checkVirtualPhone(this.mobilePhone) // 校验是否是虚拟商手机号
      this.isErrPhone = status1 && !status2 ? false : true
      this.checkRegisterBtn()
    },
    clickClearMobilePhone: function() {
      // 清除操作将重置以下三种状态
      this.mobilePhone = undefined
      this.canClickCodeBtn = false
      this.isErrPhone = false
    },

    // 处理密码
    checkPassword: function() {
      // 校验密码
      // 校验密码的长度（6-18位）
      let status1 = this.userPassword.length <=18 && this.userPassword.length >= 6 ? true : false
      this.isErrPass[1] = status1 ? false : true
      // 校验密码是否有特殊字符
      let status0 = utils.checkPassword(this.userPassword)
      this.isErrPass[0] = status0 ? false : true
      this.checkRegisterBtn()
    },

    // 获取验证码
    getVerifyCode: function() {
      const that = this
      if (!this.canClickCodeBtn) return
      // 控制视图
      let time = 60;
      const aa = setInterval(function() {
        time--
        that.verifyCodeTxt = `${time}s后重新发送`
        that.canClickCodeBtn = false
        if (time < 0) {
          that.verifyCodeTxt = '发送验证码'
          that.canClickCodeBtn = true
          clearInterval(aa)
          time = 60
        }
      }, 1000)
    },

    // 校验验证码
    checkVerifyCode: function() {
      this.isErrCode = this.verifyCode.length === 6 ? false : true
      this.checkRegisterBtn()
    },

    // 校验立即注册按钮
    checkRegisterBtn: function() {
      let status = null
      status =
        !this.mobilePhone ||
        !this.userPassword ||
        !this.verifyCode ||
        !this.isCheckedServePolicy ||
        this.isErrPhone ||
        this.isErrCode ||
        this.isErrPass[0] ||
        this.isErrPass[1]

      this.canClickRegisterBtn = status ? false : true
      status = null
    },

    // 注册
    registerUser: function() {
      if (!this.canClickRegisterBtn) return
      const apiData = {
        'mobile': this.mobilePhone,
        'password': this.userPassword,
        'sms_code': this.verifyCode
      }
      register(apiData)
        .then(data => {
          console.log(data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
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
