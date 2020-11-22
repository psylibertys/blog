

module.exports = {
  title: 'psyliberty',// 设置网站标题
  description: 'psyliberty描述',
  base: '/',   // 设置站点根路径
  // dest: './ROOT',  // 设置输出目录
  port: 8086,
  head: [],
  plugins: [],
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' },
      // { text: '前端', link: '/web/' },
      {
        text: '前端',
        items: [
          { text: 'vue', link: '/web/vue/' },
          { text: 'nodejs', link: '/web/node/' },
        ]
      }
    ],
    // 为以下路由添加左侧边栏
    sidebar: {

      '/web/vue/': [
        '',
        '基本语法'
      ],
      '/web/node/': [
        '',
        'node介绍'
      ],
    },
    sidebarDepth: 2,//左侧导航显示的层级
    lastUpdated: 'Last Updated'
  }
}