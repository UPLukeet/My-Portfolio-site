import React, { useState, useEffect } from 'react';
import Data from '../Data/Projects_data';
import ItemsCarousel from 'react-items-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player/youtube';
import LinkIcon from '@material-ui/icons/Link';

function Projects() {

    const [loading_animation, setloading_animation] = useState(false);
    const [slideShow, setSlideShow] = useState(true);
    const [cardIndex, setCardIndex] = useState(0)

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


    const cardTransition = loading_animation ? 'card_transition ease' : 'card_transition';


    return (
        <div className='cardStyles'>
            <div className={cardTransition}>
                <ItemsCarousel className='masterCarousel'
                    requestToChangeActive={setCardIndex}
                    activeItemIndex={cardIndex}
                    infiniteLoop={false}
                    activePosition={'center'}
                    disableSwipe={false}
                    infiniteLoop={true}
                    showSlither={true}
                    numberOfCards={1}
                    slidesToScroll={1}
                    rightChevron={'>'}
                    leftChevron={'<'}>
                    {Data.map((Projects, index) => {
                        return <div key={index} className='Cards'>
                            <Carousel className='childCarousel' showThumbs={false} infiniteLoop={true} swipeable={false} emulateTouch={false} showStatus={false} autoPlay={slideShow} dynamicHeight={false}>
                                {Projects.Images && Projects.Images.map((Image, index) => { return <div key={Image + index} className='image-iframeContainer'><img alt='Images of web apps' src={require("../assets/Card-images/Web-Apps/" + Image)} /></div> })}
                                {Projects.videoAddress && Projects.videoAddress.map((Video, index) => { return <div key={Video + index} className='image-iframeContainer'><ReactPlayer url={Video} muted={false} controls={false} onPlay={autoplayChange} onPause={autoplayChange} onEnded={autoplayChange} /></div> })}
                            </Carousel>
                            {Projects.webAddress && <div className='webButton'><LinkIcon onClick={() => { window.open(Projects.webAddress); }} /></div>}
                            <h1>{Projects.workName}</h1>
                            {Projects.workTech.map((Tech, index) => { return <p key={Tech + index} className='techList'>{Tech}</p> })}
                            <div className='descriptionContainer'>
                                <p className='description' >{Projects.workDescription}</p>
                            </div>
                        </div>
                    })}
                </ItemsCarousel>
            </div>
        </div >
    )
}

export default Projects;