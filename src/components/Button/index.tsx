import React from 'react';

import StyledButton from './styled';

export interface Props {
  className?: string;
  children?: string;
  rest?: object;
}

const Button = ({ className, children, ...rest }: Props) => (
  <StyledButton {...rest} className={className}>
    {children}
  </StyledButton>
);

export default Button;
