import { Container } from '../../styles/Container-styled';
import { motion } from 'framer-motion';

import {
  Section,
  Title,
  TitleFeatureItem,
  Text,
  LinkButton,
  MainWrapper,
  TitleWrapper,
  FeaturesListWrapper,
  FeatureList,
  FeatureItem,
  FeatureItemIcon1,
  FeatureItemIcon2,
  FeatureItemIcon3,
  FeatureItemIcon4,
  FeatureItemThumb,
} from './Features-styled';

const TextAnimation1 = {
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

const Features = () => {
  return (
    <Section initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
      <Container>
        <MainWrapper>
          <TitleWrapper custom={2} variants={TextAnimation1}>
            <Title style={{ color: 'rgb(59 68 0)' }}>Наші переваги</Title>
            <Text style={{ color: 'black' }}>
              Текст — середній елемент схеми комунікації, яку можна уявити у
              вигляді триелементної структури: автор (адресант) → текст → читач
              (адресат). Як серединний (проміжний) елемент комунікативного акту
              текст виявляє свою специфіку у кодуванні і декодуванні.
            </Text>
            <LinkButton to="/programs">Дізнатися більше</LinkButton>
          </TitleWrapper>
          <FeaturesListWrapper>
            <FeatureList>
              <FeatureItem>
                <FeatureItemThumb>
                  <motion.div custom={1} variants={TextAnimation1}>
                    <FeatureItemIcon1 />
                  </motion.div>
                  <TitleFeatureItem custom={1} variants={TextAnimation1}>
                    Успішні випусники
                  </TitleFeatureItem>
                  <Text custom={1} variants={TextAnimation1}>
                    Текст — середній елемент схеми комунікації, яку можна уявити
                    у вигляді триелементної структури: автор (адресант) → текст
                    → читач (адресат). Як серединний (проміжний)
                  </Text>
                </FeatureItemThumb>
              </FeatureItem>
              <FeatureItem>
                <FeatureItemThumb>
                  <motion.div custom={1} variants={TextAnimation1}>
                    <FeatureItemIcon2 />
                  </motion.div>
                  <TitleFeatureItem custom={1} variants={TextAnimation1}>
                    Авторський матеріал для навчання
                  </TitleFeatureItem>
                  <Text custom={1} variants={TextAnimation1}>
                    Текст — середній елемент схеми комунікації, яку можна уявити
                    у вигляді триелементної структури: автор (адресант) → текст
                    → читач (адресат). Як серединний (проміжний) елемент
                    комунікативного акту текст виявляє свою специфіку у
                    кодуванні і декодуванні.
                  </Text>
                </FeatureItemThumb>
              </FeatureItem>
              <FeatureItem>
                <FeatureItemThumb>
                  <motion.div custom={1} variants={TextAnimation1}>
                    <FeatureItemIcon3 />
                  </motion.div>
                  <TitleFeatureItem custom={1} variants={TextAnimation1}>
                    Викладачі з досвідом
                  </TitleFeatureItem>
                  <Text custom={1} variants={TextAnimation1}>
                    Текст — середній елемент схеми комунікації, яку можна уявити
                    у вигляді триелементної структури: автор (адресант) → текст
                    → читач (адресат).
                  </Text>
                </FeatureItemThumb>
              </FeatureItem>
              <FeatureItem>
                <FeatureItemThumb>
                  <motion.div custom={1} variants={TextAnimation1}>
                    <FeatureItemIcon4 />
                  </motion.div>
                  <TitleFeatureItem custom={1} variants={TextAnimation1}>
                    Унікальна програма та практика
                  </TitleFeatureItem>
                  <Text custom={1} variants={TextAnimation1}>
                    Текст — середній елемент схеми комунікації, яку можна уявити
                    у вигляді триелементної структури: автор (адресант) → текст
                    → читач (адресат). Як серединний (проміжний) елемент
                    комунікативного акту текст виявляє свою специфіку у
                    кодуванні і декодуванні.
                  </Text>
                </FeatureItemThumb>
              </FeatureItem>
            </FeatureList>
          </FeaturesListWrapper>
        </MainWrapper>
      </Container>
    </Section>
  );
};

export default Features;
