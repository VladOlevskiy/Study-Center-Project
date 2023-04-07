import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
  background-color: ${p => p.theme.colors.backgroundThird};
  padding-top: 40px;
  padding-bottom: 150px;
`;

export const Title = styled(motion.h2)`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.4px;
  color: white;
  text-align: center;
  margin-bottom: 35px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const List = styled(motion.ul)``;
export const Item = styled(motion.li)`
  display: flex;
  justify-content: flex-start;
  &:not(:last-child) {
    margin-bottom: 200px;
  }
  @media screen and (max-width: 767px) {
    transform: scaleX(1) !important;
    justify-content: center;
    margin-bottom: 200px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    &:not(:last-child) {
      margin-bottom: 100px;
    }
  }
`;
// export const WrapperMain = styled.div`
//   position: relative;
//   background-color: white;
//   margin-left: auto;
//   margin-right: auto;
// `;
export const WrapperTextInfo = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0px;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 350px;
  transform: translate(92%, -50%);
  padding: 35px;
  background: rgb(255 255 255 / 12%);
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 30px;
  backdrop-filter: blur(32px);
  border-radius: 30px;
  @media screen and (max-width: 767px) {
    top: 55%;
    min-height: 300px;
    transform: translate(0%, 0%) !important;
    top: 95%;
    max-width: 100%;
    padding: 15px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 95%;
    min-height: 350px;
  }
  @media screen and (min-width: 1280px) {
    min-width: 600px;
  }
`;
export const WrapperPhotoInfo = styled(motion.div)`
  position: relative;
  /* margin-left: 100px; */
  @media screen and (max-width: 767px) {
    margin-bottom: 230px;
  }
`;
export const FullNameText = styled(motion.h3)`
  font-size: 30px;
  margin-bottom: 40px;
  text-align: center;
  @media screen and (min-width: 320px) and (max-width: 1279px) {
    font-size: 27px;
    margin-bottom: 15px;
  }
`;
export const MainInfoText = styled(motion.p)`
  font-size: 19px;
  margin-bottom: 30px;
  @media screen and (min-width: 320px) and (max-width: 1279px) {
    font-size: 17px;
    margin-bottom: 15px;
  }
`;
export const ExperienceText = styled(motion.p)`
  font-size: 18px;
  color: rgb(255 139 0);
  text-transform: uppercase;
  font-weight: 600;
  text-align: end;
  margin-top: 10px;
  @media screen and (max-width: 767px) {
    font-size: 17px;
    text-align: end !important;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 17px;
  }
`;
export const LinkToDetailInfo = styled(Link)`
  font-size: 19px;
  display: flex;
  width: 145px;
  height: 50px;
  padding: 12px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.backgroundSecond};
  transition: background-color 300ms, scale 300ms;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.backgroundMain};
    scale: 1.15;
  }
  @media screen and (min-width: 320px) and (max-width: 1279px) {
    height: 40px;
    font-size: 17px;
  }
`;
export const Photo = styled(motion.img)`
  /* height: 650px; */
  @media screen and (max-width: 767px) {
    max-width: 100%;
    height: auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    /* height: 400px; */
    width: 400px;
    height: auto;
  }
  @media screen and (min-width: 1280px) {
    width: 600px;
    height: auto;
  }
`;
