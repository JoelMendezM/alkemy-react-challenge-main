import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MenuProvider } from './context/MenuContext';
import { ChakraProvider } from '@chakra-ui/react';


ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
