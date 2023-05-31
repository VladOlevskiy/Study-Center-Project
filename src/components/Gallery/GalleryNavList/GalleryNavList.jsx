import { Container } from 'styles/Container-styled';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
  Section,
  List,
  Item,
  ItemLink,
  WrapperImg,
  Img,
  WrapperText,
  TextCategory,
} from './GalleryNavList-styled';
import { TextAnimationOpacity } from '../../../animations/animation';

const GalleryNavList = () => {
  const [mediaData, setMediaData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        // setLoading(true);
        const response = await axios.get('mediaData.json');
        const data = response.data;
        setMediaData(data);
        // setLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <Section>
      <Container>
        <List initial={'offscreen'} animate={'onscreen'}>
          {mediaData &&
            mediaData.map((category, index) => (
              <Item key={index} variants={TextAnimationOpacity}>
                <ItemLink to={`${category.id}`}>
                  <WrapperImg>
                    <Img
                      src={process.env.PUBLIC_URL + `${category.avatar}`}
                      alt="photo of worker"
                    />
                    <WrapperText>
                      <TextCategory>{category.name}</TextCategory>
                    </WrapperText>
                  </WrapperImg>
                </ItemLink>
              </Item>
            ))}
        </List>
      </Container>
    </Section>
  );
};

export default GalleryNavList;
