module.exports = {
  title: '梦回清尘',
  theme: 'reco',
  description: '人注定要受自由之苦',
  head: [
    [
      'link',
      { rel: 'icon', href: '/images/Logo2.png' }
    ],
    [
      'meta',
      { name: 'author', content: '梦回清尘' }
    ],
    [
      'meta',
      { name: 'keywords', content: '笔记，项目' }
    ]
  ],
  base: '/bloglxd/',
  themeConfig: {
    logo: '/images/logo.png',
    lastUpdated: '更新时间',
    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/about' },
      { text: '项目', link: 'https://google.com' },
      {
        text: '工具',
        items: [
          {
            text: 'Group1', items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          },
          {
            text: 'Group2', items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          }
        ]
      },
      { text: '联系我', link: '/guide/' },
    ]
  }
}