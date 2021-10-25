const headConf = require('./config/headConf')
const navConf = require('./config/navConf')
const sidebarConf = require('./config/sidebarConf')
const pluginsConf = require('./config/pluginConf')

module.exports = {

  title: 'VuePress-Starter',
  discription: 'CCR VuePress-Starter',
  head: headConf,

  plugins: pluginsConf,

  theme: 'reco',

  themeConfig: {

    lastUpdated: 'Last Updated',

    logo: '/assets/img/good.jpg',

    nav: navConf,

    sidebar: sidebarConf,

  }
}