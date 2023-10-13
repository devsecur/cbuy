"use client";
import Dropdown from "@/components/atoms/dropdown/Dropdown";
import Input, { InputType } from "@/components/atoms/input/Input";
import { useState } from "react";

const Home = () => {
  const [inputValue, setValue] = useState<string>();
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();

  return (
    <>
      <div className=" mx-20 my-5 ">
        <h1 className="text-3xl font-bold text-green-500">Components</h1>
        <div className="flex">
          <div className="input">
            <caption>Input</caption>
            <Input onChange={setValue} type={InputType.Secondary} />
            {inputValue}
          </div>
          <div className="dropdown">
            <caption>dropdown</caption>
            <Dropdown
              onChange={setSelectedOption}
              value={selectedOption}
              options={options}
            />
            {selectedOption}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
