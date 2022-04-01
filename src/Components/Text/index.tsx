import { IText } from "./types";
import { useMemo } from "react";
export default function Text({
  className,
  tag: Tag = "span",
  size = 16,
  weight = 500,
  content,
  children,
  ...props
}: IText) {
  const dynamicStyleValues = useMemo(
    () => ({
      fontSize: `${size}px`,
      fontWeight: weight,
    }),
    [size, weight],
  );
  return (
    <Tag style={dynamicStyleValues} className={className} {...props}>
      {content ?? children}
    </Tag>
  );
}
