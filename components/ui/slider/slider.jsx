import { useRef, useCallback } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import styles from './slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ slides }) => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    console.log('haha');
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        ref={sliderRef}
        className={styles.slider}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 34
          }
        }}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              width='0'
              height='0'
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
              alt='food'
              src={slide.src}
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navigation}>
        <button className={`${styles.button} ${styles.prev}`} onClick={handlePrev}>
          <FiArrowLeft size={25} />
        </button>
        <button className={`${styles.button} ${styles.next}`} onClick={handleNext}>
          <FiArrowRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
