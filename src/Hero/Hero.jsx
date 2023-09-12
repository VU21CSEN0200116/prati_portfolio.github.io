import React from 'react' 
import MyComponent from '../MyComponent'

import './Hero.css'
const Hero = () => {
    return(
        <section className="hero-first">
            <div className="hero-left flexColStart">
            Hello! My name is <span class="my-name">Pratisruti Sahoo</span>
                <div>and I am </div>
                <span id="hero-element">
                <MyComponent />
                </span>
                
                <button className='btn1 button'><a href="https://github.com/VU21CSEN0200116">Visit Github</a></button>

            </div>

            <div className="hero-right paddings">
                <img src="./girldev1.png" alt="developer-image" />
            </div>


    



        </section>
    )
}
export default Hero