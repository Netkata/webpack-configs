import * as path from 'path';
import compiler from '../compiler';

const baseConfig = {
  entry: path.join(__dirname, 'src'),
  devServer: {},
};

it('should compile scss', async () => {
  const stats = await compiler(
    {
      ...baseConfig,
      features: {
        styles: {
          scss: true,
          extractToFile: false,
        },
      },
    },
    'development',
  );
  const output = stats.toJson();

  expect(output.assets.length).toBe(1);
  expect(output.assets[0].name).toBe('main.js');
});

it('should extract scss', async () => {
  const options =  {
    ...baseConfig,
    features: {
      styles: {
        scss: true,
        extractToFile: true,
      },
    },
  };
  const productionStats = (await compiler(options, 'production')).toJson();

  expect(productionStats.assets.length).toBe(2);
  expect(productionStats.assets[0].name).toBe('main.css');
  expect(productionStats.assets[1].name).toBe('main.js');

  const developmentStats = (await compiler(options, 'development')).toJson();

  expect(developmentStats.assets.length).toBe(2);
  expect(developmentStats.assets[0].name).toBe('main.css');
  expect(developmentStats.assets[1].name).toBe('main.js');
});
