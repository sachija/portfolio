import React from 'react'
import './page.css'
import github from "../Image/github.png"
import linkedin from "../Image/linkedin.png"
import fb from "../Image/Facebook.png"
import insta from '../Image/instagram.png'

const Contact = () => {
  return (
     <div className='contect'>
      <p><h1 className='con'> Contact Me </h1></p> 
      <h3> I will be glad to answer Your questions</h3> <br></br> <br/><br/>
<div className='form'>
      <form>

        <input className='texxt' type="text" value="Enter Your Name" /> <br/><br/>
      
       <input  className='texxt'type="text"  value="subject"/> <br/><br/>
      
       <input  className='texxt'type="email" value="Enter Your Email Address" /> 
      <br/><br/>
      <textarea className='texx' value="Your message"></textarea>
      <br/><br/>
       <input className='submit'type="submit"  value="send message"/> <br/> <br/> 
       
      </form>
      </div>
      <h2> I am Social</h2> <br></br>
      <div className='social'>
     < ul type="none">
      <li><a href="https://github.com/sachija" target="blank"><img className='git' src={github} alt="" /></a></li>
        <li> <a  href="https://linkedin.com/in/pooja-thorat-1b37921ab" target="blank"><img className='links-1' src={linkedin} alt="" /></a></li>
        <li> <a  href="https://www.instagram.com/poojathorat0112/" target="blank"><img className='links-1' src={insta} alt="" /></a></li> 
        <li> <a  href="https://www.facebook.com/people/Pooja-Thorat/100026742880250/" target="blank"><img className='links-1' src={fb} alt="" /></a></li>
        </ul>
        </div>
     </div>
  )
}

export default Contact