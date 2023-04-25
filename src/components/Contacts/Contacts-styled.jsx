import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
  padding-top: 80px;
  padding-bottom: 60px;
  background: linear-gradient(to right, rgb(238, 242, 243), rgb(142, 158, 171));
`;
export const WrapperMap = styled.div`
  position: relative;
  height: 700px;
  width: 100%;
  margin-top: 150px;
  @media screen and (max-width: 767px) {
    margin-top: 450px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 180px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
  }
`;
export const Map = styled(motion.iframe)``;
export const Wrapper = styled(motion.div)`
  position: absolute;
  top: -25%;
  right: 10%;
  width: 280px;
  height: 480px;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 30px;
  backdrop-filter: blur(32px);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    top: -72%;
    right: 50%;
    transform: translateX(50%) !important;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    top: -35%;
    right: 5%;
  }
`;
export const WrapperInfo = styled.div`
  padding: 10px;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.329); ;
`;
export const InfoTitle = styled.h3`
  color: black;
  text-align: start;
  font-size: 20px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
export const LinkInfo = styled.a`
  color: black;
  font-size: 18px;
  text-align: center;
  transition: color 250ms;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.backgroundSecond};
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;
export const TextInfo = styled.p`
  color: black;
  font-size: 18px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;
