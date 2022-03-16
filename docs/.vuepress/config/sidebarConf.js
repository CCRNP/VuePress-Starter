module.exports = {
  
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
  '/foo/': [
    '',
    'foo1'
  ],
  '/bar/': [
    '',
    'bar1'
  ],
  '/MD-file': [
    '',
  ],
  '/Data Structure/LanQiao/': [
    {
      title: '蓝桥杯省赛 14 天精讲冲刺',
      path: '/Data Structure/LanQiao/',
      children: [
        'DAY 1',
        'DAY 2',
        'DAY 3',
        // 'DAY 4',
        // 'DAY 5',
        // 'DAY 6',
        // 'DAY 7',
        // 'DAY 8',
        // 'DAY 9',
        // 'DAY 10',
        // 'DAY 11',
        // 'DAY 12',
        // 'DAY 13',
        // 'DAY 14',
      ],
    }

  ],
  //fallback
  '/': [
    '',
    'about',
    {
      title: 'CSS',
      path: '/css/',
      children: [
        'css/cssa',
        'css/cssb'
      ]
    },
    '/foo/'
  ]
}