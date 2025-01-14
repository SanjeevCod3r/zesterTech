import styles from './index.module.css';

interface IRInput {
  placeholder?: string;
  type?: string;
}

export const RInput = ({ placeholder = 'text', type = 'text' }: IRInput) => {
  return <input type={type} placeholder={placeholder} className={styles.input} />;
};
