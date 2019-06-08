import React, { useState } from 'react';

import './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => {
  const [sideDrawer, setSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    if (sideDrawer === true) {
      setSideDrawer(false);
    } else {
      setSideDrawer(true);
    }
  };

  return (
    <React.Fragment>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={sideDrawer} closed={sideDrawerClosedHandler} />
      <main className='Content'>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
