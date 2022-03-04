import React from 'react';

import ItemCard from '../../elements/ItemCard';

export default function Item({ itemPic }) {
  const items = [
    {
      price: 'Rp 700.000',
      title: 'This is Item',
      location: 'Kayu Putih, Kupang',
      name: 'Rio Boy',
    },
    {
      price: 'Rp 500.000',
      title: 'This is Item',
      location: 'Kayu Putih, Kupang',
      name: 'Rio Boy',
    },
    {
      price: 'Rp 300.000',
      title: 'This is Item',
      location: 'Kayu Putih, Kupang',
      name: 'Rio Boy',
    },
    {
      price: 'Rp 700.000',
      title: 'This is Item',
      location: 'Kayu Putih, Kupang',
      name: 'Rio Boy',
    },
    {
      price: 'Rp 500.000',
      title: 'This is Item',
      location: 'Kayu Putih, Kupang',
      name: 'Rio Boy',
    },
    {
      price: 'Rp 300.000',
      title: 'This is Item',
      location: 'Kayu Putih, Kupang',
      name: 'Rio Boy',
    },
  ];

  return (
    <section className="items">
      <div className="container">
        <ItemCard ItemCardPic={itemPic} items={items} />
      </div>
    </section>
  );
}
