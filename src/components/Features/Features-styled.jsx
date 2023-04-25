import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as LinkRout } from 'react-router-dom';
import { HiAcademicCap } from 'react-icons/hi';
import { GiBlackBook } from 'react-icons/gi';
import { AiFillSignal } from 'react-icons/ai';
import { GiNotebook } from 'react-icons/gi';
import { img } from 'media';
import { aaa } from 'media';

export const Section = styled(motion.section)`
  /* background-color: ${p => p.theme.colors.backgroundMain}; */
  /* background-image: linear-gradient(
      rgba(47, 48, 58, 0.1),
      rgba(66, 69, 48, 0.3)
    ),
    url(${aaa}); */
  /* background-image: linear-gradient(
      rgba(165, 142, 116, 0.303),
      rgba(211, 195, 176, 0.203),
      rgba(179, 166, 151, 0.203),
      rgba(165, 142, 116, 0.303)
    ),
    url(${img}); */
  /* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  overflow: hidden;
  padding-top: 70px;
  padding-bottom: 60px;
  background: linear-gradient(to right, rgb(238, 242, 243), rgb(142, 158, 171));
`;

export const Title = styled(motion.h2)`
  color: ${p => p.theme.colors.whiteText};
  margin-bottom: 10px;
  font-size: 36px;
  line-height: 1.38;
  font-weight: 800;
  text-align: center;
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    font-size: 32px;
  }
`;

export const Text = styled(motion.p)`
  color: ${p => p.theme.colors.mainText};
  font-size: 17px;
  line-height: 1.38;
  text-align: center;
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    font-size: 16px;
  }
`;

export const LinkButton = styled(LinkRout)`
  padding: 15px;
  margin-top: 30px;
  color: ${p => p.theme.colors.whiteText};
  border-radius: 25px;
  background-color: ${p => p.theme.colors.accent};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.38;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-image 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  @media screen and (min-width: 767px) {
    font-size: 18px;
    font-weight: 600;
  }
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hover};
    transform: scale(1.1);
    box-shadow: ${p => p.theme.colors.shadow};
  }
  @media screen and (max-width: 767px) {
    max-width: 150px;
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    max-width: 200px;
  }
`;

export const MainWrapper = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    align-items: center;
  }
`;

export const TitleWrapper = styled(motion.div)`
  /* From https://css.glass */
  padding: 18px;
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(13.5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
  }
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    margin-right: 30px;
    width: 40%;
  }
  @media screen and (min-width: 1279px) {
    margin-right: 30px;
    width: 50%;
  }
`;

export const FeaturesListWrapper = styled(motion.div)`
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    width: 60%;
  }
  @media screen and (min-width: 1279px) {
    width: 50%;
  }
`;

export const FeatureList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
  }
`;

export const FeatureItem = styled.li`
  color: ${p => p.theme.colors.mainText};
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    margin: 15px;
    display: flex;
    flex-direction: column;
    width: calc((100% - 60px) / 2);
    &:nth-child(2n + 1) {
      margin-top: -10px;
      margin-bottom: 40px;
    }
  }
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    margin: 10px;
    width: calc((100% - 40px) / 2);
  }
`;

export const FeatureItemThumb = styled.div`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(59, 68, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  /* background-color: #b3b79d; */
  /* box-shadow: ${p => p.theme.colors.shadow}; */
  padding: 25px;
  border-radius: 10px;
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    padding: 15px;
  }
`;

export const TitleFeatureItem = styled(motion.h3)`
  /* color: ${p => p.theme.colors.mainText}; */
  color: rgb(59 68 0);
  margin-bottom: 20px;
  font-size: 23px;
  line-height: 1.38;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid;
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    font-size: 20px;
  }
`;

export const FeatureItemIcon1 = styled(HiAcademicCap)`
  width: 50px;
  height: 50px;
  fill: ${p => p.theme.colors.mainText};
  margin-bottom: 15px;
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }
`;
export const FeatureItemIcon2 = styled(GiBlackBook)`
  width: 50px;
  height: 50px;
  fill: ${p => p.theme.colors.mainText};
  margin-bottom: 15px;
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }
`;
export const FeatureItemIcon3 = styled(AiFillSignal)`
  width: 50px;
  height: 50px;
  fill: ${p => p.theme.colors.mainText};
  margin-bottom: 15px;
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }
`;
export const FeatureItemIcon4 = styled(GiNotebook)`
  width: 50px;
  height: 50px;
  fill: ${p => p.theme.colors.mainText};
  margin-bottom: 15px;
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }
`;
