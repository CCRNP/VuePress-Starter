const secret = require("./secret")

module.exports = {

  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',
    // 其他的 Vssue 配置
    owner: 'CCRNP',
    repo: 'VuePress-Starter',
    clientId: '42e4cfe8f3827a8ecbee',
    clientSecret: '5f34acb342d13ad49b2c5413e17478d2280919c2',
  },

  '@vuepress/last-updated': {
    transformer: (timestamp, lang) => {
      // 不要忘了安装 moment
      const moment = require('moment')
      moment.locale("zh-cn")
      return moment(timestamp).format("LLLL")
    }
  },

  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "New content is available.",
      buttonText: "Refresh"
    }
  },

  // Back to Top
  '@vuepress/back-to-top': true,

  //Google Analytics
  '@vuepress/google-analytics':
  {
    'ga': secret.ga
  }

}