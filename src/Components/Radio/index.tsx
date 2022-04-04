import { ChangeEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import cn from "classnames";
import { IRadio } from "./types";

export default function Radio({
  index,
  value,
  label,
  checked,
  disabled = false,
  onChange,
  children,
  labelClasses,
  radioOuterClasses,
  radioInnerClasses,
  ...props
}: IRadio) {
  const onRadioChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.({ event, index });
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
        className="hidden"
        type="radio"
        checked={checked}
        value={value}
        onChange={onRadioChange}
        {...props}
      />
      <span
        className={twMerge(
          cn(
            "relative mr-[4px] h-[16px] w-[16px] rounded-[50%] border border-solid border-gray-300 bg-white",
            { "border-blue-600": checked },
            { "group-hover:border-blue-600": !disabled },
            radioOuterClasses,
          ),
        )}
      >
        <span
          className={twMerge(
            cn(
              "absolute top-[50%] left-[50%] h-[10px] w-[10px] translate-x-[-50%] translate-y-[-50%] rounded-[50%] bg-white",
              { "bg-blue-600": checked },
              radioInnerClasses,
            ),
          )}
        ></span>
      </span>
      {children ?? label ?? value}
    </label>
  );
}
