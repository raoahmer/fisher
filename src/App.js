import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './common/navbar';
import Menu from './components/Menu';
import Collection from './components/Collection';
import Leaderboard from './components/Leaderboard';
import Fishing from './components/Fishing';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/fishing" element={<Fishing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
