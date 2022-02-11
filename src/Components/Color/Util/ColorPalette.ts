import Color from "./Color";
import { IColor } from "./types";
export default class ColorPalette extends Color {
  constructor({ hue, saturation, lightness }: IColor) {
    super({ hue, saturation, lightness });
  }
  getColorMatrix() {
    const { hue } = this;
    const colorMatrix: Color[][] = [];
    for (let s = 50; s <= 100; s += 10) {
      const colorMatrixRow: Color[] = [];
      for (let l = 90; l >= 20; l -= 10) {
        colorMatrixRow.push(new Color({ hue, saturation: s, lightness: l }));
      }
      colorMatrix.push(colorMatrixRow);
    }
    return colorMatrix;
  }
  getCSSHSLColorMatrix() {
    return this.getColorMatrix().map((colorMatrixRow) =>
      colorMatrixRow.map((color) => color.toCSSHSLString()),
    );
  }
  getCSSHEXColorMatrix() {
    return this.getColorMatrix().map((colorMatrixRow) =>
      colorMatrixRow.map((color) => color.toCSSHEXString()),
    );
  }
  getCSSRGBColorMatrix() {
    return this.getColorMatrix().map((colorMatrixRow) =>
      colorMatrixRow.map((color) => color.toCSSRGBString()),
    );
  }
}
