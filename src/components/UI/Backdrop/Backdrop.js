import React from 'react';

import './Backdrop.scss';

const backdrop = props =>
  props.show ? <div className='back__drop' onClick={props.clicked} /> : null;

export default backdrop;
