import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/Login'
import { Otpbox } from './components/Otpbox'

function App() {
  const [login, setLogin] = useState()
  const [showcomponent1, setshowcomponent1] = useState(true);
  return (
    <>
      <div id='wrapper'>
        
    {showcomponent1 ? <Login setshowcomponent1={setshowcomponent1} setLogin={setLogin} ></Login>: <Otpbox></Otpbox>}
      
        </div>
     
    </>
  )
}

export default App
