import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllCampaigns from './components/AllCampaigns';
import NewCampaign from './components/NewCampaign';
import Campaign from './components/Campaign';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <NavBar />
   
    
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/campaigns' element={<AllCampaigns />} />
     <Route path='/:id' element={<Campaign />} />
     <Route path='/new-campaign' element={<NewCampaign />} />
     <Route path='*' element={<ErrorPage />} />
     </Routes>
    </div>
  );
}

export default App;
