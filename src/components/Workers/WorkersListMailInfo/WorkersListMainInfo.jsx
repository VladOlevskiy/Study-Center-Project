import { Container } from 'styles/Container-styled';
import Workers from '../Workers';
import { photo_Malesh, photo_Grinchuk } from 'media';
// import aa from '../../../../public/ex.jpg';
import { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

import {
  Section,
  Title,
  WrapperMain,
  List,
  Item,
  WrapperTextInfo,
  WrapperPhotoInfo,
  Photo,
  FullNameText,
  MainInfoText,
  ExperienceText,
  LinkToDetailInfo,
} from './WorkersListMainInfo-styled';

const TextAnimation = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.2,
    duration: 5,
  },
};
const TextAnimation1 = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.2,
    duration: 1,
  },
};
const TextAnimation2 = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.2,
    duration: 1,
  },
};
const WorkersListMainInfo = ({ workers }) => {
  console.log(`${workers[0].photo}`);
  console.log(window.location.origin);
  return (
    <Section
      initial={'offscreen'}
      animate={'onscreen'}
      transition={{ staggerChildren: 0.1 }}
    >
      <Container>
        <Title variants={TextAnimation}>Спеціалісти клініки Eva</Title>
        <List>
          {workers && (
            <>
              {workers.map((worker, index) => (
                <Item
                  key={worker.id}
                  style={{ transform: worker.id % 2 === 0 && 'scaleX(-1)' }}
                  initial={'offscreen'}
                  whileInView={'onscreen'}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ staggerChildren: 0.7 }}
                >
                  <motion.div>
                    <WrapperPhotoInfo>
                      <Photo
                        src={process.env.PUBLIC_URL + `${worker.photo}`}
                        alt="photo of worker"
                        variants={TextAnimation}
                      />
                      <WrapperTextInfo
                        style={{
                          transform:
                            worker.id % 2 === 0 &&
                            'translate(92%, -50%) scaleX(-1)',
                        }}
                      >
                        <motion.div
                          variants={
                            worker.id % 2 !== 0
                              ? TextAnimation1
                              : TextAnimation2
                          }
                        >
                          <FullNameText>{worker.fullName}</FullNameText>
                          <MainInfoText>{worker.mainInfo}</MainInfoText>
                          <div
                            style={{
                              borderTop: '1px solid rgb(255 255 255 / 80%)',
                            }}
                          ></div>
                          <ExperienceText
                            style={{
                              textAlign: worker.id % 2 === 0 && 'start',
                            }}
                          >
                            {worker.experience} досвіду.
                          </ExperienceText>
                        </motion.div>
                        <motion.div
                          variants={
                            worker.id % 2 !== 0
                              ? TextAnimation1
                              : TextAnimation2
                          }
                        >
                          <LinkToDetailInfo to={`${worker.id}`}>
                            Link to detail
                          </LinkToDetailInfo>
                        </motion.div>
                      </WrapperTextInfo>
                    </WrapperPhotoInfo>
                  </motion.div>
                </Item>
              ))}
            </>
          )}
        </List>
      </Container>
    </Section>
  );
};

export default WorkersListMainInfo;

// <Item>
//   <WrapperPhotoInfo>
//     <Photo src={photo_Malesh} width="500px" alt="photo of worker" />
//     <WrapperTextInfo>
//       <FullNameText>asd</FullNameText>
//       <MainInfoText>asdfasdfasdfasdf</MainInfoText>
//       <ExperienceText>1 year</ExperienceText>
//       <LinkToDetailInfo>Link to detail</LinkToDetailInfo>
//     </WrapperTextInfo>
//   </WrapperPhotoInfo>
// </Item>
