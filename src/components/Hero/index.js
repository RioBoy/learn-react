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
            <HeroSpan>{data.hero.place}</HeroSpan>
          </HeroHeading>
          <HeroParagraph>{data.hero.description}</HeroParagraph>
          <Button primary>Explore</Button>
        </div>
        <HeroImageWrapper>
          <HeroImage src={heroPic} alt="hero" />
        </HeroImageWrapper>
      </HeroStyled>
    </Container>
  );
};

export default Hero;
