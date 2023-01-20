import React from 'react'
import './DataStyles.css'
import {NavLink} from 'react-router-dom'


const Data = () => {
    return (
        <section id='wrapper'>
            <div className='data'>
            <div className="container">
                <div className="content">
                    <h3> Welcome to <span>Pooja Rubbers</span></h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi officiis unde perferendis voluptas laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga quisquam illo. Obcaecati, voluptatum.</p>
                    <div>
                        <button><NavLink to='/about'>Know more </NavLink></button>
                        
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Data
