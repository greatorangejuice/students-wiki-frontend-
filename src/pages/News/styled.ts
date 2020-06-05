import styled from 'styled-components';

import Button from 'components/Button';
import unicorn from 'assets/unicorn.svg';

export const Ul = styled.ul`
  padding-bottom: 30px;
`;

export const Li = styled.li``;

export const NewsItem = styled.section`
  padding-top: 80px;

  &::after {
    content: '';
    background-color: #5474af;
    opacity: 0.35;
    display: block;
    width: 100%;
    height: 2px;
    margin-top: 80px;
  }
`;

export const NewsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const NewsTitle = styled.div`
  font-family: 'Marmelad', sans-serif;
  font-size: 36px;
  color: #282828;
  display: flex;
  justify-content: space-between;

  &::before {
    content: url(${unicorn});
    width: 34px;
    height: 34px;
    margin-right: 30px;
  }
`;

export const NewsRating = styled.div`
  display: flex;
  justify-content: space-between;
  color: #a6a6d2;

  & > div > svg {
    padding-right: 5px;
  }
`;

export const Comments = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
`;

export const Favorites = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
`;

export const NewsText = styled.div`
  color: #282828;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

export const ReadMore = styled(Button)`
  border: none;
  background-color: #5474af;
  color: #fff;
  padding: 15px 37px;
  margin-top: 90px;

  :hover {
    background-color: #415b86;
  }
  :active {
    background-color: #314365;
  }
`;

export const Published = styled.div`
  color: #c9cae4;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  text-align: end;
`;
