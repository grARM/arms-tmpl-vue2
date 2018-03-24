<template>
  <div class="header">
    <div class="header-container clearfix">
      <div class="header-logo" src="../assets/logo.png"></div>
      <div class="header-right clearfix">
        <ul class="header-nav">
          <li class="header-item"><router-link to="/worklist">我的工作台</router-link></li>
          <li class="header-item"><router-link to="/guide">新手引导</router-link></li>
        </ul>
      </div>
      
    </div>


  </div>
</template>

<script>
export default {
  name: 'common-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../lib/mixin.scss";
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #a960f3;
}

.header{
  height: 70px;
  background-color: #fff;
  width: 100%;
  

  &-container{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
  &-logo{
    float: left;
    height: 38px;
    width: 280px;
    margin-top: 16px;
    @include big-bg-png('../assets/logo');
  }

  &-right{
    float: right;
    height: 70px;
    line-height: 70px;
  }
  &-nav{
    float: left;
  }
}




</style>