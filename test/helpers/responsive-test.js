import {expect} from 'chai';
import * as responsive from '../../src/mixins/responsive';

describe('responsive', function () {
  describe('helpers', function () {
    it('should check if all the helpers work fine', function () {

      const device = {
        width: 100,
        height: 200
      };

      const rotatedDevice = {
        width: 200,
        height: 100
      };

      expect(responsive.minWidth(250)).to.eql('and (min-width: 250px)');
      expect(responsive.maxWidth(250)).to.eql('and (max-width: 250px)');
      expect(responsive.minHeight(250)).to.eql('and (min-height: 250px)');
      expect(responsive.maxHeight(250)).to.eql('and (max-height: 250px)');
      expect(responsive.maxDeviceSize(device)).to.eql('and (max-width: 100px) and (max-height: 200px)');
      expect(responsive.minDeviceSize(device)).to.eql('and (min-width: 100px) and (min-height: 200px)');
      expect(responsive.maxSize(250)).to.eql('and (max-width: 250px) and (max-height: 250px)');
      expect(responsive.maxSize(250, 150)).to.eql('and (max-width: 250px) and (max-height: 150px)');
      expect(responsive.rotated(device)).to.eql(rotatedDevice);
    });
  });

  describe('helpers', function () {
    it('should check the media creator', function () {
      expect(responsive.media('and (min-width: 250px)', 'and (min-height: 250px)')).to.eql('@media all and (min-width: 250px) and (min-height: 250px)');
    });
  });

});