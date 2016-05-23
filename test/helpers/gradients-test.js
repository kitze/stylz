import {expect} from 'chai';
import colors from '../../src/colors';
import * as gradients from '../../src/mixins/gradients';

describe('gradients', function () {
  describe('topToBottom', function () {
    it('should generate a top to bottom gradient', function () {
      const generatedGradient = gradients.topToBottom(colors.black, colors.white);
      const result = {background: 'linear-gradient(to bottom, #000000, #ffffff)'};
      expect(generatedGradient).to.deep.eql(result);
    });
  });
});