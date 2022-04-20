/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HamburgerMenu from '../../elements/HamBurgerMenu';
import CloseHamMenu from '../../elements/CloseHamMenu';

import { Container, ContainerFluid } from '../../elements/Container';
import { AppLogo } from '../../elements/LogoImage';

import data from '../../json/landingPage.json';

import {
  ListItem,
  ListItemAnchor,
  MobileFixed,
  MobileNav,
  MobileUnorderedList,
  NavBorderBottom,
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
            <Link to="/" className="navbar-brand">
              <AppLogo src={this.props.logoNav} alt="logo" />
            </Link>

            <HamburgerMenu onClick={this.toggleNav} />

            <div className={close ? 'hidden' : 'show'}>
              <MobileNav>
                <MobileFixed>
                  <Link to="/" className="navbar-brand">
                    <AppLogo src={this.props.logoNav} alt="logo" />
                  </Link>

                  <CloseHamMenu onClick={this.toggleNav} />
                </MobileFixed>

                <MobileUnorderedList>
                  {navigation.data.navbar.links.map((link, i) => {
                    return link.name === 'Sign Up' ? (
                      <li className="mobile-nav-link" key={i}>
                        <a className="active" href={link.to}>
                          {link.name}
                        </a>
                      </li>
                    ) : (
                      <li className="mobile-nav-link" key={i}>
                        <a href={link.to}>{link.name}</a>
                      </li>
                    );
                  })}
                </MobileUnorderedList>
              </MobileNav>
            </div>

            <UnorderedList>
              {navigation.data.navbar.links.map((link, i) => {
                return link.name === 'Sign Up' ? (
                  <ListItem key={i}>
                    <ListItemAnchor active href={link.to}>
                      {link.name}
                    </ListItemAnchor>
                  </ListItem>
                ) : (
                  <ListItem key={i}>
                    <ListItemAnchor href={link.to}>{link.name}</ListItemAnchor>
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
