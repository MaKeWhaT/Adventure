import { red, orange } from "@/Components/Color";
import { useEffect, useState } from "react";

export default function PlayGround() {
  const [hslColorMatrix, setColorMatrix] = useState<string[][]>([]);
  useEffect(() => {
    setColorMatrix(orange.getCSSHSLColorMatrix());
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        {hslColorMatrix.map((hslColorMatrixRow, idx) => (
          <div key={idx} style={{ marginRight: "5px" }}>
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
    </>
  );
}
