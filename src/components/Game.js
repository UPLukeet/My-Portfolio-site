import React, { useState, useEffect } from 'react';
import Data from '../Data/Game_data';
import TinderCard from 'react-tinder-card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player/youtube';
import LinkIcon from '@material-ui/icons/Link';


function Game() {

    const [loading_animation, setloading_animation] = useState(false);
    const [slideShow, setSlideShow] = useState(true);
    
    //sets initial cards within the queue
    const [cardQueue, setCardQueue] = useState([Data[0], Data[1]]);

    //sets the index of card that will be pushed into queue
    const [cardQueueLength, setCardQueueLength] = useState(Data.length -1);


    useEffect(() => {
        if (loading_animation === false) {
            setTimeout(() => {
                setloading_animation(!loading_animation);
            }, 100);
        }
    }, [loading_animation]);


    const autoplayChange = () => {
        setSlideShow(!slideShow)
        console.log('playing!')
    }
    

    const CardLeftScreen = () => {
        const dataIndex = cardQueueLength < Data.length - 1 ? cardQueueLength + 1 : 0;

        //accesses queue without mutating state
        const newCardQueue = [...cardQueue];

        //pushes a card to back of queue
        newCardQueue.push(Data[dataIndex]);

        //removes card from front of queue
        newCardQueue.shift();

        //updates state
        setCardQueueLength(dataIndex)
        setCardQueue(newCardQueue)
        
        //sets slideshow to true
        setSlideShow(true)

        //console logs cards in arrays and the index of the card being pushed to back of queue
        console.log(cardQueue);
        console.log(cardQueueLength);
    }


    const cardTransition = loading_animation ? 'card_transition ease' : 'card_transition';

    //swipicard script

    //set translate(0, 0) rotate(0) to return cards to origin
    return (
        <div className='cardStyles'>
            <div className={cardTransition}>

                    {cardQueue.map((Projects, index) => {
                        return <TinderCard  key={Projects.workName + Math.random()} onCardLeftScreen={CardLeftScreen} className='Cards'>
                            <Carousel showThumbs={false} infiniteLoop={true} swipeable={false} emulateTouch={false} showStatus={false} autoPlay={slideShow} dynamicHeight={false}>
                                {Projects.Images && Projects.Images.map((Image, index) => { return <div  key={Image} className='image-iframeContainer'><img alt='Images of games' src={require("../assets/Port-images/Games/" + Image)} /></div> })}
                                {Projects.videoAddress && Projects.videoAddress.map((Video, index) => { return <div  key={Video} className='image-iframeContainer'><ReactPlayer url={Video} muted={false} controls={false} onPlay={autoplayChange} onPause={autoplayChange} onEnded={autoplayChange} /></div>})}
                            </Carousel>
                            {Projects.webAddress && <div className='webButton'><LinkIcon onClick=  { () => {window.open(Projects.webAddress);}}/></div>}
                            <h1>{Projects.workName}</h1>
                            {Projects.workTech.map((Tech, index) => { return <p key={Tech} className='techList'>{Tech}</p> })}
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