import { merge } from 'lodash';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import * as webpackMerge from 'webpack-merge';

import { font } from './configs/font';
import { icons } from './configs/icons';
import { styles } from './configs/styles';
import { utils } from './configs/utils';
import { baseConfig } from './configs/webpack.base';
import { defaultOptions, IConfiguration, WebpackMode } from './defaultOptions';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer W>
    ? ReadonlyArray<DeepPartial<W>>
    : DeepPartial<T[P]>
};

export interface ICustomConfiguration extends webpack.Configuration {
  features: DeepPartial<IConfiguration>;
  devServer: webpackDevServer.Configuration;
}

export function config(mode: WebpackMode, { features, ...userConfig }: ICustomConfiguration) {
  const configWithDefaults = merge(defaultOptions, features);

  return webpackMerge.smart(
    baseConfig,
    { mode },

    styles(configWithDefaults, mode),
    font(configWithDefaults),
    icons(configWithDefaults),
    utils(configWithDefaults),

    userConfig,
  );
}
