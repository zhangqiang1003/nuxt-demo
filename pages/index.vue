<template>
  <div
    class="container">
    <!-- banner -->
    <div class="banner">
      <a
        ref="download"
        href="#"
        class="download-btn">开启免费体验<i /></a>
    </div>
    <!-- 合作方 -->
    <div class="partners">
      <i class="partner-ali" />
      <i class="partner-xbox" />
    </div>
    <!-- 战队 -->
    <div class="conbat-team">
      <h1 class="index-title">为满足更高联机竞技要求而生</h1>
      <p class="index-p">为职业级比赛扫除阻碍，发挥真实水平一心为赢</p>
      <div class="conbat">
        <nuxt-link
          class="go-team"
          to="/">
          <span class="bg" />
          <span class="bg1" />
          <div class="intro-wrapper">
            <i class="icon-go"/>
            <div class="team-intro">
              <h4>奇游CS：GO传奇战队</h4>
              <p>ESWC 2015世界杯 中国区 冠军</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link
          class="rtd-team"
          to="/">
          <span class="bg" />
          <span class="bg1" />
          <div class="intro-wrapper">
            <i class="icon-ftd"/>
            <div class="team-intro">
              <h4>奇游FTD绝地求生战队</h4>
              <p>绝地求生新生力量，国内多次赛事冠军</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <!-- 实力数据 -->
    <div class="strength-data">
      <h1 class="index-title">实力说明一切</h1>
      <ul class="strength-intro">
        <li class="list">
          <i class="strength-icon1" />
          <div class="txt-intro">
            <h4>电竞级网络稳定可靠</h4>
            <p>超性能服务器资源，全程98%加速网络保障更短不良路径，超低延迟！</p>
          </div>
        </li>
        <li class="list">
          <i class="strength-icon2" />
          <div class="txt-intro">
            <h4>一键加速，全服畅玩！</h4>
            <p>机器算法自动规划最优链路，上千节点免于手选游戏内切换服无需重加速！</p>
          </div>
        </li>
        <li class="list">
          <i class="strength-icon3" />
          <div class="txt-intro">
            <h4>电竞级网络兼容性</h4>
            <p>自动实现最佳路由方式，支持主流+小众宽带满足运营商之间多线跨网互联！</p>
          </div>
        </li>
        <li class="list">
          <i class="strength-icon4" />
          <div class="txt-intro bdr0">
            <h4>专门支持P2P类型游戏联机</h4>
            <p>改善NAT类型，游戏组队成功率>99%奇游用户之间联机，组队效果更好！</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 玩家数 -->
    <div class="player-number">
      <h3>服务玩家数</h3>
      <p><span>1000</span>万+</p>
    </div>
    <!-- 玩家评论 -->
    <div class="player-comment">
      <h1 class="index-title">他们都这么评论奇游</h1>
      <div
        id="comment-swiper"
        class="swiper-container">
        <div class="swiper-wrapper">
          <div
            v-for="(comment, index) in comments"
            :key="index"
            :class="{
              'ayu': comment.class === 'ayu',
              'advent': comment.class === 'advent',
              'shaojiong': comment.class === 'shaojiong',
              'yinzi': comment.class === 'yinzi',
              'mgc': comment.class === 'mgc',
              'tiantiankapai': comment.class === 'tiantiankapai',
              'mrquin': comment.class === 'mrquin',
              'shengfan': comment.class === 'shengfan',
              'aersayu': comment.class === 'aersayu',
              'c': comment.class === 'c',
              'steam': comment.class === 'steam'
            }"
            class="swiper-slide player">
            <span><i /></span>
            <div class="txt-wrapper">
              <h3>{{ comment.name }}</h3>
              <p>{{ comment.intro }}</p>
            </div>
            <p class="txt">{{ comment.detail }}</p>
          </div>
        </div>
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="btn-wrapper">
        <div class="swiper-button-prev btn-prev">prev</div>
        <div class="swiper-button-next btn-next">next</div>
      </div>
    </div>
    <!-- download pc客户端 -->
    <div class="download-client-wrapper">
      <h1 class="index-title">全场景、全平台无延迟游戏体验，一个奇游玩全服</h1>
      <p class="index-p">
        为PC、手游、主机（PS4、XBOX、Switch）提供全场景的专业加速；支持Steam、Origin、<br>
        Uplay、Battlenet等平台游戏加速。以超强稳定、超低延迟、专业服务，为你带来电竞级加速<br>
        极致体验，专注游戏一心为赢，完全没有后顾之忧。
      </p>
      <a
        ref="download1"
        href="#"
        class="download-btn">开启免费体验<i /></a>
    </div>
  </div>
