import styles from './index.module.css';

interface PropsIRButtonIcon {
  children: any;
}

export const RButtonIcon = ({ children }: PropsIRButtonIcon) => {
  return <button className={`${styles.button}`}>{children}</button>;
};
