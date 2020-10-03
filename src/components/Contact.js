import React, { useState, useEffect } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Filler from '../assets/Card-images/TestImg.jpg';

function Contact() {
    const [loading_animation, setloading_animation] = useState(false);


    useEffect(() => {
        if (loading_animation === false) {
            setTimeout(() => {
                setloading_animation(!loading_animation);
                console.log('play animation')
            }, 100);
        }

    }, [loading_animation]);

    const cardTransition = loading_animation ? 'contactCard ease' : 'contactCard';

    return (
        <div className='contactStyle'>
            <div className={cardTransition}>
                <div className='contactImage'>
<img alt='Image of me for contact card' src={Filler}></img>
                </div>
                <div className='contactLinks'><LinkedInIcon /> <YouTubeIcon /> <InstagramIcon /></div>
            </div>
        </div>
    )
}

export default Contact;