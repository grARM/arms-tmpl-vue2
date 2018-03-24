import './share-dlg.scss'
import _ from 'underscore'

let shareDlgTmpl = _.template('<div class="share-dlg">' +
        '<div class="share-dlg-icon"></div>' +
        '<p class="title"><%= title %></p>' +
        '<p class="des">请用微信扫描下方二维码，预览并分享</p>' +
        '<img class="share-dlg-qrcode" src="<%= qrcodeUrl %>">' +
    '</div>')

var shareDlg = {
  getShareHtml: function (option) {
    // console.log('ok')
    _.extend({
      title: '布置作业成功！',
      qrcodeUrl: 'http://fanyi.qq.com/images/qrcode-download.bdf5ad34.png'
    }, option)
    return shareDlgTmpl(option)
  }
}

export default shareDlg
