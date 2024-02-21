import { useRef } from 'react';
import './otp.css'

export function Otpbox() {

    const inputrefs = Array.from({length:6},() => useRef(null));

    // const inputref1 = useRef(null);
    // const inputref2 = useRef(null);
    // const inputref3 = useRef(null);
    // const inputref4 = useRef(null);



    // function nextboxone() {
    //     inputref2.current.focus();
    // }

    // function nextboxtwo(e) {
    //     inputref3.current.focus();
    // }

    // function nextboxthree(e) {
    //    inputref4.current.focus();
    // }

    const handlechange = (index,e) => {
        const value = e.target.value;

        if(value && index < inputrefs.length -1){
            inputrefs[index+1].current.focus();
        }
    }



    return <div id="otp-box-container">
        <div id="login-container">
            <h1 id="login-heading">Login via OTP</h1>
            <div id="otp-container">

            {[...Array(6)].map((_, index) => (
        <input
        className='one'
          key={index}
          ref={inputrefs[index]}
          type="text"
          maxLength="1"
          onChange={(e) =>  handlechange(index, e)}
        />
      ))}
            </div>
            <button id="login-btn">Login</button>
        </div>
    </div>
}