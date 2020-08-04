const path = require('path');
process.noDeprecation = true;
//html-webpack-plugin

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  //entry: Specifies the entry file where the bundler starts the bundling process.

  entry: './src/index.js',
  //output: Specifies the location where the bundled Javascript code is to be saved.

  output: {
    path: path.resolve('public/assets'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            loader: 'babel-loader',
            options: {
                presets: [ 'react', 'es2017', 'stage-0' ]
            },
            exclude: /node_modules/
        },

        {
            test: /\.css$/,
              use: [
                  "style-loader", 
                 "css-loader",
                 ]
        },
        
        {
          test: /\.(scss|sass)$/,
          use: [
            "style-loader", 
           "css-loader",
           "sass-loader"
           ]
      },
        {
    test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
  },
  {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
  }
    ]
},
// optimization: {
//     splitChunks: {
//       cacheGroups: {
//         vendors: {
//           reuseExistingChunk: true
//         }
//       }
//     }
//   },
externals: {
    config: JSON.stringify(require('config'))
},
resolve: {
    extensions: [".js", ".jsx"],
    alias: {
        'react$': 'react/cjs/react.production.min.js',
        'react-dom$': 'react-dom/cjs/react-dom.production.min.js',
        Source: __dirname + '/src'

    }
  },
  plugins: [HtmlWebpackPluginConfig]
}
// module.exports = {
//   context: path.join(__dirname, 'src'),
//   entry: {
//       bundle: './index.js',
//       vendors: [
//           'babel-polyfill',
//           'react',
//           'react-dom'
//   ]
//   },
//   output: {
//       filename: '[name].js',
//       publicPath: '/assets/',
//       path: path.join(__dirname, 'public', 'assets'),
//   },
//   module: {
//       rules: [
//           {
//               test: /\.(js|jsx)$/,
//               enforce: 'pre',
//               loader: 'babel-loader',
//               options: {
//                   presets: [ 'react', 'es2017', 'stage-0' ]
//               },
//               exclude: /node_modules/
//           },
//           {
//               test: /\.css$/,
//                 use: [
//                     "style-loader", 
//                    "css-loader"
//                    ]
//           },
//           {
//       test: /\.less$/,
//               use: [{
//                   loader: "style-loader" // creates style nodes from JS strings
//               }, {
//                   loader: "css-loader" // translates CSS into CommonJS
//               }, {
//                   loader: "less-loader" // compiles Less to CSS
//               }]
//     },
//     {
//               test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//               loader: 'url-loader',
//               options: {
//                   limit: 10000
//               }
//     }
//       ]
//   },

//   // optimization: {
//   //     splitChunks: {
//   //       cacheGroups: {
//   //         vendors: {
//   //           reuseExistingChunk: true
//   //         }
//   //       }
//   //     }
//   //   },

//   externals: {
//       config: JSON.stringify(require('config'))
//   },

//   plugins: [HtmlWebpackPluginConfig],

//   resolve: {
//        extensions: [".js", ".jsx"],
//       alias: {
//           'react$': 'react/cjs/react.production.min.js',
//           'react-dom$': 'react-dom/cjs/react-dom.production.min.js',
//           Source: __dirname + '/src'

//       }
//   }
// };