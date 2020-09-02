import React, { useState, useEffect } from 'react';
import Data from '../Data/webApps_data';
import ReactSwing from '../../node_modules/react-swing/dist/react-swing.js';

function Webapps() {

    const [loading_animation, setloading_animation] = useState(false);
    const [arrayChecker, set_arrayChecker] = useState(0);
    const [arrayChecker2, set_arrayChecker2] = useState(1);

    useEffect(() => {
        if (loading_animation === false) {
            setTimeout(() => {
                setloading_animation(!loading_animation);
                console.log()
            }, 100);
        }
    }, [loading_animation]);

    //cycles through data
    const arrayLimiter = () => {
        if (arrayChecker < (Data.length - 1)) {
            set_arrayChecker(arrayChecker + 1)
        } else {
            set_arrayChecker(0)
        }
        if (arrayChecker2 < (Data.length - 1)) {
            set_arrayChecker2(arrayChecker2 + 1)
        } else {
            set_arrayChecker2(0)
        }
        console.log(filteredData2)
    };

    const filteredData = Data[arrayChecker];
    const filteredData2 = Data[arrayChecker2];


    const textTransition = loading_animation ? 'text_transition ease' : 'text_transition';
    const elementTransition = loading_animation ? 'element_transition ease' : 'element_transition';

    //swipicard script

    return (
        <div className='webAppStyles'>
            <ReactSwing className="stack">
                {Data.map((Projects, index) => {
                    return <div>{Projects.workName}</div>
                })}
            </ReactSwing>

            <p>{filteredData.workName}</p>
            <button onClick={arrayLimiter}>Increase number</button>
        </div >
    )
}

export default Webapps;