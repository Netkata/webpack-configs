module.exports = {
  title: 'Netkata Webpack Config',
  description: 'Netkata Webpack Config',
  dest: 'docs/dist',
  base: '/webpack-configs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/netkata/webpack-configs' },
    ],
    sidebar: [
      ['/', 'Home'],
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          '/docs/styles.md',
          '/docs/icons.md',
          '/docs/utils.md',
          '/docs/wordpress.md',
          '/docs/extending.md',
        ]
      }
    ]
  },
};
