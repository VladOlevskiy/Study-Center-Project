import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: ${p => p.theme.colors.backgroundThird};
`;

export const Title = styled(motion.h2)`
  color: white;
  text-align: center;
  font-size: 30px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Item = styled(motion.li)`
  width: auto;
  border-radius: 2px;
  transition: scale 250ms ease-in-out;
  &:hover {
    scale: 1.05;
  }
  @media screen and (max-width: 767px) {
    &:not(last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const Img = styled.img`
  cursor: pointer;
  @media screen and (max-width: 767px) {
    max-width: 100%;
    height: auto;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;
