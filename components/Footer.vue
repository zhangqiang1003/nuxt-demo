<template>
  <div class="footer">
    <div class="after-service">
      <ul>
        <li>
          <div class="service-list">
            <span class="left">
              <i class="one one_1" />
              <i class="two" />
            </span>
            <span class="right">
              <h3>5天</h3>
              <p>无理由退款</p>
            </span>
          </div>
        </li>
        <li>
          <div class="service-list">
            <span class="left">
              <i class="one one_2" />
              <i class="two" />
            </span>
            <span class="right">
              <h3>24小时</h3>
              <p>技术运维</p>
            </span>
          </div>
        </li>
        <li>
          <div class="service-list">
            <span class="left">
              <i class="one one_3" />
              <i class="two" />
            </span>
            <span class="right">
              <h3>7x12小时</h3>
              <p>客服支持</p>
            </span>
          </div>
        </li>
        <li>
          <div class="service-list">
            <span class="left">
              <i class="one one_4" />
              <i class="two" />
            </span>
            <span class="right">
              <h3>100倍</h3>
              <p>最高故障赔偿</p>
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer-nav-wrapper">
      <div class="w1360">
        <div class="footer-nav">
          <i class="logo">1</i>
          <ul>
            <li
              v-for="(itemList, index) in footerNavList"
              :key="index">
              <h3>{{ itemList.title }}</h3>
              <nuxt-link 
                v-for="(item, i) in itemList.item"
                :key="i"
                :to="item.href"
                class="href">{{ item.name }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer-feedback">
          <div>
            <div class="phone-num">
              <h3>0871-65099992</h3>
              <p>周一至周日 9:30-21:30</p>
            </div>
            <div class="feedback-wrapper">
              <nuxt-link
                class="online"
                to="https://www.sobot.com/chat/pc/index.html?sysNum=072c38afdfa44956a84fc2fcc697b069">在线客服</nuxt-link>
              <nuxt-link
                class="feedback"
                to="http://wpa.qq.com/msgrd?v=3&uin=1205205970&site=qq&menu=yes">投诉建议</nuxt-link>
            </div>
          </div>
          <div class="Qcode">
            <div class="wx-Qcode">
              <i />
              <div class="mask">
                <i class="Qcode-img" />
                <p>奇游电竞加速器</p>
                <span />
              </div>
            </div>
            <div class="wb-Qcode">
              <i />
              <div class="mask">
                <div class="qeeyou-pc">
                  <i class="Qcode-img" />
                  <nuxt-link to="https://weibo.com/u/3647878343">奇游电竞加速器</nuxt-link>
                </div>
                <div class="qeeyou-ljb">
                  <i class="Qcode-img" />
                  <nuxt-link to="https://weibo.com/u/6415004550">奇游联机宝</nuxt-link>
                </div>
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footerNavList: [
        {
          title: '产品中心',
          item: [
            { name: '联机宝', href: '/main/ljb-overview' },
            { name: 'Windows客户端', href: '/' },
            { name: '手游加速器', href: '/main/qeeyou-mobile' }
          ]
        },
        {
          title: '服务中心',
          item: [
            { name: '充值指南', href: '/main/notice/103' },
            { name: '套餐选择', href: '/main/service' },
            { name: '支付方式', href: '/main/notice/104' },
            { name: '售后政策', href: '/main/notice/27' },
            { name: '保障协议', href: '/main/notice/1092' }
          ]
        },
        {
          title: '关于',
          item: [
            { name: '关于我们', href: '://www.junyun.jobs' },
            { name: '诚征英才', href: '://www.junyun.jobs' },
            { name: '用户协议', href: '/main/notice/83' },
            { name: '品牌', href: '/main/brand-intro' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  color: #fff;
}
.after-service {
  width: 100%;
  height: 142px;
  background-color: rgba(41, 48, 65, 1);
  ul {
    max-width: 1360px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    // border: 1px solid red;
  }
  li {
    // float: left;
    // flex-grow: 1;
    position: relative;
    // border: 1px solid red;
  }
}
.service-list {
  padding-top: 30px;
  overflow: hidden;
  float: left;
  .left {
    float: left;
    .one {
      display: block;
      width: 42px;
      height: 42px;
      margin: 0 auto;
      position: relative;
      top: 0;
      transition: top 0.3s linear;
      z-index: 2;
      &.one_1 {
        background: url(~assets/images/icon/clock-icon.png) no-repeat;
        background-size: 100% 100%;
      }
      &.one_2 {
        background: url(~assets/images/icon/device-icon.png) no-repeat;
        background-size: 100% 100%;
      }
      &.one_3 {
        background: url(~assets/images/icon/service-icon.png) no-repeat;
        background-size: 100% 100%;
      }
      &.one_4 {
        background: url(~assets/images/icon/guarantee-icon.png) no-repeat;
        background-size: 100% 100%;
      }
    }
    .two {
      display: block;
      width: 82px;
      height: 50px;
      position: relative;
      top: -10px;
      background: url(~assets/images/icon/clock-bottom.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .right {
    float: left;
    color: #fff;
    h3 {
      font-size: 30px;
      font-weight: 500;
    }
    p {
      font-size: 18px;
      font-weight: 400;
    }
  }
  &:hover {
    .left {
      .one {
        top: -5px;
      }
    }
  }
}

// footer-nav
.footer-nav-wrapper {
  width: 100%;
  height: 288px;
  background-color: rgba(49, 57, 76, 1);
  padding-top: 60px;
  .w1360 {
    max-width: 1360px;
    margin: 0 auto;
  }
}
.footer-nav {
  float: left;
  .logo {
    float: left;
    width: 66px;
    height: 55px;
    background: url(~assets/images/new_plugin_white_footer_logo.png) no-repeat;
    background-size: 100% 100%;
    font-size: 0;
    margin-right: 30px;
  }
  ul {
    float: left;
    li {
      float: left;
      h3 {
        font-size: 14px;
        color: #fff;
        margin-right: 80px;
        margin-bottom: 20px;
      }
      a {
        text-decoration: none;
        font-size: 12px;
        color: rgba(110, 116, 130, 1);
        display: block;
        transition: color 0.2s linear;
        margin-bottom: 10px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
.footer-feedback {
  float: right;
  .phone-num {
    float: left;
    margin-right: 20px;
    text-align: right;
    & > h3 {
      font-size: 20px;
      color: #fff;
      font-weight: 500;
    }
    & > p {
      font-size: 12px;
      color: rgba(110, 116, 130, 1);
      font-weight: 400;
      margin-top: 10px;
    }
  }
  .feedback-wrapper {
    float: left;
    a {
      text-decoration: none;
      display: block;
      width: 88px;
      height: 30px;
      border-radius: 30px;
      font-size: 12px;
      color: #fff;
      text-align: center;
      line-height: 28px;
      border: 1px solid rgba(241, 142, 45, 1);
      transition: background-color 0.3s linear;
      &:nth-of-type(1) {
        background-color: rgba(241, 142, 45, 1);
        margin-bottom: 10px;
      }
      &:hover {
        border-color: #f8b62d;
        background-color: #f8b62d;
      }
    }
  }
}
.Qcode {
  margin-top: 100px;
  margin-left: 160px;
  .wx-Qcode {
    float: left;
    position: relative;
    margin-right: 20px;
    .mask {
      display: none;
      position: absolute;
      width: 160px;
      height: 180px;
      border-radius: 3px;
      border: 1px solid rgba(236, 236, 236, 1);
      background-color: #fff;
      left: 50%;
      transform: translateX(-50%);
      top: -190px;
      & > .Qcode-img {
        width: 120px;
        height: 120px;
        display: block;
        margin: 20px auto 0;
        background: url(~assets/images/common/weixin.png) no-repeat;
        background-size: 100% 100%;
      }
      & > p {
        font-size: 12px;
        color: rgba(32, 32, 32, 1);
        font-weight: 400;
        text-align: center;
        margin-top: 10px;
      }
      & > span {
        width: 0px;
        height: 0;
        position: absolute;
        border: 6px solid transparent;
        border-top-color: #fff;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & > i {
      float: left;
      width: 30px;
      height: 30px;
      background: url(~assets/images/icon/weixin30x30.png) no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    &:hover {
      .mask {
        display: inline;
      }
    }
  }
  .wb-Qcode {
    float: left;
    position: relative;
    .mask {
      display: none;
      position: absolute;
      width: 322px;
      height: 180px;
      border-radius: 3px;
      border: 1px solid rgba(236, 236, 236, 1);
      background-color: #fff;
      left: 50%;
      transform: translateX(-50%);
      top: -190px;
      & > .qeeyou-pc {
        float: left;
        width: 160px;
        i {
          background: url(~assets/images/common/weibo120x120.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      & > .qeeyou-ljb {
        float: left;
        width: 160px;
        i {
          background: url(~assets/images/common/weibo-ljb120x120.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      .Qcode-img {
        width: 120px;
        height: 120px;
        display: block;
        margin: 20px auto 0;
      }
      a {
        display: block;
        font-size: 12px;
        color: rgba(32, 32, 32, 1);
        font-weight: 400;
        text-align: center;
        margin-top: 10px;
        transition: color 0.3s linear;
        &:hover {
          color: #16be83;
        }
      }
      & > span {
        width: 0px;
        height: 0;
        position: absolute;
        border: 6px solid transparent;
        border-top-color: #fff;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & > i {
      float: left;
      width: 39px;
      height: 39px;
      background: url(~assets/images/icon/weibo39x39.png) no-repeat;
      background-size: 100% 100%;
      position: relative;
      top: -9px;
      cursor: pointer;
    }
    &:hover {
      .mask {
        display: inline;
      }
    }
  }
}
</style>
