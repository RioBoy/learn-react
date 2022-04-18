import data from '../../json/landingPage.json';

import { Button } from '../../elements/Button';
import { Container } from '../../elements/Container';
import {
  HeroStyled,
  HeroHeading,
  HeroParagraph,
  HeroSpan,
  HeroImageWrapper,
  HeroImage,
} from './styled';

const Hero = ({ heroPic }) => {
  return (
    <Container>
      <HeroStyled>
        <div>
          <HeroHeading>
            {data.hero.greeting}
            <br />
            {data.hero.prefix}
            <HeroSpan> {data.hero.name}</HeroSpan>
          </HeroHeading>
          <HeroParagraph>{data.hero.description}</HeroParagraph>
          <Button primary>Show Me</Button>
        </div>
        <HeroImageWrapper>
          <HeroImage src={heroPic} alt="hero" />
        </HeroImageWrapper>
      </HeroStyled>
    </Container>
  );
};

export default Hero;
