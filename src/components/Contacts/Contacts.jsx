import {
  Section,
  WrapperMap,
  Map,
  WrapperInfo,
  InfoTitle,
  Wrapper,
  LinkInfo,
  TextInfo,
} from './Contacts-styled';
import {
  WrapperSocial,
  SocialList,
  SocialItem,
  SocialLink,
  InstagramItem,
  TelegramItem,
  FacebookItem,
  ItemWrapper,
} from '../Footer/Footer-styled';
import { Container } from 'styles/Container-styled';
import ContactFormSection from 'components/ContactFormSection/ContactFormSection';
import {
  TextAnimationDawn,
  TextAnimationOpacity,
} from '../../animations/animation';
const Contacts = () => {
  return (
    <Section
      initial={'offscreen'}
      animate={'onscreen'}
      transition={{ staggerChildren: 0.8 }}
    >
      <Container>
        <ContactFormSection
          color="inherit"
          titleColor="black"
          containerOff="true"
        />
        <WrapperMap>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.157245771409!2d26.28160102378288!3d50.62419562675039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f14a1d55eda4b%3A0x32eb6d0eca9b5245!2z0ITQstCw!5e0!3m2!1suk!2sua!4v1681219585785!5m2!1suk!2sua"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="google map"
            variants={TextAnimationOpacity}
          ></Map>
          <Wrapper variants={TextAnimationDawn}>
            <WrapperInfo>
              <InfoTitle>Адреса</InfoTitle>
              <LinkInfo
                target="blank"
                href="https://www.google.com/maps?ll=50.624192,26.285828&z=17&t=m&hl=uk&gl=UA&mapclient=embed&cid=3669146231719547461"
              >
                м. Рівне вул. Костромська 41
              </LinkInfo>
            </WrapperInfo>
            <WrapperInfo>
              <InfoTitle>Email</InfoTitle>
              <LinkInfo href="mailto:nowhere@mozilla.org">
                nowhere@mozilla.org
              </LinkInfo>
            </WrapperInfo>
            <WrapperInfo>
              <InfoTitle>Телефон</InfoTitle>
              <LinkInfo href="tel:+380973582966">+38 097 35 82 966</LinkInfo>
            </WrapperInfo>
            <WrapperInfo>
              <InfoTitle>Час роботи</InfoTitle>
              <TextInfo>з 08:00 до 22:00</TextInfo>
            </WrapperInfo>
            <WrapperSocial
              style={{ padding: '15px', justifyContent: 'center' }}
            >
              <SocialList>
                <SocialItem>
                  <SocialLink href="https://www.instagram.com/" target="_blank">
                    <ItemWrapper>
                      <InstagramItem />
                    </ItemWrapper>
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink
                    href="https://uk-ua.facebook.com/"
                    target="_blank"
                  >
                    <ItemWrapper>
                      <TelegramItem />
                    </ItemWrapper>
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink
                    href="https://web.telegram.org/k/"
                    target="_blank"
                  >
                    <ItemWrapper>
                      <FacebookItem />
                    </ItemWrapper>
                  </SocialLink>
                </SocialItem>
              </SocialList>
            </WrapperSocial>
          </Wrapper>
        </WrapperMap>
      </Container>
    </Section>
  );
};

export default Contacts;
