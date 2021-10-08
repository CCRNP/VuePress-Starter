const headConf = require('./config/headConf')
const navConf = require('./config/navConf')
const sidebarConf = require('./config/sidebarConf')
const pluginsConf = require('./config/pluginConf')


module.exports = {

  title: 'VuePress-Starter',
  discription: 'CCR VuePress-Starter',
  head: headConf,

  themeConfig: {
    lastUpdated: 'Last Updated',

    logo: '/assets/img/good.jpg',

    plugins: pluginsConf,

    nav: navConf,

    sidebar: sidebarConf,

    //使用 对象 来将侧边栏划分成多个组👇
    /*
    sidebar: [
      '/', 
      '/about',
      {
        title: 'css',   // 必要的
        path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/css/cssa',
          '/css/cssb',
        ]
      }
    ]
     */

    //不同的页面组来显示不同的侧边栏👇

  }
}