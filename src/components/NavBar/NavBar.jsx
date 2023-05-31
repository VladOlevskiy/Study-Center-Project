import React, { useState } from 'react';
import { Container } from '../../styles/Container-styled';
import { useLocation } from 'react-router-dom';

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
          {extendNavbar && (
            <NavbarExtendedContainer>
              <NavbarLinkExtendedContainer>
                <NavbarLinkExtended to="/">Головна сторінка</NavbarLinkExtended>
                <NavbarLinkExtended to="/programs">
                  Навчальні програми
                </NavbarLinkExtended>
                <NavbarLinkExtended to="/mentors">Персонал</NavbarLinkExtended>
                <NavbarLinkExtended to="/gallery">Галерея</NavbarLinkExtended>
                <NavbarLinkExtended to="/contacts">Контакти</NavbarLinkExtended>
                <NavbarLinkExtended to="/about">Про нас</NavbarLinkExtended>
              </NavbarLinkExtendedContainer>
            </NavbarExtendedContainer>
          )}
        </Container>
      </Header>
    </div>
  );
};

export default NavBar;
