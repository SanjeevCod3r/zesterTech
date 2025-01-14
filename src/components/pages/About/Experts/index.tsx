import { TitleSection } from '~/components/common/TitleSection';
import styles from './index.module.css';
import { VerticalTitle } from '~/components/common/VerticalTitle';
import { RSlider } from '~/components/common/RSlider';
import { sliderImgItems } from './context';

export const Experts = () => {
  return (
    <section className={styles.sectionExperts}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperTitle}>
          <TitleSection title='Our creative team' subtitle='digital experts' inverted />
        </div>
        <div className={styles.sliderWrapper}>
          <RSlider
            settings={{
              arrows: false,
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ],
            }}
            totalSlides={3}
            positionNav='top'
            colorNav='black'
          >
            {sliderImgItems.map((slide) => {
              return (
                <div className={styles.listItem} key={slide.alt}>
                  <img src={slide.imgSrc} alt={slide.alt} />
                </div>
              );
            })}
          </RSlider>
        </div>
      </div>
      <VerticalTitle bigTitle='experts' title='experts' color='dark' />
    </section>
  );
};
