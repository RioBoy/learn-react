import styled from 'styled-components';

export const FeatureStyled = styled.section`
  margin-top: 70px;
  background-color: #f5f6f8;
`;

export const FeatureTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 40px 0;
`;

export const TitleHeading = styled.h3`
  font-size: 30px;
  font-weight: 700;
`;

export const TitleSpan = styled.span`
  font-weight: 400;
`;

export const FeatureContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 70px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 150px;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding: 0;
  }
`;
