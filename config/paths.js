/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/24.
 */
import mapObj from 'map-obj';
import resolve from './resolve';

const rootSiblings = mapObj(resolve, (k, v) => [k, v('')]);
export default {
    ...rootSiblings, // root, (bin, src, dist)(dirs 中的)
    //
    //public: resolve.dist('public'),
    //
    //scripts: resolve.src('scripts'),
    //styles: resolve.src('styles'),
    //templates: resolve.src('templates'),
    //
    //// 资产的路径
    //assets: {
    //  root: resolve.src('assets'),
    //  fonts: resolve.src('assets/fonts'),
    //  icons: resolve.src('assets/icons'),
    //  images: resolve.src('assets/images')
    //}
}
