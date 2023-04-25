import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Section = styled(motion.section)`
  padding-top: 120px;
  padding-bottom: 350px;
  background: #8e9eab; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eef2f3,
    #8e9eab
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eef2f3,
    #8e9eab
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
  transition: scale 350ms ease-in-out;
  &:hover {
    scale: 0.9;
  }
  @media screen and (max-width: 767px) {
    &:not(last-child) {
      margin-bottom: 20px;
    }
  }
`;
export const WrapperImg = styled.div`
  width: 100%;
  height: 100%;
`;
export const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 767px) {
    max-height: 500px;
  }
  @media screen and (min-width: 768px) {
    max-height: 550px;
  }
`;

export const ButtonLink = styled(Link)`
  font-size: 19px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
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
