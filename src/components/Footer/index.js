import React from 'react';

import data from '../../json/landingPage.json';

import { Container } from '../../elements/Container';
import { AppLogo } from '../../elements/LogoImage';
import {
  FooterStyled,
  ItemFooter,
  FooterDescription,
  FooterWidthFull,
  FooterNavigation,
  FooterHeading,
  FooterUnorderedList,
  FooterListItem,
  FooterListItemAnchor,
} from './styled';

export default function Footer({ footerLogo }) {
  const footerData = { data };

  return (
    <FooterStyled>
      <Container>
        <ItemFooter>
          <FooterDescription>
            <AppLogo src={footerLogo} alt="logo" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>copyright 2022 Lorem Ipsum</p>
          </FooterDescription>
          <FooterWidthFull></FooterWidthFull>
          <FooterNavigation>
            {footerData.data.footer.navigation.map((nav, i) => (
              <div className="navigation-item" key={i}>
                <FooterHeading>{nav.header}</FooterHeading>
                <FooterUnorderedList>
                  {nav.link.map((link, j) => (
                    <FooterListItem key={j}>
                      <FooterListItemAnchor href="#">
                        {link.name}
                      </FooterListItemAnchor>
                    </FooterListItem>
                  ))}
                </FooterUnorderedList>
              </div>
            ))}
          </FooterNavigation>
        </ItemFooter>
      </Container>
    </FooterStyled>
  );
}
