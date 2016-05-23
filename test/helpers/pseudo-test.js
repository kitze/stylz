import {expect} from 'chai';
import * as pseudo from '../../src/mixins/pseudo';

describe('pseudo', function () {
  describe('hoverAndClick', function () {
    it('should return an object that makes the element interactive on click, hover, etc.', function () {

      const result1 = {
        cursor: 'pointer',
        backgroundColor: 'black',
        ':hover': {
          backgroundColor: 'red'
        },
        transition: '250ms all linear'
      };

      const result2 = {
        cursor: 'pointer',
        color: 'black',
        ':hover': {
          color: '#000000'
        }
      };

      const result3 = {
        cursor: 'pointer',
        color: '#1cdb1c',
        ':hover': {
          color: '#1CC21C'
        },
        ':active': {
          color: '#1C911C'
        }
      };

      const result4 = {
        cursor: 'pointer',
        color: 'blue',
        ':hover': {
          color: 'green'
        },
        ':active': {
          color: 'red'
        }
      }

      const result5 = {
        cursor: 'pointer',
        color: 'blue',
        ':hover': {
          color: 'green'
        },
        ':active': {
          color: 'red'
        },
        transition: '500ms all ease-in'
      }

      expect(pseudo.hoverAndClick('black', 'red', true, true)).to.eql(result1);
      expect(pseudo.hoverAndClick('black')).to.eql(result2);
      expect(pseudo.hoverAndClick('#1cdb1c', undefined, false, false, true)).to.eql(result3);
      expect(pseudo.hoverAndClick('blue', 'green', false, false, 'red')).to.eql(result4);
      expect(pseudo.hoverAndClick('blue', 'green', false, '500ms all ease-in', 'red')).to.eql(result5);
    });
  });

  describe('resetPseudoProperty', function () {
    it('should reset the backgroundColor when default, hovered and active', function () {

      const result1 = {
        cursor: 'default',
        backgroundColor: '#000000',
        ':hover': {
          backgroundColor: '#000000'
        },
        ':active': {
          backgroundColor: '#000000'
        }
      };

      const result2 = {
        cursor: 'default',
        color: '#ffffff',
        ':hover': {
          color: '#ffffff'
        },
        ':active': {
          color: '#ffffff'
        }
      };

      expect(pseudo.resetPseudoProperties()).to.eql(result1);
      expect(pseudo.resetPseudoProperties('#ffffff', 'color')).to.eql(result2);
    });
  });
});