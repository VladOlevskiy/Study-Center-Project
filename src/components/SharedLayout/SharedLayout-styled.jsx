import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Loader = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background-color: ${p => p.theme.colors.backgroundThird};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
