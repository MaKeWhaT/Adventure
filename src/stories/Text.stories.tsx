import { Meta, Story } from "@storybook/react";
import Text from "@/Components/Text/index";
import { IText } from "@/Components/Text/types";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    className: {
      name: "className",
      type: { name: "string", required: false },
      defaultValue: undefined,
      description: "테일윈드로 오버라이드 하는 클래스 목록",
    },
    tag: {
      name: "tag",
      type: { name: "string", required: false },
      defaultValue: "span",
      description: "생성하는 HTMLElement Tag",
    },
    size: {
      name: "size",
      type: { name: "number", required: false },
      defaultValue: 16,
      description: "텍스트 크기",
    },
    weight: {
      name: "weight",
      type: { name: "number", required: false },
      defaultValue: 500,
      description: "텍스트 굵기",
    },
    content: {
      name: "content",
      type: { name: "string", required: false },
      defaultValue: undefined,
      description: "프로퍼티로 전달할 텍스트",
    },
    children: {
      name: "children",
      table: {
        disable: true,
      },
    },
  },
} as Meta<IText>;

const Template: Story<IText> = (args) => <Text {...args} />;

export const English = Template.bind({});
English.args = {
  content: "Hello, good morning.",
};

export const Korean = Template.bind({});
Korean.args = {
  content: "안녕하세요, 좋은 아침입니다.",
};

export const Chinese = Template.bind({});
Chinese.args = {
  content: "你好早上好。",
};

export const Japanese = Template.bind({});
Japanese.args = {
  content: "こんにちは、おはようございます。",
};
