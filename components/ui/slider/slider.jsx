import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import styles from './slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

const SlideNextButton = () => {
  const swiper = useSwiper();

  return <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>;
};

const Slider = ({ slides }) => {
  return (
    <>
      <Swiper
        className={styles.slider}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={34}
        slidesPerView={2}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image width={370} height={270} alt='food' src={slide.src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SlideNextButton />
    </>
  );
};

export default Slider;
