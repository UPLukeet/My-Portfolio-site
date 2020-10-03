import React, { useState, useEffect } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Filler from '../assets/Card-images/TestImg.jpg';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIcon from '@material-ui/icons/Assignment';

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
                    <img alt='Me' src={Filler}></img>
                </div>
                <div className='contactLinks'>
                    <LinkedInIcon className='LinkedInSVG' onClick={() => { window.open('https://www.linkedin.com/in/luke-ellul-turner-985028162/'); }}/> <YouTubeIcon className='YoutubeSVG' onClick={() => { window.open('https://www.youtube.com/channel/UC4JvFHCZcbB52ajG_BJPmww'); }}/> <InstagramIcon className='InstagramSVG' onClick={() => { window.open('https://www.instagram.com/lukeetwebdev/'); }}/>
                </div>
                <div className='contactInfoContainer'>
                    <div className='contactInfo Name'>
                        <PersonIcon />
                        <p>Luke Ellul-Turner</p>
                    </div>
                    <div className='contactInfo Profession'>
                        <AssignmentIcon />
                        <p>Web developer, Programmer and digital Illustrator</p>
                    </div>
                    <div className='contactInfo Email'>
                        <EmailIcon />
                        <p>lukeetwebdev@gmail.com</p>
                    </div>
                    <div className='contactInfo Number'>
                        <PhoneIcon />
                        <p>07516 619581</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;