import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';

import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider> 
    </React.StrictMode>
  </ChakraProvider>
);

