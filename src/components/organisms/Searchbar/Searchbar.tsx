import React from 'react';
import styles from './Searchbar.module.scss';
import Input, { InputPropType } from '@/components/atoms/input/Input';
import SearchButton, {
  SearchButtonPropType,
} from '@/components/molecules/SearchButton/SearchButton';
import Line from '@/components/atoms/line/Line';
import Button, { ButtonPropType } from '@/components/atoms/button/Button';

interface SearchbarProptype {
  searchButtonpProps?: SearchButtonPropType[];
  inputProps?: InputPropType;
  btnProps?: ButtonPropType;
}
export default function Searchbar({
  searchButtonpProps,
  inputProps = {
    placeholder: 'Suche nach...',
  },
  btnProps = { value: 'More filter' },
}: SearchbarProptype) {
  return (
    <div className={styles.container_searchbar}>
      <div className={styles.input_wrapper}>
        <Input
          placeholder={inputProps.placeholder}
          value={inputProps.value}
          onChange={inputProps.onChange}
          style={{ border: 'none', backgroundColor: 'white' }}
        />
      </div>
      <div className={styles.btn_wrapper}>
        {searchButtonpProps?.map((el, index) => (
          <React.Fragment key={index}>
            <SearchButton
              caption={el.caption}
              title={el.title}
              onClick={el.onClick}
            />
            {index < searchButtonpProps.length - 1 && <Line />}
          </React.Fragment>
        ))}
      </div>
      <Button
        value={btnProps.value}
        onClick={btnProps.onClick}
        variant={'tertiary'}
      />
    </div>
  );
}
