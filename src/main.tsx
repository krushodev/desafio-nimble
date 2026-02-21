import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <Toaster position="top-right" />
      <App />
    </HeroUIProvider>
  </StrictMode>
);
