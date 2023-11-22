// import CheckboxIcon from './CheckboxIcon';
import CheckboxIcon from '@/components/atoms/icons/Checkbox.icon';
import CheckboxLabel from './CheckboxLabel';
import styles from './Checkbox.module.scss';
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
      <CheckboxIcon checked={checked} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </label>
  );
};

export default Checkbox;
