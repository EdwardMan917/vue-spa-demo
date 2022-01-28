<template>
  <div class="page link-one-page">
    <div class="demo-div"> Hello World 4 </div>
    <div class="demo-div"> Hello World 5 </div>
    <div class="demo-div"> Hello World 6 </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class LinkOne extends Vue {}
</script>

<style lang="less">
.link-one-page {
  display: flex;
  flex-direction: column;

  .demo-div {
    margin: 50px 20px;
    border-radius: 22px;
    border: 1px black solid;
    width: 95%;
    height: 500px;
  }
}
</style>
