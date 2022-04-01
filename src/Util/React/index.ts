import { createElement } from "react";

export const getReactElementByTagName = ({
  tagName,
}: {
  tagName: keyof HTMLElementTagNameMap;
}) => {
  return createElement(tagName);
};
