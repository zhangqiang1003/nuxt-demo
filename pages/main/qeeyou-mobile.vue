<template>
  <div class="qeeyou-mobile">
    <!-- 下载按钮 -->
    <div class="download-wrapper">
      <h1>加速手游 稳中求胜!</h1>
      <p>稳定低延迟、流畅不掉线、无缝切换WiFi/4G</p>
      <div class="download-url">
        <i class="QCode" />
        <div class="download-btn">
          <a
            :href="downloadHref"
            class="android">
            <i class="icon-android" />
            Android版
          </a>
          <nuxt-link
            to="/specials/mobileSpeedDownload"
            class="ios">
            <i class="icon-ios" />
            iOS版
          </nuxt-link>
        </div>
        <i class="icon-bg1-1" />
        <i class="icon-bg1-2" />
        <i class="icon-bg1-3" />
        <i class="icon-bg1-4" />
        <div class="download-mask" />
      </div>
    </div>
    <!-- 专业加速，主宰战局 -->
    <div class="intro1-wrapper">
      <h2 class="title-h2">专业加速，主宰战局</h2>
      <p class="title-p">基于奇游电竞级游戏网络，专业高效优化手游网络问题</p>
    </div>
    <!-- 轻触游戏，马上开玩 -->
    <div class="intro2-wrapper">
      <h2 class="title-h2">轻触游戏，马上开玩</h2>
      <p class="title-p">智能动态加速，自动匹配最优线路</p>
      <i class="icon-bg2-1"/>
      <i class="icon-bg2-2"/>
      <i class="icon-bg2-3"/>
    </div>
    <!-- 强大兼容，享受多场景畅玩！ -->
    <div class="intro3-wrapper">
      <h2 class="title-h2">强大兼容，享受多场景畅玩!</h2>
      <div class="device-support">
        <div class="support-android">
          <i class="icon-android"/>
          <p>安卓</p>
        </div>
        <div class="support-ios">
          <i class="icon-ios"/>
          <p>ios、iPad</p>
        </div>
        <div class="support-simulator">
          <i class="icon-simulator"/>
          <p>手机模拟器</p>
        </div>
      </div>
      <i class="icon-bg3-1" />
    </div>
    <!-- 热门人气手游应有尽有 -->
    <div class="intro4-wrapper">
      <h2 class="title-h2">热门人气手游应有尽有</h2>
      <p class="title-p">随时响应玩家新的需求</p>
      <i class="icon-bg4-1" />
      <i class="icon-bg4-2" />
    </div>
    <!-- 品质之选，免费公测 -->
    <div class="intro5-wrapper">
      <div class="icon-logo">
        <i />
        <p>品质之选，限时免费</p>
        <span class="free-tip">免费</span>
      </div>
    </div>
    <!-- 官方微信服务号 -->
    <div class="intro6-wrapper">
      <h2 class="title-h2">官方微信服务号</h2>
      <p class="title-p">产品交流、抢先升级</p>
      <i class="icon-bg6-1"/>
      <i class="icon-bg6-2"/>
    </div>
  </div>
</template>

<script>
import { getMobileClient } from '~/api'
export default {
  name: 'QeeyouMobile',
  data() {
    return {
      downloadHref: 'javascript:;'
    }
  },
  mounted() {
    this.getAndroidUrl()
  },
  methods: {
    getAndroidUrl: function() {
      let apiData = {
        client_type_node: 20,
        channel_id: null
      }
      getMobileClient(apiData)
        .then(data => {
          this.downloadHref = data.client_url
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
}
</script>

<style lang="scss" scoped>
.qeeyou-mobile {
  width: 100%;
  padding-top: 99px;
}

// 公共title
.title-h2 {
  font-size: 36px;
  color: #fff;
  text-align: center;
  font-weight: 500;
}
.title-p {
  font-size: 16px;
  color: rgba(172, 175, 184, 1);
  text-align: center;
}
// 下载按钮
.download-wrapper {
  width: 100%;
  text-align: center;
  padding-top: 120px;
  height: 950px;
  position: relative;
  h1 {
    font-size: 60px;
    color: #fff;
    font-weight: 400;
  }
  p {
    font-size: 24px;
    color: rgba(172, 175, 184, 1);
    font-weight: 400;
    margin-top: 20px;
  }
  .download-url {
    margin-top: 41px;
    font-size: 0;
    & > .QCode {
      display: inline-block;
      width: 178px;
      height: 178px;
      margin-right: 50px;
      background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_QCode.png) no-repeat;
      background-size: 100% 100%;
    }
    & > .download-btn {
      display: inline-block;
      vertical-align: top;
      a {
        text-align: center;
        display: block;
        text-decoration: none;
        width: 200px;
        height: 54px;
        margin-top: 23px;
        background: linear-gradient(90deg,#00f6ff 0,#007bff 100%);
        border-radius: 5px;
        font-size: 20px;
        color: #fff;
        line-height: 54px;
        cursor: pointer;
        i {
          display: inline-block;
          width: 25px;
          height: 25px;
          // border: 1px solid red;
          position: relative;
          top: 5px;
          &.icon-android {
            background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_icon_android_normal.png) no-repeat;
            background-size: 100% 100%;
          }
          &.icon-ios {
            background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_icon_ios_normal.png) no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
  .icon-bg1-1 {
    position: absolute;
    bottom: 0;
    width: 710px;
    height: 420px;
    left: 50%;
    transform: translateX(-50%);
    background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_mockup1.png) no-repeat;
    background-size: 100%;
  }
  .icon-bg1-2 {
    position: absolute;
    width: 174px;
    height: 206px;
    top: 150px;
    left: 1100px;
    background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_material1.png) no-repeat;
    background-size: 100% 100%;
  }
  .icon-bg1-3 {
    position: absolute;
    width: 234px;
    height: 180px;
    top: 520px;
    left: 280px;
    background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_material2.png) no-repeat;
    background-size: 100% 100%;
  }
  .icon-bg1-4 {
    position: absolute;
    width: 110px;
    height: 147px;
    top: 808px;
    left: 1280px;
    background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_material4.png) no-repeat;
    background-size: 100% 100%;
  }
  .download-mask {
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(360deg,#272e3f 0,rgba(38,44,60,0) 100%);
  }
}

// 专业加速，主宰战局
.intro1-wrapper {
  width: 100%;
  height: 748px;
  padding-top: 120px;
  background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_mockup2.png) no-repeat;
  background-size: 100% 100%;
  p {
    margin-top: 20px;
  }
}
// 轻触游戏，马上开玩
.intro2-wrapper {
  width: 100%;
  height: 840px;
  position: relative;
  padding-top: 120px;
  p {
    padding-top: 20px;
  }
  .icon-bg2-1 {
    position: absolute;
    left: 0;
    // right: 0;
    width: 100%;
    bottom: 0;
    height: 600px;
    background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_mockup3.png) no-repeat;
    background-size: 100% 100%;
  }
  .icon-bg2-2 {
    position: absolute;
    width: 166px;
    height: 101px;
    left: 1552px;
    top: 150px;
    background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_material6.png) no-repeat;
    background-size: 100% 100%;
  }
  .icon-bg2-3 {
    position: absolute;
    width: 118px;
    height: 112px;
    left: 254px;
    top: 770px;
    background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_material7.png) no-repeat;
    background-size: 100% 100%;
  }
}

