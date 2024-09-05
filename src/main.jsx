import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MainPage from './MainPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
