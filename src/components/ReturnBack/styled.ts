import styled from 'styled-components';

import { ReactComponent as Arrow } from 'assets/images/arrow.svg';

export const Return = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #c9cae4;
  position: relative;
  padding-left: 15px;
`;

export const StyledArrow = styled(Arrow)`
  width: 10px;
  transform: rotate(90deg);
  position: absolute;
  top: 35%;
  left: 0;

  path {
    stroke: #c9cae4;
  }
`;
