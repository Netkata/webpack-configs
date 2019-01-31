import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as magicImporter from 'node-sass-magic-importer';

import { IConfiguration, WebpackMode } from '../defaultOptions';

export interface IStyleOptions {
  scss: boolean;
  extractToFile: boolean;
}

export function styles({ styles: stylesConfig }: IConfiguration, mode: WebpackMode) {
  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      importer: magicImporter(),
    },
  };

  const fileRegex = stylesConfig.scss ? /\.(sa|sc|c)ss$/ : /\.css$/;
  const loaders = [
    stylesConfig.extractToFile && mode === 'production'
        ? MiniCssExtractPlugin.loader
        : 'style-loader',

    'css-loader',
    'resolve-url-loader',
  ];
  const plugins = [];

  if (stylesConfig.scss) {
    loaders.push(sassLoader);
  }

  if (stylesConfig.extractToFile) {
    plugins.push(
            new MiniCssExtractPlugin({
              filename: '[name].css',
              chunkFilename: '[id].css',
            }),
        );
  }

  return {
    plugins,
    module: {
      rules: [
        {
          test: fileRegex,
          use: loaders,
        },
      ],
    },
  };
}
