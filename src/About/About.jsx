import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id="about-me">
    <div className='a-main paddings'> 
    <div className="get paddings"><h2>GET TO KNOW ME !!</h2></div>
        <section className="a-wrapper ">

      
        <div className="paddings innerWidth  a-container">

        <div className="elements">
        <div className="a-left paddings">
            <span> 
                <br />
                <br />
                <div className="head-dec">About me</div>
                <br />
                <p>Hi there! I am Pratisruti Sahoo , a student  with a  keen interest on front end web development and a strong desire to make the web a better place one line of code at a time! </p>
                
                <div className="buttons">
                <button className='btn4 button'><a href="https://drive.google.com/file/d/132Z8fwqv0HAErwI7fml06JfKuD3eAJMQ/view?usp=drivesdk">Resume</a></button>

                <button className='btn5 button'><a href="http://www.linkedin.com/in/pratisruti-sahoo-38b520270">LinkedIn</a></button>

                </div>
                </span>
            </div>
            <div className="a-middle paddings">
            <div className="center-image"> {/* Add a class for centering */}
        <img className='myimage' src="https://vu21csen0200116.github.io/prati_portfolio.github.io/prati.jpeg" alt="" />

      </div>

    </div>
            <div className="a-right paddings">
            <span className='about-text'>
                
                <br />
                <span>
                    <br />
                    <div className="head-dec ">What i bring to the table:</div>
                    <br />
                    <ul>
                        <li> <h4>Passion for Front-End Development:</h4> <p className='para'>I'm truly enthusiastic about web development and stay up-to-date with the latest industry trends and technologies.</p></li> <br />

                        <li><h4>Technical Proficiency:</h4> <p className='para'>Proficient in HTML, CSS, and JavaScript. I'm also eager to expand my skill set and embrace new technologies as they emerge.</p></li> <br />

                        <li><h4>Continuous Learning:</h4>  <p className='para'>I'm always eager to take on new projects that push my boundaries and allow me to grow.</p></li>
                    </ul>
                </span>
            </span>
            </div>
           </div>
           
            
            <div className="quote paddings">
        
              <h2>"I thrive on transforming innovative ideas into user-friendly, interactive, and visually appealing websites that leave a lasting impression"</h2>
            </div>

            <div className="line1"></div>
            <br />
            <br />

             <div className="bottom-elements ">
                <div className="education">
                    <br />
                    <h2>Education</h2>
                    <br />
                    <div className="line1"></div>
                    <br />
                    <h4>Little Angels School</h4>
                    <p className='date'>Preschool-10th</p>
                    <br />
                    <h4>The Presidential School</h4>
                    <p className='date'>11th - 12th (2019-2021)</p>
                    <br />
                    <h4>GITAM university</h4>
                    <p className='date'>BTech in Computer Science and Business Systems (2021-2025)</p>
                    <br />
                    <br />

                </div>

                <div className="experience ">
                    <br />
                    <h2>Experience</h2>
                    <br />
                    <div className="line1"></div>
                    <br />
                    <h4 className=''>Front-end Developer Intern</h4>
                    <p>Vault Of Codes</p>
                    <p className='date'>Sept 4 2023 - Oct 4 2023 </p>
                    <br />

                    <button className='btn6 button'><a href="https://drive.google.com/file/d/13FmTxR8rEz2_3jqpWN1lXAfXNrQqYsbQ/view?usp=drivesdk">View Certificate</a></button>
                </div>
             </div>
         </div>
         
     </section>
     <br />
    </div>
    
   

        
    </div>
  )
}

export default About
