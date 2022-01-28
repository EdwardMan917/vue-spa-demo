<template>
  <div class="page home-page">
    <div class="demo-div"> Hello World 1 </div>
    <div class="demo-div"> Hello World 2 </div>
    <div class="demo-div"> Hello World 3 </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="less">
.home-page {
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
