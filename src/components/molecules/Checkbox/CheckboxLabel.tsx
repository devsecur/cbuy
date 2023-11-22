import styles from './Checkbox.module.scss';
interface CheckboxLabelProps {
  children: React.ReactNode;
}

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ children }) => {
  return <span className={styles.checkbox_name}>{children}</span>;
};

export default CheckboxLabel;
