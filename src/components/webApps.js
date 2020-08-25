import React, { useState, useEffect } from 'react';
import Data from '../Data/webApps_data';

function Webapps() {

    const [loading_animation, setloading_animation] = useState(false);
    const [arrayChecker, set_arrayChecker] = useState(0);

    useEffect(() => {
        if (loading_animation === false) {
            setTimeout(() => {
                setloading_animation(!loading_animation);
                console.log()
            }, 100);
        }

        const script = document.createElement('script');
        script.src = '@swipi-cards/dist/swipi-cards/swipi-cards.js';

        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [loading_animation]);

    const arrayLimiter = () => {
        if (arrayChecker < (Data.length - 1)) {
            set_arrayChecker(arrayChecker + 1)
        } else {
            set_arrayChecker(0)
        }
        console.log(Data);
    };

    const filteredData = Data[arrayChecker];
    const textTransition = loading_animation ? 'text_transition ease' : 'text_transition';
    const elementTransition = loading_animation ? 'element_transition ease' : 'element_transition';

    //swipicard script

    return (
        <div className='webAppStyles'>
            <rg-swipi-cards stack-offset-y="0.3" class='hydrated'>
                <rg-swipi-card left-color='green' right-color='green' class='hydrated'>
                    <p>test1</p>
                </rg-swipi-card>
                <rg-swipi-card left-color='green' right-color='green' class='hydrated'>
                    <p>test2</p>
                </rg-swipi-card>
            </rg-swipi-cards>
            <p>{filteredData.workName}</p>
            <button onClick={arrayLimiter}>Increase number</button>
        </div>
    )
}

export default Webapps;