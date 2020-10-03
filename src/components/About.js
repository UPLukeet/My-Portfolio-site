import React, { useState, useEffect } from 'react';
import MinimalMe from '../assets/Mylogo.svg';
import { ReactComponent as DesignLogo } from '../assets/Design.svg';
import { ReactComponent as DevLogo } from '../assets/Dev.svg';

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
            <div className={loading_animation ? 'aboutContainer ease' : 'aboutContainer'}>
                <div className="aboutHead">
                    <h1 className={textTransition}>About me</h1>
                </div>
                <div className='aboutText'>
                    <img alt='me with laptop sat on a bench' className={elementTransition} src={MinimalMe} />
                    <h2 className={textTransition}>Education</h2>
                    <p className={textTransition}>I learned my trade during my time at the University of Portsmouth where I studied Digital media(Bsc), in which I learned about varies digital technologies.</p>
                    <h2 className={textTransition}>Hobbies</h2>
                    <p className={textTransition}>One of my intrests is in technology I love to keep up with and read about the latest technologies released even if I can't afford them most the time, My main passion is health and fitness I love going to the gym, running, cycling along with this I enjoy cooking healthy meals.</p>
                </div>
            </div>

            <div className='skillsBox'>
                <div className={textTransition}>
                    <DesignLogo />
                    <h2>What I create</h2>
                    <p>I am passionate about building great things using the latest technologies available, here are some the things I enjoy making.</p>
                    <h3>What I create:</h3>
                    <p>Websites, Web apps, Games, Infographics, minimalistic Illustrations, Wireframes/designs</p>
                    <h3>Tools I use:</h3>
                    <ul>
                        <li>React.js</li>
                        <li>Adobe Illustrator</li>
                        <li>Github</li>
                        <li>Netlify</li>
                        <li>Adobe After Effects</li>
                    </ul>
                </div>
                <div className={textTransition}>
                    <DevLogo />
                    <h2>Development</h2>
                    <p>A good craftsman never blames his tools, that being said here are the tools I use to make ideas a reality using code!</p>
                    <h3>Languages I know:</h3>
                    <p>HTML, CSS, Sass, Javascript, C#, PHP, Kotlin</p>
                    <h3>Database Knowledge:</h3>
                    <ul>
                        <li>sql</li>
                        <li>Firebase</li>
                    </ul>
                    <h3>Development Environments I use:</h3>
                    <ul>
                        <li>Visual Studio code</li>
                        <li>Linux/Command line</li>
                        <li>Unity</li>
                        <li>Unreal Engine</li>
                        <li>Android Studio</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About