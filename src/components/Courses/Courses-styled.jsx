import styled from 'styled-components';
import { backgroundCourses } from 'media';
import { motion } from 'framer-motion';
import { GiCheckMark } from 'react-icons/gi';
import { MdTaskAlt } from 'react-icons/gi';

export const Wrapper = styled.div`
  position: relative;
`;

export const SectionOne = styled.section`
  padding-top: 140px;
  padding-bottom: 150px;
  background-image: linear-gradient(
      rgba(47, 48, 58, -0.6),
      rgba(47, 48, 58, 0.7)
    ),
    url(${backgroundCourses});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;
export const SectionTwo = styled.section`
  padding-top: 160px;
  padding-bottom: 160px;
  background-color: ${p => p.theme.colors.backgroundThird};
`;
export const Title = styled.h2`
  font-size: 30px;
  color: #000000;
  margin-bottom: 29px;
  font-weight: 1000;
  text-align: center;
  letter-spacing: 1.4px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
export const WrapperList = styled.div`
  margin-bottom: 455px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-bottom: 715px;
  }
`;
export const CoursesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const CoursesItem = styled.li`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 15px;
      margin-right: 10px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    &:not(:last-child) {
      margin-bottom: 17px;
    }
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 40px;
    }
    &:first-child {
      margin-bottom: 25px;
    }
  }
`;
export const ButtonFilter = styled.button`
  width: 180px;
  height: 90px;
  color: white;
  padding: 10px;
  background-color: white;
  border-radius: 85px;
  border: none;
  cursor: pointer;
  background: rgb(0 0 0 / 50%);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 30px;
  backdrop-filter: blur(31px);
  transition: background-color 300ms, scale 300ms;
  &:hover,
  &:focus {
    background-color: rgba(245, 146, 86, 1);
    scale: 1.1;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 134px;
    height: 73px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
    width: 201px;
    height: 63px;
    padding: 10px;
    border-radius: 85px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 17px;
    width: 252px;
    height: 60px;
    padding: 10px;
    border-radius: 85px;
  }
`;

export const WrapperContent = styled.div`
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    top: 255px;
  }
`;
export const WrapperMainInfo = styled(motion.div)`
  border-radius: 10px;

  width: 85%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  background: rgb(0 0 0 / 28%);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 30px;
  backdrop-filter: blur(16px);
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    top: 255px;
    width: 100%;
  }
`;
export const WrapperInfo = styled.div`
  border-radius: 10px;
  position: relative;
  padding: 15px;
  width: 55%;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;
export const WrapperInfoImg = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  width: 45%;
  height: 400px;
  background-color: inherit;
  overflow: hidden;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;
export const TextInfo = styled.p`
  color: rgb(224, 145, 50);
  font-size: 17px;
  @media screen and (min-width: 768px) {
    font-size: 19px;
    letter-spacing: 1.2px;
  }
`;

export const NameCourse = styled.h3`
  text-align: center;
  font-size: 25px;
  letter-spacing: 1.5px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 20px;
    font-size: 23px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 25px;
    width: 90%;
  }
  @media screen and (min-width: 1280px) {
    font-size: 26px;
    letter-spacing: 1.5px;
    margin-bottom: 35px;
    width: 80%;
  }
`;
export const WrapperCourseInfoList = styled.div``;
export const CourseInfoList = styled.ul``;
export const CourseInfoItem = styled.li``;
export const PriceWrapper = styled.div`
  position: absolute;
  padding: 8px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 100%;
  background-color: rgba(245, 146, 86, 1);
  @media screen and (min-width: 320px) and (max-width: 767px) {
    top: 89%;
    right: 50%;
    transform: translateX(50%);
    width: 60px;
    height: 60px;
    font-size: 15px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 60px;
    height: 60px;
    font-size: 15px;
  }
`;
export const PriceField = styled.p`
  font-weight: 700;
  text-align: center;
  @media screen and (min-width: 1280px) {
    font-size: 17px;
  }
`;
export const IconItemList1 = styled(GiCheckMark)`
  fill: green;
  margin-right: 5px;
`;

export const TilteOfField = styled.h4`
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600px;
  letter-spacing: 1.5px;
`;

export const WrapperField = styled.div`
  display: flex;
  align-items: baseline;
`;

export const FeaturesList = styled.ul`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;
export const FeaturesListItem = styled.li`
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
