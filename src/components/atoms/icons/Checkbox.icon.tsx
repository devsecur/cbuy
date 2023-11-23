interface CheckboxIconProps {
  checked: boolean;
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({ checked }) => {
  return (
    <svg
      className={`h-4 w-4 ${checked ? 'text-blue-500' : 'text-gray-400'}`}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
    >
      {checked ? (
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 13l4 4L19 7'
        />
      ) : (
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 13l4 4L19 7'
          className='hidden'
        />
      )}
    </svg>
  );
};
export default CheckboxIcon;
