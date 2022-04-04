import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

export interface IRadio
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /**
   * 라디오 배열 목록에서 해당 아이템의 인덱스
   */
  index: number;
  /**
   * 라디오가 갖는 선택 값
   */
  value: string;
  /**
   * 부모 컴포넌트에 의해 제어되는 라디오 인풋 선택 상태
   */
  readonly checked: boolean;
  /**
   * 라디오가 갖는 선택 값을 표현하는 텍스트
   */
  label?: string;
  /**
   * 라디오 선택이 변화하는 경우 핸들러
   */
  onChange?: RadioChangeEventHandler;
  /**
   * 라디오 선택 값을 표현하는 리액트 노드
   */
  children?: ReactNode;
  /**
   * 라디오를 감싸는 라벨 엘리먼트 스타일 오버라이드
   */
  labelClasses?: string;
  /**
   * 라디오 외부 원형 박스 엘리먼트 스타일 오버라이드
   */
  radioOuterClasses?: string;
  /**
   * 라디오 내부 원형 박스 엘리먼트 스타일 오버라이드
   */
  radioInnerClasses?: string;
}

type RadioChangeEventHandler = ({
  event,
  index,
}: {
  event: ChangeEvent<HTMLInputElement>;
  index: number;
}) => void;
