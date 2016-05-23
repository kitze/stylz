import {expect} from 'chai';
import * as color from '../../src/mixins/color';

describe('color', function () {
  describe('randomColor', function () {
    it('should return a random color', function () {
      const randomColor = color.randomColor();
      expect(randomColor).to.have.length(7);
      expect(randomColor[0]).to.eql('#');
    });
  });
  describe('darken', function () {
    it('should darken a color by an amount', function () {
      const randomColor = '#057eb6';
      const darkened = color.darken(randomColor, 0.5);
      expect(darkened).to.eql('#05638F');
    });
  });
  describe('opacify', function () {
    it('should opacify a color by an amount', function () {
      const randomColor = '#057eb6';
      const opacified = color.opacify(randomColor, 0.5);
      expect(opacified).to.eql('rgba(5, 126, 182, 0.5)');
    });
  });
});