import { useState } from 'react';

function useToggle(
  initialValue: boolean = false,
  // eslint-disable-next-line no-unused-vars
): [boolean, () => void, (newValue: boolean) => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = (): void => {
    setValue((prevValue) => !prevValue);
  };
  const setValueDirectly = (newValue: boolean): void => {
    setValue(newValue);
  };
  return [value, toggle, setValueDirectly];
}

export default useToggle;
