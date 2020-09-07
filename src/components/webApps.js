import React, { useRef, useState, useEffect } from 'react';
import Data from '../Data/webApps_data';
import ReactSwing from '../../node_modules/react-swing/dist/react-swing.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Test from '../assets/about_backdrop.jpeg';

function Webapps() {

    const [loading_animation, setloading_animation] = useState(false);
    //const [cardCount, setCardCount] = useState(Data.length);
    const [stack, setStack] = useState(null);


    useEffect(() => {
        if (loading_animation === false) {
            setTimeout(() => {
                setloading_animation(!loading_animation);
            }, 100);
        }
    }, [loading_animation]);

    useEffect(() => {
        console.log(stack)
    }, [stack]);

    //card effect on throw out
    const cardThrown = (targetCard) => {
        console.log(stack);

    }

    const textTransition = loading_animation ? 'text_transition ease' : 'text_transition';
    const elementTransition = loading_animation ? 'element_transition ease' : 'element_transition';

    //swipicard script

    //set translate(0, 0) rotate(0) to return cards to origin
    return (
        <div className='webAppStyles'>
            <div className={textTransition}>
                <ReactSwing className='Stack' setStack={(projectStack) => setStack(projectStack)} throwout={cardThrown}>
                    {Data.map((Projects, index) => {
                        return <div className='Cards'>
                            <div className='cardHead'>
                                <Carousel showThumbs={false} infiniteLoop={true} swipeable={false} emulateTouch={false} showStatus={false}>
                                    <div><img src={Test} /></div>
                                    <div className='iframeContainer'><iframe src={Projects.videoAddress + "?&mute=1&controls=0&fs=0&loop=1&showinfo=0&rel=0&enablejsapi=1"} frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
                                </Carousel>
                                <h1>{Projects.workName}</h1>
                                {Projects.workTech.map((Tech, index) => { return <p>{Tech}</p> })}
                            </div>
                            <p>{Projects.workDescription}</p>
                        </div>
                    })}
                </ReactSwing>
            </div>
        </div >
    )
}

export default Webapps;