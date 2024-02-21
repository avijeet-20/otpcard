import { useEffect,useState,useMemo } from "react";
import './login.css'

export function Login({setshowcomponent1,setLogin}) {

    const [number,setNumber] = useState(0);
   
   
    function handleinput(e){
        setNumber(e.target.value);
    }


  function handleclick(){
    if(number){
        setLogin(number);
    }
    setshowcomponent1(false);

  }

    return <div id="card-container">
        <div id="info-container">
            <h1 id="otp-heading">Login Via OTP</h1>
            <input type='tel' placeholder="Enter your mobile number" id="otp-input" onChange={handleinput}></input>
            <button type="submit" id="otp-btn" onClick={handleclick}>Send OTP</button>
        </div>
    </div>
}