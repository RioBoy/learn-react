/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
import pic from './assets/images/pic.jpg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Item from './components/Item';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar logoNav={logo} />
      <Hero heroPic={pic} />
      <Feature />
      <Item itemPic={pic} />
      <Footer footerLogo={logo} />
    </div>
  );
};

export default App;
