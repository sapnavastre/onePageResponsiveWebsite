import React from 'react';
import featureimage from '../images/Frame 19.png';

function Features() {
    return (
        <div id='features'>

            <div className='features-model'>
                <img src={featureimage} alt='feature-image'/>
            </div>

            <div className='features-text'> 
                <h2>Features</h2>
                <h3>This application <span>Software </span>is Art</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis dicta voluptate, quisquam exercitationem amet illo labore mollitia eum eaque accusantium. Suscipit doloribus iure ex! Asperiores illum eaque fugit repellat.</p>
                <button>View More Features</button>
            </div>

        </div>
    )
}

export default Features;
