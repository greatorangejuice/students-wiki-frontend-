import styled from 'styled-components';

import Button from 'components/Button';

export const FeedbackSection = styled.section``;

export const Container = styled.div`
  max-width: 740px;
  margin: 0 auto;
  margin-top: 150px;
`;

export const Title = styled.h3`
  color: #fff;
  font-family: 'Marmelad', sans-serif;
  font-size: 16px;
  line-height: 25px;
`;

export const Label = styled.label`
  display: inline-block;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 19px;
  margin-top: 50px;
`;

export const Textarea = styled.textarea`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border: none;
  padding: 25px 17px;
  margin-top: 10px;
  resize: none;
  color: #bdbdbd;
  width: 740px;
  height: 350px;
`;

export const StyledButton = styled(Button)`
  background-color: #ffee54;
  color: #5474af;
  padding: 15px 55px;
  margin-top: 50px;
`;
