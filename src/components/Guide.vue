<template>
  <div class="guild">
    <p class="guild-title">{{ msg }}</p>
    <el-steps direction="vertical" :active="5" class="guild-step">
      <el-step title="step 1" description="填写句子和标题"></el-step>
      <el-step title="step 2" description="点击完成配置，弹出二维码"></el-step>
      <el-step title="step 3" description="手机微信扫码查看预览效果"></el-step>
      <el-step title="step 4" description="发部到微信群"></el-step>
      <el-step title="step 5" description="用户完成"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: 'guild',
  data () {
    return {
      msg: '欢迎来到新手引导！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
  color: #42b983;
}
.guild{
  height: 500px;
  padding-top: 60px;
  &-title{
    padding-bottom: 20px;
  }
}


</style>