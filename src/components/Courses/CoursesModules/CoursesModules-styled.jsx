import styled from 'styled-components';
import { ImCheckmark2 } from 'react-icons/im';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${p => p.theme.colors.backgroundThird};
`;
export const Title = styled.h2`
  font-size: 30px;
  letter-spacing: 1.4px;
  text-align: center;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
export const ModulesList = styled.ul``;
export const ModulesListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const TextModuleItem = styled.p`
  font-size: 17px;
  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
  /* letter-spacing: 1.2px; */
`;
export const IconModulesListItem = styled(ImCheckmark2)`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  fill: rgb(224, 145, 50);
  flex-shrink: 0;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
