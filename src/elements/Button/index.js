import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#fff' : 'lightblue')};
  padding: 15px 50px;
  color: #398ab9;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #398ab9;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 30px;
  /* box-shadow: 0px 8px 15px rgba(57, 138, 158, 0.3); */

  &:hover {
    background-color: #398ab9;
    color: #fff;
    transition: all 0.5s;
  }
`;
