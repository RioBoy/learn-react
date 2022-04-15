import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 150px;
  display: grid;

  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const ContainerFluid = styled.div`
  margin: 0;
`;
