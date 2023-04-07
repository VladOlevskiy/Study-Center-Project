import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename="/Study-Center-Project">
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
