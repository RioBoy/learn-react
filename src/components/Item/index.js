import React from 'react';

import ItemCard from '../../elements/ItemCard';
import data from '../../json/landingPage.json';

export default function Item() {
  return (
    <section className="items">
      <div className="container">
        <ItemCard itemData={data} />
      </div>
    </section>
  );
}
