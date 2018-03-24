<template>
  <div class="editwork">
    <div class="editwork-sentence-list">
      <div class="editwork-sentence-item" v-for="(sentence, i_sentence) in sentenceList">
        <p class="editwork-sentence-item-title">第{{i_sentence + 1}}个任务</p>
        <span class="editwork-sentence-item-split" v-show="sentence.split != ''">{{sentence.split}}</span>
        <div class="editwork-sentence-item-text" >
          <el-input type="textarea" :rows="2" :autosize="{ minRows: 4}" placeholder="请输入跟读句子..." v-model="sentence.text" @blur="blurText(i_sentence)"></el-input>
          <a href="javascript:;" class="editwork-sentence-item-voice">
            <span class="icon" @click="readVoice(i_sentence)"></span>
            <span class="text">参考录音</span>
          </a>
          <a href="javascript:;" class="editwork-sentence-item-clean el-icon-close" @click="cleanText(i_sentence)"></a>
        </div>

      </div>
    </div>

    <a href="javascript:;" class="editwork-sentence-add" @click="addText"><span class="el-icon-plus"></span> 继续添加</a>

    <div class="editwork-info">
      <p class="editwork-info-title">添加任务标题</p>
      <el-input class="editwork-info-title-text" type="textarea" :rows="2" :autosize="{ minRows: 2, maxRows: 3}" placeholder="跟读作业XXXx" v-model="title"></el-input>
      <el-button  class="editwork-submit-btn" type="primary" @click="saveWork">完成布置</el-button>
    </div>

  </div>
</template>

<script>
import $$shareDlg from '../lib/share-dlg.js'
export default {
  name: 'editwork',
  data () {
    return {
      msg: '布置任务',
      textarea: '',
      input: '',
      title: '',
      sentenceList: [
        {'text': 'dsdahsi1', 'split': ''},
        {'text': 'dsdahsi2', 'split': '已将原文自动拆分成2句'},
        {'text': 'dsdahsi3', 'split': '已将原文自动拆分成2句'}
      ]
    }
  },
  // beforeRouteUpdate (to, from, next) {
  //   console.log('$route.params', this.$route.params)
  //   next()
  // },
  // watch: {
  //   '$route' (to, from) {
  //     console.log('$route to', to)
  //   }
  // },
  mounted: function () {
    if (this.$route.params.workId) {
      console.log('mounted id', this.$route.params.workId)
    } else {
      console.log('new work')
      this.sentenceList = [{'text': '', 'split': ''}]
    }
  },
  methods: {
    cleanText: function (index) {
      this.sentenceList[index].text = ''
    },
    addText: function () {
      this.sentenceList.push({
        'text': ''
      })
    },
    blurText: function (index) {
      console.log('blurText num : ', this.sentenceList[index].text)
    },
    readVoice: function (index) {
      console.log('read text : ', this.sentenceList[index].text)
    },
    saveWork: function () {
      let shareHtml = $$shareDlg.getShareHtml({
        title: '任务布置成功！',
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
  margin: 0 10px;
}



.editwork{
  padding-top: 60px;
  margin-bottom: 70px;
  .el-textarea__inner{
    padding: 20px 50px 50px 20px;
    font-size: 16px;
  }

  &-sentence{
    &-list{

    }
    &-item{
      width: 100%;
      margin-bottom: 30px;
      position: relative;
      &-title{
        padding-bottom: 20px;
        font-size: 20px;

      }
      &-split{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 12px;
        color: #FF0000;
        line-height: 12px;
      }
      &-text{
        position: relative;

        
      }
      &-voice{
        display: block;
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: #666;
        height: 18px;
        .icon{
          display: inline-block;
          vertical-align: middle;
          height: 18px;
          width: 18px;
          // background-color: #333;
          @include big-bg-png('../assets/sound');
        }
        .text{
          display: inline-block;
          height: 12px;
          line-height: 12px;
          font-size: 12px;
        }

        &:hover{
          .icon{
            @include big-bg-png('../assets/sound-01');
          }
          .text{
            color: $purple-color;
          }
        }
      }
      &-clean{
        display: block;
        position: absolute;
        width: 10px;
        height: 10px;
        top: 20px;
        right: 20px;
        color: #979797;
      }

    }
    &-add{
      width: 150px;
      display: block;
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      margin: 0 auto 30px auto;
      color: $purple-color;
    }
  }

  &-info{
    &-title{
      padding-bottom: 20px;
      font-size: 20px;
    }
    
  }
  &-submit-btn{
    display: block;
    width: 300px;
    height: 50px;
    font-size: 18px;
    margin: 50px auto 0 auto;
  }
}


</style>