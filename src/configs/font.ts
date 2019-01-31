import { IConfiguration } from '../defaultOptions';

export interface IFontOptions {
  inlineLimit: number;
  outputPath: string;
}

export function font({ font: fontConfig }: IConfiguration) {
  return {
    module: {
      rules: [
        {
          test: /\.(svg|eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: fontConfig.inlineLimit,
                outputPath: fontConfig.outputPath,
              },
            },
          ],
        },
      ],
    },
  };
}
