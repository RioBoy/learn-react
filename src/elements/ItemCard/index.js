import React from 'react';

import NumberFormat from 'react-number-format';

export default function ItemCard({ itemData }) {
  return (
    <div className="item-content">
      {itemData.items.map((item) => (
        <div className="card-item" key={item._id}>
          <div className="card-item-header">
            <div className="card-price">
              <NumberFormat
                value={item.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'IDR '}
              />
            </div>
            <img src={item.imageUrl} alt="item" />
          </div>
          <div className="card-mobile-view">
            <div className="card-item-body">
              <h3 className="item-title">{item.name}</h3>
              <p>
                {item.district}, {item.province}
              </p>
            </div>
            <div className="card-item-footer">
              <img src={item.avatar} alt="user" />
              <h5>{item.userName}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
