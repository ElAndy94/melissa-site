import React from 'react';

import './Toolbar.scss';
import { ReactComponent as Icon } from '../../../assets/images/name-logo.svg';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
  <header className='tool__bar'>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Icon width={150} />
    <nav className='desktop__only'>
      <NavigationItems />
    </nav>
  </header>
);
export default toolbar;
