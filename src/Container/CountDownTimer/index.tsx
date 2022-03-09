import CountDownTimer from "@/Components/CountDownTimer";

export default function Index() {
  return (
    <CountDownTimer
      title={"복귀유저 경품 이벤트 종료까지"}
      countTime={5}
      repeat={true}
      showTimeTag={false}
    />
  );
}
