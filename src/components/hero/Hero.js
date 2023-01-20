import React from 'react'
import Form from '../Form/Form'
import './HeroStyles.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <h1>Lorem, ipsum dolor.</h1>
                    <h1 className='blue'>Lorem ipsum dolor sit amet.</h1>
                    <h1>Lorem ipsum dolor sit.</h1>
                    <div><button>Learn More</button></div>
                </div>
                <div className="form">
                    <Form />
                </div>
            </div>

        </div>
    )
}

export default Hero
