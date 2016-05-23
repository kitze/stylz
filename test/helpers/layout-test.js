import {expect} from 'chai';
import * as layout from '../../src/mixins/layout';

describe('layout', function () {
  describe('flexGrid', function () {
    it('returns an object with a flex property and a flex basis of 100 divided by the number of columns', function () {

      const result = {
        flex: `0 0 25%`,
      };

      const result2 = {
        flex: `0 0 100%`
      };

      expect(layout.flexGrid(4)).to.eql(result);
      expect(layout.flexGrid()).to.eql(result2);
    });
  });
});