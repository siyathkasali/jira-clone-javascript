const path = require('path');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js']
  },
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module : {
    rules: [{
      // A regex that looks at all Javascript files
      test: /\.js?$/,
      exclude : /node_modules/,
      loader: 'babel-loader',
      //this is where we define our presets
      query: {
        presets:['@babel/preset-env']
      }
    },
    { test:/\.(s*)css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
  ]
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    hot: true
  }
};