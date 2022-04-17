import styled from 'styled-components';

export const HeroStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 50px;
  gap: 50px;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const HeroHeading = styled.h3`
  margin-top: 0;
  font-size: 42px;
`;

export const HeroParagraph = styled.p`
  font-size: 18px;
  color: #b0b0bb;
  margin-top: -20px;
`;

export const HeroSpan = styled.span`
  color: #398ab9;
`;

export const HeroProfile = styled.div`
  & ${HeroHeading} {
    margin-top: 0;
    font-size: 42px;
  }
  & ${HeroParagraph} {
    font-size: 18px;
    color: #b0b0bb;
    margin-top: -20px;
  }
  & ${HeroSpan} {
    color: #398ab9;
  }
`;

export const HeroImageWrapper = styled.div`
  @media screen and (max-width: 768px) {
    order: -1;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 420px;
  border-radius: 15px;
  object-fit: cover;
  background-position: center;

  @media screen and (max-width: 1024px) {
    height: 350px;
  }
`;

HeroImage.defaultProps = {
  src: (props) => props.src,
  alt: (props) => props.alt,
};
