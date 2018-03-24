<template>
  <div id="app">
    <Header></Header>
    <!-- <img src="./assets/logo.png"> -->
    <div class="container">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
// import Nav from './components/nav'
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import "./lib/common.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #000;
  // margin-top: 60px;
}

.container{
  width: 1120px;
  margin: 0 auto;
}
</style>