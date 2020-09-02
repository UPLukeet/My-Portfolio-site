import React, { useRef, useState, useEffect } from 'react';
import Data from '../Data/webApps_data';
import ReactSwing from '../../node_modules/react-swing/dist/react-swing.js';

function Webapps() {

    const [loading_animation, setloading_animation] = useState(false);
    const projectStack = useRef();
    const [cardCount, setCardCount] = useState(Data.length);
    const [stack, setStack] = useState(null);

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

    return (
        <div className='webAppStyles'>
            <ReactSwing className="stack" ref={projectStack} throwout={(e) => console.log('throwout', e)}>
                {Data.map((Projects, index) => {
                    return <div>{Projects.workName}</div>
                })}
            </ReactSwing>
        </div >
    )
}

export default Webapps;