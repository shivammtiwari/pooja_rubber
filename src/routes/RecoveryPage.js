import React from 'react'

import Navbar from '../components/navbar/Navbar'
import About from '../components/recovery/About'
import Footer from '../components/footer/Footer'
import SliderWrap from '../components/Slider/SliderWrap'

const RecoveryPage = () => {
    return (
        <>
           <Navbar /> 
           <About />
           <SliderWrap/>
           <Footer />
        </>
    )
}

export default RecoveryPage
