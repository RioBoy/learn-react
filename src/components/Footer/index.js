/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Footer({ footerLogo }) {
  const navigation = [
    {
      header: 'Community',
      link: [
        {
          name: 'Showcase',
        },
        {
          name: 'Testimonials',
        },
        {
          name: 'Webinar',
        },
      ],
    },
    {
      header: 'Company',
      link: [
        {
          name: 'About',
        },
        {
          name: 'Contact',
        },
        {
          name: 'Career',
        },
      ],
    },
    {
      header: 'Useful Links',
      link: [
        {
          name: 'Privacy & Policy',
        },
        {
          name: 'Term & Conditions',
        },
        {
          name: 'For Developer',
        },
      ],
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className="item-footer">
          <div className="item-footer-description">
            <img src={footerLogo} alt="logo" className="App-logo" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>copyright 2022 Lorem Ipsum</p>
          </div>
          <div className="item-footer-w-full"></div>
          <div className="item-footer-navigation">
            <div className="navigation-footer">
              {navigation.map((nav, i) => (
                <div className="navigation-footer-item" key={i}>
                  <p className="navigation-header">{nav.header}</p>
                  <ul>
                    {nav.link.map((link, j) => (
                      <li key={j}>
                        <a href="#">{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
