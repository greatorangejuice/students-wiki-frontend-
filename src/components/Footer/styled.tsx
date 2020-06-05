import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Marmelad', sans-serif;
  line-height: 50px;
  min-height: 110px;
  padding: 0 10px;
`;

export const Container = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

export const Links = styled.div`
  color: #fff;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 40%;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 60px;

  :nth-child(4n) {
    margin-right: 0;
  }
`;

export const Copyright = styled.div`
  color: #fff;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Paragraph = styled.p`
  width: 100%;
`;
