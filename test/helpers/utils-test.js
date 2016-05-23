import {expect} from 'chai';
import * as utils from '../../src/utils';

describe('utils', function () {
  describe('isString', function () {
    it('should check if the parameter is a string', function () {
      //strings
      expect(utils.isString('kitze')).to.eql(true);
      expect(utils.isString("kitze")).to.eql(true);
      expect(utils.isString(`kitze ${123}`)).to.eql(true);
      expect(utils.isString(new String('kitze'))).to.eql(true);
      //other
      expect(utils.isString(18)).to.eql(false);
      expect(utils.isString({})).to.eql(false);
      expect(utils.isString([1, 2, 3])).to.eql(false);
    });
  });
  describe('toPx', function () {
    it('should add px at the end of an int', function () {
      expect(utils.toPx(15)).to.eql('15px');
      expect(utils.toPx('18px')).to.eql('18px');
    });
  });
  describe('toInt', function () {
    it('should convert a px string to int', function () {
      expect(utils.toInt('18px')).to.eql(18);
      expect(utils.toInt(19)).to.eql(19);
    });
  });
});