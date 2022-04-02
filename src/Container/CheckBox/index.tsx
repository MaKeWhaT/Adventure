import CheckBox from "@/Components/CheckBox";
import { ChangeEvent, useState } from "react";
import { produce } from "immer";

export default function CheckBoxContainer() {
  const [checkItems, setCheckItem] = useState([
    {
      label: "label-A",
      checked: true,
    },
    {
      label: "label-B",
      checked: false,
      disabled: true,
    },
    {
      label: "label-C",
      checked: true,
    },
    {
      label: "label-D",
      checked: false,
    },
    {
      label: "label-E",
      checked: false,
    },
    {
      label: "label-F",
      checked: false,
    },
  ]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const nextCheckItems = produce(checkItems, (draft) => {
      draft.find((item) => item.label === value)!.checked = checked;
    });
    setCheckItem(nextCheckItems);
  };

  return (
    <div>
      {checkItems.map(({ label, checked, ...props }, index) => (
        <CheckBox
          labelClasses={"mb-[4px]"}
          key={index}
          defaultChecked={checked}
          onChange={onChange}
          value={label}
          {...props}
        >
          {label}
        </CheckBox>
      ))}
    </div>
  );
}
