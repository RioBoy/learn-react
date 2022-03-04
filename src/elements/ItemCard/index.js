import React from 'react';

export default function ItemCard({ ItemCardPic, items }) {
  return (
    <div className="item-content">
      {items.map((item, i) => (
        <div className="card-item" key={i}>
          <div className="card-item-header">
            <div className="card-price">
              <span>{item.price}</span>
            </div>
            <img src={ItemCardPic} alt="item" />
          </div>
          <div className="card-mobile-view">
            <div className="card-item-body">
              <h3 className="item-title">{item.title}</h3>
              <p>{item.location}</p>
            </div>
            <div className="card-item-footer">
              <img src={ItemCardPic} alt="user" />
              <h5>{item.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