</template>

<script>
import { getArticleList, ljbInventory, getLastClient } from '~/api/index'
import { routeTrans } from '~/static/config'
import utils from '~/service/utils.js'

export default {
  data() {
    return {
      comments: [
        {
          class: 'ayu',
          name: 'Ayu',
          intro: 'FTD绝地求生职业战队灵魂指挥位',
          detail: '奇游对绝地求生联机改善效果非常显著，平时在上海打训练赛时是必开的，尤其是晚间高峰时期的高延迟、高卡顿问题都能得到良好的改善，从而保障团队能得到最稳定的发挥。'
        },
        {
          class: 'advent',
          name: 'Advent',
          intro: 'ESWC2015 CS:GO中国区冠军',
          detail: 'CS:GO这款FPS游戏对网络线路要求非常高，Ping低、无Loss、稳定，这三条奇游都做的非常好，感谢奇游让我们在每场匹配训练赛中发挥出更高水准！'
        },
        {
          class: 'shaojiong',
          name: '少囧',
          intro: '熊猫TV主播，欢乐喜剧人，百变声优',
          detail: '奇游缓解了玩联机频繁卡顿和延迟的问题，节点选择也更方便，用来用去还是奇游更加稳定靠谱，希望一如既往的提供优质稳定的服务，继续保持别骄傲。'
        },
        {
          class: 'yinzi',
          name: '寅子',
          intro: '斗鱼主机区年度最佳主播之一，“阅历丰富”，人称“猴儿”、“老大”',
          detail: '奇游是最早做主机联机加速的厂商，解决了我很多主机联机上的问题，联机宝我也在用，效果很不错，希望奇游联机宝能大卖，为更多的主机用户带来更好的体验！'
        },
        {
          class: 'mgc',
          name: 'MGC俱乐部',
          intro: '中国极限竞速第一俱乐部',
          detail: '奇游做出了主机网络硬件“奇游联机宝”。对国内网络加速业来说，这是首创！创立之初必定会经历很多风雨，但是这一步已经足够体现出奇游对玩家的用心。我们MGC俱乐部对于奇游联机宝抱有极高期望！'
        },
        {
          class: 'tiantiankapai',
          name: '天天卡牌',
          intro: '著名游戏视频IP，代表作《逗鱼时刻》、《午时已到》、《煮鸡时刻》',
          detail: '奇游专注PC与主机联机，是联机体验缔造者，联机宝这个产品更是解决了多年来一直困扰大家的主机联机难题，希望奇游能在PC与主机端给我们带来更加优质的联机体验！'
        },
        {
          class: 'mrquin',
          name: 'Mr.Quin',
          intro: '堇业先锋鱼奎恩，斗鱼TV主播',
          detail: '斯比得很快，联通之子可以快乐天命2，明年的猛汉世界也可以用联机宝屠龙啦，购买联机宝认准唯一指定链接qiyou.cn，猛男归来！'
        },
        {
          class: 'shengfan',
          name: '全撸剩饭',
          intro: '韦天装甲，火猫直播签约主播',
          detail: '爽死，索索再也不会被延迟击败了，用了联机宝可以成为敬业急先锋，每天直播从不摸鱼的，该到了射爆Time，谢谢茄子，爽到。'
        },
        {
          class: 'aersayu',
          name: '阿尔萨鱼',
          intro: '绝地求生《鸡不可失》系列视频作者，夏一可御用后期哥',
          detail: '用过许多加速器，最终选择奇游的原因很简单，一键全服务器加速，智能节点选择，游戏中想换啥服就换啥服，真正体验联机的乐趣，稳稳的“鸡不可失”！'
        },
        {
          class: 'c',
          name: '中国鉴赏家同好会',
          intro: 'steam关注数第二的鉴赏家',
          detail: '奇游加速器 为我们提供了很多游戏上的便利，改善游戏延迟，稳定游戏线路，我们希望奇游越做越好！'
        },
        {
          class: 'steam',
          name: '国人交流组【天朝】',
          intro: '致力帮助中国游戏的steam游戏鉴赏家',
          detail: '稳定的性能以及精致的UI界面，不管哪一方面，奇游都让我感到舒适。让玩家舒适地进行游戏，这应该就是一个加速器最应该做到的吧。'
        }
      ]
    }
  },
  created() {
    this.getLastClient()
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    getLastClient: function() {
      getLastClient()
        .then(data => {
          this.$refs.download.href = data.client_url
          this.$refs.download1.href = data.client_url
        })
        .catch(e => {
          console.log(e)
        })
    },
    initSwiper: function() {
      let commentSwiper = new this.Swiper('#comment-swiper', {
        autoplay: {
          disableOnInteraction: false,
          delay: 5000
        },
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        allowTouchMove: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../node_modules/swiper/dist/css/swiper.min.css';
.container {
  font-size: 16px;
  // banner
  .banner {
    width: 100%;
    height: 900px;
    background: url(~assets/images/index/index_banner.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
    & > .download-btn {
      position: absolute;
      width: 270px;
      height: 60px;
      left: 50%;
      transform: translateX(-50%);
      top: 620px;
      text-align: center;
      line-height: 60px;
      text-decoration: none;
      border-radius: 60px;
      background-color: #f18e2d;
      color: #fff;
      text-align: center;
      cursor: pointer;
      transition: background-color .3s;
      box-shadow: 0 10px 30px 0 rgba(241,142,45,.3);
      font-size: 22px;
      &:hover {
        background-color: #f8b62d;
      }
      i {
        display: inline-block;
        width: 27px;
        height: 20px;
        background: url(~assets/images/index/index_download-icon-white.png) no-repeat;
        background-size: 100% 100%;
        margin-left: 5px;
        position: relative;
        top: 3px;
      }
    }
  }
  // 合作方
  .partners {
    width: 100%;
    height: 240px;
    background-color: rgba(33, 39, 53, 1);
    text-align: center;
    i {
      width: 630px;
      height: 140px;
      display: inline-block;
      &.partner-ali {
        margin-right: 40px;
        background: url(~assets/images/index/index_ali.png) no-repeat;
        background-size: 100% 100%;
      }
      &.partner-xbox {
        background: url(~assets/images/index/index_xbox.png) no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  // 处理h1标签的title
  .index-title {
    font-size: 36px;
    font-weight: 500;
    color: #fff;
    text-align: center;
  }
  // 处理p标签
  .index-p {
    font-size: 16px;
    color: #fff;
    font-weight: 300;
    text-align: center;
  }
  // 战队
  .conbat-team {
    width: 100%;
    height: 600px;
    background: url(~assets/images/index/index_bg2.png) no-repeat;
    background-size: 100% 100%;
    padding-top: 60px;
    & > p {
      margin-top: 20px;
    }
    & > .conbat {
      margin-top: 120px;
      text-align: center;
    }
    a {
      display: inline-block;
      width: 498px;
      height: 110px;
      position: relative;
      text-decoration: none;
      &:nth-of-type(2) {
        .bg1 {
          background-color: rgba(33, 39, 53, 0.3);
        }
      }
      & > .bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 498px;
        height: 110px;
        background: url(~assets/images/index/index_Rectangle.png) no-repeat;
        background-size: 100% 100%;
      }
      & > .bg1 {
        position: absolute;
        width: 455px;
        height: 110px;
        transform: skew(-21deg);
        background-color: rgba(33, 39, 53, 1);
        border: 2px solid #f18e2d;
        left: 21px;
        top: 0px;
        box-shadow: 0 10px 30px 0 rgba(241,142,42,.3);
        display: none;
      }
      & > .intro-wrapper {
        position: relative;
        height: 110px;
        i {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          &.icon-go {
            width: 60px;
            height: 50px;
            left: 90px;
            background: url(~assets/images/index/index_icon_logo.png) no-repeat;
            background-size: 100% 100%;
          }
          &.icon-ftd {
            width: 80px;
            height: 70px;
            left: 60px;
            background: url(~assets/images/index/index_icon_ftd.png) no-repeat;
            background-size: 100% 100%;
          }
        }
        .team-intro {
          text-align: left;
          margin-left: 160px;
          padding-top: 32px;
          color: #fff;
          h4 {
            font-size: 18px;
            font-weight: 500;
          }
          p {
            font-size: 14px;
            font-weight: 400;
            margin-top: 10px;
          }
        }
      }
      &:hover {
        .bg1 {
          display: block;
        }
      }
    }
  }
  // 实力数据
  .strength-data {
    text-align: center;
    width: 100%;
    height: 548px;
    background-color: rgba(33, 39, 53, 1);
    padding-top: 100px;
    .strength-intro {
      margin-top: 42px;
      font-size: 0;
    }
    .list {
      // list-style: none;
      display: inline-block;
      width: 325px;
      i {
        display: block;
        width: 220px;
        height: 170px;
        margin: 0 auto;
        &.strength-icon1 {
          background: url(~assets/images/index/index_icon_intro1.png) no-repeat;
          background-size: 100% 100%;
        }
        &.strength-icon2 {
          background: url(~assets/images/index/index_icon_intro2.png) no-repeat;
          background-size: 100% 100%;
        }
        &.strength-icon3 {
          background: url(~assets/images/index/index_icon_intro3.png) no-repeat;
          background-size: 100% 100%;
        }
        &.strength-icon4 {
          background: url(~assets/images/index/index_icon_intro4.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      .txt-intro {
        border-right: 1px solid rgba(49, 57, 76, 1);
        padding: 15px 0;
        &.bdr0 {
          border-right-color: transparent;
        }
        h4 {
          font-size: 16px;
          font-weight: 500;
          color: #fff;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          color: rgba(172, 175, 184, 1);
          margin-top: 20px;
          line-height: 20px;
          margin: 20px 15px 0;
        }
      }
    }
  }
  // 服务玩家数
  .player-number {
    width: 100%;
    height: 260px;
    background: url(~assets/images/index/index_gamers_number.png) no-repeat;
    background-size: 100% 100%;
    text-align: center;
    padding-top: 60px;
    h3 {
      font-size: 24px;
      font-weight: 400;
      color: #fff;
    }
    p {
      margin-top: 20px;
      font-size: 20px;
      font-weight: 500;
      color: #fff;
      span {
        font-size: 48px;
        color: rgba(252, 116, 0, 1);
        font-weight: 500;
        position: relative;
        top: 4px;
      }
    }
  }
  // 玩家评论
  .player-comment {
    width: 100%;
    height: 766px;
    background: url(~assets/images/index/index_Group_5.png) no-repeat;
    background-size: 100% 100%;
    padding-top: 60px;
    position: relative;
    .swiper-container {
      width: 1160px;
      height: 480px;
      margin-top: 40px;
    }
    .swiper-slide {
      height: 480px;
    }
    .player {
      height: 480px;
      // border: 1px solid red;
      background:linear-gradient(180deg,rgba(49,57,76,1) 0%,rgba(33,39,53,0.8) 100%);
      border-radius:5px;
      text-align: center;
      span {
        display: block;
        width: 86px;
        height: 86px;
        border-radius: 86px;
        background-color: #2e2d2d6b;
        position: relative;
        margin: 60px auto 0;
        i {
          position: absolute;
          width: 72px;
          height: 72px;
          top: 50%;
          left: 50%;
          border-radius: 72px;
          transform: translate(-50%, -50%);
        }
      }
      .txt-wrapper {
        // border: 1px solid red;
        height: 110px;
        overflow: hidden;
      }
      h3 {
        margin-top: 30px;
        font-size: 16px;
        color: #fff;
        font-weight: 500;
      }
      p {
        font-size: 14px;
        color: #fff;
        font-weight: 300;
        margin: 8px 30px 0;
        &.txt {
          padding-top: 20px;
          border-top: 1px solid rgba(62, 69, 95, 1);
          margin: 0 30px;
          line-height: 24px;
        }
      }
      &.ayu {
        i {
          background: url(~assets/images/index/index_img_head_Ayu.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      &.advent {
        i {
          background: url(~assets/images/index/index_img_head_Advent.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      &.shaojiong {
        i {
          background: url(~assets/images/index/index_img_head_shaojiong.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      &.yinzi {
        i {
          background: url(~assets/images/index/index_img_head_yinzi.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      &.mgc {
        i {
          background: url(~assets/images/index/index_img_head_MGC.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      &.tiantiankapai {
        i {
          background: url(~assets/images/index/index_img_head_tiantiankapai.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      &.mrquin {
        i {
          background: url(~assets/images/index/index_img_head_Mr.Quin.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      &.shengfan {
        i {
          background: url(~assets/images/index/index_img_head_shengfan.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      &.aersayu {
        i {
          background: url(~assets/images/index/index_img_head_aersayu.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      &.c {
        i {
          background: url(~assets/images/index/index_img_head_c.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      &.steam {
        i {
          background: url(~assets/images/index/index_img_head_steam.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    // 导航按钮
    .btn-wrapper {
      position: absolute;
      top: 85%;
      left: 50%;
      transform: translateX(-50%);
      width: 130px;
      height: 56px;
    }
    .swiper-button-prev.btn-prev {
      background-image: none;
      width: 47px;
      height: 56px;
      overflow: hidden;
      background: url(~assets/images/index/index_navigation.png) no-repeat;
      background-size: 188px 56px;
      background-position: 0 0;
      font-size: 0;
      outline: none;
      border: none;
      &:hover {
        background-position: -47px 0;
      }
    }
    .swiper-button-next.btn-next {
      background-image: none;
      width: 47px;
      height: 56px;
      overflow: hidden;
      background: url(~assets/images/index/index_navigation.png) no-repeat;
      background-size: 188px 56px;
      background-position: -94px 0;
      font-size: 0;
      outline: none;
      border: none;
      &:hover {
        background-position: -141px 0;
      }
    }
  }
  // download pc客户端
  .download-client-wrapper {
    width: 100%;
    height: 502px;
    background-color: rgba(33, 39, 53, 1);
    position: relative;
    padding-top: 60px;
    // border: 1px solid red;
    p {
      margin-top: 40px;
    }
    .download-btn {
      position: absolute;
      width: 270px;
      height: 60px;
      left: 50%;
      transform: translateX(-50%);
      top: 260px;
      text-align: center;
      line-height: 60px;
      text-decoration: none;
      border-radius: 60px;
      background-color: #f18e2d;
      color: #fff;
      text-align: center;
      cursor: pointer;
      transition: background-color .3s;
      box-shadow: 0 10px 30px 0 rgba(241,142,45,.3);
      font-size: 22px;
      &:hover {
        background-color: #f8b62d;
      }
      i {
        display: inline-block;
        width: 27px;
        height: 20px;
        background: url(~assets/images/index/index_download-icon-white.png) no-repeat;
        background-size: 100% 100%;
        margin-left: 5px;
        position: relative;
        top: 3px;
      }
    }
  }
}
</style>
