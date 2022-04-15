import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#398ab9' : 'lightblue')};
  padding: 15px 50px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 30px;
  box-shadow: 0px 8px 15px rgba(57, 138, 158, 0.3);

  &:hover {
    background-color: #1c658c;
    color: #d1d1d1;
    transition: all 0.5s;
  }
`;
