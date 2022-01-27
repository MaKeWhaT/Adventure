import { render, fireEvent, act } from "@testing-library/react";
import Switch from "..";
import { ISwitchProps } from "../types";
import { jest } from "@jest/globals";

function renderSwitch({
  checked,
  shape,
  size,
  loading,
  onTrackColor,
  offTrackColor,
  onBallColor,
  offBallColor,
  onSwitch,
}: ISwitchProps) {
  const result = render(
    <Switch
      checked={checked}
      shape={shape}
      size={size}
      loading={loading}
      onTrackColor={onTrackColor}
      offTrackColor={offTrackColor}
      onBallColor={onBallColor}
      offBallColor={offBallColor}
      onSwitch={onSwitch}
    />,
  );

  const switchTrack = () => result.getByTestId("switch-track");
  const switchBall = () => result.getByTestId("switch-ball");

  const clickSwitchTrack = () =>
    act(() => {
      fireEvent(
        switchTrack(),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        }),
      );
    });

  const clickSwitchBall = () =>
    act(() => {
      fireEvent(
        switchBall(),
        new MouseEvent("click", { bubbles: true, cancelable: true }),
      );
    });

  return {
    result,
    switchTrack,
    switchBall,
    clickSwitchTrack,
    clickSwitchBall,
  };
}

describe("[Switch 기본값 렌더링 테스트]", () => {
  describe("기본 프로퍼티값 렌더링 검증", () => {
    it(`스위치 Track 은 Button 입니다.`, () => {
      const { switchTrack } = renderSwitch({ checked: true });
      expect(switchTrack()).toBeInstanceOf(HTMLButtonElement);
    });

    it(`스위치 Ball 은 Span 입니다`, () => {
      const { switchBall } = renderSwitch({ checked: true });
      expect(switchBall()).toBeInstanceOf(HTMLSpanElement);
    });

    it(`스위치 기본 모양은 "pill" 입니다.`, () => {
      const { switchTrack, switchBall } = renderSwitch({ checked: true });
      expect(
        switchTrack().classList.contains("switch--shape-pill"),
      ).toBeTruthy();
      expect(
        switchBall().classList.contains("switch__ball--shape-pill"),
      ).toBeTruthy();
    });

    it(`스위치 기본 크기는 "normal 입니다.`, () => {
      const { switchTrack, switchBall } = renderSwitch({ checked: true });
      expect(
        switchTrack().classList.contains("switch--size-normal"),
      ).toBeTruthy();
      expect(
        switchBall().classList.contains("switch__ball--size-normal"),
      ).toBeTruthy();
    });

    it(`스위치 선택상태가 "true" 인 경우 초기 상태는 "checked" 입니다.`, () => {
      const { switchBall } = renderSwitch({ checked: true });
      expect(
        switchBall().classList.contains("switch__ball--status-checked-normal"),
      ).toBeTruthy();
    });

    it(`스위치 선택상태가 "false" 인 경우 초기 상태는 "unchecked" 입니다.`, () => {
      const { switchBall } = renderSwitch({ checked: false });
      expect(
        switchBall().classList.contains(
          "switch__ball--status-unchecked-normal",
        ),
      ).toBeTruthy();
    });

    it(`스위치 선택상태가 "true" 인 경우 초기 트랙 색상은 "rgb(0, 141, 255)" 입니다.`, () => {
      const { switchTrack } = renderSwitch({ checked: true });
      expect(switchTrack().style.backgroundColor).toBe("rgb(0, 141, 255)");
    });

    it(`스위치 선택상태가 "false" 인 경우 초기 트랙 색상은 "rgba(0, 0, 0, 0.25)" 입니다.`, () => {
      const { switchTrack } = renderSwitch({ checked: false });
      expect(switchTrack().style.backgroundColor).toBe("rgba(0, 0, 0, 0.25)");
    });

    it(`스위치 선택상태가 "true" 인 경우 초기 트랙볼 색상은 "rgb(255, 255, 255)" 입니다.`, () => {
      const { switchBall } = renderSwitch({ checked: true });
      expect(switchBall().style.backgroundColor).toBe("rgb(255, 255, 255)");
    });

    it(`스위치 선택상태가 "true" 인 경우 초기 트랙볼 색상은 "rgb(255, 255, 255)" 입니다.`, () => {
      const { switchBall } = renderSwitch({ checked: false });
      expect(switchBall().style.backgroundColor).toBe("rgb(255, 255, 255)");
    });
  });

  describe("동적 프로퍼티값 렌더링 검증", () => {
    const testShapeCases: ISwitchProps[] = [
      { checked: true, shape: "rect" },
      { checked: true, shape: "rounded" },
    ];
    it.each(testShapeCases)(
      `"$shape" 모양의 스위치를 표시합니다.`,
      ({ checked, shape }) => {
        const { switchTrack, switchBall } = renderSwitch({
          checked,
          shape,
        });
        expect(
          switchTrack().classList.contains(`switch--shape-${shape}`),
        ).toBeTruthy();
        expect(
          switchBall().classList.contains(`switch__ball--shape-${shape}`),
        ).toBeTruthy();
      },
    );

    const testSizeCases: ISwitchProps[] = [
      { checked: true, size: "small" },
      { checked: true, size: "medium" },
    ];
    it.each(testSizeCases)(
      `"$size" 크기의 스위치를 표시합니다.`,
      ({ checked, size }) => {
        const { switchTrack, switchBall } = renderSwitch({
          checked,
          size,
        });
        expect(
          switchTrack().classList.contains(`switch--size-${size}`),
        ).toBeTruthy();
        expect(
          switchBall().classList.contains(`switch__ball--size-${size}`),
        ).toBeTruthy();
      },
    );

    it(`스위치 선택상태가 "true" 이고 활성화 트랙 색상은 "rgb(0, 0, 0)", 트랙볼 색상은 "rgb(25, 25, 25) 일때`, () => {
      const { switchTrack, switchBall } = renderSwitch({
        checked: true,
        onTrackColor: "rgb(0, 0, 0)",
        onBallColor: "rgb(25, 25, 25)",
      });
      expect(switchTrack().style.backgroundColor).toBe("rgb(0, 0, 0)");
      expect(switchBall().style.backgroundColor).toBe("rgb(25, 25, 25)");
    });

    it(`스위치 선택상태가 "false" 이고 비활성화 트랙 색상은 "rgb(25, 25, 25)", 트랙볼 색상은 "rgb(0, 0, 0) 일때`, () => {
      const { switchTrack, switchBall } = renderSwitch({
        checked: false,
        offTrackColor: "rgb(25, 25, 25)",
        offBallColor: "rgb(0, 0, 0)",
      });
      expect(switchTrack().style.backgroundColor).toBe("rgb(25, 25, 25)");
      expect(switchBall().style.backgroundColor).toBe("rgb(0, 0, 0)");
    });
  });

  describe("이벤트 동작 검증", () => {
    it('스위치 트랙을 클릭한 경우 "onSwitch" 함수를 실행합니다.', () => {
      const onSwitch = jest.fn();
      const { clickSwitchTrack } = renderSwitch({ checked: true, onSwitch });
      clickSwitchTrack();
      expect(onSwitch).toHaveBeenCalled();
    });

    it('스위치 트랙볼을 클릭한 경우 "onSwitch" 함수를 실행합니다.', () => {
      const onSwitch = jest.fn();
      const { clickSwitchBall } = renderSwitch({ checked: true, onSwitch });
      clickSwitchBall();
      expect(onSwitch).toHaveBeenCalled();
    });
  });
});
