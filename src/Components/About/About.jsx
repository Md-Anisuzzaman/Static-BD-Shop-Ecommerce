import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about__body'>
            <h1 className='pt-5'>Know About Us</h1>
            <div className='container'>
                <div className='about__content pt-5 pb-5'>
                    <div className="left__div">
                        <h2>Get your Best</h2>
                        <p>Online shopping is the most recent phenomenon in the Indian online space. Men and women of all ages visit the eCommerce websites regularly and buy the necessaries of life.
                        Today, there are online shops even of grocers. Rice, pulse, oil, and stationary goods are also bought online. The online grocery stores also sell fruits, vegetables, potato, onions, bread, butter, etc.
                        </p>
                        <button className='btn btn-info'>Learn More</button>
                    </div>
                    <div className="right__div">
                        <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/ia7006AzOUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About