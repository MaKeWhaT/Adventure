import { IColor } from "./types";

export default class Color {
  hue: number;
  saturation: number;
  lightness: number;
  constructor({ hue, saturation = 100, lightness = 50 }: IColor) {
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
  }
  toRGB(): [number, number, number] {
    const { hue, saturation, lightness } = this;
    let red;
    let green;
    let blue;
    if (saturation === 0) {
      red = green = blue = lightness;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q =
        lightness < 0.5
          ? lightness * (1 + saturation)
          : lightness + saturation - lightness * saturation;
      const p = 2 * lightness - q;
      red = Math.round(hue2rgb(p, q, hue + 1 / 3) * 255);
      green = Math.round(hue2rgb(p, q, hue) * 255);
      blue = Math.round(hue2rgb(p, q, hue - 1 / 3) * 255);
    }
    return [red, green, blue];
  }
  toHEX() {
    const [red, green, blue] = this.toRGB();
    const rgb2hex = (n: number) => (256 + n).toString(16).substring(-2);
    return `${rgb2hex(red)}${rgb2hex(green)}${rgb2hex(blue)}`;
  }
  toHSL() {
    const { hue, saturation, lightness } = this;
    return [hue, saturation, lightness];
  }
  toCSSHSLString() {
    const { hue, saturation, lightness } = this;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  toCSSHEXString() {
    return `#${this.toHEX()}`;
  }
  toCSSRGBString() {
    const [red, green, blue] = this.toRGB();
    return `rgb(${red}, ${green}, ${blue})`;
  }
}
