import styled from 'styled-components';
import { TbHexagonNumber1 } from 'react-icons/tb';
import { TbHexagonNumber2 } from 'react-icons/tb';
import { TbHexagonNumber3 } from 'react-icons/tb';
import { TbHexagonNumber4 } from 'react-icons/tb';
import { TbHexagonNumber5 } from 'react-icons/tb';

export const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${p => p.theme.colors.backgroundMain};
`;

export const Title = styled.h2`
  font-size: 30px;
  letter-spacing: 1.4;
  text-align: center;
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  display: flex;
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    align-items: flex-start;
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: calc((100% - 30px) / 2);
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    &:nth-child(2n) {
      margin-left: 30px;
    }
  }
  @media screen and (min-width: 1280px) {
    align-items: center;
    width: calc((100% - 30px) / 2);
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    &:nth-child(2n) {
      margin-left: 30px;
    }
  }
`;
export const ListItemText = styled.p`
  font-size: 17px;
  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
`;
export const Icon1 = styled(TbHexagonNumber1)`
  height: 60px;
  width: 60px;
  fill: rgb(255, 255, 255);
  color: rgb(66, 69, 48);
  flex-shrink: 0;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    height: 75px;
    width: 75px;
  }
`;
export const Icon2 = styled(TbHexagonNumber2)`
  height: 60px;
  width: 60px;
  fill: rgb(255, 255, 255);
  color: rgb(66, 69, 48);
  flex-shrink: 0;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    height: 75px;
    width: 75px;
  }
`;
export const Icon3 = styled(TbHexagonNumber3)`
  height: 60px;
  width: 60px;
  fill: rgb(255, 255, 255);
  color: rgb(66, 69, 48);
  flex-shrink: 0;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    height: 75px;
    width: 75px;
  }
`;
export const Icon4 = styled(TbHexagonNumber4)`
  height: 60px;
  width: 60px;
  fill: rgb(255, 255, 255);
  color: rgb(66, 69, 48);
  flex-shrink: 0;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    height: 75px;
    width: 75px;
  }
`;
export const Icon5 = styled(TbHexagonNumber5)`
  height: 60px;
  width: 60px;
  fill: rgb(255, 255, 255);
  color: rgb(66, 69, 48);
  flex-shrink: 0;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    height: 75px;
    width: 75px;
  }
`;
