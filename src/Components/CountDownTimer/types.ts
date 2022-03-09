export interface ICountDownTimerProps {
  countTime: number;
  title?: string;
  paused?: boolean;
  repeat?: boolean;
  autoStart?: boolean;
  showTimeTag?: boolean;
  onCountDownStart?: () => void;
  onCountDown?: () => void;
  onCountDownEnd?: () => void;
}

export interface ICountDownTimerDisplayItemProps {
  value: number;
  timeTag: string;
  showTimeTag: boolean;
}

export interface ICountDownTimerDisplayItemDividerProps {
  delimeter?: string;
}
