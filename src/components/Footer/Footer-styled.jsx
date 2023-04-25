import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';

export const Section = styled.section`
  padding-top: 35px;
  background-color: ${p => p.theme.colors.backgroundSecond};
`;

export const WrapperMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }
`;
export const WrapperBottom = styled.div`
  border-top: 1px solid ${p => p.theme.colors.backgroundThird};
`;
export const TextRights = styled.p`
  color: black;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 16px;
  text-align: center;
`;

export const WrapperSocial = styled.div``;

export const SocialList = styled.ul`
  display: flex;
`;

export const ItemWrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  background-color: ${p => p.theme.colors.backgroundThird};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 600ms, border 600ms;

  &:hover {
    background-color: #ffffff;
    border: 1.5px solid ${p => p.theme.colors.backgroundThird};
  }
`;

export const WrapperNav = styled.div``;
export const NavList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const NavItem = styled.li`
  position: relative;
  @media screen and (max-width: 767px) {
    margin-right: 7px;
    margin-bottom: 9px;
    &:not(:last-child)::after {
      position: absolute;
      content: '';
      margin-left: 5px;
      top: 0px;
      width: 2px;
      height: 90%;
      background-color: #424530;
    }
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 15px;
    }
    &:not(:last-child)::after {
      position: absolute;
      content: '';
      margin-left: 7px;
      top: 0px;
      width: 2px;
      height: 90%;
      background-color: #424530;
    }
  }
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 40px;
    }
    &:not(:last-child)::after {
      position: absolute;
      content: '';
      margin-left: 20px;
      top: 0px;
      width: 2px;
      height: 90%;
      background-color: #424530;
    }
  }
`;
export const SocialLink = styled.a``;

export const SocialItem = styled.li`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const InstagramItem = styled(FaInstagram)`
  width: 23px;
  height: 23px;
  fill: white;
  transition: fill 300ms;
  ${ItemWrapper}:hover & {
    fill: ${p => p.theme.colors.backgroundThird};
  }
`;
export const TelegramItem = styled(FaTelegramPlane)`
  width: 23px;
  height: 23px;
  fill: white;
  transition: fill 300ms;
  ${ItemWrapper}:hover & {
    fill: ${p => p.theme.colors.backgroundThird};
  }
`;
export const FacebookItem = styled(FaFacebookF)`
  width: 23px;
  height: 23px;
  fill: white;
  transition: fill 300ms;
  ${ItemWrapper}:hover & {
    fill: ${p => p.theme.colors.backgroundThird};
  }
`;
export const NavLink = styled(Link)`
  color: black;
  transition: color 300ms;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
  &:hover {
    color: white;
  }
`;

export const WrapperTel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
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
    color: ${p => p.theme.colors.whiteText};
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 21px;
  }
`;
export const TextTel = styled.p`
  font-size: 15px;
  margin-right: 5px;
  color: ${p => p.theme.colors.mainText};
  @media screen and (min-width: 1280px) {
    font-size: 18px;
    margin-right: 15px;
  }
`;
export const IconPhone = styled(BsFillTelephoneForwardFill)`
  width: 15px;
  height: 15px;
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
