import {
  Section,
  Wrapper,
  Title,
  WrapperTitle,
  WrapperText,
  Icon,
  Text,
} from './CoursesEducation-styled';
import { Container } from 'styles/Container-styled';
import { TextAnimationUp } from '../../../animations/animation.jsx';

const CoursesEducation = ({ course }) => {
  return (
    <Section
      initial={'offscreen'}
      whileInView={'onscreen'}
      exit={{ opacity: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.1, duration: 0.8 }}
    >
      <Container>
        <Wrapper>
          <WrapperTitle>
            <Title>{course.requires.title}</Title>
          </WrapperTitle>
          <WrapperText variants={TextAnimationUp}>
            <Icon />
            <Text>{course.requires.education}</Text>
          </WrapperText>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default CoursesEducation;
