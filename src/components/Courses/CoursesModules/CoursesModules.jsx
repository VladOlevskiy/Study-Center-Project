import {
  Section,
  Title,
  ModulesList,
  ModulesListItem,
  TextModuleItem,
  IconModulesListItem,
} from './CoursesModules-styled';
import { Container } from 'styles/Container-styled';

const CoursesModules = ({ course }) => {
  console.log(course.blocks.includes);
  return (
    <Section>
      <Container>
        <Title>{course.blocks.title}</Title>
        <ModulesList>
          {course.blocks.includes.map(item => (
            <ModulesListItem>
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
