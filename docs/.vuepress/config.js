const headConf = require('./config/headConf')
const navConf = require('./config/navConf')
const sidebarConf = require('./config/sidebarConf')
const pluginsConf = require('./config/pluginConf')

module.exports = {

  title: 'VuePress-Starter',
  discription: 'CCR VuePress-Starter',
  head: headConf,

  plugins: pluginsConf,

  markdown: {
    lineNumbers: true//代码显示行号
  },

  themeConfig: {
    
    lastUpdated: 'Last Updated',

    logo: '/assets/img/good.jpg',

    nav: navConf,

    sidebar: sidebarConf,

    // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
      
    },
  }
}