/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import HamburgerMenu from '../../elements/HamBurgerMenu';
import CloseHamMenu from '../../elements/CloseHamMenu';

import { Container, ContainerFluid } from '../../elements/Container';
import { AppLogo, LogoName } from '../../elements/LogoImage';

import data from '../../json/landingPage.json';
import './style.css';

import {
  NavbarBrand,
  ListItem,
  MobileFixed,
  MobileListItem,
  MobileStyledLink,
  MobileNav,
  MobileUnorderedList,
  NavBorderBottom,
  StyledLink,
  UnorderedList,
} from './styled';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: true,
    };
  }

  toggleNav = () => {
    this.setState({
      close: !this.state.close,
    });
  };

  render() {
    const navigation = { data };

    const { close } = this.state;

    return (
      <ContainerFluid>
        <Container>
          <nav className={'nav ' + (!close ? 'close' : '')}>
            <NavbarBrand to="/">
              <AppLogo src={this.props.logoNav} alt="logo" />
              <LogoName>NusaCation</LogoName>
            </NavbarBrand>

            <HamburgerMenu onClick={this.toggleNav} />

            <div className={close ? 'hidden' : 'show'}>
              <MobileNav>
                <MobileFixed>
                  <NavbarBrand to="/">
                    <AppLogo src={this.props.logoNav} alt="logo" />
                    <LogoName>NusaCation</LogoName>
                  </NavbarBrand>

                  <CloseHamMenu onClick={this.toggleNav} />
                </MobileFixed>

                <MobileUnorderedList>
                  {navigation.data.navbar.links.map((link, i) => {
                    return link.name === 'Sign Up' ? (
                      <MobileListItem key={i}>
                        <MobileStyledLink active="true" to={link.to}>
                          {link.name}
                        </MobileStyledLink>
                      </MobileListItem>
                    ) : (
                      <MobileListItem key={i}>
                        <MobileStyledLink to={link.to}>
                          {link.name}
                        </MobileStyledLink>
                      </MobileListItem>
                    );
                  })}
                </MobileUnorderedList>
              </MobileNav>
            </div>

            <UnorderedList>
              {navigation.data.navbar.links.map((link, i) => {
                return link.name === 'Sign Up' ? (
                  <ListItem key={i}>
                    <StyledLink active="true" to={link.to}>
                      {link.name}
                    </StyledLink>
                  </ListItem>
                ) : (
                  <ListItem key={i}>
                    <StyledLink to={link.to}>{link.name}</StyledLink>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </nav>
        </Container>
        <NavBorderBottom />
      </ContainerFluid>
    );
  }
}
