import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const Heading = styled.h1`
<<<<<<< HEAD:src/pages/Signup/styled.ts
  font-family: 'Marmelad', 'Roboto', sans-serif;
  font-weight: normal;
=======
>>>>>>> e2bec89a61216bf6c10500547909aa432085b8e0:src/pages/Auth/Styles/index.ts
  color: #ffee54;
  margin-bottom: 30px;
`;

export const FormWrapper = styled.div`
  width: 578px;
  display: flex;
  flex-direction: column;
`;

export const OAuthWrapper = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;

export const OAuth = styled.li`
  margin-right: 30px;
  a {
    position: relative;
    display: flex;

    width: 50px;
    height: 50px;
    position: relative;
    align-items: center;
    justify-content: center;
    img {
      position: relative;
    }
    &::before {
      content: '';
      width: 35px;
      height: 35px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background: white;
    }
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const InputTopHelper = styled.span`
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 19px;
  color: #fff;
  margin-bottom: 10px;
`;
export const InputBottomHelper = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  margin-left: auto;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.62);
`;

export const Input = styled.input`
  box-shadow: none;
  border: none;
  border-radius: none;
  padding: 15px 7px;
  &::placeholder {
    color: #bdbdbd;
  }
`;

export const SubmitAndRedirect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Submit = styled.button`
  font-family: 'Roboto', Arial, sans-serif;
  width: 190px;
  padding: 16px 0;
  border: none;
  background: #ffee54;
  color: #5474af;
`;

export const Link = styled(NavLink)`
  font-family: 'Roboto', Arial, sans-serif;
  color: rgba(255, 255, 255, 0.62);
  text-decoration: none;
`;

export const LinkSpan = styled.span`
  color: #ffee54;
`;
