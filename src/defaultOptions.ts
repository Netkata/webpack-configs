import webpack = require('webpack');
import { IFontOptions } from './configs/font';
import { IconsConfig } from './configs/icons';
import { IStyleOptions } from './configs/styles';
import { IUtilOptions } from './configs/utils';

export type WebpackMode = webpack.Configuration['mode'];

export interface IConfiguration {
  styles: IStyleOptions;
  icons?: IconsConfig;
  font: IFontOptions;
  utils: IUtilOptions;
}

export const defaultOptions: IConfiguration = {
  font: {
    inlineLimit: 8192,
    outputPath: 'fonts/',
  },
  styles: {
    extractToFile: true,
    scss: true,
  },
  utils: {},
};
