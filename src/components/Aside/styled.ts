import styled from 'styled-components';

export const AsideItem = styled.div`
  width: 464px;
  background: #f7f9ff;
  padding: 53px 32px 53px 67px;
  margin-bottom: 40px;
`;

export const Heading = styled.h3`
  font-family: 'Marmelad', Arial, sans-serif;
  font-size: 28px;
  line-height: 33px;
  color: #000000;
  margin-bottom: 40px;
`;

export const LinksWrapperScroll = styled.div`
  height: 400px;
  overflow-y: auto;
  margin-bottom: 35px;
  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: #c4c4c4;
  }

  ::-webkit-scrollbar-thumb {
    background: #5474af;
  }
`;
export const LinksWrapper = styled.ul`
  height: 100%;
`;
export const LinksItem = styled.li`
  margin-bottom: 20px;
`;
export const Link = styled.a`
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: normal;
  font-size: 16px;
  max-width: 300px;
  display: block;
  line-height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
