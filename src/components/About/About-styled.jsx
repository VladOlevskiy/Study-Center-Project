import styled from 'styled-components';
import { ParallaxBanner } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

export const ParallaxEl = styled(ParallaxBanner)`
  height: 85vh;
`;

export const Section = styled(motion.section)`
  background-image: linear-gradient(
    to right,
    rgb(238, 242, 243),
    rgb(142, 158, 171)
  );
  padding-top: 80px;
  padding-bottom: 50px;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.h2`
  font-size: 40px;
  text-align: center;
`;

export const WrapperVideo = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WrapperContent = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.23);
`;

export const TitleContent = styled.h3`
  font-size: 26px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.33);
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const TextContent = styled.p`
  font-size: 18px;
`;

export const WrapperText = styled(motion.div)`
  position: absolute;
  right: 40px;
  padding: 35px;
  background-image: linear-gradient(
    to right,
    rgba(238, 242, 243, 0.3),
    rgba(142, 158, 171, 0.7)
  );
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 30px;
  backdrop-filter: blur(32px);
  border-radius: 30px;
  width: 600px;
  @media screen and (max-width: 767px) {
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 500px;
  }
`;
