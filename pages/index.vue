<template>
  <section class="container">
    <div>
      <div class="test1">
        <p>23456这是scss的测试</p>
      </div>
      <p>这是引入normalize.css的测试</p>
      <div>{{ $t('TEST1') }}</div>
    </div>
  </section>
</template>

<script>
import { getArticleList, ljbInventory } from '~/api/index'
import { routeTrans } from '~/static/config'
export default {
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .test1 {
    color: #808080;
    & > p {
      // display: block;
      // height: 100px;
      // width: 200px;
      // line-height: 100px;
      // font-size: 24px;
      // border: 1px solid red;
    }
  }
}
.container .test1 > p {
  display: block;
  height: 100px;
  width: 200px;
  line-height: 100px;
  font-size: 24px;
  border: 1px solid red;
}
</style>
