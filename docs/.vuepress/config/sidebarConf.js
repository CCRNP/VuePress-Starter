module.exports = {
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