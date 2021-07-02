const path = require('path'); 

const JSConfig = {
  test: /\.js$/i,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
}

module.exports = {
  entry: './public/index.js',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [JSConfig]
  }
};