import Radio from "@/Components/Radio";
import { ChangeEvent, useState } from "react";
import { produce } from "immer";

export default function RadioContainer() {
  const [fruitRadios, setFruitRadios] = useState([
    { checked: true, value: "포도", name: "과일" },
    { checked: false, value: "사과", name: "과일" },
    { checked: false, value: "배", name: "과일" },
    { checked: false, value: "딸기", name: "과일" },
  ]);
  const handleRadioChange = ({
    event,
    index,
  }: {
    event: ChangeEvent<HTMLInputElement>;
    index: number;
  }) => {
    setFruitRadios(
      produce(fruitRadios, (draft) => {
        draft.map((item, itemIndex) => {
          item.checked = itemIndex === index ? true : false;
          return item;
        });
      }),
    );
  };
  return (
    <div>
      {fruitRadios.map((fruitRadio, index) => (
        <Radio
          key={fruitRadio.value}
          index={index}
          checked={fruitRadio.checked}
          value={fruitRadio.value}
          label={fruitRadio.value}
          name={fruitRadio.name}
          onChange={handleRadioChange}
        />
      ))}
    </div>
  );
}
