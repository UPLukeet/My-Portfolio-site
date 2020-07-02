import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import DrawerButton from './DrawerButton';


function Nav(props) {

    const [loading_animation, setloading_animation] = useState(false);


    useEffect(() => {
        if (loading_animation === false) {
            setTimeout(() => {
                setloading_animation(!loading_animation);
                console.log('play animation')
            }, 100);
        }
        return () => {
            document.body.style.overflow = 'unset';
        }

    }, [loading_animation]);


   return (
       <div className={loading_animation ? 'sliding_transition ease' : 'sliding_transition'}>
        <header className='toolbar'>
            <nav className='toolbar_nav'>
                <div className='nav-drawer-button'>
                    <DrawerButton click={props.drawerClickHandler} />
                </div>
                <div className='toolbar_logo'><li>My Portfolio</li></div>
                <div className='spacer'/>
                <div className='toolbar_nav-items'>
                    <ul>
                    <NavLink className='noSelect' to='/' exact activeClassName='navCurrent'><li>About</li></NavLink>
                    <NavLink className='noSelect' to='/web' exact activeClassName='navCurrent'><li>Web & App</li></NavLink>
                    <NavLink className='noSelect' to='/games' exact activeClassName='navCurrent'><li>Games</li></NavLink>
                    <NavLink className='noSelect' to='/adobe' exact activeClassName='navCurrent'><li>Adobe</li></NavLink>
                    </ul>
                </div>
            </nav>
        </header>
        </div>
    )
}

//main navigation bar at the top of app

export default Nav;