import React from 'react';
import { Link } from 'react-router-dom';

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
  FooterLink,
} from './styled';

export default function Footer({ footerLogo }) {
  const footerData = { data };

  return (
    <FooterStyled>
      <Container>
        <ItemFooter>
          <FooterDescription>
            <Link to="/">
              <AppLogo src={footerLogo} alt="logo" />
            </Link>
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
                      <FooterLink to="/">{link.name}</FooterLink>
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
