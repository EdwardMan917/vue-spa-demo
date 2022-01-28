<template>
  <div class="nav-bar">
    <h3>Vue</h3>
    <div
      class="dropdown"
      v-for="(item, index) in MenuItems"
      :item="item"
      :key="index"
    >
      <button class="dropdown-button">
        {{ item.name }}
      </button>
      <div class="dropdown-content">
        <a href="/link-one">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="button-wrapper">
      <button class="nav-button">Button</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { MenuItems } from "@/constants/MenuItem";

@Options({
  data() {
    return {
      MenuItems: MenuItems,
    };
  },
})
export default class NavBar extends Vue {}
</script>

<style lang="less">
.nav-bar {
  padding-left: 10px;
  width: 100vw;
  height: 65px;
  position: fixed;
  top: 0;
  background-color: purple;
  color: white;
  display: flex;
  flex-direction: row;
  z-index: 99;

  h3 {
    margin-right: 20px;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    width: 100px;

    .dropdown-button {
      background-color: purple;
      border-radius: 0;
      border: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;

      &:hover {
        background-color: #c98ec9;
      }
    }

    .dropdown-content {
      visibility: hidden;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      border: 1px solid purple;
      border-top: 0;

      a {
        background-color: #7a5a5a;
        color: black;
        width: 100%;
        height: 30px;

        &:hover {
          background-color: #cd5a5a;
        }
      }
    }
  }

  .dropdown:hover .dropdown-content {
    visibility: visible;
  }

  .button-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    flex-grow: 1;
    height: 100%;

    .nav-button {
      border-radius: 22px;
      border: 1px black solid;
      background-color: white;
      color: black;
      margin-right: 50px;

      &:active {
        transform: translateY(2px);
      }
    }
  }
}
</style>
