import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styled/index';
import App from './ui-core/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = (
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>
)
root.render(router);

