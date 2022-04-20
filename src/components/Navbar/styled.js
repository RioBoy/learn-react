import styled from 'styled-components';

export const NavBorderBottom = styled.hr`
  border-bottom: 0 solid #d1d1d1;
  margin: 0;
`;

export const MobileNav = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    padding: 0 150px;
    z-index: 999;
    background-color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const MobileFixed = styled.div`
  display: grid;
  grid-template-columns: 1fr 28px;
  justify-content: space-between;
  align-items: center;
`;

export const MobileUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 10px 0;
  height: 100vh;
`;

export const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  justify-content: end;
  gap: 15px;
  list-style: none;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  display: grid;
  justify-content: stretch;
`;

export const ListItemAnchor = styled.a`
  text-decoration: none;
  line-height: 50px;
  padding: 0 15px;
  text-align: center;
  background-color: ${(props) => (props.active ? '#398ab9' : 'inherit')};
  color: ${(props) => (props.active ? '#fff' : '#398ab9')};
  border-radius: ${(props) => (props.active ? '6px' : '0')};
  font-weight: ${(props) => (props.active ? '700' : '400')};

  &:hover {
    background-color: ${(props) => (props.active ? '#21325e' : 'lightblue')};
    color: white;
    transition: all 0.5s;
    border-radius: 6px;
  }
`;

ListItemAnchor.defaultProps = {
  href: (props) => props.href,
};
