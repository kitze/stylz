import {expect} from 'chai';
import * as images from '../../src/mixins/images';

describe('images', function () {
  describe('backgroundImg', function () {
    it('should return an object with a backgroundImage and backgroundSize property', function () {

      const result = {
        backgroundImage: `url(\"img.jpg\")`,
        backgroundSize: 'cover'
      };

      const result2 = {
        backgroundImage: `url(\"img.jpg\")`
      };

      expect(images.backgroundImg('img.jpg', true)).to.eql(result);
      expect(images.backgroundImg('img.jpg')).to.eql(result2);
    });
  });
});