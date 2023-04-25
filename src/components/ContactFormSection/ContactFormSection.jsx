import { Container } from '../../styles/Container-styled';
import {
  Section,
  MainWrapper,
  ImgWrapper,
  ContactWrapper,
  NameField,
  TelField,
  EmailField,
  MessageField,
  WrapperTelMail,
  Title,
  BoxInput,
  PlaceHolder,
  BoxInputEmailPhone,
  BoxInputMessage,
  Button,
} from './ContactFormSection-styled';
import { Formik, Form } from 'formik';

const TextAnimationContactFormSection = {
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

const ContactFormSection = ({
  color = '#424530',
  titleColor = 'white',
  containerOff = 'false',
}) => {
  return (
    <Section
      style={{ background: color }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <Container
        style={{
          paddingLeft: containerOff && '0px',
          paddingRight: containerOff && '0px',
        }}
      >
        <MainWrapper>
          <ImgWrapper custom={1} variants={TextAnimationContactFormSection} />
          <ContactWrapper>
            <Title
              style={{ color: titleColor }}
              custom={2}
              variants={TextAnimationContactFormSection}
            >
              Якщо у вас є питання надішліть запит, і ми з вами зв'яжемося
            </Title>
            <Formik initialValues={{ email: '', password: '' }}>
              <Form>
                <BoxInput custom={3} variants={TextAnimationContactFormSection}>
                  <NameField
                    type="text"
                    name="name"
                    required="required"
                    // placeholder="Введіть ваше ім'я"
                  />
                  <PlaceHolder>Введіть ваше ім'я</PlaceHolder>
                </BoxInput>
                <WrapperTelMail
                  custom={3}
                  variants={TextAnimationContactFormSection}
                >
                  <BoxInputEmailPhone>
                    <TelField
                      type="tel"
                      name="number"
                      required="required"
                      // placeholder="Введіть Ваш номер телефону"
                    />
                    <PlaceHolder>Введіть Ваш номер телефону</PlaceHolder>
                  </BoxInputEmailPhone>
                  <BoxInputEmailPhone
                    custom={3}
                    variants={TextAnimationContactFormSection}
                  >
                    <EmailField
                      type="text"
                      name="email"
                      required="required"
                      // placeholder="Введіть Ваш email"
                    />
                    <PlaceHolder>Введіть Ваш email</PlaceHolder>
                  </BoxInputEmailPhone>
                </WrapperTelMail>
                <BoxInputMessage
                  custom={3}
                  variants={TextAnimationContactFormSection}
                >
                  <MessageField
                    type="text"
                    name="massage"
                    // placeholder="Коментар"
                    as="textarea"
                    required="required"
                    custom={3}
                    variants={TextAnimationContactFormSection}
                  />
                  <PlaceHolder>Коментар</PlaceHolder>
                </BoxInputMessage>
                <Button
                  custom={4}
                  variants={TextAnimationContactFormSection}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Formik>
          </ContactWrapper>
        </MainWrapper>
      </Container>
    </Section>
  );
};

export default ContactFormSection;
