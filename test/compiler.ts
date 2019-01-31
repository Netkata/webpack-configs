// tslint:disable-next-line:import-name
import MemoryFS = require('memory-fs');
import * as webpack from 'webpack';
import { config, ICustomConfiguration } from '../src';
import { WebpackMode } from '../src/defaultOptions';

export const memoryInstance = new MemoryFS();

export default (userConfig: ICustomConfiguration, mode: WebpackMode) => {
  const compiler = webpack(config(mode, userConfig));

  compiler.outputFileSystem = memoryInstance;

  return new Promise<webpack.Stats>((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) reject(err || stats.toJson().errors);

      resolve(stats);
    });
  });
};
