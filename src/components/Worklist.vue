<template>
  <div class="worklist">
    <ul class="worklist-list">
      <li class="worklist-item" v-for="(item_work, i_work) in worklistX">
        <router-link :to="'/editwork/'+item_work.id">
          <span class="num">{{i_work + 1}}</span>
          <span class="title">{{item_work.title}}</span>
          <span class="count">{{item_work.count}}人参与</span>
          <span class="date">{{item_work.date}}</span>
          <a class="share" href="javascript:;" @click.stop="shareWork(i_work)">分享</a>
          <a class="delete" href="javascript:;" @click.stop="deleteWork(i_work)">删除</a>
        </router-link>  
      </li>
    </ul>

    <!-- <el-button class="worklist-add" type="primary"><router-link to="/editwork">布置跟读作业</router-link></el-button> -->
    <router-link to="/editwork"><el-button class="worklist-add" type="primary">布置跟读作业</el-button></router-link>
    
  </div>
</template>

<script>
import $$shareDlg from '../lib/share-dlg.js'
// import { mapGetters, mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'worklist',
  data () {
    return {
      msg: '我的任务列表',
      workList: [
        {'title': 'sdasda1', 'count': '23', 'date': '2017-09-12', 'share': 'url', 'id': '12'},
        {'title': 'sdasda2', 'count': '23', 'date': '2017-09-12', 'share': 'url', 'id': '123'},
        {'title': 'sdasda3', 'count': '45', 'date': '2017-09-12', 'share': 'url', 'id': '45'},
        {'title': 'sdasda4', 'count': '66', 'date': '2017-09-12', 'share': 'url', 'id': '54'},
        {'title': 'sdasda5', 'count': '54', 'date': '2017-09-12', 'share': 'url', 'id': '43'},
        {'title': 'sdasda6', 'count': '90', 'date': '2017-09-12', 'share': 'url', 'id': '534'}
      ]
    }
  },
  computed: {
    ...mapGetters([
      'worklistX'
    ]),
    modifiedLink: function (id) {
      return '/editwork/' + id
    }
  },
  methods: {
    // ...mapActions([]),
    shareWork: function (index) {
      let shareHtml = $$shareDlg.getShareHtml({
        title: '分享成功！',
        qrcodeUrl: 'http://fanyi.qq.com/images/qrcode-download.bdf5ad34.png'
      })
      this.$alert(shareHtml, '', {
        dangerouslyUseHTMLString: true,
        showConfirmButton: false,
        callback: action => {
          if (action === 'confirm') {
            this.$message({
              type: 'info',
              message: '已删除'
            })
          }
        }
      })
    },
    deleteWork: function (index) {
      // var curWork = this.workList[index]
      this.$alert('确定要删除这一段', '删除', {
        confirmButtonText: '确定',
        callback: action => {
          if (action === 'confirm') {
            this.workList.splice(index, 1)
            this.$message({
              type: 'info',
              message: '已删除'
            })
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../lib/variable.scss";
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
  margin: 0;
}



.worklist{
  margin-top: 100px;
  &-list{
    background-color: #fff;

  }
  &-item{
    height: 100px;
    width: 100%;
    line-height: 100px;
    border-top: 1px solid #f3f3f3;
    &:hover{
      background-color: #f3f3f3;
    }

    .num{
        display: inline-block;
        width: 100px;
        text-align: center;
        font-size: 20px;
    }
    .title{
        display: inline-block;
        text-align: left;
        width: 400px;
        font-size: 16px;

    }
    .count{
        display: inline-block;
        text-align: center;
        width: 100px;
        font-size: 13px;
        color: #999;
    }
    .date{
        display: inline-block;
        text-align: center;
        width: 200px;
        font-size: 13px;
        color: #999;
    }
    .share{
        display: inline-block;
        text-align: center;
        width: 100px;
        font-size: 14px;
        color: #A04CF7;
        outline: none;
    }
    .delete{
        display: inline-block;
        text-align: center;
        width: 100px;
        font-size: 14px;
        color: #FF0000;
        outline: none;
    }

  }
  &-add{
    display: block;
    width: 300px;
    height: 50px;
    font-size: 18px;
    margin: 50px auto 0 auto;
    a{
      color: #fff;
      // display: inline-block;
      // width: 100%;
      // height: 50px;
      // line-height: 50px;
    }
  }


}



</style>