import React from 'react';

import './Toolbar.scss';
// import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
  <header className='tool__bar'>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    {/* <div className='logo'>
      <Logo />
    </div> */}
    <nav className='desktop__only'>
      <NavigationItems />
    </nav>
  </header>
);
export default toolbar;
