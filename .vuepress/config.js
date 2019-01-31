module.exports = {
  title: 'Netkata Webpack Config',
  description: 'Netkata Webpack Config',
  dest: 'docs/dist',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/netkata/webpack' },
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
          '/docs/extending.md',
        ]
      }
    ]
  },
};
