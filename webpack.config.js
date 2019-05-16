const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/aura.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'aura.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  devtool: 'inline-source-map'
};
