import React from 'react'
import './page.css'
export const About = () => {
  return (
    <div className='About'>
      <div className=' card__section'>
        <div className='About__first'>
          <h1>About Me</h1><br /><br />
          <p>Full Stack web developer having expertise in frontend development and highly motivated individual dedicated to writing clear, concise, robust code that works. I like creating products that either have fun and nifty features or solve a genuine problem for people.</p>
        </div>
    
        </div>
          <div className='About__second'>
        <h1>Education</h1>
          <section className='stack'>
            <p>Full Stack web Developer</p>
            <p>june 2022 - present day</p>
          </section>
          <section className='prep'>
            <p>Prepbyetes</p> <p>Online</p>
          </section><br />
          <hr className="hr_line" />
          <section className='stack'>
            <p>Bachelor of Engineering  in INSTRUMENTATION AND CONTROL (B.E)</p>
            <p>2016 - 2020</p>
          </section>
          <section className='prep'>
            <p>Govt College Of Engineering & Research Awasari Pune</p>
          </section> <br />
          <hr className="hr_line" />

          <h1>Work Experience</h1>
        
          
          <section className='prep'>
            <h3>Role</h3> <p>Engineering Asst </p>
            <p>1.5 years work experience in BPCL </p>
            <p>looking after Procurememnt,Maintenance ,Manpower handling,and interaction with vendors for the smooth operation of plant</p>
          </section> <br />
          <h3>Achievements/Tasks /projects </h3> 
             <p> <br />
              Awarded with best Graduate Trainee 
             </p> <br /> <p>
              Awarded with Best Graduate Aprentics
             </p>
             <p> <br />
             Drainage of soap-water line for smooth opearion of conveyor
             </p> <br />
          <hr className="hr_line" />
          
        </div>
    </div>
  )
}