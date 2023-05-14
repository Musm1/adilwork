import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <h1>Contact Us</h1>
        <form>
            <input type='text' placeholder='Full Name' required/>
            <input type='email' placeholder='Your Email' required/>
            <textarea placeholder='Write Your Message'/>
            <input type='submit' value="Send"/>

        </form>
    </div>
  )
}

export default Contact