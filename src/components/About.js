import React, { useState, useEffect } from 'react';

function About() {

    const [loading_animation, setloading_animation] = useState(false);


    useEffect(() => {
        if (loading_animation === false) {
            setTimeout(() => {
                setloading_animation(!loading_animation);
                console.log('play animation')
            }, 100);
        }
    }, []);

    const textTransition = loading_animation ? 'loading_transition ease' : 'loading_transition';

    return (
        <div className='aboutStyles'>
                <p className={textTransition}>About page</p>
        </div>
    )
}

export default About