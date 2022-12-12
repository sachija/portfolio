import React from 'react'
import css from '../tech/css.png'
import html from '../tech/js.png'
import js from '../tech/html.png'
import git from '../tech/git.png'
import npm from '../tech/npm.png'
import vs from '../tech/vs.png'
// import firebase from '../tech/firebase.png'
import postman from '../tech/postman.png'
import node from '../tech/node.png'
import react from '../tech/react.png'
import github from '../Image/github.png'
import md from'../Image/md.jpg'


import './page.css'
import { GitHub } from '@mui/icons-material'
export const Technologies = () => {
  return (
    <div>
      <div className='technology'>
      <h1>Tech Stack</h1> <br />
      <p>Technologies I've been working with recently</p><br />
      </div>
      <div className='tech'>
      <img  class ="css" src= {js} alt="" />
        <img  class="css" src= {css} alt="" />
        <img class ="css"src= {html} alt="" />
       <img class ="css" src= {react} alt="" />
        <img class ="css" src= {node} alt="" />
        <img class ="css" src= {md} alt="" />
      </div>
       <div className='tools'>
       <h1>Tools</h1>
       </div>
       <div className='tools__img'>
          <img  class="css"src={vs} alt="" />
          <img class="css" src={git} alt="" />
          <img class="css" src={npm} alt="" />
        <img class="css"src={postman} alt="" />
        <img class="css1"src={github} alt="" />
       </div>
    </div>
  )
}