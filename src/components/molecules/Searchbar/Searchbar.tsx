'use client';
import React, { useEffect, useState } from 'react';
import styles from './Searchbar.module.scss';
import Input, { InputPropType } from '@/components/atoms/input/Input';
import SearchButton, {
  SearchButtonPropType,
} from '@/components/molecules/SearchButton/SearchButton';
import Line from '@/components/atoms/line/Line';
import Button, { ButtonPropType } from '@/components/atoms/button/Button';
import { IconRepository } from '@/lib/repository/icon.repository';
import useCustomQueries from '@/lib/hooks/useCustomQueries';
import useToggle from '@/lib/hooks/useToggle';

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
  const { isMobile, isTablet } = useCustomQueries();
  // const [advanceSearch, toggleAds] = useToggle(true);
  const [advanceSearch, toggleAds] = useState(true);
  // if (!isMobile) {
  //   toggleAds();
  // }
  useEffect(() => {
    if (!isMobile) {
      toggleAds(true);
    }
    if (isMobile) {
      toggleAds(false);
    }
  }, [isMobile, toggleAds]);
  return (
    <div className={styles.container_searchbar}>
      <div className={styles.input_wrapper}>
        <Input
          placeholder={inputProps.placeholder}
          value={inputProps.value}
          onChange={inputProps.onChange}
          style={{
            border: 'none',
            backgroundColor: 'white',
            width: isTablet ? '139px' : undefined,
          }}
        />
        {isMobile && (
          <>
            <span
              className={styles.input_close_btn}
              onClick={() => toggleAds((prevValue) => !prevValue)}
            >
              {advanceSearch}
              <IconRepository.FilterIcon width={'18'} />
            </span>
          </>
        )}
      </div>
      {advanceSearch && (
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
      )}
      {!isMobile && (
        <Button
          value={btnProps.value}
          onClick={btnProps.onClick}
          variant={'tertiary'}
        />
      )}
    </div>
  );
}
