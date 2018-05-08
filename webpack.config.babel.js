import path from 'path';

export default {
  entry: './src/index.js',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },

  output: {
    path: path.resolve(__dirname, './public/bundle/'),
    filename: 'index.bundle.js'
  },

  devServer: {
    publicPath: '/bundle',
    contentBase: './public'
  }
};
