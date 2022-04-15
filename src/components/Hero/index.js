import { Button } from '../../elements/Button';
import { Container } from '../../elements/Container';

const Hero = ({ heroPic }) => {
  const name = 'Rio Boy';
  const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book`;

  return (
    <Container>
      <div className="hero">
        <div className="profile">
          <h3>
            Hi there, Welcome <br />
            My Name <span>{name}</span>
          </h3>
          <p>{lorem}</p>
          <Button primary>Show Me</Button>
        </div>
        <div className="picture">
          <img src={heroPic} className="App-profile-picture" alt="hero" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
