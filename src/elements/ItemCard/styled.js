import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const ItemContent = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 30px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CardItem = styled.div`
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const CardItemHeader = styled.div`
  margin: 10px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 15px;
  background-position: center;
  object-fit: cover;

  @media screen and (max-width: 1024px) {
    height: 200px;
  }

  @media screen and (max-width: 425px) {
    height: 250px;
  }
`;

CardImage.defaultProps = {
  src: (props) => props.src,
  alt: (props) => props.alt,
};

export const CardPrice = styled.div`
  position: relative;
`;

export const StyledNumberFormat = styled(NumberFormat)`
  position: absolute;
  padding: 5px 18px;
  border-radius: 50px;
  background-color: #398ab9;
  color: #fff;
  right: 10px;
  top: 10px;
  font-weight: 500;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media screen and (max-width: 1024px) {
    padding: 5px 10px;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    padding: 5px 18px;
    font-size: 16px;
  }
`;

export const MobileCardBody = styled.div`
  padding: 0 25px;
  margin-top: 10px;

  & > * {
    margin: 0;
  }
`;

export const MobileCardHeading = styled.h3`
  font-weight: 500;
  margin-bottom: 8px;
`;

export const MobileCardParagraph = styled.p`
  font-weight: 300;
  font-size: 14px;
`;

export const MobileCardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 25px;
  margin: 15px 0;
`;

export const FooterImage = styled.img`
  height: 50px;
  width: 50px;
  background-position: center;
  object-fit: cover;
  border-radius: 50%;

  @media screen and (max-width: 1024px) {
    height: 40px;
    width: 40px;
  }

  @media screen and (max-width: 768px) {
    height: 80px;
    width: 80px;
  }

  @media screen and (max-width: 425px) {
    height: 50px;
    width: 50px;
  }
`;

FooterImage.defaultProps = {
  src: (props) => props.src,
  alt: (props) => props.alt,
};
