import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="dev-zud4xpwfmeqfpkkw.us.auth0.com"
    clientId="I6NiZ26wTp6muZsN5OUbaUOzTHDFA8nk"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);