import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Header = styled.header`
  z-index: 100;
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: -80px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  @media screen and (max-width: 767px) {
    margin-bottom: -79px;
    padding-top: 7px;
    padding-bottom: 7px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const Logo = styled(Link)`
  color: ${p => p.theme.colors.mainText};
  font-size: 22px;
  font-weight: 700;
  @media screen and (min-width: 1280px) {
    font-size: 22px;
  }
`;

export const ListNav = styled.ul`
  display: flex;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ListNavItem = styled.li`
  position: relative;
  &:not(:last-child) {
    margin-right: 15px;
  }
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 35px;
    }
  }
`;

export const OpenLinksButton = styled.button`
  background: none;
  border: none;
  color: ${p => p.theme.colors.mainText};
  font-size: 45px;
  margin-left: auto;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoContainer = styled.div``;

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
`;
export const NavbarLinkExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const NavbarLink = styled(NavLink)`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  color: ${p => p.theme.colors.mainText};
  text-decoration: none;
  transition: all 300ms;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.35;
  }
  &.active {
    color: ${p => p.theme.colors.hoverText};
  }
  /* &.active::after,
  &:hover::after {
    position: absolute;
    content: '';
    background-color: ${p => p.theme.colors.accent};
    border-radius: 20px;
    height: 6px;
    display: block;
    width: 100%;
    top: 45px;
  } */
  &:hover {
    color: ${p => p.theme.colors.hoverText};
  }
  /* @media screen and (min-width: 768px) and (max-width: 1279px) {
    &.active::after,
    &:hover::after {
      top: 40px;
    } */
`;

export const NavbarLinkExtended = styled(NavLink)`
  font-weight: 500;
  font-size: 28px;
  line-height: 44px;
  color: ${p => p.theme.colors.mainText};
  text-decoration: none;
  transition: all 300ms;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &.active {
    color: ${p => p.theme.colors.hoverText};
    text-decoration: underline;
  }

  &:hover {
    color: ${p => p.theme.colors.hoverText};
    text-decoration: underline;
  }
`;

export const NavbarExtendedContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 15px;
  background: linear-gradient(to right, rgb(238, 242, 243), rgb(142, 158, 171));
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
    width: 170px;
  }
`;

export const OpenMenuIcon = styled(BiMenuAltRight)`
  width: 40px;
  height: 40px;
`;

export const CloseMenuIcon = styled(AiOutlineClose)`
  width: 40px;
  height: 40px;
`;

export const ActiveLineEl = styled(motion.div)`
  position: absolute;
  background-color: ${p => p.theme.colors.hoverText};
  border-radius: 20px;
  height: 6px;
  display: block;
  width: calc(100% - 10px);
  left: 5px;
  top: 46px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    top: 41px;
  }
`;
