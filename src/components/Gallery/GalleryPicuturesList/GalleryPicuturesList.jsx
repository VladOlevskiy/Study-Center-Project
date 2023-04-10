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
} from './GalleryPicuturesList-styled';

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
  let aa = [];
  return (
    <Section>
      <Container>
        <h2>GalleryPicuturesList</h2>
        <List>
          {media &&
            media[0].photos.map((photo, index) => {
              aa.push(process.env.PUBLIC_URL + `${photo}`);
              return (
                <Item onClick={() => openLightboxOnSlide(index + 1)}>
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
            sources={aa}
            slide={lightboxController.slide}
          />
        )}
      </Container>
    </Section>
  );
};

export default GalleryPicuturesList;
