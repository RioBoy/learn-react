import styled from 'styled-components';

export const FooterStyled = styled.footer`
  margin-top: 50px;
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

export const FooterDescription = styled.div`
  margin-bottom: 50px;
`;

export const FooterWidthFull = styled.div`
  width: auto;
`;

export const FooterNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FooterHeading = styled.p`
  font-weight: 700;
`;

export const FooterUnorderedList = styled.ul`
  padding: 0;
`;

export const FooterListItem = styled.li`
  padding-bottom: 10px;
  list-style: none;
`;

export const FooterListItemAnchor = styled.a`
  color: #398ab9;
  text-decoration: none;
`;
