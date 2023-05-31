import styled from 'styled-components';
import { Link as LinkRout } from 'react-router-dom';
import { heroBg_img } from 'media';
import { motion } from 'framer-motion';

export const WrapperTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperText = styled.div`
  max-width: 200px;
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 450px;
  }
`;

export const MainWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
`;

export const Section = styled(motion.section)`
  background-image: linear-gradient(
      rgba(47, 48, 58, -0.6),
      rgba(47, 48, 58, 0.7)
    ),
    url(${heroBg_img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  padding-top: 200px;
  padding-bottom: 200px;
  height: 80vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1279px) {
    padding-top: 300px;
  }
`;

export const Title = styled(motion.h1)`
  margin-bottom: 10px;

  font-size: 30px;
  line-height: 1.38;
  font-weight: 600;
  text-align: center;
  @media screen and (min-width: 767px) {
    font-size: 48px;
  }
`;
export const Text = styled(motion.p)`
  font-size: 14px;
  line-height: 1.38;
  @media screen and (min-width: 767px) {
    font-size: 18px;
  }
`;
export const LinkButton = styled(LinkRout)`
  color: white;
  padding: 3px;
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
