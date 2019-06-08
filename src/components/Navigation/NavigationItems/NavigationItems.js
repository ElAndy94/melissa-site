import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss';

function navigationItems() {
  return (
    <ul className='navigation__items'>
      <NavigationItem link='/'>Home</NavigationItem>
      <NavigationItem link='/'>Work Experience</NavigationItem>
      <NavigationItem link='/'>Certificates</NavigationItem>
      <NavigationItem link='/'>Work</NavigationItem>
    </ul>
  );
}

export default navigationItems;
