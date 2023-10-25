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
  // const t = '';
  const [inputValue, setValue] = useState<string>();
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const text = [
    { type: TypographyType.h1, value: 'Login' },
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
            <div className='caption'>Input</div>
            <Input
              onChange={setValue}
              type={InputType.Secondary}
              placeholder='Input field'
            />
            {inputValue}
          </div>
          <div className='dropdown container'>
            <div className='caption'>dropdown</div>
            <Dropdown
              placeholder='Dropdown'
              onChange={setSelectedOption}
              value={selectedOption}
              options={options}
            />
            {selectedOption}
          </div>
          <div className='Button container'>
            <div className='caption'>Button</div>
            <Button />
          </div>
          <div className='Text container w-fit'>
            <div className='caption'>Text</div>
            <div className=' flex flex-col flex-wrap gap-2'>
              {text.map((el, index) => (
                <div key={index.toString()} className='flex gap-3'>
                  <span className='flex uppercase'>{el.type}</span>:
                  <Typography
                    value={el.value}
                    type={el.type}
                    iconStyle={{ width:30}}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='TextInput container'>
            <div className='caption'>TextInput</div>
            <TextInput onChange={setValue} text='PASSWORD' />
            {inputValue}
          </div>
          <div className='TextSelect container'>
            <div className='caption'>TextSelect</div>
            <TextSelect
              text={'ACCOUNT TYPE'}
              options={options}
              selectValue={selectedOption}
              onChange={setSelectedOption}
            />
          </div>
          <div className='Icons container'>
            <div>Icons</div>
            <div className='flex gap-2'>
              <IconRepository.PlusIcon />
              <IconRepository.PersonIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
