import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AllCampaigns from './components/AllCampaigns';
import Campaign from './components/Campaign';
import ErrorPage from './components/ErrorPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LogingPage';
import {CampsContextProvider} from './contexts/CampsContext'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import AnonymousRoute from './components/AnonymousRoute'


function App() {
  return (
    <div className="App">
      
      <CampsContextProvider>
    <Layout>
      
    <Routes>
  
     <Route path='/' element={<Home />} />
     <Route path='/campaigns' element={
              <PrivateRoute>
                <AllCampaigns />
              </PrivateRoute>
            }
          />

     <Route path='/:id' element={
              <PrivateRoute>
                <Campaign />
              </PrivateRoute>
            }
          />
     {/* <Route path='/new-campaign' element={<NewCampaign />} /> */}
     
     <Route path='/signup' element={
              <AnonymousRoute>
                <SignupPage />
              </AnonymousRoute>
            }
          />
          
     <Route path='/login'
            element={
              <AnonymousRoute>
                <LoginPage />
              </AnonymousRoute>
            }
          />
     <Route path='*' element={<ErrorPage />} />

     </Routes>
     </Layout>
      </CampsContextProvider>
      
  
    </div>
  );
}

export default App;
