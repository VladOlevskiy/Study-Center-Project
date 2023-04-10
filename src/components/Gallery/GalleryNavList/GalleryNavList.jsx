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
} from './GalleryNavList-styled';

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
  console.log(mediaData);
  return (
    <Section>
      <Container>
        <h2 style={{ color: 'black' }}>GalleryNavList</h2>
        <List>
          {mediaData &&
            mediaData.map(category => (
              <Item>
                <h2>{category.name}</h2>
                <ItemLink to={`${category.id}`}>
                  <WrapperImg>
                    <Img
                      src={process.env.PUBLIC_URL + `${category.avatar}`}
                      alt="photo of worker"
                    />
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
