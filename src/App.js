import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LogingPage';
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import AnonymousRoute from './components/AnonymousRoute'
import {CampContextProvider} from './contexts/CampContext'
import AllCampsPage from './pages/AllCampsPage';
import React from "react";
import AddCampaign from './components/AddCampaign';
import ProfilePage from './pages/ProfilePage';
import CampDetails from './pages/CampDetails';


function App() {
  return (
    <div className="App">
      
      <CampContextProvider>
      <Layout>
      
      <Routes>
    
       <Route path='/' element={<Home />} />
       <Route path='/campaigns' element={
                <PrivateRoute>
                  <AllCampsPage />
                </PrivateRoute>
              }
            />

<Route path='/campaigns/create' element={
                
                  <AddCampaign />
              
              }
            />

<Route path='/profile' element={
                <PrivateRoute>
                  <ProfilePage />
                  </PrivateRoute>
              }
            />
  
       <Route path='/campaigns/:campaignId' element={
                <PrivateRoute>
                  <CampDetails />
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
      </CampContextProvider>
    
      
  
    </div>
  );
}

export default App;
