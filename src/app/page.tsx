"use client";
import Button from "@/components/atoms/button/Button";
import Dropdown from "@/components/atoms/dropdown/Dropdown";
import Input, { InputType } from "@/components/atoms/input/Input";
import Typography, {
  TypographyType,
} from "@/components/atoms/typography/Typography";
import { useState } from "react";

const Home = () => {
  const [inputValue, setValue] = useState<string>();
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const text = [
    { type: TypographyType.h1, value: "Heading 1 text" },
    { type: TypographyType.Title, value: "Title Text" },
    { type: TypographyType.Subtitle, value: "Subtitle Text" },
    { type: TypographyType.Body, value: "Body Text" },
    // { type: TypographyType.Caption, label: "Option 1" },
    // { type: TypographyType.Primary, label: "Option 1" },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();

  return (
    <>
      <div className=" mx-20 my-5 ">
        <h1 className="text-3xl font-bold text-green-500">Components</h1>
        <div className="flex flex-wrap">
          <div className="input container">
            <caption>Input</caption>
            <Input onChange={setValue} type={InputType.Secondary} />
            {inputValue}
          </div>
          <div className="dropdown container">
            <caption>dropdown</caption>
            <Dropdown
              onChange={setSelectedOption}
              value={selectedOption}
              options={options}
            />
            {selectedOption}
          </div>
          <div className="Button container">
            <caption>Button</caption>
            <Button />
          </div>
          <div className="Text w-fit container">
            <caption>Text</caption>
            <div className=" flex-wrap flex gap-2 flex-col">
              {text.map((el) => (
                <>
                  <div className="flex gap-3">
                    <span className="flex uppercase">{el.type}</span>:
                    <Typography value={el.value} type={el.type} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
