import { ICheckBox } from "./types";
import { useState, ChangeEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import cn from "classnames";

export default function CheckBox({
  defaultChecked = false,
  disabled = false,
  onChange,
  children,
  labelClasses,
  checkBoxClasses,
  checkClasses,
  ...props
}: ICheckBox) {
  const [checked, setChecked] = useState(defaultChecked);
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (disabled) return;
    setChecked(event.target.checked);
    onChange?.(event);
  };
  return (
    <label
      className={twMerge(
        cn(
          "group flex cursor-pointer items-center",
          {
            "cursor-not-allowed opacity-50": disabled,
          },
          labelClasses,
        ),
      )}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onInputChange}
        {...props}
      />
      <span
        className={twMerge(
          cn(
            "relative mr-[4px] h-[16px] w-[16px] rounded-[2px] border border-solid border-gray-300 bg-white ",
            { "border-blue-600 bg-blue-500": checked },
            { "group-hover:border-blue-600": !disabled },
            checkBoxClasses,
          ),
        )}
      >
        <span
          className={twMerge(
            cn(
              "absolute top-[50%] left-[50%] h-[8px] w-[6px] translate-x-[-50%] translate-y-[-65%] rotate-45 border-b-2 border-r-2 border-solid border-white",
              { "border-0": !checked },
              checkClasses,
            ),
          )}
        ></span>
      </span>
      {children}
    </label>
  );
}
