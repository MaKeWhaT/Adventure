import Text from "@/Components/Text";
export default function TextContainer() {
  return (
    <div>
      <Text tag={"h1"} content="Hello" />
      <Text
        className="text-size-16-weight-700"
        size={24}
        tag={"h2"}
        content="Hello"
      />
      <Text className="text-size-16-weight-500" tag={"h3"} content="Hello" />
      <Text className="text-size-16-weight-400" tag={"h3"} content="Hello" />
      <Text className="text-size-16-weight-350" tag={"h4"} content="Hello" />
      <Text className="text-size-16-weight-300" tag={"h5"} content="Hello" />
      <Text className="text-size-16-weight-100" tag={"h6"} content="Hello" />
      <Text
        className="text-size-16-weight-900"
        tag={"h1"}
        content="안녕하세요"
      />
      <Text
        className="text-size-16-weight-700"
        tag={"h2"}
        content="안녕하세요"
      />
      <Text
        className="text-size-16-weight-500"
        tag={"h3"}
        content="안녕하세요"
      />
      <Text
        className="text-size-16-weight-400"
        tag={"h3"}
        content="안녕하세요"
      />
      <Text
        className="text-size-16-weight-350"
        tag={"h4"}
        content="안녕하세요"
      />
      <Text
        className="text-size-16-weight-300"
        tag={"h5"}
        content="안녕하세요"
      />
      <Text
        className="text-size-16-weight-100"
        tag={"h6"}
        content="안녕하세요"
      />
    </div>
  );
}
