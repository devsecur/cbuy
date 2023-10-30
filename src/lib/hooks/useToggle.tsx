import { useState } from 'react';

function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = (): void => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggle];
}

export default useToggle;
