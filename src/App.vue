<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header></Header>
    <!-- <Index></Index> -->
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// .vue后缀名可以省略,默认就是这个
import Header from './components/Header'
import Footer from './components/Footer'
// import Index from './pages/Index'
import {router} from './routes/router'

export default {
  name: 'app',
  //  组件
  components: {
    // HelloWorld
    // Header:Header   ES6规定  如果 属性:值 属性和值长得一样,可以省略
    Header,
    Footer,
    // Index
  },
  router
}
</script>

<style>
/* css中引入css样式, 使用@import关键词 */
@import "./assets/css/common.css";
@import "./assets/css/mycss.css";
</style>
