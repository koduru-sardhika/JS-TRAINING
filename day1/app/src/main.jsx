import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Cbc from './component/Cbc.jsx'
import Fbc from './component/Fbc.jsx'
import Demo from './component/Demo.jsx'
import Parent from './props/parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cbc/>
    <Fbc/>
    <Demo/>
    <Parent/>
  </StrictMode>
)
