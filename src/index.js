import * as animations from './mixins/animations';
import * as color from './mixins/color';
import * as fonts from './mixins/fonts';
import * as gradients from './mixins/gradients';
import * as images from './mixins/images';
import * as layout from './mixins/layout';
import * as look from './mixins/look';
import * as position from './mixins/position';
import * as pseudo from './mixins/pseudo';
import * as size from './mixins/size';
import * as placeholders from './placeholders';

var allMixins = {
  ...animations,
  ...color,
  ...fonts,
  ...gradients,
  ...images,
  ...layout,
  ...look,
  ...position,
  ...pseudo,
  ...size,
  ...placeholders
};

export default allMixins;