import styled from 'styled-components';

export const FooterStyled = styled.footer`
  margin-top: 100px;
  padding: 50px 0;
`;

export const ItemFooter = styled.div`
  display: grid;
  grid-template-columns: 2fr 100px 2fr;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 100px 2fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemFooterDescription = styled.div`
  margin-bottom: 50px;
`;

export const ItemFooterWidthFull = styled.div`
  width: auto;
`;

export const NavigationFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const NavigationFooterHeading = styled.p`
  font-weight: 700;
`;

export const NavigationFooterUl = styled.ul`
  padding: 0;
`;

export const NavigationFooterUlLi = styled.li`
  padding-bottom: 10px;
  list-style: none;
`;

export const NavigationFooterUlLiAnchor = styled.a`
  color: #398ab9;
  text-decoration: none;
`;
