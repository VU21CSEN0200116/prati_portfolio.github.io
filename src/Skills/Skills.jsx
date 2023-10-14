import React from 'react' 
import './Skills.css'

const Skills = () =>{
    return(
        <div>
       <section className="s-wrapper">
        <div className="paddings innerWidth flexCenter s-container">
            {/*leftside*/}
            <div className="flexCenter s-left">
                <span>
                <div className="something">
                <div className='skills-heading'>My Skills</div>
                <div className='secondaryText'>These are some of the front end skills I've learnt</div>
                </div>
                </span>
                

                <div className="flexColStart contactModes">
                    {/*firstrow*/}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexColStart detail">
                                    
                                    <div><img className='flexCenter skills-image' src="https://vu21csen0200116.github.io/prati_portfolio.github.io/html.webp" alt="" /></div>
                                    <span className='primaryText skill-name'>HTML5
                                    </span>
                                    <span className='info'><ul>
                                        <li>Level :  Intermediate</li>
                                        <li>Source : Coursera</li></ul></span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/JEFELSS2ATZZ">Certificate</a>
                            </div>
                        </div>


                    {/*second mode*/}
                    <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexColStart detail">
                                    
                                    <div><img className='flexCenter skills-image1' src="https://vu21csen0200116.github.io/prati_portfolio.github.io/css.png" alt="" /></div>
                                    <span className='primaryText skill-name'>CSS
                                    </span>
                                    <span className='info'><ul>
                                        <li>Level : Intermediate</li>
                                        <li>Source : Coursera</li></ul></span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                               <a href="https://www.coursera.org/account/accomplishments/certificate/JEFELSS2ATZZ">Certificate</a>
                            </div>
                        </div>
                        {/*third mode*/}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexColStart detail">
                                    
                                <div><img className='flexCenter skills-image3' src="https://vu21csen0200116.github.io/prati_portfolio.github.io/js.png" alt="" /></div>
                                    <span className='primaryText skill-name'>Javascript
                                    </span>
                                    <span className='info'><ul>
                                        <li>Level :  Beginner</li>
                                        <li>Source : Coursera</li></ul></span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/4SG48K4YLSC9">Certificate</a>
                            </div>
                        </div>
                        {/*fourth mode*/}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexColStart detail">
                                    
                                    <div><img className='flexCenter skills-image3' src="https://vu21csen0200116.github.io/prati_portfolio.github.io/react1.png" alt="" /></div>
                                    <span className='primaryText skill-name'>React
                                    </span>
                                    <span className='info'><ul>
                                        <li>Level : Beginner</li>
                                        <li>Source : Coursera</li></ul></span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/BA5GC35VKYDP">Certificate</a>
                            </div>
                        </div>
                    </div>    
                    </div>
                </div>
            </div>
       </section>
       <div className="line"></div>
       </div>
    )
}
export default Skills