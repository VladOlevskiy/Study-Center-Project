import { Container } from 'styles/Container-styled';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import FsLightbox from 'fslightbox-react';
import {
  Section,
  List,
  Item,
  WrapperImg,
  Img,
  ButtonLink,
} from './GalleryPicuturesList-styled';
import { TextAnimationOpacityDelay } from '../../../animations/animation';

const GalleryPicuturesList = ({ id }) => {
  const [media, setMedia] = useState(null);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        // setLoading(true);
        const response = await axios.get(
          '/Study-Center-Project/mediaData.json'
        );
        const data = response.data;
        const mediaData = data.filter(category => {
          return category.id === Number(id);
        });
        console.log(mediaData);
        setMedia(mediaData);
        // setLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, [id]);
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
  let mediaArray = [];

  return (
    <Section initial="hidden" animate="visible">
      <Container>
        <ButtonLink to="/gallery">Назад</ButtonLink>
        <List>
          {media &&
            media[0].photos.map((photo, index) => {
              mediaArray.push(process.env.PUBLIC_URL + `${photo}`);
              return (
                <Item
                  custom={index}
                  variants={TextAnimationOpacityDelay}
                  id={index}
                  onClick={() => openLightboxOnSlide(index + 1)}
                >
                  <WrapperImg>
                    <Img
                      src={process.env.PUBLIC_URL + `${photo}`}
                      alt="photo of worker"
                    />
                  </WrapperImg>
                </Item>
              );
            })}
        </List>
        {media && (
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={mediaArray}
            slide={lightboxController.slide}
          />
        )}
      </Container>
    </Section>
  );
};

export default GalleryPicuturesList;
