// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Application/App';
import './index.css';

// Content container
const RootContainer = document.getElementById('root');

// Application rendering
const Root = ReactDOM.createRoot( RootContainer );

Root.render((
  <React.StrictMode>
    <App />
  </React.StrictMode>
))

// Performance monitoring
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

reportWebVitals(console.log());