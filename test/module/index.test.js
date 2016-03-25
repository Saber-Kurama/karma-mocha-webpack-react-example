/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/25.
 */
import People from '../../src/module/index';
describe("test People", () => {
  it('create Peopel', () => {
    let saber = new People();
    saber.should.be.an.instanceof(Object);
  })
});