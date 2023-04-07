import { Container } from 'styles/Container-styled';
import {
  Section,
  WrapperMain,
  WrapperBottom,
  TextRights,
  WrapperSocial,
  SocialList,
  SocialItem,
  SocialLink,
  WrapperNav,
  NavList,
  NavItem,
  NavLink,
  InstagramItem,
  TelegramItem,
  FacebookItem,
  ItemWrapper,
  WrapperTel,
  LinkTel,
  TextTel,
  IconPhone,
} from './Footer-styled';
const Footer = () => {
  return (
    <Section>
      <Container>
        <WrapperMain>
          <WrapperNav>
            <NavList>
              <NavItem>
                <NavLink to="/">Головна сторінка</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/programs">Навчальні програми</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/mentors">Персонал</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/gallery">Галерея</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contacts">Контакти</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">Про нас</NavLink>
              </NavItem>
            </NavList>
          </WrapperNav>
          <WrapperSocial>
            <SocialList>
              <SocialItem>
                <SocialLink href="https://www.instagram.com/" target="_blank">
                  <ItemWrapper>
                    <InstagramItem />
                  </ItemWrapper>
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink href="https://uk-ua.facebook.com/" target="_blank">
                  <ItemWrapper>
                    <TelegramItem />
                  </ItemWrapper>
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink href="https://web.telegram.org/k/" target="_blank">
                  <ItemWrapper>
                    <FacebookItem />
                  </ItemWrapper>
                </SocialLink>
              </SocialItem>
            </SocialList>
          </WrapperSocial>
        </WrapperMain>
        <WrapperTel>
          <TextTel>Звя'зок з нами :</TextTel>
          <LinkTel href="tel:+380973582966">
            <IconPhone /> +38 097 358 2966
          </LinkTel>
        </WrapperTel>
      </Container>
      <WrapperBottom>
        <TextRights>© 2023 - Eva. All Rights Reserved.</TextRights>
      </WrapperBottom>
    </Section>
  );
};

export default Footer;
