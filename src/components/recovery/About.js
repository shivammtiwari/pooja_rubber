import React from 'react'
import './RecoveryStyles.css'

const About = () => {
    return (
        <>
            <div className="wrapper">
                <div class="test">
                    <img class="image" src={require('../../assets/about.jpg')} alt="" />
                    <h2 class="text">About Us</h2>
                </div>
            </div>

            <div className="AboutWrapper">
                <div className="AboutFirst">
                    <div className="Image">
                        <img src={require('../../assets/abt.jpg')} alt="" />
                    </div>
                    <div className="Content">
                        <h2>Who we are..?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est porro alias magni praesentium pariatur soluta fuga veniam quae delectus velit, assumenda ullam. Laborum nesciunt veritatis nihil porro, molestiae culpa.</p>
                    </div>
                </div>

                <div className="AboutFirst">
                    <div className="Content">
                        <h2>What we do...?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est porro alias magni praesentium pariatur soluta fuga veniam quae delectus velit, assumenda ullam. Laborum nesciunt veritatis nihil porro, molestiae culpa.</p>
                    </div>
                    <div className="Image">
                        <img src={require('../../assets/abt.jpg')} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
