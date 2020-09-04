import React, { useRef, useState, useEffect } from 'react';
import Data from '../Data/webApps_data';
import ReactSwing from '../../node_modules/react-swing/dist/react-swing.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Test from '../assets/about_backdrop.jpeg';

function Webapps() {

    const [loading_animation, setloading_animation] = useState(false);
    const projectStack = useRef();
    const [cardCount, setCardCount] = useState(Data.length);

    useEffect(() => {
        if (loading_animation === false) {
            setTimeout(() => {
                setloading_animation(!loading_animation);
                console.log()
            }, 100);
        }
    }, [loading_animation]);


    const textTransition = loading_animation ? 'text_transition ease' : 'text_transition';
    const elementTransition = loading_animation ? 'element_transition ease' : 'element_transition';

    //swipicard script

    //set translate(0, 0) rotate(0) to return cards to origin
    return (
        <div className='webAppStyles'>
            <ReactSwing className='Stack' ref={projectStack} throwout={(e) => console.log('throwout', e)}>
                {Data.map((Projects, index) => {
                    return <div className='Cards'>
                    <Carousel showThumbs={false} infiniteLoop={true} swipeable={false}>
                            <div><iframe width="100%" height="100%" src={Projects.videoAddress+'?autoplay=1'} allow='autoplay' frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
                            <div><img src={Test}/></div>
                        </Carousel>
                        <div className='cardHead'>
                            <h1>{Projects.workName}</h1>
                            {Projects.workTech.map((Tech, index) => { return <p>Technology used: {Tech}</p> })}
                        </div>
                        <p>{Projects.workDescription}</p>
                    </div>
                })}
            </ReactSwing>
        </div >
    )
}

export default Webapps;