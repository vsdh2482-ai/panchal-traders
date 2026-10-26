import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { EnquiryProvider } from './context/EnquiryContext.jsx';
import { HelmetProvider } from "react-helmet-async";
<<<<<<< HEAD
import ScrollToTop from './components/ScrollToTop.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
      <BrowserRouter>
       <ScrollToTop/>
        <LanguageProvider>
            <EnquiryProvider>
              <App />
            </EnquiryProvider>
        </LanguageProvider>
      </BrowserRouter>
=======
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
    <BrowserRouter>
    <LanguageProvider>
     <EnquiryProvider>
        <App />
      </EnquiryProvider>
    </LanguageProvider>
    </BrowserRouter>
>>>>>>> 8c74b4382a0b11b4240664281551255b12cf8a97
    </HelmetProvider>
  </StrictMode>,
)
