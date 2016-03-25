/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/24.
 */
import parseArgs from './utils/parseArgs';
// 所有的路径
import paths from './paths';
// 路径转换
import resolve from './resolve';
import aliases from './aliases';
const argv = parseArgs();
export default {
  argv,
  paths,
  resolve,
  aliases
};
