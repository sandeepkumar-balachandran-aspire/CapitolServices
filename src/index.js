import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';

import App from './App'
import store from './store'

const msalInstance = new PublicClientApplication(msalConfig);
createRoot(document.getElementById('root')).render(
  <MsalProvider instance={msalInstance}>
      
  <Provider store={store}>
    <App />
  </Provider>
</MsalProvider>,

)
