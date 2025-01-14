import { TitleSection } from '~/components/common/TitleSection';
import styles from './index.module.css';
import { RButton } from '~/components/UI/RButton';

interface ISliderCard {
  id: number;
  subtitle: string;
  title: string;
  text: string;
  btnText: string;
}

export const SliderCard = (props: ISliderCard) => {
  const { subtitle, title, text, btnText } = props;
  return (
    <div className={styles.sliderItem}>
      <div className={styles.wrapperTitle}>
        <TitleSection title={title} subtitle={subtitle} />
        <p className={styles.text}>{text}</p>
        <RButton>{btnText}</RButton>
      </div>
    </div>
  );
};
