import React, { useState, useEffect } from 'react';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import TouchAppIcon from '@material-ui/icons/TouchApp';

function CardSwipeLoad() {

    return (
        <div className='iconContainerBackdrop'>
            <div className='iconContainer'>
            <ViewCarouselIcon className='cardIcon'/>
            <TouchAppIcon className='swipeIcon'/>
            </div>
            <h1>swipe cards to view projects</h1>
        </div>
    )

}

export default CardSwipeLoad;