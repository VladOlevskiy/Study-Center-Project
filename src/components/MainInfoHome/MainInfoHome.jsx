import { Container } from '../../styles/Container-styled';
import {
  Section,
  MainWrapper,
  TitleMain,
  Title,
  WrapperItem,
  WrapperList,
  BoxInfoWorkTime,
  InfoWorkTime,
  BoxAddressInfo,
  TextAddressInfo,
  LinkAddressInfo,
  LinkTel,
  IconPhone,
  IconMap,
} from './MainInfoHome-styled';

const TextAnimation4 = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const MainInfoHome = () => {
  return (
    <Section initial="hidden" whileInView="visible">
      <Container>
        <MainWrapper custom={1} variants={TextAnimation4}>
          <TitleMain>Основна інформація про роботу центру</TitleMain>
          <WrapperList>
            <WrapperItem custom={2} variants={TextAnimation4}>
              <Title>Години роботи</Title>
              <BoxInfoWorkTime>
                <InfoWorkTime>Понеділок – П’ятниця</InfoWorkTime>
                <InfoWorkTime>9:00 – 19:00</InfoWorkTime>
              </BoxInfoWorkTime>
              <BoxInfoWorkTime>
                <InfoWorkTime>Субота</InfoWorkTime>
                <InfoWorkTime>9:00 – 17:00</InfoWorkTime>
              </BoxInfoWorkTime>
              <BoxInfoWorkTime>
                <InfoWorkTime>Неділя</InfoWorkTime>
                <InfoWorkTime>Вихідний</InfoWorkTime>
              </BoxInfoWorkTime>
            </WrapperItem>
            <WrapperItem custom={2} variants={TextAnimation4}>
              <Title>Контакти</Title>

              <LinkTel href="tel:+380973582966">
                <IconPhone />
                +38 097 358 2966
              </LinkTel>
            </WrapperItem>
            <WrapperItem custom={2} variants={TextAnimation4}>
              <Title>Наша адреса</Title>
              <BoxAddressInfo>
                <TextAddressInfo>м. Рівне вул. Костромська 41</TextAddressInfo>
                <LinkAddressInfo
                  href="https://www.google.com/maps/dir//%D0%84%D0%B2%D0%B0,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9A%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D0%B0,+%D0%A0%D1%96%D0%B2%D0%BD%D0%B5,+%D0%A0%D1%96%D0%B2%D0%BD%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@50.6241713,26.2157881,12z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x472f14a1d55eda4b:0x32eb6d0eca9b5245!2m2!1d26.2859441!2d50.6242009!3e2"
                  target="_blank"
                >
                  <IconMap />
                  Прокласти маршрут в навчальний центр
                </LinkAddressInfo>
              </BoxAddressInfo>
            </WrapperItem>
          </WrapperList>
        </MainWrapper>
      </Container>
    </Section>
  );
};

export default MainInfoHome;
