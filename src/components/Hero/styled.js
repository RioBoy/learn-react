import styled from 'styled-components';

export const HeroStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 50px;
  align-items: center;
  height: 80vh;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    height: auto;
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 320px) and (max-width: 426px) {
    gap: 20px;
  }
`;

export const HeroHeading = styled.h3`
  margin-top: 0;
  font-size: 46px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 38px;
  }

  @media screen and (min-width: 425px) and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 320px) and (max-width: 424px) {
    font-size: 24px;
  }
`;

export const HeroParagraph = styled.p`
  font-size: 18px;
  color: #b0b0bb;
  margin-top: -20px;
  font-weight: 300;

  @media screen and (min-width: 320px) and (max-width: 424px) {
    font-size: 16px;
  }
`;

export const HeroSpan = styled.span`
  color: inherit;
`;

export const HeroImageWrapper = styled.div`
  @media screen and (max-width: 768px) {
    order: 1;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    order: -1;
  }
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
  background-position: center;
`;

HeroImage.defaultProps = {
  src: (props) => props.src,
  alt: (props) => props.alt,
};
