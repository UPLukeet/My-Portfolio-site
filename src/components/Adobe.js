import React, { useState, useEffect } from 'react';

function Adobe() {

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
        <div className='adobeStyles'>

        </div>
    )
}

export default Adobe;