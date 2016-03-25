/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/25.
 */
import fs from 'fs';

import resolve from './resolve';
import paths from './paths';
// import dependencies from './dependencies';
const scripts = fs.readdirSync(paths.src)
        .filter((entry) => fs.statSync(resolve.src('', entry)).isDirectory())
.reduce((acc, dir) => ((acc[dir] = resolve.src('', dir)) && acc), {});

export default {
  //styles: paths.styles,
  //templates: paths.templates,
  //
  //fonts: paths.assets.fonts,
  //icons: paths.assets.icons,
  //images: paths.assets.images,
  //
  //'sinon': 'sinon/pkg/sinon',

    ...scripts,
// ...dependencies
}