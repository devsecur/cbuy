// import CheckboxIcon from './CheckboxIcon';
import styles from './Checkbox.module.scss';
import Typography from '@/components/atoms/typography/Typography';
interface CheckboxProps {
  checked: boolean;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, label, onChange }) => {
  return (
    <label className={styles.checkbox_label}>
      <input
        type='checkbox'
        className={styles.checkbox_input}
        checked={checked}
        onChange={onChange}
      />
      {/* <CheckboxIcon checked={checked} /> */}
      <Typography>{label}</Typography>
    </label>
  );
};

export default Checkbox;
