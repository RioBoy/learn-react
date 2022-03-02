import React from 'react';

import Card from '../../elements/Card';

export default function Feature() {
  const icons = [
    {
      type: 'fab',
      name: 'fa-amazon',
    },
    {
      type: 'fab',
      name: 'fa-aws',
    },
    {
      type: 'fab',
      name: 'fa-amazon-pay',
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="title">
          <h3>
            Lorem Ipsum is simply dummy text of the printing{' '}
            <span>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </span>
          </h3>
        </div>
        <div className="features-content">
          {icons.map((icon, i) => (
            <Card type={icon.type} name={icon.name} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
