import {expect} from 'chai';
import * as size from '../../src/mixins/size';

describe('size', function () {
  describe('size', function () {
    it('should add width and height to an element', function () {
      const result1 = {
        width: 200,
        height: 200
      };

      const result2 = {
        width: 200,
        height: 500
      };

      expect(size.size(200)).to.eql(result1);
      expect(size.size(200, 500)).to.eql(result2);
    });
  });
  describe('maxSize', function () {
    it('should add maxWidth and maxHeight to an element', function () {
      const result1 = {
        maxWidth: 200,
        maxHeight: 200
      };

      const result2 = {
        maxWidth: 200,
        maxHeight: 500
      }

      expect(size.maxSize(200)).to.eql(result1);
      expect(size.maxSize(200, 500)).to.eql(result2);
    });
  });
  describe('minSize', function () {
    it('should add minWidth and minHeight to an element', function () {
      const result1 = {
        minWidth: 200,
        minHeight: 200
      };

      const result2 = {
        minWidth: 200,
        minHeight: 500
      }

      expect(size.minSize(200)).to.eql(result1);
      expect(size.minSize(200, 500)).to.eql(result2);
    });
  });
  describe('maxHeight', function () {
    it('should add height and mixHeight to an element', function () {
      const result1 = {
        height: 200,
        maxHeight: 200
      };

      expect(size.maxHeight(200)).to.eql(result1);
    });
  });
  describe('fixedHeight', function () {
    it('should add height, minHeight and mixHeight to an element', function () {
      const result1 = {
        height: 200,
        maxHeight: 200,
        minHeight: 200
      };

      expect(size.fixedHeight(200)).to.eql(result1);
    });
  });
  describe('fixedWidth', function () {
    it('should add width, minWidth and mixWidth to an element', function () {

      const result1 = {
        width: 200,
        maxWidth: 200,
        minWidth: 200
      };

      expect(size.fixedWidth(200)).to.eql(result1);
    });
  });
  describe('fillPage', function () {
    it('should make the element take full width and height', function () {
      const result1 = {
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: '100%',
        maxHeight: '100%',
        minHeight: '100%',
        overflow: 'hidden'
      };

      expect(size.fillParent()).to.eql(result1);
    });
  });
  describe('padding.horizontal', function () {
    it('should add horizontal padding to an element', function () {
      const result1 = {
        paddingLeft: 10,
        paddingRight: 10
      };

      const result2 = {
        paddingLeft: 10,
        paddingRight: 20
      };

      expect(size.padding.horizontal(10)).to.eql(result1);
      expect(size.padding.horizontal(10, 20)).to.eql(result2);
    });
  });
  describe('padding.vertical', function () {
    it('should add vertical padding to an element', function () {
      const result1 = {
        paddingTop: 10,
        paddingBottom: 10
      };

      const result2 = {
        paddingTop: 10,
        paddingBottom: 20
      };

      expect(size.padding.vertical(10)).to.eql(result1);
      expect(size.padding.vertical(10, 20)).to.eql(result2);
    });
  });
  describe('padding.both', function () {
    it('should add padding to both sides of an element', function () {
      const result1 = {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
      };

      const result2 = {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
      };

      expect(size.padding.both(10)).to.eql(result1);
      expect(size.padding.both(10, 20)).to.eql(result2);
    });
  });

  describe('margin.horizontal', function () {
    it('should add horizontal margin to an element', function () {
      const result1 = {
        marginLeft: 10,
        marginRight: 10
      };

      const result2 = {
        marginLeft: 10,
        marginRight: 20
      };

      expect(size.margin.horizontal(10)).to.eql(result1);
      expect(size.margin.horizontal(10, 20)).to.eql(result2);
    });
  });
  describe('margin.vertical', function () {
    it('should add vertical margin to an element', function () {
      const result1 = {
        marginTop: 10,
        marginBottom: 10
      };

      const result2 = {
        marginTop: 10,
        marginBottom: 20
      };

      expect(size.margin.vertical(10)).to.eql(result1);
      expect(size.margin.vertical(10, 20)).to.eql(result2);
    });
  });
  describe('margin.both', function () {
    it('should add margin to both sides of an element', function () {
      const result1 = {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
      };

      const result2 = {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
      };

      expect(size.margin.both(10)).to.eql(result1);
      expect(size.margin.both(10, 20)).to.eql(result2);
    });
  });
});