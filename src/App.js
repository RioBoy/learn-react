import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
};

export default App;
