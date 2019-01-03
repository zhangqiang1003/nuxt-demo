<template>
  <div class="reset-password">
    <h2>设置新密码</h2>
    <div class="form-groups">
      <input
        v-model="userPassword"
        :type="newPassType"
        placeholder="新密码"
        @focus="isFirstFocusPassInput = true"
        @input="checkNewPass()">
      <span
        :class="{'error-pass': isFirstFocusPassInput && (!userPassword || isErrPass[0]), 'success-pass': userPassword && isFirstFocusPassInput && !isErrPass[0]}"
        class="show error-tip mgb3"><i />不能包含空格或特殊字符</span>
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
        v-model="reUserPassword"
        :type="rePassType"
        placeholder="再次确认新密码"
        @input="checkRePass()">
      <span
        :class="{'show': isErrRePass}"
        class="error-tip error-pass">
        <i />两次密码输入不一致
      </span>
      <i
        :class="{'hide': isHideRePass, 'show': !isHideRePass}"
        class="handle-psd"
        @click.stop.prevent="isHideRePass = !isHideRePass"/>
    </div>
    <div
      :class="{'can-click': canClickBtn}"
      class="change-password-btn"
      @click="clickChangePassBtn()">修改密码</div>
    <div class="footer-copy">©2018&nbsp;QeeYou.cn&nbsp;版权所有</div>
  </div>
</template>

<script>
import utils from '~/service/utils.js'
import { resetPassword } from '~/api'

export default {
  layout: 'user',
  name: "ResetPassword",
  data() {
    return {
      isFirstFocusPassInput: false, // 是否是第一次聚焦到表单
      userPassword: undefined, // 用户密码
      reUserPassword: undefined, // 重复用户的密码
      isErrPass: [true, true], // 设置密码的两个验证条件
      isErrRePass: false, // 再次出入的密码是否正确
      isHidePass: true, // 是否隐藏密码 true - 隐藏 | false - 显示
      isHideRePass: true, // 是否隐藏再次输入的密码 true - 隐藏 | false - 显示
      canClickBtn: false, // 是否能够点击确认修改密码按钮 true - 是 | false - 否
      newPassType: 'password', // 新密码的type ‘password’ - 隐藏 | ‘text’ - 可见
      rePassType: 'password' // 新密码的type ‘password’ - 隐藏 | ‘text’ - 可见
    }
  },
  watch: {
    isHidePass: function() {
      // 监听是否隐藏密码的参数
      this.newPassType = this.isHidePass ? 'password' : 'text'
    },
    isHideRePass: function() {
      // 监听是否隐藏重复密码的参数
      this.rePassType = this.isHideRePass ? 'password' : 'text'
    },
  },
  methods: {
    // 校验新密码
    checkNewPass: function() {
      // 重置重复密码输入框的状态
      this.resetRePassInput()
      // 校验密码的长度（6-18位）
      let status1 = this.userPassword.length <=18 && this.userPassword.length >= 6 ? true : false
      this.isErrPass[1] = status1 ? false : true
      // 校验密码是否有特殊字符
      let status0 = utils.checkPassword(this.userPassword)
      this.isErrPass[0] = status0 ? false : true
      this.checkBtn()
    },
    // 校验重复输入的密码
    checkRePass: function() {
      this.isErrRePass = this.reUserPassword === this.userPassword ? false : true
      this.checkBtn()
    },
    // 重置重复密码输入框的状态
    resetRePassInput: function() {
      this.reUserPassword = undefined
      this.isErrRePass = false
    },
    // 校验修改密码按钮
    checkBtn: function() {
      const status =
        this.userPassword &&
        this.reUserPassword &&
        !this.isErrPass[0] &&
        !this.isErrPass[1] &&
        !this.isErrRePass
      this.canClickBtn = status ? true : false
    },
    // 点击确认修改密码按钮
    clickChangePassBtn: function() {
      if (!this.canClickBtn) return
      let apiData = {
        password: this.userPassword,
        password_confirm: this.reUserPassword
      }
      resetPassword(apiData)
        .then(data => {
          console.log(data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
}
</script>

<style lang="scss" scoped>
.reset-password {
  padding-top: 210px;
  height: 100%;
  width: 340px;
  margin: 0 auto;
  position: relative;
  // title
  h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }
  // input表单
  .form-groups {
    width: 100%;
    margin-top: 40px;
    position: relative;
    &:nth-of-type(2) {
      margin-top: 30px;
    }
    input {
      width: 100%;
      outline: none;
      border: none;
      border-radius: 4px;
      height: 46px;
      padding: 10px 20px;
      font-size: 16px;
    }
    & > .error-tip {
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
      &.mgb3 {
        margin-bottom: 3px;
      }
      & > i {
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
    }
    & > .handle-psd {
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
  }
  // 确认修改密码按钮
  .change-password-btn {
    width: 100%;
    height: 46px;
    line-height: 46px;
    border-radius: 4px;
    background-color: #4a5161;
    margin-top: 40px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    &.can-click {
      background-color: rgba(241, 142, 45, 1);
      cursor: pointer;
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
