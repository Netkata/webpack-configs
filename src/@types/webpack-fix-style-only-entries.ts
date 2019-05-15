/// <reference types="node" />

declare module 'webpack-fix-style-only-entries' {
  import * as webpack from 'webpack';

  class WebpackFixStyleOnlyEntries extends webpack.Plugin {
    constructor(options?: WebpackFixStyleOnlyEntries.IOptions);
    public apply(compiler: webpack.Compiler): void;
  }

  namespace WebpackFixStyleOnlyEntries {
    interface IOptions {
      extensions?: string[];
      silent?: boolean;
    }
  }

  export = WebpackFixStyleOnlyEntries;
}
