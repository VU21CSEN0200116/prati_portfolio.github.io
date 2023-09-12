import React from 'react'
import './Header.css'
const Header = () =>{
    return(
       <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <div className="h-left">
            Prati's portfolio
            </div>
            <div className="flexCenter  h-right">
                <a href="mailto:psahoo@gitam.in">
                <button className='button'>Send Email</button>
                </a>
            </div>
        </div>
       </section>
    )
}
export default Header
