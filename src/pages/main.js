import React from 'react'
import resumee from '../Image/resumee.pdf'
import { Link } from 'react-router-dom';
import DoubleArrowTwoToneIcon from '@mui/icons-material/DoubleArrowTwoTone';
import DownloadIcon from '@mui/icons-material/Download';
import girl from '../tech/girl.png'
import './page.css'
const Home = () => {

  return (
    <div className='Home'>
      <div className='div__left'>
        <section className='first'>
          <h1 style={{ color: "rgb(103, 15, 186)" }}>Hi there,</h1>
          <h1>I am</h1>
        </section>
        <section className='second'>
          <h1 style={{ color: "orange" }}>POOJA D. THORAT</h1>
          <h1>FULLSTACK DEVELOPER</h1>
          <h3 style={{ color: "orange" }}>passionate for web developement & web design  </h3>
        </section><br /><br />
        <button style={{ color: "white" }}> <Link style={{ color: "white" }} to='/contact'>Reach Out To Me  <span className='arrow'> <DoubleArrowTwoToneIcon /> </span> </Link> </button> &nbsp;

        <button><a style={{ color: "white" }} href={resumee} download={resumee}>Download Resume <DownloadIcon /></a></button>
      </div>
      <div className='div__rigth'>
        <img src={girl} className='girl' alt="error" />
      </div>

    </div>
  )
}

export default Home