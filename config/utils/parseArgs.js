/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/24.
 */
/*
 *  解析 argument
 */
import minimist from 'minimist';

export default () => minimist(process.argv.slice(2), {
  // these switches are always treated as booleans
  boolean: [
    'test',
    'lint',
    'development',
    'staging',
    'production',
    'debug',
    'profile',
    'verbose',
    'quiet',
    'watch'
  ]
});