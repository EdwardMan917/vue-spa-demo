<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/home/NavBar.vue"; // @ is an alias to /src

@Options({
  components: {
    NavBar,
  },
})
export default class Home extends Vue {}
</script>

<style lang="less">
@import "less/common.less";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
