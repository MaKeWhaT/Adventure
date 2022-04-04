import { useState } from "react";
import { ITextTigger } from "./types";

/** font 속성
 *  font-style : normal, italic, oblique
 *  font-family
 *  font-size
 *  font-weight
 *  line-height
 *  //font-variant 소문자를 작은 대문자로 변경할 수 있는 속성. 한글에서는 쓰이지 않는다.
 */
export default function TextTigger({
  customTag = "span",
  className,
  styleFont,
  children,
}: ITextTigger) {
  const Tag = `${customTag}` as keyof JSX.IntrinsicElements;
  const textStyle = {
    color: styleFont?.color,
    fontStyle: styleFont?.fontStyle,
    fontFamily: styleFont?.fontStyle,
    fontWeight: styleFont?.fontWeight,
    lineHeight: styleFont?.lineHeight,
  };
  return (
    <Tag className={className} style={textStyle}>
      {children}
    </Tag>
  );
}
