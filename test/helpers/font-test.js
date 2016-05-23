import {expect} from 'chai';
import * as fonts from '../../src/mixins/fonts';

describe('fonts', function () {
  describe('fontSizeHeight', function () {
    it('should return an object with fontSize and lineHeight properties with the same size', function () {

      const result = fonts.sizeHeight(15);

      expect(result).to.eql({
        fontSize: 15,
        lineHeight: "15px"
      });

    });
  });
  describe('sizeWeightHeight', function () {
    it('should return an object with font-size, font-weight, and line-height', function () {

      const test1 = fonts.sizeWeightHeight(15, 100, 18);
      const test2 = fonts.sizeWeightHeight(15);

      const result1 = {
        fontSize: 15,
        fontWeight: 100,
        lineHeight: "18px"
      };

      const result2 = {
        fontSize: 15,
        fontWeight: 300,
        lineHeight: "15px"
      };

      expect(test1).to.eql(result1);
      expect(test2).to.eql(result2);

    });
  });
});