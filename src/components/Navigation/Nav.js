import React from 'react';
import {Link} from 'react-router-dom';
import DrawerButton from './DrawerButton';


//main navigation bar at the top of app
const Nav = props => (
    <header className='toolbar'>
        <nav className='toolbar_nav'>
            <div className='nav-drawer-button'>
                <DrawerButton click={props.drawerClickHandler} />
            </div>
            <div className='toolbar_logo'><li>My Portfolio</li></div>
            <div className='spacer'/>
            <div className='toolbar_nav-items'>
                <ul>
                <li><Link to='/'>About</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Nav;