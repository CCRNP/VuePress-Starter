module.exports = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Guide',
    link: '/about'
  },
  {
    text: '蓝桥杯',
    link: '/Data Structure/LanQiao/'
  },
  {
    text: 'CCR',
    link: 'http://www.ccrnp.com'
  },
  {
    text: 'MD',
    link: '/MD-file/'
  },
  {
    text: 'Vssue',
    link: '/vssue'
  },

  //  广商
  //这里记一个小改
  //link 中文路径改英文 text不改， 因中文路径导致的 md 文件中图片连接中 中文被转义了，故找不到原来的图片的地址位置而无法显示图片
  {
    text: "广商",
    items: [{
        text: '大三',
        items: [{
            text: '三上',
            link: '/GS/Junior/First Semester/Curriculum.md'
          },
          {
            text: '三下',
            link: '/GS/Junior/Second Semester/Curriculum'
          }
        ]
      },
      {
        text: '大四',
        items: [{
          text: '四上',
          link: '/GS/Senior/First Semester/'
        }]
      }
    ]
  },

  //下拉列表👇
  {
    text: 'Search',
    ariaLabel: 'Search Menu',
    items: [{
        text: 'Baidu',
        link: 'http://www.baidu.com'
      },
      {
        text: 'Google',
        link: 'http://www.google.com'
      },
    ]
  },

  {
    text: 'Group',
    items: [{
        text: 'Group1',
        items: [{
            text: 'Baidu',
            link: 'http://www.baidu.com'
          },
          {
            text: 'Google',
            link: 'http://www.google.com'
          },
        ]
      },
      {
        text: 'Group2',
        items: [{
            text: 'Baidu',
            link: 'http://www.baidu.com'
          },
          {
            text: 'Google',
            link: 'http://www.google.com'
          },
        ]
      }
    ]
  },

]