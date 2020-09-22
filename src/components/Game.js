import React, { useState, useEffect } from 'react';
import Data from '../Data/Game_data';
import TinderCard from 'react-tinder-card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player/youtube'
import LinkIcon from '@material-ui/icons/Link';


function Game() {

    const [loading_animation, setloading_animation] = useState(false);
    //const [cardCount, setCardCount] = useState(Data.length);
    const [stack, setStack] = useState(null);
    const [slideShow, setSlideShow] = useState(true);

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

    const autoplayChange = () => {
        setSlideShow(!slideShow)
        console.log('playing!')
    }
    


    const cardTransition = loading_animation ? 'card_transition ease' : 'card_transition';

    //swipicard script

    //set translate(0, 0) rotate(0) to return cards to origin
    return (
        <div className='cardStyles'>
            <div className={cardTransition}>

                    {Data.map((Projects, index) => {
                        return <TinderCard className='Cards'>
                            <Carousel showThumbs={false} infiniteLoop={true} swipeable={false} emulateTouch={false} showStatus={false} autoPlay={slideShow} dynamicHeight={false}>
                                {Projects.Images && Projects.Images.map((Image, index) => { return <div className='image-iframeContainer'><img alt='' src={require("../assets/Port-images/Games/" + Image)} /></div> })}
                                {Projects.videoAddress && Projects.videoAddress.map((Video, index) => { return <div className='image-iframeContainer'><ReactPlayer url={Video} muted={false} controls={false} onPlay={autoplayChange} onPause={autoplayChange} onEnded={autoplayChange} /></div>})}
                            </Carousel>
                            {Projects.webAddress && <div className='webButton'><LinkIcon onClick=  { () => {window.open(Projects.webAddress);}}/></div>}
                            <h1>{Projects.workName}</h1>
                            {Projects.workTech.map((Tech, index) => { return <p className='techList'>{Tech}</p> })}
                            <div className='descriptionContainer'>
                                <p className='description'>{Projects.workDescription}</p>
                            </div>
                        </TinderCard>
                    })}
            </div>
        </div >
    )
}

export default Game;