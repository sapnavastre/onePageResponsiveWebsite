import React from 'react';


    function Box(props) {
        return (
            <div className='s-box'>
                <div className='s-b-img'>
                    <img src={props.image} alt={props.alte} />
                </div>
                <div className='s-b-text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at delectus sit nihil exercitationem veniam sapiente quidem soluta. Neque, perspiciatis. Vitae minima saepe minus sint, quis nam mollitia distinctio? Adipisci!</p>
                    <a href='/' className='cv-btn'>{props.button}</a>
                </div>
            </div>
        )
    }

export default Box;
