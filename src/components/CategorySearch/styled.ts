import styled from 'styled-components';

export const CategorySearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  max-width: 875px;
`;

export const InputWrapper = styled.div`
  flex: 1;
  background: #f6f9ff;
  display: flex;
  padding: 0 25px;
  align-items: center;
  justify-content: space-between;
`;
export const Input = styled.input`
  background: inherit;
  height: 50px;
  width: 95%;
  &::placeholder {
    color: #bdbdbd;
  }
`;
