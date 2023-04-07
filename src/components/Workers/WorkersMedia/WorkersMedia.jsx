import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { photo_Malesh, photo_Grinchuk } from 'media';
import { Container } from 'styles/Container-styled';
import { Section, Title, List, Item, Img } from './WorkersMedia-styled';

const TextAnimationUp = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.3,
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
    bounce: 0.3,
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
    bounce: 0.3,
    duration: 3,
  },
};
const WorkersMedia = ({ data }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const openLightboxOnSlide = number => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };
  let aa = [];

  return (
    <Section
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <Container>
        <Title variants={TextAnimationLeft}>Сертифікати:</Title>
        <List>
          {data &&
            data.diplomas.map((photo, index) => {
              aa.push(process.env.PUBLIC_URL + `${photo}`);
              return (
                <Item
                  variants={TextAnimationUp}
                  onClick={() => openLightboxOnSlide(index + 1)}
                >
                  <Img src={process.env.PUBLIC_URL + `${photo}`} alt="" />
                </Item>
              );
            })}
        </List>
        {data && (
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={aa}
            slide={lightboxController.slide}
          />
        )}
      </Container>
    </Section>
  );
};

export default WorkersMedia;
