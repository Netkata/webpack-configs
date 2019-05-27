# Using with WordPress

By default serving JS and CSS from `webpack-dev-server` does not work with
WordPress due to absolute URL paths hardcoded in HTML. However,
[BrowserSync](https://www.browsersync.io/) fixes this problem by replacing paths
in HTML to proxied server. Because of that in WordPress we are using Webpack in
watch mode (`webpack --watch`) with
[`browser-sync-webpack-plugin`](https://github.com/Va1/browser-sync-webpack-plugin)
enabled.

There are few minor differences between this method and proxying with
`webpack-dev-server`:

* `webpack`-compiled assets are written to disk instead of memory,
* BrowserSync doesn't reuse webpack-dev-server configuration, [so you have to
  configure it in utils section](utils.md),
* JS hot-reloading doesn't work (but CSS works).
