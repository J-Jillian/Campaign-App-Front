import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { SessionContextProvider } from './contexts/SessionContext'
import { MantineProvider } from '@mantine/core';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MantineProvider theme={{  fontFamily: 'Mulish light', 
      headings: {
          fontFamily: 'Magilio', 
          color: '#1F1F37', 
          sizes: {
            h1: { fontSize: 50 },
          },
    
      }}} withGlobalStyles withNormalizeCSS> 
  <SessionContextProvider>
    <BrowserRouter>

    <App />
    </BrowserRouter>
  </SessionContextProvider>
  </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
