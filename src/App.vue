<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
//import VantButton from './components/vant/Button.vue'
import MainTabBar from 'components/content/MainTabBar.vue'

export default {
  name: 'app',
  components: {
      MainTabBar
    //VantButton
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
