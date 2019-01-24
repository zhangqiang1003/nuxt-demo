<template>
  <div class="game">
    <div class="game-bg">1</div>
    <h1>为数千款精彩游戏大作提供电竞级加速</h1>
    <p>随时响应玩家新的联机需求</p>
    <!-- 游戏推荐轮播 -->
    <div class="game-swiper-wrapper">
      <div
        id="game-swiper-container"
        class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide game-swiper-1">
            <nuxt-link
              class="swiper-1-1"
              to="/"
              title="12341">1</nuxt-link>
            <div class="right-wrapper">
              <nuxt-link
                class="swiper-1-2"
                to="/"
                title="2">2</nuxt-link>
              <nuxt-link
                class="swiper-1-3"
                to="/"
                title="3">3</nuxt-link>
            </div>
          </div>
          <div class="swiper-slide game-swiper-2">
            <nuxt-link
              class="swiper-2-1"
              to="/">1</nuxt-link>
            <nuxt-link
              class="swiper-2-2"
              to="/">2</nuxt-link>
            <div class="right-wrapper">
              <nuxt-link
                class="swiper-2-3"
                to="/">3</nuxt-link>
              <nuxt-link
                class="swiper-2-4"
                to="/">4</nuxt-link>
            </div>
          </div>
          <div class="swiper-slide game-swiper-3">
            <div class="list">
              <nuxt-link
                class="swiper-3-1"
                to="/">1</nuxt-link>
              <nuxt-link
                class="swiper-3-2"
                to="/">2</nuxt-link>
              <nuxt-link
                class="swiper-3-3"
                to="/">3</nuxt-link>
            </div>
            <div class="list">
              <nuxt-link
                class="swiper-3-4"
                to="/">4</nuxt-link>
              <nuxt-link
                class="swiper-3-5"
                to="/">5</nuxt-link>
              <nuxt-link
                class="swiper-3-6"
                to="/">6</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 导航 -->
      <div class="game-nav-btn">
        <div class="game-swiper-pagination swiper-pagination" />
      </div>
    </div>
    <!-- 支持游戏列表 -->
    <div class="game-lists-wrapper">
      <h2><span class="pc-title">PC客户端游戏</span><span class="host-title">主机游戏</span></h2>
      <div class="game-lists">
        <div class="games-type-title">
          <span class="steam"><i />Steam</span>
          <span class="origin"><i />Origin</span>
          <span class="other"><i/>其他</span>
          <span class="host"><i/>PS/Xbox/NS</span>
        </div>
        <div class="game-type-lists">
          <div class="steam-game-lists">
            <span class="list">
              <nuxt-link
                to="/"
                title="绝地求生：大逃生"
                class="game-list">
                <i class="icon-hot" />
                <i class="icon-new" />
                绝地求生：大逃杀
              </nuxt-link>
            </span>
            <span class="list list2">2</span>
          </div>
          <div class="origin-game-lists">origin</div>
          <div class="other-game-lists">other</div>
          <div class="host-game-lists">
            <span class="list">1</span>
            <span class="list list2">2</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 下载按钮 -->
    <div class="download-wrapper">
      <h3>奇开得胜，游我掌控！</h3>
      <p>即刻享受极致加速体验</p>
      <div class="btns">
        <nuxt-link
          to="/"
          class="btn">
          下载PC客户端
        </nuxt-link>
        <nuxt-link
          to="/"
          class="btn">
          联机宝
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { gameCarouselList, gameList } from '~/api/index'
export default {
  name: 'Game',
  asyncData() {
    gameCarouselList()
      .then(data => {
        return { gameCarouselListData: data }
      })
      .catch(e => {
        
      })
    gameList()
      .then(data => {
        return { gameListData: data }
      })
      .catch(e => {

      })
  },
  data() {
    return {
      gameCarouselListData: null,
      gameListData: null
    }
  },
  created() {
    
  },
  mounted() {
    this.initGameSwiper()
    this.getGameCarouselList()
  },
  methods: {
    // 初始化游戏推荐轮播
    initGameSwiper: function() {
      new this.Swiper('#game-swiper-container', {
        autoplay: {
          disableOnInteraction: false,
          delay: 5000
        },
        loop: true,
        pagination: {
          el: '.game-swiper-pagination',
          type: 'bullets',
          bulletClass: 'game-swiper-pagination-btn',
          bulletActiveClass: 'game-swiper-pagination-btn-active',
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        }
      })
    },
    // 获取轮播推荐游戏
    getGameCarouselList: function() {
      gameCarouselList()
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
@import '../../../node_modules/swiper/dist/css/swiper.min.css';
.game {
  background-color: rgba(33, 39, 53, 1);
  width: 100%;
  min-height: 760px;
  position: relative;
  padding-top: 180px;
  // overflow: hidden;
  .game-bg {
    font-size: 0;
    width: 100%;
    height: 760px;
    position: absolute;
    background: url(~assets/images/game/game_bg.png) no-repeat;
    background-size: 100% 100%;
    top: 0;
  }
  & > h1 {
    font-size: 60px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    position: relative;
  }
  & > p {
    font-size: 28px;
    color: #fff;
    font-weight: 300;
    position: relative;
    text-align: center;
    margin-top: 20px;
  }
  // 游戏推荐轮播
  .game-swiper-wrapper {
    padding-top: 60px;
    .swiper-container {
      width: 1200px;
      height: 500px;
    }
    .game-swiper-1 {
      a {
        border-radius: 5px;
        font-size: 0;
      }
      & > .swiper-1-1 {
        float: left;
        width: 793px;
        height: 500px;
        text-decoration: none;
        background: url(~assets/images/game/game_pubg.png) no-repeat;
        background-size: 100% 100%;
      }
      & > .right-wrapper {
        width: 385px;
        height: 500px;
        margin-left: 814px;
      }
      .swiper-1-2 {
        display: block;
        width: 100%;
        height: 239px;
        text-decoration: none;
        background: url(~assets/images/game/game_rainbow-six.jpg) no-repeat;
        background-size: 100% 100%;
      }
      .swiper-1-3 {
        display: block;
        width: 100%;
        height: 239px;
        margin-top: 21px;
        text-decoration: none;
        background: url(~assets/images/game/game_monsterHunter.png) no-repeat;
        background-size: 100% 100%;
      }
    }
    .game-swiper-2 {
      width: 100%;
      .right-wrapper {
        width: 386px;
        height: 500px;
        float: left;
      }
      a {
        text-decoration: none;
        border-radius: 5px;
        font-size: 0;
        &.swiper-2-1 {
          width: 386px;
          height: 500px;
          float: left;
          margin-right: 21px;
          background: url(~assets/images/game/game_battlefield1.jpg) no-repeat;
          background-size: 100% 100%;
        }
        &.swiper-2-2 {
          width: 386px;
          height: 500px;
          float: left;
          margin-right: 21px;
          background: url(~assets/images/game/game_battlefield5.jpg) no-repeat;
          background-size: 100% 100%;
        }
        &.swiper-2-3 {
          display: block;
          width: 100%;
          height: 238px;
          background: url(~assets/images/game/game_fifa19.png) no-repeat;
          background-size: 100% 100%;
        }
        &.swiper-2-4 {
          display: block;
          width: 100%;
          height: 238px;
          margin-top: 21px;
          background: url(~assets/images/game/game_nba2k19.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .game-swiper-3 {
      width: 100%;
      & > .list {
        width: 100%;
        height: 238px;
        &:nth-of-type(2) {
          margin-top: 21px;
        }
      }
      a {
        float: left;
        width: 386px;
        height: 236px;
        text-decoration: none;
        color: #fff;
        border-radius: 5px;
        font-size: 0;
        &.swiper-3-1 {
          margin-right: 20px;
          background: url(~assets/images/game/game_COD15.jpg) no-repeat;
          background-size: 100% 100%;
        }
        &.swiper-3-2 {
          margin-right: 20px;
          background: url(~assets/images/game/game_Europa.jpg) no-repeat;
          background-size: 100% 100%;
        }
        &.swiper-3-3 {
          float: right;
          background: url(~assets/images/game/game_csgo.png) no-repeat;
          background-size: 100% 100%;
        }
        &.swiper-3-4 {
          margin-right: 20px;
          background: url(~assets/images/game/game_lol.png) no-repeat;
          background-size: 100% 100%;
        }
        &.swiper-3-5 {
          margin-right: 20px;
          background: url(~assets/images/game/game_dota2.jpg) no-repeat;
          background-size: 100% 100%;
        }
        &.swiper-3-6 {
          float: right;
          background: url(~assets/images/game/game_the-devision.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .game-nav-btn {
      position: relative;
      width: 100%;
      height: 57px;
      margin-top: 40px;
    }
  }

  // 支持游戏列表
  .game-lists-wrapper {
    width: 1200px;
    margin: 80px auto 0;
    background-color: rgba(41, 48, 65, 1);
    border-radius: 5px;
    h2 {
      width: 100%;
      height: 80px;
      background-color: rgba(49, 57, 76, 1);
      color: #fff;
      font-size: 22px;
      line-height: 80px;
      padding-left: 40px;
      padding-right: 40px;
      border-radius: 5px 5px 0 0;
      font-weight: 500;
      position: relative;
      .pc-title {
        position: absolute;
        left: 40px;
      }
      .host-title {
        position: absolute;
        left: 783px;
      }
    }
    .game-lists {
      padding: 30px 40px;
      .games-type-title {
        position: relative;
        font-size: 20px;
        color: #fff;
        height: 30px;
        span {
          position: absolute;
          line-height: 30px;
          &.steam {
            left: 0px;
            i {
              background: url(~assets/images/game/game_type_icon.png) no-repeat;
              background-size: 229px 42px;
              background-position: 0 0;
            }
          }
          &.origin {
            left: 370px;
            i {
              background: url(~assets/images/game/game_type_icon.png) no-repeat;
              background-size: 229px 42px;
              background-position: -30px 0;
            }
          }
          &.other {
            left: 560px;
            i {
              background: url(~assets/images/game/game_type_icon.png) no-repeat;
              background-size: 229px 42px;
              background-position: -60px 0;
            }
          }
          &.host {
            left: 740px;
            i {
              width: 83px;
              background: url(~assets/images/game/game_type_icon.png) no-repeat;
              background-size: 229px 42px;
              background-position: -147px 0;
            }
          }
        }
        i {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }
      }
      .game-type-lists {
        color: #fff;
        margin-top: 30px;
        overflow: hidden;
        & > div {
          float: left;
          font-size: 14px;
          line-height: 20px;
          &.steam-game-lists {
            width: 370px;
          }
          &.origin-game-lists {
            width: 190px;
          }
          &.other-game-lists {
            width: 180px;
          }
          &.host-game-lists {
            width: 380px;
          }
        }
        .list {
          float: left;
          width: 50%;
        }
        .game-list {
          display: inline-block;
          text-decoration: none;
          color: rgba(172, 175, 184, 1);
          margin-bottom: 10px;
          .icon-hot {
            display: inline-block;
            width: 12px;
            height: 12px;
            vertical-align: center;
            display: none;
            background: url(~assets/images/game/game_type_icon.png) no-repeat;
            background-size: 229px 42px;
            background-position: 0 -30px;
          }
          .icon-new {
            display: inline-block;
            width: 12px;
            height: 12px;
            vertical-align: center;
            display: none;
            background: url(~assets/images/game/game_type_icon.png) no-repeat;
            background-size: 229px 42px;
            background-position: -12px -30px;
          }
        }
      }
    }
  }

  // 下载按钮
  .download-wrapper {
    margin-top: 100px;
    text-align: center;
    margin-bottom: 120px;
    h3 {
      font-size: 36px;
      color: #fff;
      font-weight: 400;
    }
    p {
      font-size: 18px;
      color: #fff;
      font-weight: 400;
      margin-top: 10px;
    }
    .btns {
      margin-top: 40px;
      .btn {
        display: inline-block;
        width: 208px;
        height: 60px;
        vertical-align: top;
        text-decoration: none;
        color: #fff;
        font-size: 20px;
        line-height: 56px;
        font-weight: 400;
        border-radius: 30px;
        &:nth-of-type(1) {
          border: 2px solid rgba(241, 142, 45, 1);
          background-color: rgba(241, 142, 45, 1);
          margin-right: 20px;
          box-shadow: 0px 10px 30px 0px rgba(241,142,45,0.3);
          transition: background-color 0.2s linear, border-color 0.2s linear;
          &:hover {
            background-color: #f8b62d;
            border-color: #f8b62d;
          }
        }
        &:nth-of-type(2) {
          border: 2px solid rgba(76, 90, 112, 1);
          background-color: transparent;
          transition: background-color 0.2s linear, border-color 0.2s linear, box-shadow 0.2s linear;
          &:hover {
            background-color: #f8b62d;
            border-color: #f8b62d;
            box-shadow: 0px 10px 30px 0px rgba(241,142,45,0.3);
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
  .game-swiper-pagination {
    position: relative;
    // font-size: 0;
    text-align: center;
    width: 100%;
    .game-swiper-pagination-btn {
      vertical-align: top;
      display: inline-block;
      width: 47px;
      height: 55px;
      font-size: 20px;
      margin-right: 19px;
      color: #fff;
      line-height: 55px;
      text-align: center;
      font-weight: 400;
      background: url(~assets/images/game/game_Polygon.png) no-repeat;
      background-size: 100% 100%;
      outline: none;
      cursor: pointer;
      &:nth-of-type(3) {
        margin-right: 0px;
      }
      &.game-swiper-pagination-btn-active {
        background: url(~assets/images/game/game_Polygon_checked.png) no-repeat;
        background-size: 100% 100%;
      }
    }
  }
</style>
