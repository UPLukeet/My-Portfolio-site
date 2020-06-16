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
        return () => {
            document.body.style.overflow = 'unset';
        }

    }, []);

    return(
        <div className={loading_animation ? 'loading_transition fade' : 'loading_transition'}>
            <p>About page</p>
        </div>
    )
}

export default About