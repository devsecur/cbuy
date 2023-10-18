"use client"
import Input, { InputType } from "@/components/atoms/input/Input";
import { useState } from "react";

const Home = () => {
// let inputValue = ''
const [inputValue, setValue] = useState('');

    return (
      <>
        <div className=" mx-20 my-[20vh]">
          <h2>Pages</h2>
         <Input onChange={setValue} type={InputType.Secondary} />
         {inputValue}
        </div>
      </>
    );
  };
  export default Home;
  