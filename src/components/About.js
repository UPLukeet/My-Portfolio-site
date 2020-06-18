import React, { useState, useEffect } from 'react';
import MinimalMe from '../assets/MinimalMe_icon.svg';

function About() {

    const [loading_animation, setloading_animation] = useState(false);


    useEffect(() => {
        if (loading_animation === false) {
            setTimeout(() => {
                setloading_animation(!loading_animation);
                console.log('play animation')
            }, 100);
        }
    }, [loading_animation]);

    const textTransition = loading_animation ? 'text_transition ease' : 'text_transition';
    const elementTransition = loading_animation ? 'element_transition ease' : 'element_transition';

    return (
        <div className='aboutStyles'>
                <div className="aboutHead">
                    <img src={MinimalMe}/>
                    <h1 className={textTransition}>About me</h1>
                </div>
        </div>
    )
}

export default About