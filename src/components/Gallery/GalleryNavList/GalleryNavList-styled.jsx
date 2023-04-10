import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 120px;
  padding-bottom: 350px;
  background: #8e9eab; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eef2f3,
    #8e9eab
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eef2f3,
    #8e9eab
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const Item = styled.li`
  width: auto;
  border-radius: 2px;
  transition: all 350ms ease-in-out;
  &:hover {
    scale: 0.9;
  }
  &:hover Img {
    filter: grayscale(0.8);
  }
  @media screen and (max-width: 767px) {
    &:not(last-child) {
      margin-bottom: 20px;
    }
  }
`;
export const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 767px) {
    max-height: 500px;
  }
  @media screen and (min-width: 768px) {
    max-height: 550px;
  }
`;
export const ItemLink = styled(Link)``;
export const WrapperImg = styled.div``;
