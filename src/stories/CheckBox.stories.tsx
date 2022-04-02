import { Meta, Story } from "@storybook/react";
import Text from "@/Components/Text/index";
import CheckBox from "@/Components/CheckBox/index";
import { ICheckBox } from "@/Components/CheckBox/types";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
  argTypes: {
    defaultChecked: {
      name: "defaultChecked",
      type: { name: "boolean", required: false },
      defaultValue: true,
      description: "체크박스 초기상태",
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "체크박스 기능 비활성화 여부",
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    onChange: {
      name: "onChange",
      type: { name: "function", required: false },
      defaultValue: () => {},
      description:
        "부모 컴포넌트에서 전달하는 체크박스 인풋 onChange 함수 핸들러",
    },
    labelClasses: {
      name: "labelClasses",
      type: { name: "string", required: false },
      defaultValue: undefined,
      description:
        "체크박스를 감싸는 라벨 Wrapper 스타일 오버라이드 클래스 목록",
    },
    checkBoxClasses: {
      name: "checkBoxClasses",
      type: { name: "string", required: false },
      defaultValue: undefined,
      description: "체크박스 스타일 오버라이드 클래스 목록",
    },
    checkClasses: {
      name: "checkClasses",
      type: { name: "string", required: false },
      defaultValue: undefined,
      description: "체크박스 내부 체크표시 스타일 오버라이드 클래스 목록",
    },
    children: {
      name: "children",
      table: {
        disable: true,
      },
      description: "체크박스 라벨 텍스트 표시",
    },
  },
} as Meta<ICheckBox>;

const Template: Story<ICheckBox> = (args) => <CheckBox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <Text tag={"span"} size={12} weight={400}>
      Hello World
    </Text>
  ),
};
