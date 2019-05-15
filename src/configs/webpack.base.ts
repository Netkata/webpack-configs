const baseConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              modules: false,
              useBuiltIns: 'usage',
              corejs: 2,
            }]],
          },
        },
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },
};

export { baseConfig };
