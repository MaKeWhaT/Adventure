import { ReactNode, HTMLAttributes } from "react";
export interface IText extends HTMLAttributes<HTMLElement> {
  /**
   * TailWindCSS와 연계되는 클래스 목록
   */
  className?: string;
  /**
   * 생성되는 HTMLElement Tag
   */
  tag?: TextTags;
  /**
   * 텍스트 크기
   */
  size?: TextSizes;
  /**
   * 텍스트 굵기
   */
  weight?: TextWeights;
  /**
   * 프로퍼티로 전달할 텍스트
   */
  content?: string;
  /**
   * React Children으로 전달할 텍스트
   */
  children?: ReactNode;
}

type TextTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TextWeights = 100 | 300 | 350 | 400 | 500 | 700 | 900;
type TextSizes = 8 | 12 | 16 | 20 | 24 | 28 | 32;
