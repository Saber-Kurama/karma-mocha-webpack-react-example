/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/24.
 */
/*
 * 路径的转换
 */
import path from 'path';
import mapObj from 'map-obj';
import dirs from './dirs';

const resolve = path.resolve;
// 项目根路径
const base = [resolve(__dirname, '..')];
const root = (...args) => resolve.apply(resolve, [...base, ...args]);
const entries = mapObj(dirs, (k, v) => [k, root.bind(null, v)]);

export default { root, ...entries };