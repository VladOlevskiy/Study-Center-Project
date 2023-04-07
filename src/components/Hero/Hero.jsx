import { Container } from '../../styles/Container-styled';
import {
  Section,
  Title,
  Text,
  LinkButton,
  WrapperTitle,
  WrapperText,
  MainWrapper,
} from './Hero-styled';

const TextAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Hero = () => {
  return (
    <Section initial="hidden" whileInView="visible">
      <Container>
        <MainWrapper>
          <WrapperTitle custom={1} variants={TextAnimation}>
            <Title>HERO TITLE ABOUT STUDY CENTER</Title>
            <LinkButton to="/programs">Обрати навчальну програму</LinkButton>
          </WrapperTitle>
          <WrapperText>
            <Text custom={2} variants={TextAnimation}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              voluptatum laborum autem ad officiis facere odio reprehenderit
              consequatur beatae cum provident soluta, laudantium animi porro
              blanditiis explicabo saepe harum illum! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ex placeat quibusdam
              laboriosam inventore amet velit hic cumque pariatur tempore
              veritatis quos nihil illum impedit exercitationem, fuga
              perferendis molestias quis totam.
            </Text>
          </WrapperText>
        </MainWrapper>
      </Container>
    </Section>
  );
};

export default Hero;
