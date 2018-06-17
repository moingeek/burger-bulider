import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
const sideDrawer = (props) => {
    return (
        <div>
            <Logo  heigth="11%"/>
            <nav>
                <NavigationItems />
            </nav>

        </div>
    );
};

export default sideDrawer;