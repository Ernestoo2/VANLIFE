import React from 'react'
import image1 from "../image1.png"
import "./About.css"
const About = () => {
    return (
        <div className='About'>

            <div className='img-class'>
                <img className='img1' src={image1} alt='imgae1' />
            </div>
            <div className='main-content'>
                <h3 className="h3-tag">
                    Don’t squeeze in a sedan when you could relax in a van.

                </h3>
                <p className='p-tag'>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉) <br /><br />

                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    Your destination is waiting.
                    Your van is ready.

                </p>
                <div className='low-div'>
                    <h3>
                        Your destination is waiting. <br />
                        Your van is ready.
                    </h3>

                    <button className='btn-1'>
                        Explore our vans
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About