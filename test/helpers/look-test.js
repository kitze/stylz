import {expect} from 'chai';
import * as look from '../../src/mixins/look';

describe('look', function () {
  describe('bottomInsideBorder', function () {
    it('should add an inside border of 1px', function () {

      const result = {
        boxShadow: `inset 0px -10px 0px red`
      };

      expect(look.bottomInsideBorder(10, 'red')).to.eql(result);

    });
  });

  describe('circle', function () {
    it('should make the element look as a circle', function () {

      const size = 15;

      const result = {
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        lineHeight: "15px",
        borderRadius: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      };

      const result2 = {
        borderRadius: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      };

      expect(look.circle(15)).to.eql(result);
      expect(look.circle()).to.eql(result2);

    });
  });

  describe('customLink', function () {
    it('should make the element look as a link', function () {

      const result = {
        color: 'black',
        cursor: 'pointer',
        paddingBottom: 3,
        borderBottom: `1px solid rgba(0,0,0,0)`,
        ':hover': {
          borderBottom: `1px solid black`
        }
      };

      const result2 = {
        color: 'red',
        cursor: 'pointer',
        paddingBottom: 3,
        borderBottom: `1px solid rgba(0,0,0,0)`
      };

      expect(look.customLink('black', true)).to.eql(result);
      expect(look.customLink('red')).to.eql(result2);

    });
  });

  describe('border', function () {
    it('should add a solid border', function () {

      const result = {
        border: '1px solid red'
      };

      const result2 = {
        border: '3px solid green'
      };

      expect(look.border('red')).to.eql(result);
      expect(look.border('green', 3)).to.eql(result2);
    });
  });

  describe('show', function () {
    it('should show or hide an element depending on the value', function () {
      expect(look.show(true)).to.eql({display: 'inline-block'});
      expect(look.show(false)).to.eql({display: 'none'});
      expect(look.show()).to.eql({display: 'none'});
    });
  });

});