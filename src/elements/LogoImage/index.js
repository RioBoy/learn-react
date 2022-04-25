import styled from 'styled-components';

export const AppLogo = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 320px) and (max-width: 426px) {
    display: none;
  }
`;

AppLogo.defaultProps = {
  src: (props) => props.src,
  alt: (props) => props.alt,
};

export const LogoName = styled.p`
  font-weight: 700;
  color: #398ab9;
  font-size: 1.1em;

  @media screen and (min-width: 320px) and (max-width: 426px) {
    font-size: 1em;
  }
`;
