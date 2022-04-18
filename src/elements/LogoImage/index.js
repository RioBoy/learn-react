import styled from 'styled-components';

export const AppLogo = styled.img`
  width: 60px;
  height: 60px;
`;

AppLogo.defaultProps = {
  src: (props) => props.src,
  alt: (props) => props.alt,
};
