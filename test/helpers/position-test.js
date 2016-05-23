import {expect} from 'chai';
import * as position from '../../src/mixins/position';

describe('position', function () {
  describe('absolute', function () {
    it('should return an object with properties: position absolute and top,right, bottom, left, depending of the value', function () {

      const result = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };

      const result2 = {
        position: 'absolute',
        top: 10,
        right: 0,
        bottom: 0,
        left: 0
      };

      const result3 = {
        position: 'absolute',
        top: 1,
        right: 2,
        bottom: 0,
        left: 0
      };

      const result4 = {
        position: 'absolute',
        top: 1,
        right: 2,
        bottom: 3,
        left: 0
      };

      const result5 = {
        position: 'absolute',
        top: 1,
        right: 2,
        bottom: 3,
        left: 4
      };

      expect(position.absolute()).to.eql(result);
      expect(position.absolute(10)).to.eql(result2);
      expect(position.absolute(1, 2)).to.eql(result3);
      expect(position.absolute(1, 2, 3, 4)).to.eql(result5);

    });
  });
  describe('cornerOffset', function () {
    it('should Returns an object with position properties depending on the side that\'s provided', function () {
      const result = {
        top: 0,
        left: 0
      };

      const result2 = {
        top: 10,
        right: 10
      };

      const result3 = {
        bottom: 0,
        left: 0
      };

      const result4 = {
        bottom: 0,
        right: 0
      };

      expect(position.cornerOffset()).to.eql(result);
      expect(position.cornerOffset(10, 2)).to.eql(result2);
      expect(position.cornerOffset(undefined, 3)).to.eql(result3);
      expect(position.cornerOffset(0, 4)).to.eql(result4);
    });
  });
});