import Switch from "@/Components/Switch";
import { ISwitchProps } from "@/Components/Switch/types";
import { useState } from "react";

export default function Index() {
  const [checked, setChecked] = useState(false);
  const handleSwitch = () => {
    setChecked(!checked);
  };
  const showCases: ISwitchProps[] = [
    {
      checked,
      size: "small",
      shape: "rect",
      onTrackColor: "#ff5252",
      onSwitch: handleSwitch,
    },
    {
      checked,
      size: "small",
      shape: "rounded",
      onTrackColor: "#52ff52",
      onSwitch: handleSwitch,
    },
    {
      checked,
      size: "small",
      shape: "pill",
      onTrackColor: "#5252ff",
      onSwitch: handleSwitch,
    },
    {
      checked,
      size: "normal",
      shape: "rect",
      onTrackColor: "#ff5252",
      onSwitch: handleSwitch,
    },
    {
      checked,
      size: "normal",
      shape: "rounded",
      onTrackColor: "#52ff52",
      onSwitch: handleSwitch,
    },
    {
      checked,
      size: "normal",
      shape: "pill",
      onTrackColor: "#5252ff",
      onSwitch: handleSwitch,
    },
    {
      checked,
      size: "medium",
      shape: "rect",
      onTrackColor: "#ff5252",
      onSwitch: handleSwitch,
    },
    {
      checked,
      size: "medium",
      shape: "rounded",
      onTrackColor: "#52ff52",
      onSwitch: handleSwitch,
    },
    {
      checked,
      size: "medium",
      shape: "pill",
      onTrackColor: "#5252ff",
      onSwitch: handleSwitch,
    },
  ];
  return (
    <div>
      {showCases.map(
        ({ checked, size, shape, onTrackColor, onSwitch }, index) => (
          <div key={index}>
            <Switch
              checked={checked}
              size={size}
              shape={shape}
              onTrackColor={onTrackColor}
              onSwitch={onSwitch}
            />
          </div>
        ),
      )}
    </div>
  );
}
