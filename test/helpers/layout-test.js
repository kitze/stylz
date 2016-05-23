import {expect} from 'chai';
import * as layout from '../../src/mixins/layout';

describe('layout', function () {
  describe('flexGrid', function () {
    it('returns an object with a flex property and a flex basis of 100 divided by the number of columns', function () {

      const result1 = {
        flex: `0 0 25%`,
      };

      const result2 = {
        flex: `0 0 100%`
      };

      expect(layout.flexGrid(4)).to.eql(result1);
      expect(layout.flexGrid()).to.eql(result2);
    });
  });

  describe('flexSize', function () {
    it('should add flexBasis and maxWidth to the element, depending on the number parameter', function () {

      const result1 = {
        flexBasis: '25%',
        maxWidth: '25%'
      };

      const result2 = {
        flexBasis: '100%',
        maxWidth: '100%'
      };

      expect(layout.flexSize(4)).to.eql(result1);
      expect(layout.flexSize()).to.eql(result2);
    });
  });
});