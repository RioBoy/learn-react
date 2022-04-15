import React from 'react';

import Card from '../../elements/Card';
import data from '../../json/landingPage.json';

import { Container } from '../../elements/Container';

export default function Feature() {
  return (
    <section className="features">
      <Container>
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
          {data.features.map((feature, i) => (
            <Card
              type={feature.iconType}
              icon={feature.icon}
              title={feature.title}
              subTitle={feature.subTitle}
              key={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
