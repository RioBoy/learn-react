import styled from 'styled-components';

const MobileView = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 20px;
  justify-content: space-between;
  cursor: pointer;
`;

const MenuLine = styled.span`
  display: block;
  width: 28px;
  height: 3px;
  border-radius: 6px;
  background-color: black;
`;

const HamburgerMenu = ({ onClick }) => {
  return (
    <MobileView>
      <Menu onClick={onClick}>
        <MenuLine></MenuLine>
        <MenuLine></MenuLine>
        <MenuLine></MenuLine>
      </Menu>
    </MobileView>
  );
};

export default HamburgerMenu;
