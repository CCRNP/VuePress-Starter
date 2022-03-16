const secret = require("./secret.js")

module.exports = {
  // vssue 评论功能
  plugins: [
     ['@vuepress/back-to-top'],
    [
      '@vssue/vuepress-plugin-vssue', {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
        // 其他的 Vssue 配置
        owner: 'CCRNP',
        repo: 'VuePress-Starter',
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
      } 
    ],
    // last-updated
    [
      '@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale("zh-cn")
          return moment(timestamp).format("LLLL")
        }
      }
    ]
    // PWA
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    ],

    // Back to Top
    ['@vuepress/back-to-top'],
    //Google Analytics
    [
      '@vuepress/google-analytics', {
        'ga': secret.ga
      }
    ],
    
    [
      '@vuepress/medium-zoom', {
        selector: 'img.zoom-custom-imgs',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16
        }
      }
    ]
  ]
}