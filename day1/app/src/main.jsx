import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Parent from './props/parent'
//import App from './App.jsx'
// import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import Demo from './component/Demo.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc/>
    <Fbc/>
    <Demo/> */}
    <Parent/>
    
  </StrictMode>
)
