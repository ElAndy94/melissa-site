import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss';

function navigationItems() {
  return (
    <ul className='navigation__items'>
      <NavigationItem link='/' exact>
        Home
      </NavigationItem>
      <NavigationItem link='/projects'>Projects</NavigationItem>
      <NavigationItem link='/work'>Resume</NavigationItem>
    </ul>
  );
}

export default navigationItems;
