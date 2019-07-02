import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'col-6 col-sm-2 col-md-2 side-drawer open';
    }
    return (
        <div className={drawerClasses}>
            <ul>
                <Link to="/"><li className="" onClick={props.click}>Dashboard</li></Link>
                <Link to="/expense"><li className="" onClick={props.click}>Expense</li></Link>
                <Link to="/category"><li className="" onClick={props.click}>Category</li></Link>
                <Link to="/login"><li className="" onClick={props.click}>Login</li></Link>
                <Link to="/register"><li className="" onClick={props.click}>Register</li></Link>

            </ul>
        </div>
    )

}


export default SideDrawer;