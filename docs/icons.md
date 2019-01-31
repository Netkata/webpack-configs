# Icons

[`iconfont-plugin-webpack`](https://github.com/HaoyCn/iconfont-plugin-webpack)
allows to create icon font from SVG files and also generate SCSS file with
classes for icons based on image filenames.

You can pass following options to features config:

```typescript
features: {
  icons: {
    src: string;
    fontDest: string;
    scssDest: string;
  }
}
```

- `src`: path to source folder containing .svg files
- `fontDest`: directory to generate font files to
- `scssDest`: directory to generate .scss file
