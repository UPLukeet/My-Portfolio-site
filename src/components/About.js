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
                    <h2 className={textTransition}>Introduction</h2>
                    <p className={textTransition}>Hi I'm Luke a Graduate developer who's enthusiastic to get started in the industry. You can see me above, I do have a face I promise!</p>
                    <h2 className={textTransition}>Education</h2>
                    <p className={textTransition}>I achieved a 2:1 in Digital media(Bsc) from the University of Portsmouth, where I enjoyed learning about a wide variety of technologies choosing to specialise in React web development.</p>
                    <p className={textTransition}></p>
                    <h2 className={textTransition}>Hobbies</h2>
                    <p className={textTransition}>Technology is one of my passions. I love learning and keeping up to date with the latest technologies. I am a health and fitness enthusiast who is mad about Power-lifting, running, cycling and anything outdoors. I also enjoy cooking anything spicy the hotter the better!</p>
                </div>
            </div>

            <div className='skillsBox'>
                <div className={textTransition}>
                    <DesignLogo />
                    <h2>What I create</h2>
                    <p>I am passionate about building great things using the latest technologies available, here are some of the things I enjoy making.</p>
                    <h3>Things I make:</h3>
                    <p>Websites, Web apps, Games, Infographics, minimalistic Illustrations, Wireframes/designs</p>
                    <h3>Tools I use:</h3>
                    <ul>
                        <li>React.js</li>
                        <li>Node</li>
                        <li>Git</li>
                        <li>Github</li>
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