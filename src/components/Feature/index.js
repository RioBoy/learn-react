import React from 'react';

import Card from '../../elements/Card';
import data from '../../json/landingPage.json';

import { Container } from '../../elements/Container';
import {
  FeatureContent,
  FeatureStyled,
  FeatureTitle,
  TitleHeading,
  TitleSpan,
} from './styled';

export default function Feature() {
  return (
    <FeatureStyled>
      <Container>
        <FeatureTitle>
          <TitleHeading>
            Lorem Ipsum is simply dummy text of the printing{' '}
            <TitleSpan>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </TitleSpan>
          </TitleHeading>
        </FeatureTitle>
        <FeatureContent>
          {data.features.map((feature, i) => (
            <Card
              type={feature.iconType}
              icon={feature.icon}
              title={feature.title}
              subTitle={feature.subTitle}
              key={i}
            />
          ))}
        </FeatureContent>
      </Container>
    </FeatureStyled>
  );
}
