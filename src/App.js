import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllCampaigns from './components/AllCampaigns';
import NewCampaign from './components/NewCampaign';
import Campaign from './components/Campaign';
import ErrorPage from './components/ErrorPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LogingPage';

function App() {
  return (
    <div className="App">
      <NavBar />
   
    
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/campaigns' element={<AllCampaigns />} />
     <Route path='/:id' element={<Campaign />} />
     <Route path='/new-campaign' element={<NewCampaign />} />
     <Route path='/signup' element={<SignupPage />} />
     <Route path='/login' element={<LoginPage />} />
     <Route path='*' element={<ErrorPage />} />

     </Routes>
    </div>
  );
}

export default App;
