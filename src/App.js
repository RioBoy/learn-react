/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
import pic from './pic.jpg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar logo={logo} />
      <Hero pic={pic} />
    </div>
  );
};

export default App;
