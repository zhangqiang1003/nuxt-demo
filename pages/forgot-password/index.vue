<template>
  <div class="forgot-password">
    <h2>填写帐号</h2>
    <div class="input-groups">
      <input
        v-model="userName"
        type="text"
        class="user-phone"
        placeholder="手机号码/邮箱帐号"
        @input="checkUserName()">
      <span
        :class="{'show': isErrUser}"
        class="error-tip"><i />请输入正确的手机号码或邮箱账号</span>
      <i
        :class="{'show': isShowClearBtn}"
        class="clear-btn"
        @click="clickClearBtn()"/>
    </div>
    <div
      :class="{'canClick': canClickNextBtn}"
      class="next-btn"
      @click="clickNextBtn()">下一步</div>
    <div class="footer-copy">©2018&nbsp;QeeYou.cn&nbsp;版权所有</div>
  </div>
</template>

<script>
import utils from '~/service/utils.js'
import { validateMember } from '~/api'

export default {
  layout: 'user',
  name: 'ForgotPassword',
  data() {
    return {
      userName: undefined, // 用户名
      isErrUser: false, // 是否是错误的用户名 true - 是 | false - 不是
      canClickNextBtn: false, // 是否能够点击下一步按钮
      isShowClearBtn: false, // 是否显示清除按钮
      phoneOrEmail: undefined // 记录用户输入的是手机号还是邮箱 参数： phone | email
    }
  },
  watch: {
    userName: function() {
      this.isShowClearBtn = this.userName ? true : false
    }
  },
  methods: {
    // 校验用户名
    checkUserName: function() {
      let status1 = utils.checkMobilePhone(this.userName) // 校验手机号
      let status2 = utils.checkEmail(this.userName) // 校验邮箱
      console.log(status2, 53)
      this.isErrUser = status1 || status2 ? false : true
      this.checkNextBtn()

      // 重置（防止用户先填写了正确的手机号，然后又改为邮箱，或反之）
      this.phoneOrEmail = !status1 && !status2 ? undefined : this.phoneOrEmail
      // 赋值
      if (status1) {
        this.phoneOrEmail = 'mobile'
      }
      if (status2) {
        this.phoneOrEmail = 'email'
      }
    },

    // 点击清除按钮
    clickClearBtn: function() {
      this.userName = undefined
      this.isShowClearBtn = false
      this.isErrUser = false
    },

    // 校验下一步按钮
    checkNextBtn: function() {
      let status = this.userName && !this.isErrUser
      this.canClickNextBtn = status ? true : false
    },

    // 点击下一步按钮
    clickNextBtn: function() {
      const that = this;
      if (!this.canClickNextBtn) return
      let apiData = {
        member_name: this.userName,
        type: this.phoneOrEmail
      }
      const u = Base64.encode(this.userName)
      validateMember(apiData)
        .then(data => {
          that.$router.push(`/forgot-password/${that.phoneOrEmail}?u=${u}`)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.forgot-password {
  height: 100%;
  padding-top: 210px;
  h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }
  .input-groups {
    width: 340px;
    margin: 40px auto 0;
    position: relative;
    & > .user-phone {
      width: 100%;
      outline: none;
      height: 46px;
      border-radius: 3px;
      background-color: #fff;
      border: none;
      padding: 12px 20px;
      font-size: 16px;
    }
    & > .clear-btn {
      display: none;
      position: absolute;
      width: 18px;
      height: 18px;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      background: url(~assets/images/icon/register_icon_Input_box_delete_normal.png)
        no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      &.show {
        display: block;
      }
    }
    & > .error-tip {
      position: absolute;
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
        background-position: -54px 0;
      }
    }
  }
  .next-btn {
    width: 340px;
    height: 46px;
    border-radius: 3px;
    background-color: #4a5161;
    margin: 60px auto 0;
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
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: rgba(172, 175, 184, 1);
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color: rgba(172, 175, 184, 1);
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color: rgba(172, 175, 184, 1);
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: rgba(172, 175, 184, 1);
}
</style>
