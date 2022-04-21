import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';

const CardStyled = styled.div`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #b0b0b0;
  background-color: inherit;
  cursor: pointer;
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border: none;
    background-color: #fff;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  background-color: #398ab9;
`;

const CardBody = styled.div`
  text-align: center;
`;

const CardHeading = styled.h5`
  font-size: 24px;
`;

library.add(faAws, faAmazonPay, faAmazon);

export default function Card({ type, icon, title, subTitle }) {
  return (
    <CardStyled>
      <div className="card-header-wrapper">
        <CardHeader>
          <FontAwesomeIcon
            icon={[type, icon]}
            size="3x"
            style={{ color: 'white' }}
          />
        </CardHeader>
      </div>
      <CardBody>
        <CardHeading>{title}</CardHeading>
        <p>{subTitle}</p>
      </CardBody>
    </CardStyled>
  );
}
