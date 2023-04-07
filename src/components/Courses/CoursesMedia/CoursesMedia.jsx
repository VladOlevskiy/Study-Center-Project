import {
  Section,
  Title,
  Text,
  WrapperImg,
  Img,
  WrapperSwiperSlide,
  PhotoContainer,
} from './CoursesMedia-styled';
import { Container } from 'styles/Container-styled';

import { picture, a1, a2, a3, a4, a5, a6 } from 'media';
import { heroBg_img } from 'media';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, EffectCoverflow } from 'swiper';

SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const CoursesMedia = () => {
  return (
    <Section>
      <Container>
        <Title>Як проходить навчання?</Title>
        <Text>
          Зручний та сучасний простір у якому є все необхідне для навчання
          теорії і практичного відпрацювання. Для нас важливо, щоб після
          пройденого матеріалу та практики Ви не боялися приступати до роботи,
          тому особливий акцент робимо на відпрацюванні та 'постановці' руки.
        </Text>
        <PhotoContainer>
          <Swiper
            navigation
            scrollbar={{ draggable: true }}
            effect="coverflow"
            centered
            auto
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
            <SwiperSlide>
              <Img src={`${a1}`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={`${a2}`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={`${a3}`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={`${a4}`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={`${a5}`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={`${a6}`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={`${picture}`} alt="" />
            </SwiperSlide>
          </Swiper>
        </PhotoContainer>
      </Container>
    </Section>
  );
};

export default CoursesMedia;
