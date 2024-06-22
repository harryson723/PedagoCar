import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../src/Styles/globals.css';
import { UserProvider } from './components/context/UserContext';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
