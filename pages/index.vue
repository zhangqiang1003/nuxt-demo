<template>
  <section class="container">
    <div>
      <div class="test1">
        <span>23456这是scss的测试</span>
      </div>
      <p>这是引入normalize.css的测试</p>
      <div>{{ $t('TEST1') }}</div>
      <!-- <logo/>
      <h1 class="title">
        first-my-demo
      </h1>
      <h2 class="subtitle">
        My swell Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div> -->
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { getArticleList, ljbInventory } from '~/api/index'
import { routeTrans } from '~/static/config'
export default {
  components: {
    Logo
  },
  mounted() {
    this.apiTest()
    this.apiTest1()
  },
  methods: {
    apiTest() {
      console.log(this._)
      const params = {
        category: routeTrans[this.$route.params.type],
        ab: 'welcome_3',
        src: 'web'
      }
      getArticleList(params)
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          console.log(e)
        })
    },
    apiTest1() {
      ljbInventory()
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .test1 {
    color: red;
    & > span {
      display: block;
      height: 100px;
      width: 200px;
      line-height: 100px;
    }
  }
}
</style>
