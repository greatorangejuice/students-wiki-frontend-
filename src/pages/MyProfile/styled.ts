import styled from 'styled-components';

import Button from 'components/Button';
import ReturnBack from 'components/ReturnBack';

type Props = {
  active?: boolean;
  placeholder?: string;
};

export const MyProfileSection = styled.div`
  background-color: #fff;
  padding-top: 76px;
  padding-bottom: 70px;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const StyledReturnBack = styled(ReturnBack)``;

export const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;

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

export const Sidebar = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;

  > :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const ProfileEditing = styled.div`
  color: ${({ active }: Props) => (active ? '#5474af' : '#c9cae4')};

  :hover {
    cursor: pointer;
  }
`;

export const ChangeAccount = styled.div<Props>`
  color: ${({ active }: Props) => (active ? '#5474af' : '#c9cae4')};

  :hover {
    cursor: pointer;
  }
`;

export const SocialNetworks = styled.div`
  color: ${({ active }: Props) => (active ? '#5474af' : '#c9cae4')};

  :hover {
    cursor: pointer;
  }
`;

export const ProfilePages = styled.div`
  margin-left: 140px;
  max-width: 685px;
  width: 100%;
`;

export const AccountPage = styled.div`
  margin-left: 140px;
  max-width: 685px;
  width: 100%;
`;

export const SocialNetworksPage = styled.div`
  margin-left: 140px;
  max-width: 685px;
  width: 100%;
`;

export const EditPage = styled.div``;

export const Title = styled.h3`
  font-family: 'Marmelad', sans-serif;
  font-size: 36px;
  color: #282828;
`;

export const ImageSection = styled.div`
  width: 170px;
`;

export const ImageLabel = styled.p`
  font-family: 'Marmelad', sans-serif;
  font-size: 18px;
  color: #282828;
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const EditImg = styled.div`
  display: flex;
  justify-content: space-between;
  color: #c9cae4;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-top: 25px;
  width: 100%;
`;

export const ChangeImg = styled.div``;

export const DeleteImg = styled.div``;

export const FieldLabel = styled.p`
  font-family: 'Marmelad', sans-serif;
  font-size: 18px;
  color: #282828;
  margin-top: 35px;
`;

export const InputField = styled.input<Props>`
  display: block;
  background-color: #f6f9ff;
  border: none;
  color: #bdbdbd;
  padding: 15px 22px;
  margin-top: 20px;
  width: 100%;

  ::placeholder {
    color: #bdbdbd;
  }
`;

export const Span = styled.span`
  font-size: 14px;
`;

export const TextareaField = styled.textarea.attrs(() => ({
  cols: 20,
}))<Props>`
  display: block;
  background-color: #f6f9ff;
  border: none;
  color: #bdbdbd;
  padding: 15px 22px;
  margin-top: 20px;
  width: 100%;
  height: 150px;
  resize: none;
`;

export const StyledButton = styled(Button)`
  background-color: #5474af;
  color: #fff;
  padding: 15px 55px;
  margin-top: 70px;
`;
