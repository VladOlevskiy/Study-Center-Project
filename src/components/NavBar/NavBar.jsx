import React, { useState } from 'react';
import { Container } from '../../styles/Container-styled';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

import {
  LogoContainer,
  MenuContainer,
  OpenMenuIcon,
  CloseMenuIcon,
  MenuButtonContainer,
  OpenLinksButton,
  NavbarLinkExtended,
  NavbarExtendedContainer,
  NavbarLinkExtendedContainer,
  ListNav,
  ListNavItem,
  NavbarLink,
  Logo,
  Header,
  ActiveLineEl,
} from './NavBar-styled';
import { evaLogo } from 'media';

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const location = useLocation();
  const blockScroll = () => {
    if (!extendNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div>
      <Header>
        <Container>
          <MenuContainer>
            <LogoContainer>
              <Logo to="/">
                <img src={evaLogo} height={'30px'} alt="logo" />
              </Logo>
            </LogoContainer>
            <MenuButtonContainer>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar(current => !current);
                  blockScroll();
                }}
              >
                {extendNavbar ? <CloseMenuIcon /> : <OpenMenuIcon />}
              </OpenLinksButton>
            </MenuButtonContainer>
            <ListNav>
              <ListNavItem>
                <NavbarLink to="/">Головна сторінка</NavbarLink>
                {location.pathname === '/' && (
                  <ActiveLineEl layoutId="activeItem" />
                )}
              </ListNavItem>
              <ListNavItem>
                <NavbarLink to="/programs">Навчальні програми</NavbarLink>
                {location.pathname.includes('/programs') && (
                  <ActiveLineEl layoutId="activeItem" />
                )}
              </ListNavItem>
              <ListNavItem>
                <NavbarLink to="/mentors">Персонал</NavbarLink>
                {location.pathname.includes('/mentors') && (
                  <ActiveLineEl layoutId="activeItem" />
                )}
              </ListNavItem>
              <ListNavItem>
                <NavbarLink to="/gallery">Галерея</NavbarLink>
                {location.pathname.includes('/gallery') && (
                  <ActiveLineEl layoutId="activeItem" />
                )}
              </ListNavItem>
              <ListNavItem>
                <NavbarLink to="/contacts">Контакти</NavbarLink>
                {location.pathname.includes('/contacts') && (
                  <ActiveLineEl layoutId="activeItem" />
                )}
              </ListNavItem>
              <ListNavItem>
                <NavbarLink to="/about">Про нас</NavbarLink>
                {location.pathname.includes('/about') && (
                  <ActiveLineEl layoutId="activeItem" />
                )}
              </ListNavItem>
            </ListNav>
          </MenuContainer>
          <AnimatePresence>
            {extendNavbar && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <NavbarExtendedContainer>
                  <OpenLinksButton
                    style={{ marginRight: 'auto', marginLeft: '0px' }}
                    onClick={() => {
                      setExtendNavbar(current => !current);
                      blockScroll();
                    }}
                  >
                    {extendNavbar ? <CloseMenuIcon /> : <OpenMenuIcon />}
                  </OpenLinksButton>
                  <NavbarLinkExtendedContainer>
                    <NavbarLinkExtended
                      onClick={() => {
                        setExtendNavbar(false);
                        blockScroll();
                      }}
                      to="/"
                    >
                      Головна сторінка
                    </NavbarLinkExtended>
                    <NavbarLinkExtended
                      to="/programs"
                      onClick={() => {
                        setExtendNavbar(false);
                        blockScroll();
                      }}
                    >
                      Навчальні програми
                    </NavbarLinkExtended>
                    <NavbarLinkExtended
                      to="/mentors"
                      onClick={() => {
                        setExtendNavbar(false);
                        blockScroll();
                      }}
                    >
                      Персонал
                    </NavbarLinkExtended>
                    <NavbarLinkExtended
                      to="/gallery"
                      onClick={() => {
                        setExtendNavbar(false);
                        blockScroll();
                      }}
                    >
                      Галерея
                    </NavbarLinkExtended>
                    <NavbarLinkExtended
                      to="/contacts"
                      onClick={() => {
                        setExtendNavbar(false);
                        blockScroll();
                      }}
                    >
                      Контакти
                    </NavbarLinkExtended>
                    <NavbarLinkExtended
                      to="/about"
                      onClick={() => {
                        setExtendNavbar(false);
                        blockScroll();
                      }}
                    >
                      Про нас
                    </NavbarLinkExtended>
                  </NavbarLinkExtendedContainer>
                </NavbarExtendedContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </Header>
    </div>
  );
};

export default NavBar;
