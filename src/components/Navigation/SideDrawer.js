import React from 'react';
import { NavLink } from 'react-router-dom';


//side drawer slides out and is main naviagtion on mobile
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (<nav className={drawerClasses}>
        <div className='sidedraw-top'>
        </div>
        <ul>
        <NavLink className='noSelect' onClick={props.sidedrawerClickHandler} to='/' exact activeClassName='current'><li>about</li></NavLink>
        </ul>
    </nav>);

};

export default sideDrawer;