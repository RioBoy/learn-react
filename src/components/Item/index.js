import React from 'react';

import ItemCard from '../../elements/ItemCard';
import data from '../../json/landingPage.json';
import styled from 'styled-components';

import { Container } from '../../elements/Container';

const ItemStyled = styled.section`
  background-color: inherit;
`;

export default function Item() {
  return (
    <ItemStyled>
      <Container>
        <ItemCard itemData={data} />
      </Container>
    </ItemStyled>
  );
}
