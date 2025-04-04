import { StrictMode } from 'react'
import { Qrcode } from './components/qrcode'
import { createRoot } from 'react-dom/client';
import "./qrcode.css"
//import App from './App.jsx'
//import { UserCard } from './components/UserCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Qrcode/>

  </StrictMode>,
)
