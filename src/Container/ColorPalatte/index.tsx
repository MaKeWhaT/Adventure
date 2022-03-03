import {
  red,
  orange,
  yellow,
  paleGreen,
  green,
  deepGreen,
  skyBlue,
  blue,
  purple,
  pink,
  magenta,
} from "@/Components/Color";
import { useEffect, useState } from "react";

export default function ColorPalatte() {
  const [hslColorSquare, setColorSquare] = useState<string[][][]>([]);
  useEffect(() => {
    setColorSquare([
      red.getCSSHSLColorMatrix(),
      orange.getCSSHSLColorMatrix(),
      yellow.getCSSHSLColorMatrix(),
      paleGreen.getCSSHSLColorMatrix(),
      green.getCSSHSLColorMatrix(),
      deepGreen.getCSSHSLColorMatrix(),
      skyBlue.getCSSHSLColorMatrix(),
      blue.getCSSHSLColorMatrix(),
      purple.getCSSHSLColorMatrix(),
      pink.getCSSHSLColorMatrix(),
      magenta.getCSSHSLColorMatrix(),
    ]);
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      {hslColorSquare.map((hslColorMatrix, idx) => {
        return (
          <div key={idx} style={{ display: "flex" }}>
            {hslColorMatrix.map((hslColorMatrixRow, idx2) => (
              <div key={idx2} style={{ marginRight: "5px" }}>
                {hslColorMatrixRow.map((hslColor) => (
                  <div
                    key={hslColor}
                    style={{
                      backgroundColor: hslColor,
                      width: "30px",
                      height: "30px",
                      marginBottom: "5px",
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
