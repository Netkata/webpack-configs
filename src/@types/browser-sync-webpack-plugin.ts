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
          proxy: string;
          host?: string;
          port?: number;
        }

        interface IBrowserSyncPluginOptions {
          reload: boolean;
        }
    }

    export = BrowserSyncPlugin;
}
