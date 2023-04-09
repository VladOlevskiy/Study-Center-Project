import styled from 'styled-components';
import { workers_img } from 'media';
import { ImCheckmark2 } from 'react-icons/im';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;
  background-image: linear-gradient(
      to right bottom,
      rgb(255 255 255 / 30%),
      rgb(0 0 0 / 69%)
    ),
    url(${workers_img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: visible;
  height: 600px;
`;

export const WrapperMain = styled(motion.div)`
  margin-top: 70px;
  @media screen and (min-width: 768px) {
    margin-top: 215px;
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 275px;
  }
`;
export const WrapperTitle = styled(motion.div)`
  text-align: center;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    height: 70px;
    margin-bottom: 0px;
    margin-right: 10px;
  }
`;
export const WrapperText = styled(motion.div)`
  height: auto;
  background-color: white;
  width: 100%;
  padding: 35px 30px;
  background: rgb(255 255 255 / 7%);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 30px;
  backdrop-filter: blur(8px);
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
  @media screen and (min-width: 1280px) {
    width: 40%;
  }
`;

export const Title = styled.h2`
  color: white;
  text-alight: center;
  font-size: 35px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
`;

export const TitleEducation = styled(motion.h3)`
  font-size: 27px;
  color: white;
  letter-spacing: 1.4px;
  text-align: center;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const TextEducation = styled(motion.p)`
  font-size: 17px;
  color: #ffffff;
  padding-top: 4px;
  padding-bottom: 4px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const TextExperience = styled(motion.p)`
  font-size: 24px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  font-weight: 800;
  text-align: end;
`;

export const SectionWork = styled.section`
  background-color: ${p => p.theme.colors.backgroundSecond};
  padding-bottom: 60px;

  @media screen and (max-width: 767px) {
    padding-top: 60px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 150px;
    padding-bottom: 110px;
  }
`;

export const WrapperMainWork = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const WrapperListWork = styled(motion.div)`
  @media screen and (min-width: 1280px) {
    margin-right: 25px;
  }
`;

export const TitleWork = styled(motion.h2)`
  font-size: 30px;
  letter-spacing: 1.4px;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
export const ListWork = styled.ul``;
export const ItemWork = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const ItemText = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
`;
export const Img = styled(motion.img)`
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
  }
  @media screen and (min-width: 1280px) {
    width: 550px;
    margin-bottom: 0px;
  }
`;

export const IconListItem = styled(ImCheckmark2)`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  fill: rgb(255, 255, 255);
  color: black;
  flex-shrink: 0;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
export const AmountPatients = styled.p`
  color: ${p => p.theme.colors.backgroundThird};
  font-size: 20px;
  font-weight: 600;
  text-align: end;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-style: italic;
`;

export const SectionStudy = styled(motion.section)`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${p => p.theme.colors.backgroundMain};
`;
export const TitleStudy = styled(motion.h2)`
  font-size: 32px;
  color: white;
  letter-spacing: 1.4px;
  text-align: center;
  margin-bottom: 30px;
`;
export const TextStudy = styled(motion.p)`
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ButtonLink = styled(Link)`
  font-size: 19px;
  display: flex;
  margin-top: 10px;
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
