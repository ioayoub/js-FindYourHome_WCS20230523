const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [],
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
};
