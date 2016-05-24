import {expect} from 'chai';
import * as fonts from '../../src/mixins/fonts';

describe('fonts', function () {
  describe('fontSizeHeight', function () {
    it('should return an object with fontSize and lineHeight properties with the same size', function () {

      const test1 = fonts.fontSizeHeight(15);
      const test2 = fonts.fontSizeHeight(15, 20);

      const result1 = {
        fontSize: 15,
        lineHeight: "15px"
      };

      const result2 = {
        fontSize: 15,
        lineHeight: "20px"
      };

      expect(test1).to.eql(result1);
      expect(test2).to.eql(result2);

    });
  });
  describe('sizeWeightHeight', function () {
    it('should return an object with font-size, font-weight, and line-height', function () {

      const test1 = fonts.fontStyle(15, 100, 18);
      const test2 = fonts.fontStyle(15);

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