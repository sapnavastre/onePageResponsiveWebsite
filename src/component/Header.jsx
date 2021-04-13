import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>
            <Navbar />
            <div className='name'>

                <h1>It's a <span>ReactJS</span> Website</h1>

                <p className='details'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eos natus! Voluptates autem id dolorem asperiores corrupti vitae numquam, esse nostrum quidem! Nobis quidem rem quis, nam facere ea fugiat.
                </p>

                <div className='header-btns'>
                    <a href="/" className='cv-btn'>Hire Me</a>
                    <a href="/" className='cv-btn1'>Download</a>
                </div>

            </div>

            <div className='arrow'></div>
        </div>
    )
}

export default Header;