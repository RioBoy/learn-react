import React from 'react';

import {
  CardImage,
  CardItem,
  CardItemHeader,
  CardPrice,
  StyledNumberFormat,
  FooterImage,
  ItemContent,
  MobileCardBody,
  MobileCardFooter,
  MobileCardHeading,
  MobileCardParagraph,
} from './styled';

export default function ItemCard({ itemData }) {
  return (
    <ItemContent>
      {itemData.items.map((item) => (
        <CardItem key={item._id}>
          <CardItemHeader>
            <CardPrice>
              <StyledNumberFormat
                value={item.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'IDR '}
              />
            </CardPrice>
            <CardImage src={item.imageUrl} alt="item" />
          </CardItemHeader>
          <div className="card-mobile-wrapper">
            <MobileCardBody>
              <MobileCardHeading>{item.name}</MobileCardHeading>
              <MobileCardParagraph>
                {item.district}, {item.province}
              </MobileCardParagraph>
            </MobileCardBody>
            <MobileCardFooter>
              <FooterImage src={item.avatar} alt="user" />
              <h5>{item.userName}</h5>
            </MobileCardFooter>
          </div>
        </CardItem>
      ))}
    </ItemContent>
  );
}
