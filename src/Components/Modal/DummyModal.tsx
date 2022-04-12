import Text from "@/Components/Text";

interface IDummyModal {
  title: string;
}
export default function DummyModal({ title }: IDummyModal) {
  return (
    <div className="w-[600px] rounded-[4px] bg-white p-[20px] shadow-xl">
      <section className="mb-[20px] border-b border-solid border-b-gray-700 pb-[20px]">
        <Text tag="h1" size={20}>
          {title}
        </Text>
      </section>
      <section className="mb-[20px] border-b border-solid border-b-gray-700 pb-[20px]">
        <Text className="mb-[20px]" tag={"p"} size={16}>
          안녕하세요 새로운 형태의 모달입니다. 안녕하세요 새로운 형태의
          모달입니다. 안녕하세요 새로운 형태의 모달입니다. 안녕하세요 새로운
          형태의 모달입니다. 안녕하세요 새로운 형태의 모달입니다. 안녕하세요
          새로운 형태의 모달입니다. 안녕하세요 새로운 형태의 모달입니다.
          안녕하세요 새로운 형태의 모달입니다.
        </Text>
        <Text tag={"p"} size={16}>
          안녕하세요 새로운 형태의 모달입니다. 안녕하세요 새로운 형태의
          모달입니다. 안녕하세요 새로운 형태의 모달입니다. 안녕하세요 새로운
          형태의 모달입니다. 안녕하세요 새로운 형태의 모달입니다. 안녕하세요
          새로운 형태의 모달입니다. 안녕하세요 새로운 형태의 모달입니다.
          안녕하세요 새로운 형태의 모달입니다.
        </Text>
      </section>
      <section className="text-right">
        <button className="mr-[20px] h-[40px] rounded-[4px] border border-solid border-gray-700 px-[10px]">
          open
        </button>
        <button className="h-[40px] rounded-[4px] border border-solid border-gray-700 px-[10px]">
          close
        </button>
      </section>
    </div>
  );
}
