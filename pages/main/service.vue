<template>
  <div class="service">
    <!-- 会员套餐 -->
    <div class="vip-price-wrapper">
      <h1>灵活的超级会员方案</h1>
      <p>欢迎免费体验，会员费用低至<span>0.99</span>元/天</p>
      <p class="tip">（成为付费会员后，邀请好友获赠免费时长）</p>
      <div class="price-package">
        <div class="month-package">
          <h3>月卡</h3>
          <p class="price">￥<span>45</span>元</p>
          <span class="buy-btn">立即购买</span>
        </div>
        <div class="year-package">
          <h3>年卡</h3>
          <p class="price">￥<span>360</span>元</p>
          <p class="save-price">省180元</p>
          <span class="buy-btn">立即购买</span>
        </div>
        <div class="season-package">
          <i class="icon-recomm" />
          <h3>季卡</h3>
          <p class="price">￥<span>105</span>元</p>
          <p class="save-price">省30元</p>
          <span class="buy-btn">立即购买</span>
        </div>
      </div>
    </div>
    <!-- 团队介绍 -->
    <div class="team-intro">
      <div class="team-member">
        <h2>我们潜心优化网络，让你专注稳定发挥</h2>
        <p>每时每刻，极致发挥</p>
      </div>
      <p class="title-p">奇游FTD绝地求生战队</p>
      <div class="qiyou-intro">
        <span>
          <i class="icon-qiyou-intro1"/>
          <h3>金牌服务大有保障</h3>
          <p>免费试用，客服每天在线<br>支持退款，故障赔偿</p>
        </span>
        <span>
          <i class="icon-qiyou-intro2"/>
          <h3>加速数百款游戏大作</h3>
          <p>快速支持新游戏加速<br>更适合涉猎广、爱尝鲜的硬核玩家</p>
        </span>
        <span>
          <i class="icon-qiyou-intro3"/>
          <h3>账号同享三端加速</h3>
          <p>PC、手游、主机三大平台账号通用<br>无需单独付费</p>
        </span>
      </div>
    </div>
    <!-- 奇游市场 -->
    <div class="qiyou-market">
      <div class="games-number"><p class="left"><span>1000</span>万+</p><p class="right">全球电竞玩家的选择</p></div>
      <div class="games-number"><p class="left"><span>4</span>年</p><p class="right">稳定加速服务陪伴</p></div>
      <div class="games-number"><p class="left"><span>3</span>亿</p><p class="right">小时累计加速时间</p></div>
      <div class="games-number"><p class="left"><span>100</span>倍</p><p class="right">最高故障赔偿</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service'
}
</script>

<style lang="scss" scoped>
.service {
  width: 100%;
}

