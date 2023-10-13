"use client"
import Input, { InputType } from "@/components/atoms/input/Input";
import { useState } from "react";
import { Value } from "sass";

const Home = () => {
// let inputValue = ''
const [inputValue, setValue] = useState('Man');

    return (
      <>
        <div className=" mx-20 my-[20vh]">
          <h2>Pages</h2>
         <Input onChange={setValue} type={InputType.Primary} />
         {inputValue}
        </div>
      </>
    );
  };
  export default Home;
  