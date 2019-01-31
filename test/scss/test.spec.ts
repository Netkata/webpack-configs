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
});

it('should not compile external scss on development', async () => {
  const statsDevelopment = await compiler(
    {
      ...baseConfig,
      features: {
        styles: {
          scss: true,
          extractToFile: true,
        },
      },
    },
    'development',
    );
  const output = statsDevelopment.toJson();

  expect(output.assets.length).toBe(1);
});

it('should compile external scss on production', async () => {
  const stats = await compiler(
    {
      ...baseConfig,
      features: {
        styles: {
          scss: true,
          extractToFile: true,
        },
      },
    },
    'production',
    );
  const output = stats.toJson();

  expect(output.assets.length).toBe(2);
});
