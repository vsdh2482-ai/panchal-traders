import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { EnquiryProvider } from './context/EnquiryContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <LanguageProvider>
     <EnquiryProvider>
        <App />
      </EnquiryProvider>
    </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
