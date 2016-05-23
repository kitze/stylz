import {randomColor} from './mixins/color';

export class DebugColors {
  constructor(showDebugLines = false) {
    this.showDebugLines = showDebugLines;
    this.debuggingColors = [];
  }

  color(color = randomColor(), borderWidth = 1, background = false) {

    if (this.showDebugLines === false) {
      return {}
    }

    this.debuggingColors.push(color);

    return (background === undefined || background === false) ? {
      border: `${borderWidth}px solid ${color}`,
    } : {
      backgroundColor: color,
      opacity: background === true ? 1 : background
    }

  }

}