import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter basename="/Study-Center-Project">
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);
