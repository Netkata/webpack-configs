# Utils

Currently, there are two additional utilities in the package: BrowserSync and
jQuery handling.

To configure them, you can pass these options in your `webpack.config.js`:

```typescript
features: {
  styles: {
    browserSync?: {
      proxy: string;
      host?: string;
      port?: number;
    };
    jquery?: 'internal' | 'external';
  }
}
```

* `browserSync`: enables BrowserSync support in `webpack-dev-server`
* `jquery`: allows to configure whether to support internal or external jQuery

## BrowserSync

BrowserSync seems to be the only reasonable way for `webpack-dev-server` to work
nice with WordPress. The reason for that is WordPress generates absolute paths
to every resource by default, which proxy in `webpack-dev-server` cannot handle.
BrowserSync seems to get around it by overriding paths in every HTML generated
by proxied site.

In this package, we use `browser-sync-webpack-plugin` to create BrowserSync
instance which proxies our WordPress site. Pretty complicated, but works! :tada:

You can read more [here](wordpress.md).

## Difference between internal or external jQuery

In some cases (like in many WordPress sites) jQuery is being loaded from script
tag. In such case, if we use `import jquery` in our JS code, we will include
another jQuery instance to the site, which unnecessarily increases page load
time and bundle size. To avoid this we could instruct Webpack to resolve all
`jquery` references from imports to global `jQuery` object in window. This is
done by `external` option here.

::: warning

When using this option, please make sure that jQuery is loaded before
webpack-generated assets in HTML.

:::
