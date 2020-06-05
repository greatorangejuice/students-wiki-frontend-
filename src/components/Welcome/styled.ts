import styled from 'styled-components';

type props = {
  active?: string;
};

export const Welcome = styled.section`
  height: 300px;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;

export const BreadCrumbsList = styled.ul`
  display: flex;
`;
export const BreadCrumbsItem = styled.li`
  font-family: 'Marmelad', Arial, sans-serif;
  margin-right: 36px;
  position: relative;
  color: ${({ active }: props) => (active ? 'yellow' : '#E2E2E2')};
  opacity: ${({ active }: props) => (active ? '1' : 0.7)};
  &::before {
    content: '';
    position: absolute;
    height: 4px;
    width: 4px;
    background: #b8bed2;
    transform: rotate(45deg) translate(0, -50%);
    top: 50%;
    right: -18px;
  }
  &:last-child {
    margin-right: 0;
    &::before {
      content: none;
    }
  }
`;
