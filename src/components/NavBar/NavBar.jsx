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

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Header>
        <Container>
          <MenuContainer>
            <LogoContainer>
              <Logo to="/">LOGO</Logo>
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
                {location.pathname === '/programs' && (
                  <ActiveLineEl layoutId="activeItem" />
                )}
              </ListNavItem>
              <ListNavItem>
                <NavbarLink to="/mentors">Персонал</NavbarLink>
                {location.pathname === '/mentors' && (
                  <ActiveLineEl layoutId="activeItem" />
                )}
              </ListNavItem>
              <ListNavItem>
                <NavbarLink to="/gallery">Галерея</NavbarLink>
                {location.pathname === '/gallery' && (
                  <ActiveLineEl layoutId="activeItem" />
                )}
              </ListNavItem>
              <ListNavItem>
                <NavbarLink to="/contacts">Контакти</NavbarLink>
                {location.pathname === '/contacts' && (
                  <ActiveLineEl layoutId="activeItem" />
                )}
              </ListNavItem>
              <ListNavItem>
                <NavbarLink to="/about">Про нас</NavbarLink>
                {location.pathname === '/about' && (
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

// function ActiveLine() {
//   return <ActiveLineEl layoutId="activeItem" />;
// }
