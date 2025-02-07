import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'  
// import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import Demo from './component/Demo.jsx'
// import Parent from './props/Parent.jsx'
// import State from './state/State.jsx'
// import Inline from './styles/Inline.jsx'
// import "../src/styles/globally.css"
// import Comp1 from './styles/Comp1'
// import Comp2 from './styles/Comp2'
// import External from './styles/External'
import Ref from './useRef/Ref'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc/>
    <Fbc/>
    <Demo/> */}
    {/* <Parent/> */}
    {/* <State/> */}
    {/* <Inline/> */}
{/* <Comp1/>
<Comp2/> */}
    {/* <External/> */}
    <Ref/>
  </StrictMode>,
)