import { renderHook, act } from "@testing-library/react-hooks";
import useImmer from "..";

describe("[ImmerJS 내부동작 검증 테스트]", () => {
  const baseState = [{ a: 1 }, { b: 2 }];

  describe("원본 객체를 수정하지 않은 경우", () => {
    const { result } = renderHook(() => useImmer(baseState));
    it("원본 객체와 훅에서 반환하는 객체는 같습니다.", () => {
      expect(baseState).toStrictEqual(result.current.state);
    });
    it("원본의 첫번째 자식요소와 반환하는 객체의 첫번째 자식요소는 같습니다.", () => {
      expect(baseState[0]).toStrictEqual(result.current.state[0]);
    });
    it("원본의 두번째 자식요소와 반환하는 객체의 두번째 자식요소는 같습니다.", () => {
      expect(baseState[1]).toStrictEqual(result.current.state[1]);
    });
  });

  describe("원본 객체의 첫번째 자식 요소를 수정한 경우", () => {
    const { result } = renderHook(() => useImmer(baseState));
    act(() => {
      result.current.updateState((draft) => {
        draft[0].a = 2;
      });
    });
    it("원본 객체와 훅에서 반환하는 객체는 다릅니다.", () => {
      expect(baseState).not.toStrictEqual(result.current.state);
    });
    it("원본 객체의 첫번째 자식요소와 훅에서 반환하는 객체의 첫번째 자식요소는 다릅니다.", () => {
      expect(baseState[0]).not.toStrictEqual(result.current.state[0]);
    });
    it("원본 객체의 두번째 자식요소와 훅에서 반환하는 객체의 두번째 자식요소는 같습니다.", () => {
      expect(baseState[1]).toStrictEqual(result.current.state[1]);
    });
  });

  describe("원본 객체의 두번째 자식 요소를 수정한 경우", () => {
    const { result } = renderHook(() => useImmer(baseState));
    act(() => {
      result.current.updateState((draft) => {
        draft[1].b = 3;
      });
    });
    it("원본 객체와 훅에서 반환하는 객체는 다릅니다.", () => {
      expect(baseState).not.toStrictEqual(result.current.state);
    });
    it("원본 객체의 첫번째 자식요소와 훅에서 반환하는 객체의 첫번째 자식요소는 같습니다.", () => {
      expect(baseState[0]).toStrictEqual(result.current.state[0]);
    });
    it("원본 객체의 두번째 자식요소와 훅에서 반환하는 객체의 두번째 자식요소는 다릅니다", () => {
      expect(baseState[1]).not.toStrictEqual(result.current.state[1]);
    });
  });

  describe("훅이 처리할 수 없는 자료형이 전달된 경우", () => {
    it("특정 메시지의 에러 인스턴스를 Throw 합니다.", () => {
      expect(() => {
        useImmer(false);
      }).toThrowError(
        "주어진 Base 객체가 ImmerJS를 통해 관리될 수 없는 자료형입니다.",
      );
    });
  });
});
