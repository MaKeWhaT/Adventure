import React from "react";

type SwitchShapes = "rect" | "rounded" | "pill";
type SwitchSizes = "small" | "normal" | "medium";

export interface ISwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
  checked: boolean;
  shape?: SwitchShapes;
  size?: SwitchSizes;
  loading?: boolean;
  onTrackColor?: string;
  offTrackColor?: string;
  onBallColor?: string;
  offBallColor?: string;
  onSwitch?: () => void;
}
