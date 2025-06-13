// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext'; // ? Tambahkan ini

import './styles/fonts.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider> {/* ? Bungkus App */}
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);
