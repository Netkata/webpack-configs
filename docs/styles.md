# Styles

This config allows to easily use Sass/SCSS files by using
[`sass-loader`](https://github.com/webpack-contrib/sass-loader), as well as
plain CSS files. In addition, CSS bundle can also be extracted to separate file,
using
[`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin).

You can pass following options to features config:

```typescript
features: {
  styles: {
    scss: boolean;
    extractToFile: boolean;
  }
}
```

- `scss` (default: `true`): enables Sass/SCSS support
- `extractToFile` (default: `true`): enables CSS bundle extracting to file
