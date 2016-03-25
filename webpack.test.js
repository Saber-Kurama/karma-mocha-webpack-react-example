/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/24.
 */
import { resolve, aliases } from './config';
import webpack from 'webpack';
export default {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,

        loader: 'babel'
      }
    ],
    noParse: [/node_modules\/sinon\//]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    //new webpack.IgnorePlugin(/react\/lib\/ReactContext/),
    new webpack.NoErrorsPlugin()
  ],
  // 配置全局
  //externals,
  resolve: { aliases },
  devtool: 'inline-source-map',
  debug: true,
  cache: true,
}