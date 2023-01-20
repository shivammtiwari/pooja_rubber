import React from 'react'
import './ContactStyles.css'
import Form from '../Form/Form'
import SliderWrap from '../Slider/SliderWrap'

const Contact = () => {
    return (

        <>
        <div className='contact'>
            <div className="ContactDetails">
                <div className="address">
                    <div className="icon">
                    <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="ContactText">
                        <div className="ContactTitle">Adress</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, asperiores.</p>
                    </div>
                </div>

                <div className="phone address">
                    <div className="icon">
                    <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="ContactText">
                        <div className="ContactTitle">Call Us</div>
                        <a href="/">+91 7523805619</a>
                    </div>
                </div>
                <div className="email address">
                    <div className="icon">
                    <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div className="ContactText">
                        <div className="ContactTitle">Email Us</div>
                        <a href="/">shivmmtiwari@gmail.com</a>
                    </div>
                </div>
            </div>

                    <div className="ContactForm">
                    <Form/>
                    </div>

        </div>

<SliderWrap/>
</>

    )
}

export default Contact
