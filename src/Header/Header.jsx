import React from 'react'
import './Header.css'
const Header = () =>{

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
       <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <div className="h-left">
            Prati's Portfolio
            </div>
            <div className="flexCenter  h-right">
            <a onClick={() => scrollToSection('about-me')}>About Me</a>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
               
            <a href="mailto:psahoo@gitam.in">
                <button className='button'>Send Email</button>
            </a>
                
            </div>
        </div>
       </section>
    )
}
export default Header
