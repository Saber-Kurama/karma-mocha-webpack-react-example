/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/24.
 */
'use strict';

require('babel-core/register');
require('babel-polyfill');

var karmaConfig = require('./karma');

module.exports = function(config) {
  config.set(karmaConfig)
};