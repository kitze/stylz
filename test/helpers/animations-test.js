import {expect} from 'chai';
import * as animations from '../../src/mixins/animations';

describe('animations', function () {
  describe('animate', function () {
    it('should return an object with transition property', function () {

      const emptyResult = {
        transition: '250ms all linear'
      };

      const withProperties = {
        transition: '500ms opacity ease-in'
      };

      expect(animations.animate()).to.eql(emptyResult);
      expect(animations.animate(500, 'opacity', 'ease-in')).to.eql(withProperties);
    });
  });
});