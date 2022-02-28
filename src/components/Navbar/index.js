/* eslint-disable no-useless-constructor */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import HamburgerMenu from '../../elements/HamBurgerMenu';
import CloseHamMenu from '../../elements/CloseHamMenu';

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
    const links = [
      {
        name: 'Home',
        to: '/',
      },
      {
        name: 'About',
        to: '/about',
      },
      {
        name: 'Contact',
        to: '/contact',
      },
      {
        name: 'Sign In',
        to: '/login',
      },
      {
        name: 'Sign Up',
        to: '/register',
      },
    ];

    const { close } = this.state;

    return (
      <div className="container-fluid">
        <div className="container">
          <nav className={'nav ' + (!close ? 'close' : '')}>
            <a href="#" className="navbar-brand">
              <img src={this.props.logo} className="App-logo" alt="logo" />
            </a>

            <HamburgerMenu onClick={this.toggleNav} />

            <div className={close ? 'hidden' : 'show'}>
              <div className="mobile-nav">
                <div className="mobile-fixed">
                  <a href="#" className="navbar-brand">
                    <img
                      src={this.props.logo}
                      className="App-logo"
                      alt="logo"
                    />
                  </a>

                  <CloseHamMenu onClick={this.toggleNav} />
                </div>

                <ul className="mobile-nav-item">
                  {links.map((link, i) => {
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
                </ul>
              </div>
            </div>

            <ul className="nav-item">
              {links.map((link, i) => {
                return link.name === 'Sign Up' ? (
                  <li className="nav-link" key={i}>
                    <a className="active" href={link.to}>
                      {link.name}
                    </a>
                  </li>
                ) : (
                  <li className="nav-link" key={i}>
                    <a href={link.to}>{link.name}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <hr className="border-bottom"></hr>
      </div>
    );
  }
}
