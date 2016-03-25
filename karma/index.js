/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/24.
 */

import getCoverageOptions from './coverage';
import webpack from '../webpack.test';
import { resolve, argv } from '../config';
const testsPath = resolve.test('index.js');
const karmaConfig = {
  files: [
    './node_modules/phantomjs-polyfill/bind-polyfill.js',
    testsPath
  ],
  // 使用
  frameworks: ['mocha','chai'],
  // 使用测试结果报告者
  reporters: ['nyan'],// nyan spec
  // 预处理
  preprocessors: {
    'test/index.js': ['webpack'],
    //'src/**/*.js': ['coverage'] // 对源代码添加覆盖率打点
  },
  // 浏览器支持
  // 需要测试哪些浏览器
  browsers: ['PhantomJS'],
  // 配置浏览器自定义启动器
  //customLaunchers,
  // webpack编译相关配置
  webpack,
  // 配置webpackMiddleware
  //webpackMiddleware,
  // 安装的插件列表
  plugins: [
    'karma-webpack',
    'karma-mocha',
    'karma-chai',
    'karma-chai-as-promised',
    'karma-coverage',
    'karma-phantomjs-launcher',
    'karma-spec-reporter',
    'karma-nyan-reporter'
  ],
  // CI模式 如果设为true，karma会启动并捕获浏览器，运行测试然后退出，至于exit code 是0还是1，就要看是否所有测试都通过还是有任何测试失败。
  singleRun: !argv.watch,
  // 开启或关闭监测文件，当文件发生变化时自动执行测试
  autoWatch: true,
  // 当开启autoWatch时，karma会尝试将多个修改打包到一起运行一次测试代码，以此来减少运行次数。该配置项告诉karma在发生更改后需要等待多长时间（毫秒）再开始执行测试。
  autoWatchBatchDelay: 0,
  // karma会报告所有慢于给定时间的测试，默认情况是禁用的，因为值为0.
  reportSlowerThan: 40,

  //  并发？
  concurrency: 2,

  browserNoActivityTimeout: 30000,

  // 覆盖率报告要如何生成
  //coverageReporter
};

const coverage = getCoverageOptions(argv);
console.error(argv)
// 判断是不是要进行代码覆盖率测试
if (coverage.enabled && false) {
  const srcWildcard = resolve.src('**/*.js');

  karmaConfig.preprocessors[srcWildcard] = ['coverage'];
  karmaConfig.reporters.push('coverage');
  karmaConfig.coverageReporter = { reporters: coverage.reporters };

  karmaConfig.webpack.module.preLoaders = [
    { test: /\.jsx?$/,  loader: 'isparta' }
  ];
}

export default karmaConfig;

