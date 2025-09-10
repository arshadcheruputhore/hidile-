import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ScrollProvider } from './contexts/ScrollContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </StrictMode>
  </BrowserRouter>
)
