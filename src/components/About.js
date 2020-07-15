import React, { useState, useEffect } from 'react';
import MinimalMe from '../assets/Mylogo.svg';

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
    const bodyTransition = loading_animation ? 'mainBody_transition.ease' : 'mainBody_transition';

    return (
        <div className='aboutStyles'>
            <div className={loading_animation ? 'aboutContainer ease' : 'aboutContainer'}>
                <div className="aboutHead">
                    <h1 className={textTransition}>About me</h1>
                </div>
                <img className={elementTransition} src={MinimalMe} />
                <div className='aboutText'>
                    <h2>Education</h2>
                    <p className={textTransition}>I learned my trade during my time at the University of Portsmouth where I studied Digital media(Bsc), in which I learned about varies digital technologies.</p>
                    <h2 className={textTransition}>Skills</h2>
                    <p className={textTransition}></p>
                    <h2 className={textTransition}>Hobbies</h2>
                    <p className={textTransition}></p>
                </div>
            </div>
            <div className='skillsStyles'>
                <h1>Skills</h1>
                <div>
                    <h2>Front end</h2>
                </div>
                <div>
                    <h2>Back end</h2>
                </div>
                <div>
                    <h2>Design</h2>
                </div>
            </div>
        </div>
    )
}

export default About