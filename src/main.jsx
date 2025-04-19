import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TelaConfirmacao from './TelaConfirmacao';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TelaConfirmacao />
  </StrictMode>
);