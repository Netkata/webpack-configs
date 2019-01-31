import { join } from 'path';
import compiler, { memoryInstance } from '../compiler';
import { getFileFromFs } from '../utils';

const baseConfig = {
  entry: join(__dirname, 'src'),
  output: {
    path: join(__dirname, 'dist'),
  },
  devServer: {},
};

it('should import global scss files', async () => {
  await compiler(
    {
      ...baseConfig,
      features: {
        styles: {
          scss: true,
        },
      },
    },
    'development',
    );

  const file = getFileFromFs(memoryInstance, join(baseConfig.output.path, 'main.js'));

  expect(file.toString('utf8')).toMatchSnapshot();
});
