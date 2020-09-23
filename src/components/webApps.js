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

    useEffect(() => {
        if (loading_animation === false) {
            setTimeout(() => {
                setloading_animation(!loading_animation);
            }, 100);
        }
    }, [loading_animation]);

    //card effect on throw out
    const onSwipe = (direction, Project_card) => {
        console.log('You swiped: ' + Project_card + ' to the ' + direction)
      }

    const autoplayChange = () => {
        setSlideShow(!slideShow)
        console.log('playing!')
    }

    const onCardLeftScreen = (Project_card) => {
        console.log(Project_card + ' left the screen')
      }


    const cardTransition = loading_animation ? 'card_transition ease' : 'card_transition';
      
    return (
        <div className='cardStyles'>
            <div className={cardTransition}>
                    {Data.map((Projects, index) => {
                        return <TinderCard onSwipe={(e) => onSwipe(e, Projects.workName)} key={Projects.workName} preventSwipe={['up', 'down']}  onCardLeftScreen={() => onCardLeftScreen(Projects.workName)} className='Cards'>
                            <Carousel showThumbs={false} infiniteLoop={true} swipeable={false} emulateTouch={false} showStatus={false} autoPlay={slideShow} dynamicHeight={false}>
                                {Projects.Images && Projects.Images.map((Image, index) => { return <div key={Image} className='image-iframeContainer'><img loading="lazy" alt='Images of web apps' src={require("../assets/Port-images/Web-Apps/" + Image)} /></div> })}
                                {Projects.videoAddress && Projects.videoAddress.map((Video, index) => { return <div key={Video} className='image-iframeContainer'><ReactPlayer url={Video} muted={false} controls={false} onPlay={autoplayChange} onPause={autoplayChange} onEnded={autoplayChange} /></div>})}
                            </Carousel>
                            {Projects.webAddress && <div className='webButton'><LinkIcon onClick=  { () => {window.open(Projects.webAddress);}}/></div>}
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