/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '../../elements/Button';

const Hero = (props) => {
  const name = 'Rio Boy';
  const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book`;
  return (
    <div className="container">
      <div className="hero">
        <div className="profile">
          <h3>
            Hi there, Welcome <br></br>My Name <span>{name}</span>
          </h3>
          <p>{lorem}</p>
          <Button />
        </div>
        <div className="picture">
          <img src={props.pic} className="App-profile-picture" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
