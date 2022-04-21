import styled from 'styled-components';

const CloseMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 20px;
  justify-content: space-between;
  cursor: pointer;
`;

const Line = styled.span`
  display: block;
  width: 28px;
  height: 3px;
  border-radius: 6px;
  background-color: black;

  &.one {
    top: 50%;
    transform: translateY(9px) rotate(45deg);
  }

  &.two {
    opacity: 0;
  }

  &.three {
    bottom: 50%;
    transform: translateY(-8px) rotate(-45deg);
  }
`;

const CloseHamMenu = ({ onClick }) => {
  return (
    <CloseMenu onClick={onClick}>
      <Line className="one"></Line>
      <Line className="two"></Line>
      <Line className="three"></Line>
    </CloseMenu>
  );
};

export default CloseHamMenu;
