import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "@/Components/Text/index";
import Radio from "@/Components/Radio/index";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    index: {
      name: "index",
      type: { name: "number", required: true },
      description: "라디오 배열 목록에서 해당 아이템의 인덱스",
    },
    value: {
      name: "value",
      type: { name: "string", required: true },
      description: "라디오가 갖는 선택 값",
    },
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "라디오 비활성화 여부",
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    checked: {
      name: "checked",
      type: { name: "boolean", required: true },
      description: "부모 컴포넌트에 의해 제어되는 라디오 인풋 선택 상태",
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    label: {
      name: "label",
      type: { name: "string", required: false },
      description: "라디오가 갖는 선택 값을 표현하는 텍스트",
    },
    onChange: {
      name: "onChange",
      type: { name: "function", required: false },
      description:
        "부모 컴포넌트에서 전달하는 라디오 인풋 onChange 함수 핸들러",
    },
    labelClasses: {
      name: "labelClasses",
      type: { name: "string", required: false },
      defaultValue: undefined,
      description: "라디오를 감싸는 라벨 엘리먼트 스타일 오버라이드",
    },
    radioOuterClasses: {
      name: "radioOuterClasses",
      type: { name: "string", required: false },
      defaultValue: undefined,
      description: "라디오 외부 원형 박스 엘리먼트 스타일 오버라이드",
    },
    radioInnerClasses: {
      name: "radioInnerClasses",
      type: { name: "string", required: false },
      defaultValue: undefined,
      description: "라디오 내부 원형 박스 엘리먼트 스타일 오버라이드",
    },
    children: {
      name: "children",
      table: {
        disable: true,
      },
      description: "라디오 라벨 텍스트를 표시하는 리액트 노드",
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <Text tag={"span"} size={16} weight={400}>
      Hello World
    </Text>
  ),
};

export const Square = Template.bind({});
Square.args = {
  index: 0,
  radioOuterClasses: "rounded-[2px]",
  radioInnerClasses: "rounded-[2px]",
  value: "복숭아",
  name: "과일",
  children: (
    <Text tag={"span"} size={16} weight={500}>
      네모난 라디오
    </Text>
  ),
};

export const Big = Template.bind({});
Big.args = {
  index: 0,
  radioOuterClasses: "w-[24px] h-[24px]",
  radioInnerClasses: "w-[16px] h-[16px]",
  value: "복숭아",
  name: "과일",
  children: (
    <Text tag={"span"} size={24} weight={500}>
      좀더 큰 라디오
    </Text>
  ),
};