// 会员套餐
.vip-price-wrapper {
  width: 100%;
  padding-top: 180px;
  h1 {
    font-size: 60px;
    font-weight: 400;
    color: #fff;
    text-align: center;
  }
  p {
    font-size: 28px;
    color: #fff;
    font-weight: 300;
    text-align: center;
    margin-top: 10px;
    &.tip {
      font-size: 20px;
      color: rgba(172, 175, 184, 1);
    }
    span {
      font-size: 48px;
      color: rgba(252, 116, 0, 1);
      font-weight: 500;
    }
  }

  // 套餐价格
  .price-package {
    width: 1020px;
    height: 500px;
    // overflow: hidden;
    margin: 60px auto 0;
    padding-bottom: 120px;
    & > div {
      width: 320px;
      height: 440px;
      background-color: rgba(41, 48, 65, 1);
      border-radius: 3px;
      position: relative;
      border-top: 8px solid transparent;
      &:hover {
        background-color: rgba(49, 57, 76, 1);
        border-top-color: rgba(241, 142, 45, 1);
      }
      &.year-package {
        float: right;
        top: 0;
        transition: top .2s ease-in;
        &:hover {
          top: -20px;
          & + div {
            top: 0;
            border-top-color: transparent;
          }
        }
      }
      &.season-package {
        float: right;
        margin-right: 30px;
        top: -20px;
        border-top-color: rgba(241, 142, 45, 1);
        transition: top .2s ease-in;
        &.reset0 {
          top: 0;
        }
        &:hover {
          & > .icon-recomm {
            top: -8px;
          }
        }
        & > .icon-recomm {
          position: absolute;
          top: -8px;
          right: 20px;
          width: 50px;
          height: 50px;
          background: url(~assets/images/service/service_icon_comm.png) no-repeat;
          background-size: 100% 100%;
        }
        .buy-btn {
          background-color: rgba(241,142,45,1);
          border: 2px solid rgba(241,142,45,1);
          &:hover {
            background-color: #f8b62d;
            border: 2px solid #f8b62d;
            box-shadow: 0px 10px 30px 0px rgba(241,142,45,0.3);
          }
        }
      }
      &.month-package {
        float: left;
        top: 0px;
        transition: top .2s ease-in;
        &:hover {
          top: -20px;
          & ~ div {
            top: 0;
            border-top-color: transparent;
          }
        }
      }
    }
    h3 {
      color: #fff;
      font-size: 30px;
      font-weight: 500;
      text-align: center;
      margin-top: 50px;
    }
    .price {
      font-size: 18px;
      color: #fff;
      font-weight: 300;
      margin-top: 40px;
      & > span {
        font-size: 40px;
        font-weight: bold;
        color: #fff;
      }
    }
    .save-price {
      display: block;
      margin: 22px auto 0;
      width: 90px;
      height: 26px;
      background: url(~assets/images/service/service_icon_save-price.png) no-repeat;
      background-size: 100% 100%;
      font-size: 14px;
      line-height: 26px;
    }
    .buy-btn {
      position: absolute;
      width: 220px;
      height: 52px;
      top: 310px;
      left: 50%;
      transform: translateX(-50%);
      border: 2px solid rgba(62, 69, 95, 1);
      border-radius: 26px;
      font-size: 18px;
      line-height: 48px;
      text-align: center;
      color: rgba(255, 255, 255, 1);
      cursor: pointer;
      transition: background-color 0.2s ease-in, box-shadow 0.2s ease-in, border 0.2s ease-in;
      &:hover {
        background-color: #f8b62d;
        border: 2px solid #f8b62d;
        box-shadow: 0px 10px 30px 0px rgba(241,142,45,0.3);
      }
    }
  }
}

// 战队介绍
.team-intro {
  width: 100%;
  height: 1020px;
  .team-member {
    width: 100%;
    height: 700px;
    background: url(~assets/images/service/service_team-member.png) no-repeat;
    background-size: 100% 100%;
    text-align: center;
    h2 {
      font-size: 36px;
      color: #fff;
      font-weight: 500;
    }
    p {
      font-size: 18px;
      color: #fff;
      font-weight: 400;
      margin-top: 20px;
    }
  }
  .title-p {
    font-size: 24px;
    color: #fff;
    position: relative;
    top: -120px;
    text-align: center;
  }
  .qiyou-intro {
    font-size: 0;
    text-align: center;
    position: relative;
    top: -100px;
    span {
      display: inline-block;
      width: 240px;
      height: 260px;
      background-color: rgba(41,48,65,1);
      border-radius: 3px;
      vertical-align: top;
      margin-right: 30px;
      &:nth-of-type(3) {
        margin-right: 0;
      }
      i {
        display: block;
        width: 80px;
        height: 80px;
        margin: 40px auto 20px;
        &.icon-qiyou-intro1 {
          background: url(~assets/images/service/service_icon1.png) no-repeat;
          background-size: 100% 100%;
        }
        &.icon-qiyou-intro2 {
          background: url(~assets/images/service/service_icon2.png) no-repeat;
          background-size: 100% 100%;
        }
        &.icon-qiyou-intro3 {
          background: url(~assets/images/service/service_icon3.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      h3 {
        font-size: 18px;
        font-weight: 500;
        color: #fff;
      }
      p {
        font-size: 14px;
        color: rgba(172, 175, 184, 1);
        margin-top: 15px;
        line-height: 20px;
      }
    }
  }
}

// 奇游市场
.qiyou-market {
  width: 100%;
  height: 436px;
  background: url(~assets/images/service/service_qiyou_market.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  padding-top: 80px;
  div {
    font-size: 24px;
    color: #fff;
    margin-bottom: 30px;
  }
  p {
    display: inline-block;
    vertical-align: top;
    color: rgba(255, 137, 0, 1);
    font-size: 24px;
    width: 50%;

    // border: 1px solid red;
    height: 30px;
    text-align: right;
    &.left {
      padding-right: 8px;
    }
    &.right {
      color: #fff;
      font-size: 24px;
      text-align: left;
      padding-left: 8px;
      padding-top: 24px;
    }
    span {
      font-size: 48px;
      position: relative;
      top: 4px;
      font-weight: bold;
      margin-right: 4px;
    }
  }
}
</style>
