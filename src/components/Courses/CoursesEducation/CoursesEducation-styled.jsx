import styled from 'styled-components';
import { education } from 'media';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: ${p => p.theme.colors.backgroundSecond};
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    justify-content: space-around;
  }
`;
export const WrapperTitle = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
export const Title = styled.h2`
  font-size: 30px;
  letter-spacing: 1.4px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
export const WrapperText = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: rgb(66, 69, 48);
  border-radius: 20px;
  width: 100%;
  height: 140px;
  padding: 10px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 450px;
    height: 140px;
    padding: 15px;
  }
  @media screen and (min-width: 1280px) {
    width: 650px;
    height: 140px;
    padding: 25px;
  }
`;
export const Icon = styled.div`
  background-image: url(${education});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  flex-shrink: 0;
  height: 60px;
  width: 60px;
  margin-right: 15px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 70px;
    width: 70px;
    margin-right: 20px;
  }
  @media screen and (min-width: 1280px) {
    height: 80px;
    width: 80px;
    margin-right: 30px;
  }
`;
export const Text = styled.p`
  font-size: 17px;
  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
`;
