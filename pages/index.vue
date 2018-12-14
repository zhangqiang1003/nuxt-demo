<template>
  <div class="container">
    <div>{{ $t('TEST1') }}</div>
  </div>
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
  font-size: 20px;
}
.container .test1 > p {
  display: block;
  height: 100px;
  width: 200px;
  line-height: 100px;
  font-size: 24px;
  // border: 1px solid red;
}
</style>
