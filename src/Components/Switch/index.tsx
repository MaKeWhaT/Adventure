import { useEffect, useMemo } from "react";
import classNames from "classnames";
import { ISwitchProps } from "./types";
import "./index.scss";
export default function Switch({
  checked,
  shape = "pill",
  size = "normal",
  loading = false,
  onTrackColor = "rgb(0, 141, 255)",
  offTrackColor = "rgba(0, 0, 0, 0.25)",
  onBallColor = "rgb(255, 255, 255)",
  offBallColor = "rgb(255, 255, 255)",
  onSwitch = () => {},
}: ISwitchProps) {
  const computedTrackStyles = useMemo(
    () => ({
      backgroundColor: checked ? onTrackColor : offTrackColor,
    }),
    [checked, onTrackColor, offTrackColor],
  );
  const computedBallStyles = useMemo(
    () => ({
      backgroundColor: checked ? onBallColor : offBallColor,
    }),
    [checked, onBallColor, offBallColor],
  );
  return (
    <button
      style={computedTrackStyles}
      className={classNames([
        "switch",
        `switch--shape-${shape}`,
        `switch--size-${size}`,
      ])}
      onClick={onSwitch}
      data-testid={"switch-track"}
    >
      <span
        style={computedBallStyles}
        className={classNames([
          "switch__ball",
          `switch__ball--status-${checked ? "checked" : "unchecked"}-${size}`,
          `switch__ball--shape-${shape}`,
          `switch__ball--size-${size}`,
        ])}
        data-testid={"switch-ball"}
      ></span>
    </button>
  );
}
