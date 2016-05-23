import {expect} from 'chai';
import {DebugColors} from '../../src/debug';

describe('debug', function () {
  describe('#width', () => {

    it('should test the class when debug is false', () => {
      const debugColors = new DebugColors(false);
      const tetst1 = debugColors.color();

      expect(debugColors.debuggingColors).to.have.length(0);
      expect(debugColors.showDebugLines).to.eql(false);
      expect(tetst1).to.deep.eql({});
    });

    it('should test the class without a value in constructor', () => {
      const debugColors = new DebugColors();
      expect(debugColors.showDebugLines).to.eql(false);
    });

    it('should test the class when debug is true', () => {
      const debugColors = new DebugColors(true);
      const test1 = debugColors.color();
      const splitted = test1.border.split(' ');

      expect(debugColors.showDebugLines).to.eql(true);
      expect(debugColors.debuggingColors).to.have.length(1);
      expect(test1).to.exist;
      expect(splitted[0]).to.eql('1px');
      expect(splitted[1]).to.eql('solid');
      expect(splitted[2][0]).to.eql('#');
      expect(splitted[2]).to.have.length(7);
    });

    it('should use a specific color and border width', () => {
      const debugColors = new DebugColors(true);
      const test1 = debugColors.color('red', 5);
      const result1 = {border: '5px solid red'};

      expect(test1).to.eql(result1);
    });

    it('should use background color and border width', () => {
      const debugColors = new DebugColors(true);
      const test1 = debugColors.color('red', 3, true);

      const result1 = {
        backgroundColor: 'red',
        opacity: 1
      };

      expect(test1).to.eql(result1);
    });

    it('should change the background opacity with the third parameter', () => {
      const debugColors = new DebugColors(true);
      const test1 = debugColors.color('green', 3, 0.5);

      const result1 = {
        backgroundColor: 'green',
        opacity: 0.5
      };

      expect(test1).to.eql(result1);
    });

  });
});