// 强大兼容，享受多场景畅玩！
.intro3-wrapper {
  width: 100%;
  height: 512px;
  padding-top: 100px;
  text-align: center;
  background: linear-gradient(90deg,#293041 0,#212735 100%);
  .device-support {
    margin-top: 80px;
    font-size: 0;
    & > div {
      display: inline-block;
      font-size: 16px;
      width: 240px;
      height: 160px;
      margin-right: 40px;
      color: #fff;
      &.support-simulator {
        margin-right: 0;
      }
      i {
        display: block;
        width: 240px;
        height: 160px;
        &.icon-android {
          background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_icon_android.png) no-repeat;
          background-size: 100% 100%;
        }
        &.icon-ios {
          background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_icon_ios.png) no-repeat;
          background-size: 100% 100%;
        }
        &.icon-simulator {
          background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_icon_moni.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
// 热门人气手游应有尽有
.intro4-wrapper {
  width: 100%;
  height: 872px;
  padding-top: 120px;
  position: relative;
  p {
    margin-top: 20px;
  }
  .icon-bg4-1 {
    position: absolute;
    left: 50%;
    top: 40px;
    transform: translateX(-50%);
    width: 1600px;
    height: 710px;
    background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_game.png) no-repeat;
    background-size: 100% 100%;
  }
  .icon-bg4-2 {
    position: absolute;
    bottom: -10px;
    left: 1545px;
    width: 95px;
    height: 95px;
    background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_material9.png) no-repeat;
    background-size: 100% 100%;
  }
}

// 品质之选，免费公测
.intro5-wrapper {
  width: 100%;
  height: 512px;
  padding-top: 80px;
  background-color: #212735;
  .icon-logo {
    width: 318px;
    height: 278px;
    margin: 0 auto;
    position: relative;
    i {
      display: block;
      width: 318px;
      height: 278px;
      background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_icon_logo_normal.png) no-repeat;
      background-size: 100% 100%;
    }
    p {
      width: 400px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      font-size: 36px;
      color: #fff;
      font-weight: 500;
    }
    .free-tip {
      position: absolute;
      width: 56px;
      height: 100px;
      top: 0;
      left: 227px;
      background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_icon_label_normal.png) no-repeat;
      background-size: 100% 100%;
      font-size: 18px;
      color: #fff;
      font-weight: 400;
      line-height: 100px;
      text-align: center;
    }
  }
}

// 官方微信服务号
.intro6-wrapper {
  width: 100%;
  height: 600px;
  padding-top: 110px;
  position: relative;
  p {
    margin-top: 20px; 
  }
  .icon-bg6-1 {
    display: block;
    width: 170px;
    height: 170px;
    border-radius: 5px;
    background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_guofuqq.png) no-repeat;
    background-size: 100% 100%;
    margin: 60px auto 0;
  }
  .icon-bg6-2 {
    position: absolute;
    top: 0;
    left: 300px;
    width: 184px;
    height: 129px;
    background: url(~assets/images/qeeyou-mobile/qeeyou-mobile_img_material8.png) no-repeat;
    background-size: 100% 100%;
  }
}
</style>
