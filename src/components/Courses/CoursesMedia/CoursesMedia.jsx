import {
  Section,
  Title,
  Text,
  Img,
  PhotoContainer,
} from './CoursesMedia-styled';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import { Container } from 'styles/Container-styled';
import {
  TextAnimationUp,
  TextAnimationLeft,
} from '../../../animations/animation.jsx';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, EffectCoverflow } from 'swiper';

SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const CoursesMedia = () => {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        // setLoading(true);
        const response = await axios.get('mediaData.json');
        const data = response.data[2].photos;
        setPhotos(data);
        // setLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <Section
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ staggerChildren: 0.6, duration: 1 }}
      style={{ overflow: 'hidden' }}
    >
      <Container>
        <Title>Як проходить навчання?</Title>
        <Text variants={TextAnimationUp}>
          Зручний та сучасний простір у якому є все необхідне для навчання
          теорії і практичного відпрацювання. Для нас важливо, щоб після
          пройденого матеріалу та практики Ви не боялися приступати до роботи,
          тому особливий акцент робимо на відпрацюванні та 'постановці' руки.
        </Text>
        <PhotoContainer variants={TextAnimationLeft}>
          <Swiper
            navigation
            scrollbar={{ draggable: true }}
            effect="coverflow"
            centered="true"
            auto="true"
            grabCursor="true"
            centeredSlides="true"
            spaceBetween={0}
            slidesPerView={3}
            // loop="true"
            pagination={{ clickable: true, dynamicBullets: true }}
            coverflowEffect={{
              rotate: 10,
              stretch: 25,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              1280: {
                spaceBetween: 0,
                slidesPerView: 3,
              },
              768: {
                spaceBetween: 0,
                slidesPerView: 2,
              },
              300: {
                spaceBetween: 0,
                slidesPerView: 1,
              },
            }}
          >
            {photos && (
              <>
                {photos.map((photo, index) => (
                  <SwiperSlide key={index}>
                    <Img src={process.env.PUBLIC_URL + `${photo}`} alt="" />
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
        </PhotoContainer>
      </Container>
    </Section>
  );
};

export default CoursesMedia;
