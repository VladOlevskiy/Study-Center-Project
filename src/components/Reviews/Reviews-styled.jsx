import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FcBusinessman } from 'react-icons/fc';
import { FcBusinesswoman } from 'react-icons/fc';
import { BsFillChatRightQuoteFill } from 'react-icons/bs';

export const Section = styled(motion.section)`
  padding-top: 50px;
  padding-bottom: 170px;
  background-color: ${p => p.theme.colors.backgroundSecond};
`;

export const UserNameText = styled.p`
  margin-top: 15px;
  font-size: 24px;
  font-weight: 500;
  color: ${p => p.theme.colors.mainText};
  text-align: center;
`;

export const Title = styled(motion.h2)`
  color: ${p => p.theme.colors.mainText};
  font-size: 36px;
  font-weight: 600px;
  text-align: center;
  margin-bottom: 20px;
`;

export const IconMan = styled(FcBusinessman)`
  width: 100px;
  height: 100px;
`;

export const IconWoman = styled(FcBusinesswoman)`
  width: 100px;
  height: 100px;
`;

export const IconDialog = styled(BsFillChatRightQuoteFill)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  fill: rgb(66, 69, 48);
`;

export const IconWrapper = styled.div`
  background: rgba(255, 255, 255, 0.36);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  width: 110px;
  height: 110px;
  /* background-color: white; */
  border-radius: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 29px;
  margin-left: auto;
  margin-right: auto;
`;

export const ItemSliderWrapper = styled(motion.div)`
  position: relative;
  height: 450px;
  padding: 15px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
`;

export const ReviewTextWrapper = styled.div`
  background: rgba(255, 255, 255, 0.36);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  position: relative;
  /* background-color: white; */
  /* box-shadow: ${p => p.theme.colors.shadow}; */
  padding: 20px;
  &::before {
    top: -29px;
    box-sizing: border-box;
    color: #ffffff;
    content: '';
    display: block;
    height: 30px;
    left: 47%;
    position: absolute;
    right: 445px;
    width: 30px;
    column-rule-color: #ffffff;
    perspective-origin: 15px 15px;
    transform-origin: 15px 15px;
    border-bottom: 30px solid #ffffff5c;
    border-left: 30px solid transparent;
    border-top: 0 solid transparent;
    border-right: 0 solid transparent;
    outline: #ffffff none 0;
  }
`;

export const TextReview = styled.p`
  font-style: italic;
  color: black;
  overflow: auto;
  max-height: 120px;
`;
