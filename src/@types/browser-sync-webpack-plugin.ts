/// <reference types="node" />

declare module 'browser-sync-webpack-plugin' {
    import { Plugin } from 'webpack';

    class BrowserSyncPlugin extends Plugin {
      constructor(
        browserSyncOptions: BrowserSyncPlugin.IBrowserSyncOptions,
        pluginOptions: BrowserSyncPlugin.IBrowserSyncPluginOptions,
      );
    }
    namespace BrowserSyncPlugin {
        interface IBrowserSyncOptions {
          host: string;
          port: number;
          proxy: string;
        }

        interface IBrowserSyncPluginOptions {
          reload: boolean;
        }
    }

    export = BrowserSyncPlugin;
}
