/**
 * @description Adds width and height to an element
 * @param width
 * @param height
 */
export const size = (width, height = width) => ({
  width: width,
  height: height
});

/**
 * @description Adds maxWidth and maxHeight to an element
 * @param size
 * @returns {{maxWidth: *, maxHeight: *}}
 */
export const maxSize = (width, height = width) => ({
  maxWidth: width,
  maxHeight: height
});

/**
 * @description Adds minHeight and minWidth to an element
 * @param size
 */
export const minSize = (width, height = width) => ({
  minWidth: width,
  minHeight: height
});

/**
 * @description Adds height and mixHeight to an element
 * @param height
 */
export const maxHeight = (height) => ({
  height,
  maxHeight: height
});

/**
 * @description Adds height, maxHeight and minHeight to an element
 * @param height
 */
export const fixedHeight = height => ({
  height,
  maxHeight: height,
  minHeight: height
});

/**
 * @description Adds height, maxHeight and minHeight to an element
 * @param height
 */
export const fixedWidth = width => ({
  width,
  maxWidth: width,
  minWidth: width
});

/**
 * @description Makes the element take full width and height
 */
export const fillParent = () => ({
  ...fixedHeight('100%'),
  ...fixedWidth('100%'),
  overflow: 'hidden'
});

export const padding = {
  /**
   * @description Adds horizontal padding to an element
   * @param left
   * @param right
   */
  horizontal: (left, right = left) => ({
    paddingLeft: left,
    paddingRight: right
  }),
  /**
   * @description Adds vertical padding to an element
   * @param left
   * @param right
   */
  vertical: (left, right = left) => ({
    paddingTop: left,
    paddingBottom: right
  }),
  /**
   * @description Adds padding to both sides of an element
   * @param vertical
   * @param horizontal
   */
  both: (vertical, horizontal = vertical) => ({
    paddingTop: vertical,
    paddingBottom: vertical,
    paddingLeft: horizontal,
    paddingRight: horizontal
  })
};

export const margin = {
  /**
   * @description Adds horizontal margin to an element
   * @param left
   * @param right
   */
  horizontal: (left, right = left) => ({
    marginLeft: left,
    marginRight: right
  }),
  /**
   * @description Adds vertical margin to an element
   * @param value
   */
  vertical: (top, bottom = top) => ({
    marginTop: top,
    marginBottom: bottom
  }),
  /**
   * @description Adds margin to both sides of an element
   * @param vertical
   * @param horizontal
   */
  both: (vertical, horizontal = vertical) => ({
    marginTop: vertical,
    marginBottom: vertical,
    marginLeft: horizontal,
    marginRight: horizontal
  })
};