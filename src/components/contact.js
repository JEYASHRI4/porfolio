import React from 'react'
import Footer from "./footer";
export default function Contact() {
  const handlesubmit = () =>{
    alert('Thanks For contacting myself');
  }
  return (

    <div>
    <form className='form'><h1>TO CONTACT ME</h1>
    <h2>ENTER YOUR NAME:</h2>
    <input type="text" maxLength={40}
    size="40" placeholder='ENTER YOUR NAME'></input>
    <br></br>
    <h2>ENTER YOUR EMAIL-ID :</h2>
    <input type="email" size="40"></input>
    <br></br>
    <br></br>
    <button type='button' onClick={()=>handlesubmit()}>SUBMIT</button>
    </form>
    <Footer></Footer>

    </div>
  )
}
