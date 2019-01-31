import { IConfiguration } from '../defaultOptions';

import * as IconfontPlugin from 'iconfont-plugin-webpack';

export interface IconsConfig {
  src: string;
  fontDest: string;
  scssDest: string;
}

export function icons({ icons: iconsConfig }: IConfiguration) {
  if (!iconsConfig) {
    return {};
  }

  return {
    plugins: [
      new IconfontPlugin({
        src: iconsConfig.src,
        dest: {
          font: `${iconsConfig.fontDest}/[family].[type]`,
          css: `${iconsConfig.scssDest}/_iconfont_[family].scss`,
        },
        watch: {
          pattern: `${iconsConfig.src}/*.svg`,
        },
      }),
    ],
  };
}
