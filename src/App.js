import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './common/navbar';
import Menu from './components/Menu';
import Collection from './components/Collection';
import Leaderboard from './components/Leaderboard';
// import { WalletProvider } from '@solana/wallet-adapter-react';
import Fishing from './components/Fishing';
import Mode from './components/Mode';
import Home from './components/Home';
import Admin from './components/Admin';
import FishHome from './components/FishHome';
import TokenHome from './components/TokenFish';
import RewardHome from './components/RewardHome';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <WalletProvider> */}
        {/* <Navbar /> */}
      {/* </WalletProvider> */}
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/fish_home" exact element={<FishHome />} />
          <Route path="/token_home" exact element={<TokenHome />} />
          <Route path="/reward_home" exact element={<RewardHome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/mode" element={<Mode />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/fishing" element={<Fishing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
