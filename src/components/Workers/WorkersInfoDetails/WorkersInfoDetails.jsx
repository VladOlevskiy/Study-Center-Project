import { Container } from 'styles/Container-styled';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import WorkersMedia from '../WorkersMedia/WorkersMedia';
import { motion } from 'framer-motion';

import {
  Section,
  WrapperMain,
  WrapperTitle,
  WrapperText,
  Title,
  TextEducation,
  TitleEducation,
  TextExperience,
  SectionWork,
  WrapperMainWork,
  WrapperListWork,
  TitleWork,
  ListWork,
  ItemWork,
  ItemText,
  Img,
  IconListItem,
  AmountPatients,
  SectionStudy,
  TitleStudy,
  TextStudy,
} from './WorkersInfoDetails-styled';

const TextAnimationUp = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.2,
    duration: 3,
  },
};

const TextAnimationRight = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.2,
    duration: 3,
  },
};

const TextAnimationLeft = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.2,
    duration: 3,
  },
};

const ProductDetails = ({ id }) => {
  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get('workersData.json');
        const data = response.data;
        const workerData = data.filter(worker => {
          return worker.id === Number(id);
        });
        console.log(workerData);
        setWorker(workerData);
        setLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, [id]);
  return (
    <>
      <Section>
        <Container>
          {worker && (
            <WrapperMain
              initial={'offscreen'}
              whileInView={'onscreen'}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.35 }}
            >
              <WrapperTitle variants={TextAnimationLeft}>
                <Title>{worker[0].fullName}</Title>
              </WrapperTitle>
              <WrapperText variants={TextAnimationRight}>
                <TitleEducation>Освіта:</TitleEducation>
                <TextEducation>{worker[0].education}</TextEducation>
                <TextExperience>{worker[0].experience} досвіду</TextExperience>
              </WrapperText>
            </WrapperMain>
          )}
        </Container>
      </Section>
      <SectionWork>
        <Container>
          <WrapperMainWork>
            {worker && (
              <>
                <WrapperListWork
                  initial={'offscreen'}
                  whileInView={'onscreen'}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ staggerChildren: 0.3 }}
                >
                  <TitleWork variants={TextAnimationLeft}>
                    Інформація про фахівця:
                  </TitleWork>
                  <ListWork>
                    {worker[0].practice.map((item, index) => {
                      return (
                        <ItemWork id={index} variants={TextAnimationLeft}>
                          <IconListItem />
                          <ItemText>{item}</ItemText>
                          {index === 1 && (
                            <AmountPatients>
                              Понад {worker[0].patientsAmount} пацієнтів на рік.
                            </AmountPatients>
                          )}
                        </ItemWork>
                      );
                    })}
                  </ListWork>
                </WrapperListWork>
                <motion.div
                  initial={'offscreen'}
                  whileInView={'onscreen'}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ staggerChildren: 0.35 }}
                >
                  <Img
                    variants={TextAnimationUp}
                    src={process.env.PUBLIC_URL + `${worker[0].photo}`}
                  />
                </motion.div>
              </>
            )}
          </WrapperMainWork>
        </Container>
      </SectionWork>
      <SectionStudy
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <Container>
          <TitleStudy variants={TextAnimationLeft}>
            Підвищення кваліфікації / навчання
          </TitleStudy>
          {worker && (
            <TextStudy variants={TextAnimationRight}>
              {worker[0].study}
            </TextStudy>
          )}
        </Container>
      </SectionStudy>
      {worker && <WorkersMedia data={worker[0]} />}
    </>
  );
};

export default ProductDetails;
