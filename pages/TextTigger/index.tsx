import TextTigger from "@/Components/Tigger/Text";

export default function Index() {
  return (
    <>
      <TextTigger customTag="p" className="hello" styleFont={{ color: "red" }}>
        안녕하세요
      </TextTigger>
      <TextTigger customTag="h1" styleFont={{ color: "blue", lineHeight: 3 }}>
        Bonjour
      </TextTigger>
    </>
  );
}
