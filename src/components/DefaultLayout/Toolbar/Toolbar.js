import React from 'react';
import './Toolbar.css';
//import logo from '../../logo.svg';
import logo from '../../../assets/img/brand/logo.svg';
import avatar from '../../../assets/img/avatars/6.jpg';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => (
    <nav className="navbar navbar-expand-md sticky-top navExtra">
        <a className="navbar-brand">
            <img src={logo} className="navbar-brand" alt="logo" style={{height:'35px'}}/>
        </a>
        <div className="toolbar_toggle-button">
            <DrawerToggleButton click={props.drawerClickhandler}/>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li>
                    <img src={avatar} className="toolbar_navigation_avatar" alt="avatar"/>
                </li>
            </ul>
        </div>        
    </nav>
)

export default Toolbar;