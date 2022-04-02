import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

export interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * 초기 체크박스 상태값
   */
  defaultChecked?: boolean;
  /**
   * 부모 컴포넌트에서 전달하는 onChange 핸들러 함수
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * 체크박스 라벨 텍스트
   */
  children?: ReactNode;
  /**
   * 체크박스 라벨 스타일 오버라이드
   */
  labelClasses?: string;
  /**
   * 체크박스 스타일 오버라이드
   */
  checkBoxClasses?: string;
  /**
   * 체크박스 내부 체크표시 스타일 오버라이드
   */
  checkClasses?: string;
}
