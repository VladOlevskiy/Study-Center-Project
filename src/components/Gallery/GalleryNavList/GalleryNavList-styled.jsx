import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding-top: 150px;
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

export const List = styled(motion.ul)`
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
export const WrapperText = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0px;
  left: 0px;
  opacity: 0;
  padding: 15px;
  background: rgba(0, 0, 0, 0.22);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 30px;
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(101%);
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);
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
export const Item = styled(motion.li)`
  width: auto;
  border-radius: 2px;
  transition: all 450ms ease-in-out;
  &:hover,
  &:focus {
    scale: 0.93;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
  &:hover ${WrapperText},&:focus ${WrapperText} {
    opacity: 1;
    transform: translateY(0);
  }
  @media screen and (max-width: 767px) {
    &:not(last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const ItemLink = styled(Link)``;

export const WrapperImg = styled.div`
  position: relative;
  overflow: hidden;
`;

export const TextCategory = styled.h2`
  color: #ffffff;
  text-align: center;
`;
