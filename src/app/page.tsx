'use client';
import Button from '@/components/atoms/button/Button';
import Dropdown from '@/components/atoms/dropdown/Dropdown';
import Input, { InputType } from '@/components/atoms/input/Input';
import Typography, {
  TypographyType,
} from '@/components/atoms/typography/Typography';
import TextInput from '@/components/molecules/TextInput/TextInput';
import TextSelect from '@/components/molecules/TextSelect/TextSelect';
import { IconRepository } from '@/lib/repository/icon.repository';
import { useState } from 'react';

const Home = () => {
  const t = '';
  const [inputValue, setValue] = useState<string>();
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const text = [
    { type: TypographyType.h1, value: 'Heading 1 text' },
    { type: TypographyType.Title, value: 'Title Text' },
    { type: TypographyType.Subtitle, value: 'Subtitle Text' },
    { type: TypographyType.Body, value: 'Body Text' },
    // { type: TypographyType.Caption, label: "Option 1" },
    // { type: TypographyType.Primary, label: "Option 1" },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();

  return (
    <>
      <div className=' mx-20 my-5 '>
        <h1 className='text-3xl font-bold text-green-500'>Components</h1>
        <div className='flex flex-wrap'>
          <div className='input container'>
            <caption>Input</caption>
            <Input
              onChange={setValue}
              type={InputType.Secondary}
              placeholder='Input field'
            />
            {inputValue}
          </div>
          <div className='dropdown container'>
            <caption>dropdown</caption>
            <Dropdown
              placeholder='Dropdown'
              onChange={setSelectedOption}
              value={selectedOption}
              options={options}
            />
            {selectedOption}
          </div>
          <div className='Button container'>
            <caption>Button</caption>
            <Button />
          </div>
          <div className='Text container w-fit'>
            <caption>Text</caption>
            <div className=' flex flex-col flex-wrap gap-2'>
              {text.map((el, index) => (
                <>
                  <div key={index.toString()} className='flex gap-3'>
                    <span className='flex uppercase'>{el.type}</span>:
                    <Typography value={el.value} type={el.type} />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className='TextInput container'>
            <caption>TextInput</caption>
            <TextInput onChange={setValue} text='PASSWORD' />
            {inputValue}
          </div>
          <div className='TextSelect container'>
            <caption>TextSelect</caption>
            <TextSelect
              text={'ACCOUNT TYPE'}
              options={options}
              selectValue={selectedOption}
              onChange={setSelectedOption}
            />
          </div>
          <div className='Icons container'>
            <caption>Icons</caption>
            <div>
              {/* <IconRepository.HeartIcon color='blue' /> */}
              <IconRepository.PlusIcon props='red' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
