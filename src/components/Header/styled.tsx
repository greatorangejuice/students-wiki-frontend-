import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Marmelad', sans-serif;
  border-bottom: 2px solid grey;
  max-height: 110px;
  min-height: 110px;
  padding: 0 10px;
`;

export const Container = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 24px;
  max-width: 185px;
`;

export const SpanBsuir = styled.span`
  display: block;
  font-size: 16px;
  opacity: 0.7;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  font-family: 'Marmelad', sans-serif;
  width: 100%;
  justify-content: space-between;
`;

export const Li = styled.li``;

export const UserPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 260px;
  width: 100%;
`;

export const SignUp = styled.span``;

export const SignIn = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 5px;
  }
`;
