import {
  ICountDownTimerProps,
  ICountDownTimerDisplayItemProps,
  ICountDownTimerDisplayItemDividerProps,
} from "./types";
import "./index.scss";
import { useState, useEffect, useLayoutEffect, useCallback } from "react";

const DAY_TO_SEC = 86400;
const HOUR_TO_SEC = 3600;
const MINUTE_TO_SEC = 60;
let timerId: ReturnType<typeof setTimeout> | undefined = undefined;

export default function CountDownTimer({
  title,
  countTime,
  paused = false,
  repeat = false,
  autoStart = true,
  showTimeTag = true,
  onCountDownStart,
  onCountDown,
  onCountDownEnd,
}: ICountDownTimerProps) {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const refineTime = useCallback((time: number) => {
    const refinedTimes = [DAY_TO_SEC, HOUR_TO_SEC, MINUTE_TO_SEC].reduce(
      (acc, timeSize) => {
        const refinedTime = Math.floor(time / timeSize);
        acc.push(refinedTime);
        time -= refinedTime * timeSize;
        return acc;
      },
      [] as number[],
    );
    setDay(refinedTimes[0]);
    setHour(refinedTimes[1]);
    setMinute(refinedTimes[2]);
    setSecond(time);
  }, []);

  const countDownTime = useCallback(
    (currentTime: number) => {
      currentTime -= 1;
      refineTime(currentTime);

      if (currentTime > 0) {
        onCountDown?.();
        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(countDownTime, 1000, currentTime);
        return;
      }

      if (currentTime === 0) {
        onCountDownEnd?.();
        if (timerId) {
          clearTimeout(timerId);
        }
        if (repeat) {
          startCountDownTime();
        }
        return;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [repeat, onCountDown, onCountDownEnd],
  );

  const startCountDownTime = useCallback(() => {
    onCountDownStart?.();
    timerId = setTimeout(countDownTime, 1000, countTime);
  }, [countTime, onCountDownStart, countDownTime]);

  useLayoutEffect(() => {
    refineTime(countTime);
  }, [countTime, refineTime]);

  useEffect(() => {
    if (autoStart) {
      startCountDownTime();
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [
    autoStart,
    repeat,
    countTime,
    onCountDownStart,
    onCountDown,
    onCountDownEnd,
    startCountDownTime,
  ]);

  return (
    <article className="countdown-timer">
      {title && (
        <header className="countdown-timer__title">
          <h3 title={title} className="countdown-timer__title__text">
            {title}
          </h3>
        </header>
      )}
      <div className="countdown-timer__display">
        <CountDownTimerDisplayItem
          value={day}
          timeTag={"Days"}
          showTimeTag={showTimeTag}
        />
        <CountDownTimerDisplayItemDivider />
        <CountDownTimerDisplayItem
          value={hour}
          timeTag={"Hours"}
          showTimeTag={showTimeTag}
        />
        <CountDownTimerDisplayItemDivider />
        <CountDownTimerDisplayItem
          value={minute}
          timeTag={"Min"}
          showTimeTag={showTimeTag}
        />
        <CountDownTimerDisplayItemDivider />
        <CountDownTimerDisplayItem
          value={second}
          timeTag={"Sec"}
          showTimeTag={showTimeTag}
        />
      </div>
    </article>
  );
}

function CountDownTimerDisplayItem({
  value,
  timeTag,
  showTimeTag,
}: ICountDownTimerDisplayItemProps) {
  return (
    <div className="countdown-timer__display__item">
      <span className="countdown-timer__display__item__number">
        {value < 10 ? `0${value}` : value}
      </span>
      {showTimeTag && (
        <span className="countdown-timer__display__item__tag">{timeTag}</span>
      )}
    </div>
  );
}

function CountDownTimerDisplayItemDivider({
  delimeter = ":",
}: ICountDownTimerDisplayItemDividerProps) {
  return (
    <div className="countdown-timer__display__item-divider">
      <span className="countdown-timer__display__item-divider__delimeter">
        {delimeter}
      </span>
    </div>
  );
}
