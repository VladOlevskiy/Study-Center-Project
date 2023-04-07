import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const IconPhone = styled(BsFillTelephoneForwardFill)`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    width: 15px;
    height: 15px;
  }
  @media screen and (min-width: 1280px) {
    width: 18px;
    height: 18px;
  }
`;

export const IconMap = styled(FaMapMarkerAlt)`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

export const Section = styled(motion.section)`
  background-color: ${p => p.theme.colors.backgroundThird};
  padding-top: 100px;
  padding-bottom: 120px;
`;

export const MainWrapper = styled(motion.div)`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.35);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  /* background-color: ${p => p.theme.colors.backgroundMain};
  box-shadow: ${p => p.theme.colors.shadow}; */
  height: 300px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -200px;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;

export const TitleMain = styled.h2`
  display: none;
`;

export const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
  color: #000000;
  text-align: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
    height: 60px;
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
    height: 69px;
    font-size: 30px;
  }
`;

export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 35px;
  }
`;
export const WrapperItem = styled(motion.div)`
  color: #000000;
  width: 100%;
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 25px;
    }
    border-bottom: 5px solid rgba(31, 46, 53, 0.7);
    padding-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 100px;
    }
  }
`;

export const BoxInfoWorkTime = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(31, 46, 53, 0.5);
  }
`;
export const InfoWorkTime = styled.p`
  color: #000000;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const BoxAddressInfo = styled.div`
  @media screen and (min-width: 1280px) {
  }
`;
export const TextAddressInfo = styled.p`
  text-align: center;
  color: #000000;
  line-height: 1.38;
  border-bottom: 1px solid rgba(31, 46, 53, 0.5);
  margin-bottom: 15px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
export const LinkAddressInfo = styled.a`
  padding: 10px;
  border-radius: 25px;
  text-align: center;
  display: block;
  color: #000000;
  list-style: none;
  font-size: 14px;
  line-height: 1.38;
  font-weight: 600;
  width: 100%;
  background-color: ${p => p.theme.colors.accent};
  transition: background-image 300ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hover};
    transform: scale(1.1);
    box-shadow: ${p => p.theme.colors.shadow};
  }
  @media screen and (max-width: 479px) {
    width: 204px;
    padding: 5px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    max-width: 50%;
    padding: 5px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const LinkTel = styled.a`
  display: block;
  color: #000000;
  font-size: 15px;
  text-align: center;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hover};
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;
