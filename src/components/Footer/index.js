import React from 'react';

import data from '../../json/landingPage.json';

import { Container } from '../../elements/Container';
import { AppLogo } from '../../elements/LogoImage';
import {
  FooterStyled,
  ItemFooter,
  ItemFooterDescription,
  ItemFooterWidthFull,
  NavigationFooter,
  NavigationFooterHeading,
  NavigationFooterUl,
  NavigationFooterUlLi,
  NavigationFooterUlLiAnchor,
} from './styled';

export default function Footer({ footerLogo }) {
  const footerData = { data };

  return (
    <FooterStyled>
      <Container>
        <ItemFooter>
          <ItemFooterDescription>
            <AppLogo src={footerLogo} alt="logo" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>copyright 2022 Lorem Ipsum</p>
          </ItemFooterDescription>
          <ItemFooterWidthFull></ItemFooterWidthFull>
          <div className="item-footer-navigation">
            <NavigationFooter>
              {footerData.data.footer.navigation.map((nav, i) => (
                <div key={i}>
                  <NavigationFooterHeading>
                    {nav.header}
                  </NavigationFooterHeading>
                  <NavigationFooterUl>
                    {nav.link.map((link, j) => (
                      <NavigationFooterUlLi key={j}>
                        <NavigationFooterUlLiAnchor href="#">
                          {link.name}
                        </NavigationFooterUlLiAnchor>
                      </NavigationFooterUlLi>
                    ))}
                  </NavigationFooterUl>
                </div>
              ))}
            </NavigationFooter>
          </div>
        </ItemFooter>
      </Container>
    </FooterStyled>
  );
}
