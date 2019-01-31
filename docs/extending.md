# Extending this package

By using `webpack-merge` at it's core, this package allows to extend and
overwrite generated config. Internal configuration is passed by `features`
property, but any other options you pass will be applied on top of features you
enabled.

```javascript
const { config } = require('@netkata/webpack-configs');

module.exports = config({
  features: {
    styles: {
      extractToFile: true
    }
  },

  // you can place any valid webpack config here
  entry: './src'
});
```

`webpack-merge` is also smart enough to override loaders based on file match
pattern, so if you specify loader for `/\.js$/` it will replace default
`babel-loader`.

[View docs](https://github.com/survivejs/webpack-merge) for learning more about
`webpack-merge`.
