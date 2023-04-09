import {
  Section,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Title,
  List,
  ListItem,
  ListItemText,
} from './CoursesWhyUs-styled';
import { Container } from 'styles/Container-styled';
import { TextAnimationLeft } from '../../../animations/animation.jsx';

const CoursesWhyUs = () => {
  return (
    <Section
      initial={'offscreen'}
      whileInView={'onscreen'}
      exit={{ opacity: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.25, duration: 0.8 }}
    >
      <Container>
        <Title>Чому варто обрати нас ?</Title>
        <List>
          <ListItem variants={TextAnimationLeft}>
            <Icon1 />
            <ListItemText>
              Унікальний метеріал. Лише авторські курси від топових фахівців. Ми
              зібрали найбільш цікавий матеріал;
            </ListItemText>
          </ListItem>
          <ListItem variants={TextAnimationLeft}>
            <Icon2 />
            <ListItemText>
              Актуалність. Хоч ми і маємо великий практичний досвід та подаємо
              виключно сучасні та передові методики;
            </ListItemText>
          </ListItem>
          <ListItem variants={TextAnimationLeft}>
            <Icon3 />
            <ListItemText>
              Швидка імплементація. На наступний день після закінчення навчання
              Ви застосуєте свої знання на практиці;
            </ListItemText>
          </ListItem>
          <ListItem variants={TextAnimationLeft}>
            <Icon4 />
            <ListItemText>
              Престиж. Це одна з професій яка завжди має достатньо попиту,
              постійно розвивається і не стоїть на місці;
            </ListItemText>
          </ListItem>
          <ListItem variants={TextAnimationLeft}>
            <Icon5 />
            <ListItemText>
              Індивідуальний підхів. Навчання в невеликих групах до 5 чоловік.
            </ListItemText>
          </ListItem>
        </List>
      </Container>
    </Section>
  );
};

export default CoursesWhyUs;
