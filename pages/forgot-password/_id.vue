<template>
  <div class="change-password">
    <div
      v-show="id === 'mobile'"
      class="phone-number">
      <h2>身份验证</h2>
      <p>请用绑定手机「{{ query }}」获取验证码</p>
      <div class="form-froups">
        <input
          type="text"
          placeholder="验证码">
        <span class="verify-code-btn">
          发送验证码
        </span>
      </div>
      <div class="phone-number-btn">确定</div>
      <p>短信用不了？
        <nuxt-link
          class="change-btn"
          to="/forgot-password">更换邮箱验证</nuxt-link>
      </p>
    </div>
    <div
      v-show="id === 'email'"
      class="email" >
      <h2>身份验证</h2>
      <p>验证信息已发送至邮箱：</p>
      <p class="email-p">{{ query }}</p>
      <a
        href="//email.qq.com"
        target="_blank"
        class="email-btn">查看邮箱</a>
      <p class="">邮件未收到？
        <nuxt-link
          class="change-btn"
          to="/forgot-password">更换手机验证</nuxt-link>
      </p>
    </div>
    <div class="footer-copy">©2018&nbsp;QeeYou.cn&nbsp;版权所有</div>
  </div>
</template>

<script>
export default {
  layout: 'user',
  name: "ChangePassword",
  data() {
    return {
      id: undefined, // 动态路由参数
      query: '738441903@qq.com' // 查询字符串参数
    }
  },
  created() {
    this.getRoutes()
  },
  methods: {
    // 获取路由信息
    getRoutes: function() {
      const route = this.$route
      // 赋值动态路由参数
      this.id = route.params.id
      
      // 检查查询字符串是否存在
      if (!route.query.u) {
        this.$router.push('/forgot-password')
        return
      }

      // 赋值查询字符串参数
      const u = Base64.decode(route.query.u)
      this.query = this.id ===
        'mobile' ? u.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2') : u
    }
  },
}
</script>

<style lang="scss" scoped>
.change-password {
  height: 100%;
}

// 手机号
.phone-number {
  padding-top: 210px;
  width: 340px;
  margin: 0 auto;
  h2 {
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    text-align: center;
  }
  p {
    font-size: 14px;
    color: #fff;
    margin-top: 40px;
    text-align: center;
    & > .change-btn {
      color: #00b374;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .form-froups {
    margin-top: 30px;
    width: 100%;
    height: 46px;
    input {
      width: 200px;
      height: 46px;
      outline: none;
      border: none;
      border-radius: 3px;
      padding: 10px 20px;
      font-size: 16px;
    }
    .verify-code-btn {
      width: 120px;
      height: 46px;
      float: right;
      line-height: 46px;
      text-align: center;
      border-radius: 3px;
      font-size: 16px;
      background-color: rgba(241,142,45,1);
      color: #fff;
      cursor: pointer;
    }
  }
  .phone-number-btn {
    width: 100%;
    border-radius: 3px;
    line-height: 46px;
    height: 46px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background-color: #4a5161;
    margin-top: 40px;
  }
}

// 邮箱
.email {
  padding-top: 210px;
  width: 340px;
  margin: 0 auto;
  h2 {
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    text-align: center;
  }
  p {
    font-size: 14px;
    color: #fff;
    margin-top: 50px;
    text-align: center;
    font-size: 16px;
    &.email-p {
      font-size: 28px;
      color: #fff;
      margin-top: 20px;
    }
    & > .change-btn {
      color: #00b374;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .email-btn {
    display: block;
    width: 100%;
    height: 46px;
    border-radius: 4px;
    background-color: rgba(241,142,45,1);
    line-height: 46px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 40px;
    text-decoration: none;
  }
}

// 底部版权
.footer-copy {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 30px;
  font-size: 14px;
  color: rgba(172, 175, 184, 1);
}
</style>
