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
        <header className='toolbar'>
            <nav className='toolbar_nav'>
                <div className='nav-drawer-button'>
                    <DrawerButton click={props.drawerClickHandler} />
                </div>
                <div className='toolbar_logo'><li>Lukeet Webdev Portfolio</li></div>
                <div className='spacer'/>
                <div className='toolbar_nav-items'>
                    <ul>
                    <NavLink className='noSelect' to='/' exact activeClassName='navCurrent'><li>About</li></NavLink>
                    <NavLink className='noSelect' to='/Projects' exact activeClassName='navCurrent'><li>Projects</li></NavLink>
                    <NavLink className='noSelect' to='/Contact' exact activeClassName='navCurrent'><li>Contact</li></NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

//main navigation bar at the top of app

export default Nav;