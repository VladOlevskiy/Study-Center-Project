import styled from 'styled-components';
import { motion } from 'framer-motion';
import { formaBg } from 'media';
import { Field, Form as FormFormik } from 'formik';

export const Section = styled(motion.section)`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Title = styled(motion.h2)`
  color: ${p => p.theme.colors.whiteText};
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  margin-bottom: 40px;
`;

export const MainWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const ImgWrapper = styled(motion.div)`
  background-image: url(${formaBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  min-width: 291px;
  min-height: 350px;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 20px;
  }
  @media screen and (min-width: 1279px) {
    width: 50%;
    height: 500px;
    margin-right: 60px;
  }
`;

export const ContactWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1280px) {
    width: 50%;
  }
`;

export const Form = styled(FormFormik)``;

export const BoxInput = styled(motion.div)`
  position: relative;
  height: 35px;
  background-color: white;
  min-width: 291px;
  border-radius: 10px;
  transition: background-color 300ms;
  @media screen and (max-width: 767px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 35px;
  }
`;

export const BoxInputEmailPhone = styled(motion.div)`
  position: relative;
  background-color: white;
  height: 35px;
  border-radius: 10px;
  transition: background-color 300ms;
  @media screen and (max-width: 767px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    &:first-child {
      margin-right: 10px;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    &:first-child {
      margin-right: 25px;
    }
  }
`;

export const BoxInputMessage = styled(motion.div)`
  position: relative;
  height: 35px;
  background-color: white;
  min-width: 291px;
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    margin-bottom: 25px;
  }
  transition: background-color 300ms;
  @media screen and (min-width: 768px) {
    margin-bottom: 35px;
    width: 100%;
    height: 90px;
  }
`;
export const PlaceHolder = styled.span`
  font-size: 13px;
  position: absolute;
  padding: 5px;
  top: 5px;
  left: 1px;
  display: inline-block;
  color: #00000080;
  pointer-events: none;
  transition: transform 300ms, color 300ms;
  @media screen and (min-width: 1280px) {
    top: 1px;
    font-size: 16px;
    padding: 10px;
  }
`;

export const NameField = styled(Field)`
  position: absolute;
  padding: 7px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  transition: background-color 300ms;
  border-radius: 10px;
  outline: none;
  border: none;
  box-shadow: ${p => p.theme.colors.shadow};
  &:hover,
  &:focus,
  &:valid {
    color: white;
    background-color: ${p => p.theme.colors.backgroundSecond};
  }
  &:focus ~ ${PlaceHolder}, &:valid ~ ${PlaceHolder} {
    color: white;
    transform: translateY(-30px);
  }
  @media screen and (min-width: 768px) {
    &:focus ~ ${PlaceHolder}, &:valid ~ ${PlaceHolder} {
      color: white;
      transform: translateY(-35px);
    }
    width: 100%;
    /* height: 35px; */
  }
`;

export const TelField = styled(Field)`
  position: absolute;
  padding: 7px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  transition: background-color 300ms, scale 300ms;
  border-radius: 10px;

  outline: none;
  border: none;
  box-shadow: ${p => p.theme.colors.shadow};

  &:hover,
  &:focus,
  &:valid {
    color: white;
    background-color: ${p => p.theme.colors.backgroundSecond};
  }
  &:focus ~ ${PlaceHolder}, &:valid ~ ${PlaceHolder} {
    color: white;
    transform: translateY(-30px);
  }
  @media screen and (min-width: 768px) {
    &:focus ~ ${PlaceHolder}, &:valid ~ ${PlaceHolder} {
      color: white;
      transform: translateY(-35px);
    }
    width: 100%;
    /* height: 35px; */
  }
`;

export const EmailField = styled(Field)`
  position: absolute;
  padding: 7px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  transition: background-color 300ms, scale 300ms;
  border-radius: 10px;

  outline: none;
  border: none;
  box-shadow: ${p => p.theme.colors.shadow};

  &:hover,
  &:focus,
  &:valid {
    color: white;
    background-color: ${p => p.theme.colors.backgroundSecond};
  }
  &:focus ~ ${PlaceHolder}, &:valid ~ ${PlaceHolder} {
    color: white;
    transform: translateY(-30px);
  }
  @media screen and (min-width: 768px) {
    &:focus ~ ${PlaceHolder}, &:valid ~ ${PlaceHolder} {
      color: white;
      transform: translateY(-35px);
    }
    width: 100%;
    /* height: 35px; */
  }
`;

export const MessageField = styled(motion.Field)`
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  transition: background-color 300ms, scale 300ms;
  border-radius: 10px;

  outline: none;
  border: none;
  box-shadow: ${p => p.theme.colors.shadow};

  &:hover,
  &:focus,
  &:valid {
    color: white;
    background-color: ${p => p.theme.colors.backgroundSecond};
  }
  &:focus ~ ${PlaceHolder}, &:valid ~ ${PlaceHolder} {
    color: white;
    transform: translateY(-30px);
  }
  @media screen and (min-width: 768px) {
    &:focus ~ ${PlaceHolder}, &:valid ~ ${PlaceHolder} {
      color: white;
      transform: translateY(-35px);
    }
    width: 100%;
  }
`;

export const WrapperTelMail = styled(motion.div)`
  @media screen and (min-width: 768px) {
    margin-bottom: 35px;
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Button = styled(motion.button)`
  padding: 10px;
  width: 115px;
  height: 38px;
  border-radius: 15px;
  border: none;
  background-color: rgb(207 129 34);
  cursor: pointer;
  transition: color 300ms, scale 300ms;
  &:hover,
  &:focus {
    color: white;
    scale: 1.2;
  }
`;
