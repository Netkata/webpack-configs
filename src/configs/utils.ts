import * as BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import { Configuration as WebpackConfiguration, ProvidePlugin } from 'webpack';
import { IConfiguration } from '../defaultOptions';

export interface IUtilOptions {
  browserSync?: BrowserSyncPlugin.IBrowserSyncOptions;
  jquery?: 'internal' | 'external';
}

function validateConfig(config: IUtilOptions) {
  if (config.browserSync !== undefined) {
    if (typeof config.browserSync !== 'object') {
      throw new Error('Invalid option for browserSync, object should be passed.');
    }
  }

  if (config.jquery !== undefined) {
    if (config.jquery !== 'external' && config.jquery !== 'internal') {
      throw new Error("Invalid option for jquery, 'internal' | 'external' should be passed.");
    }
  }
}

export function utils({ utils: utilsConfig }: IConfiguration) {
  validateConfig(utilsConfig);

  const config: WebpackConfiguration = {};

  if (utilsConfig.browserSync) {
    config.plugins = config.plugins || [];

    config.plugins.push(new BrowserSyncPlugin(utilsConfig.browserSync, {
      reload: false,
    }));
  }

  if (utilsConfig.jquery === 'external') {
    config.externals = {
      jQuery: 'jQuery',
      $: 'jQuery',
    };
  } else if (utilsConfig.jquery === 'internal') {
    config.plugins = config.plugins || [];

    config.plugins.push(
            new ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
            }),
        );
  }

  return config;
}
