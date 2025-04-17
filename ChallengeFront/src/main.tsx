import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './index.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < Index/>
  </StrictMode>,
)
