import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/Header.jsx'
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="209830235983-9qv70em8v6mjhvrhct11o7aish797qfq.apps.googleusercontent.com">
    <Header />
    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
