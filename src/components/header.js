import React from 'react'
import { Link } from 'react-router-dom';
import  './comp.css';
import github from "../Image/github.png"
import linkedin from "../Image/linkedin.png"
import fb from "../Image/Facebook.png"
import insta from '../Image/instagram.png'


const Header = () => {
  return (
    <div className='header__top'>
        <div>
            <h1><Link to= '/home'> </Link></h1> 
        </div>
        <hr />
        <ul>
        <li > <Link  style={{color:"orange"}} to= '/home'>Home </Link>  </li>
        <li> <Link style={{color:"orange"}} to= '/about'>About </Link> </li>
        <li> <Link style={{color:"orange"}} to= '/project'>Project </Link> </li>
        <li> <Link style={{color:"orange"}} to= '/technologies'>Technologies </Link> </li>
        <li> <Link style={{color:"orange"}} to= '/contact'>Contact </Link> </li>
        <li><a href="https://github.com/sachija" target="blank"><img className='git' src={github} alt="" /></a></li>
        <li> <a  href="https://linkedin.com/in/pooja-thorat-1b37921ab" target="blank"><img className='links-1' src={linkedin} alt="" /></a></li>
        <li> <a  href="https://www.instagram.com/poojathorat0112/" target="blank"><img className='links-1' src={insta} alt="" /></a></li> 
        <li> <a  href="https://www.facebook.com/people/Pooja-Thorat/100026742880250/" target="blank"><img className='links-1' src={fb} alt="" /></a></li>
       
        </ul>
        <hr></hr>
    </div>
    
  )
}

export default Header