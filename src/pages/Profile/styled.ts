import styled from 'styled-components';

import AddButton from 'components/AddButton';
import ReturnBack from 'components/ReturnBack';

export const ProfileSection = styled.div`
  background-color: white;
  padding: 80px 0 150px 0;
  text-align: center;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const StyledReturnBack = styled(ReturnBack)`
  text-align: left;
`;

export const UserProfile = styled.div`
  position: relative;

  ::before,
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: rgba(84, 116, 175, 0.35);
    margin: 55px 0;
  }
`;

export const UserImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const UserName = styled.p`
  font-family: 'Marmelad', sans-serif;
  font-size: 36px;
  color: #282828;
  margin: 0 auto;
  margin-top: 130px;
  max-width: 576px;
`;

export const UserUniversity = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #5474af;
  margin-top: 10px;
`;

export const UserFaculty = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #5474af;
  margin-top: 10px;
`;

export const UserDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #282828;
  margin: 0 auto;
  margin-top: 20px;
  max-width: 576px;
`;

export const StyledAddButton = styled(AddButton)`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 86px;
`;
