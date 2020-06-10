import styled from 'styled-components';

export const SortWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 875px;
  span {
    color: #5474af;
    opacity: 0.9;
    position: relative;
    + svg {
      position: absolute;
      top: 70%;
      right: -17px;
      transform: translate(0, -70%);
    }
  }
`;

export const Sort = styled.button``;
