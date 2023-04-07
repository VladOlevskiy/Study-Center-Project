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

const CoursesEducation = ({ course }) => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <WrapperTitle>
            <Title>{course.requires.title}</Title>
          </WrapperTitle>
          <WrapperText>
            <Icon />
            <Text>{course.requires.education}</Text>
          </WrapperText>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default CoursesEducation;
