type fontStyle = "normal" | "italic" | "oblique";
type fontFamily = "Noto Sans KR";
type fontWeight = 300 | 400 | 500 | 600 | 700 | 800;

interface Font {
  /** 폰트 색상 */
  color?: string;
  /** 폰트 기울기 */
  fontStyle?: fontStyle;
  /** 폰트 종류 */
  fontFamily?: fontFamily;
  /** 폰트 두께 */
  fontWeight?: fontWeight;
  /** 행간 */
  lineHeight?: number;
}

export interface ITextTigger {
  /** 태그 종류: span p h1 h2 h3 h4 h5 h6*/
  customTag?: string;
  /** 클래스 이름 */
  className?: string;
  /** 태그가 포함하는 내용 */
  children?: string;
  /** font 속성 */
  styleFont?: Font;
}
