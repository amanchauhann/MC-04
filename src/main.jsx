import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { DataProvider } from './Context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
)
