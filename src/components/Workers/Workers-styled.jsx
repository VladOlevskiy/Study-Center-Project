import styled from 'styled-components';
import { workers_img } from 'media';

export const SectionWithBackground = styled.section`
  padding-top: 120px;
  padding-bottom: 60px;
  background-image: url(${workers_img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  height: 80vh;
`;

export const Section = styled.section`
  background-color: ${p => p.theme.colors.backgroundThird};
  padding-top: 40px;
  padding-bottom: 150px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 1.4px;
  color: white;
  text-align: left;
`;

export const WrapperMain = styled.div``;
export const WrapperTextInfo = styled.div``;
export const WrapperPhotoInfo = styled.div``;
export const Photo = styled.img``;
