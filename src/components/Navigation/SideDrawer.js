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
            <h1>My Portfolio</h1>
        </div>
        <ul>
            <NavLink className='noSelect' onClick={props.sidedrawerClickHandler} to='/' exact activeClassName='current'><li>About</li></NavLink>
            <NavLink className='noSelect' onClick={props.sidedrawerClickHandler} to='/web' activeClassName='current'><li>Web & App</li></NavLink>
            <NavLink className='noSelect' onClick={props.sidedrawerClickHandler} to='/games' activeClassName='current'><li>Games</li></NavLink>
            <NavLink className='noSelect' onClick={props.sidedrawerClickHandler} to='/adobe' activeClassName='current'><li>Adobe</li></NavLink>
        </ul>
    </nav>);

};

export default sideDrawer;