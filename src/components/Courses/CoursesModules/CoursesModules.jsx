import {
  Section,
  Title,
  ModulesList,
  ModulesListItem,
  TextModuleItem,
  IconModulesListItem,
} from './CoursesModules-styled';
import { Container } from 'styles/Container-styled';
import { TextAnimationLeft } from '../../../animations/animation.jsx';

const CoursesModules = ({ course }) => {
  return (
    <Section
      initial={'offscreen'}
      whileInView={'onscreen'}
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.1, duration: 0.5 }}
    >
      <Container>
        <Title>{course.blocks.title}</Title>
        <ModulesList>
          {course.blocks.includes.map((item, index) => (
            <ModulesListItem key={index} variants={TextAnimationLeft}>
              <IconModulesListItem />
              <TextModuleItem>{item}</TextModuleItem>
            </ModulesListItem>
          ))}
        </ModulesList>
      </Container>
    </Section>
  );
};

export default CoursesModules;
