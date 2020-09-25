import React, { useState, useEffect } from 'react';
import Data from '../Data/webApps_data';
import TinderCard from 'react-tinder-card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player/youtube'
import LinkIcon from '@material-ui/icons/Link';

function Webapps() {

    const [loading_animation, setloading_animation] = useState(false);
    const [slideShow, setSlideShow] = useState(true);

    //sets initial cards within the queue
    let [cardQueue, setCardQueue] = useState([Data[0], Data[1], Data[2]]);

    //sets the index of card that will be pushed into queue
    let [cardQueueLength, setCardQueueLength] = useState(3);

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

    const onCardLeftScreen = () => {
        //removes card from front of queue
        cardQueue.shift();
        //iterates through cards(sets up loop)
        setCardQueueLength(cardQueueLength < Data.length ? 0 : cardQueueLength + 1);
        //pushes a card to back of queue
        cardQueue.push(Data[cardQueueLength]);
        console.log(cardQueue);
        console.log(cardQueueLength);
    }


    const cardTransition = loading_animation ? 'card_transition ease' : 'card_transition';

    return (
        <div className='cardStyles'>
            <div className={cardTransition}>
                {cardQueue.map((Projects, index) => {
                    return <TinderCard key={Projects.workName} preventSwipe={['up', 'down']} onCardLeftScreen={onCardLeftScreen} className='Cards'>
                        <Carousel showThumbs={false} infiniteLoop={true} swipeable={false} emulateTouch={false} showStatus={false} autoPlay={slideShow} dynamicHeight={false}>
                            {Projects.Images && Projects.Images.map((Image, index) => { return <div key={Image} className='image-iframeContainer'><img alt='Images of web apps' src={require("../assets/Port-images/Web-Apps/" + Image)} /></div> })}
                            {Projects.videoAddress && Projects.videoAddress.map((Video, index) => { return <div key={Video} className='image-iframeContainer'><ReactPlayer url={Video} muted={false} controls={false} onPlay={autoplayChange} onPause={autoplayChange} onEnded={autoplayChange} /></div> })}
                        </Carousel>
                        {Projects.webAddress && <div className='webButton'><LinkIcon onClick={() => { window.open(Projects.webAddress); }} /></div>}
                        <h1>{Projects.workName}</h1>
                        {Projects.workTech.map((Tech, index) => { return <p key={Tech} className='techList'>{Tech}</p> })}
                        <div className='descriptionContainer'>
                            <p className='description' >{Projects.workDescription}</p>
                        </div>
                    </TinderCard>
                })}
            </div>
        </div >
    )
}

export default Webapps;