import React from 'react';

import ItemCard from '../../elements/ItemCard';
import data from '../../json/landingPage.json';

import { Container } from '../../elements/Container';

export default function Item() {
  return (
    <section className="items">
      <Container>
        <ItemCard itemData={data} />
      </Container>
    </section>
  );
}
