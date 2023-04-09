import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

export const WrapperSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Section = styled(motion.section)`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${p => p.theme.colors.backgroundThird};
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 35px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const Text = styled(motion.p)`
  font-size: 17px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    font-size: 19px;
    width: 600px;
  }
  @media screen and (min-width: 1280px) {
    width: 800px;
  }
`;

export const WrapperImg = styled.div``;

export const Img = styled.img`
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-right: 0;
  -webkit-box-reflect: below 0.01px
    linear-gradient(transparent, transparent, #0006);
`;

export const PhotoContainer = styled(motion.div)`
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
`;
