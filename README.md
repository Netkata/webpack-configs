# webpack-configs

[![Greenkeeper badge](https://badges.greenkeeper.io/Netkata/webpack-configs.svg)](https://greenkeeper.io/)

A single dependency for ~~all~~ most of your Webpack needs, yet still
extendable.

## Rationale

I've found a need to lock all of the Webpack-related dependencies to allow easy
upgrade of packages in project without having to spend all day at reading
`CHANGELOG.md` files and browsing through issue trackers only to find that
`some-loader` doesn't support `webpack@x.y.z` yet. Another thing that annoys me
is that in most of my small projects where I use Webpack my devDependencies are
much bigger than dependencies. Also, creating new project from scratch consisted
of many repeated `yarn add`s.

To address some of these issues I've decided to make a package that could be
used as a single, opinionated dependency for small Webpack projects - just SCSS
and Babel support. Then I realized that some of the plugins' setup could be
largely simplified, so I added support for some common cases like jQuery
handling.

## Features

- Babel transpiling with [`env`](https://babeljs.io/docs/en/babel-preset-env)
  preset, based on [browserslist](https://github.com/browserslist/browserslist)
- CSS/SCSS handling with optional extraction to separate file
- Generate font from icons, thanks to
  [iconfont-plugin-webpack](https://github.com/HaoyCn/iconfont-plugin-webpack/)
- Use external jQuery, or provide node_modules's jQuery to all of the modules
- ...with more to come!

## Installing

Just add this package as a dependency to your project:

```sh
yarn add @netkata/webpack-configs
```

This package pulls all possibly needed dependencies, so you don't have to worry
about installing all of the loaders and plugins separately.

Then create `webpack.config.js` with content like this:

```javascript
const { config } = require('@netkata/webpack-configs');

module.exports = config({
  entry: './src',
  ...moreWebpackOptions,

  features: {
    styles: {
      extractToFile: true,
      postcss: true,
      scss: true
    },
    utils: {
      browserSync: true
    },
    icons: {
      src: 'src/assets/icons',
      fontDest: 'src/assets/font',
      scssDest: 'src/scss'
    }
  }
});
```

Then to compile files with Webpack just run:

```sh
yarn webpack -d
```
