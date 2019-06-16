import React from 'react';

import firstImg from '../../assets/images/first-image.jpg';
import secondImg from '../../assets/images/second-image.jpg';
import './Projects.scss';

function Project() {
  return (
    <div className='projects__container'>
      <div className='card-deck'>
        <div className='card'>
          <img src={firstImg} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Adobe Project</h5>
            <p className='card-text'>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        <div className='card'>
          <img src={secondImg} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Personal Website</h5>
            <p className='card-text'>
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
      </div>

      {/* <div className='card-deck'>
        <div className='card'>
          <img src={firstImg} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Freelance Job</h5>
            <p className='card-text'>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        <div className='card'>
          <img src={secondImg} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Freelance Job</h5>
            <p className='card-text'>
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Project;
