import React from 'react';

import './HomePage.scss';
import me from '../../assets/images/test1.jpg';

function HomePage() {
  return (
    <div className='home__container'>
      <div className='content'>
        <img src={me} alt='Girl in a jacket' className='home--picture' />
        <h1>Design what matters.</h1>
        <p>
          Hi, I’m Melissa. A self taught UX Designer in Manchester. Currently
          learning design in my spare time to better my skills and knowledge. I
          enjoy the journey of making ideas come to life to connect everyone
          together.
        </p>
        <p>
          My ambition is to be able to teach other aspiring UX Designers and
          share my knowledge within teams or external talks.
        </p>
        <p>
          When I am not designing I love to go walking in new places taking
          photographs and if a lazy day is on the cards you will find me dunking
          lots of biscuits in coffee.
        </p>
      </div>
      <div>
        <h4>Skills:</h4>
        <div className='table-responsive'>
          <table className='table table-borderless'>
            <thead>
              <tr>
                <th scope='col'>Product Design</th>
                <th scope='col'>Design</th>
                <th scope='col'>Research</th>
                <th scope='col'>Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Responsive Web Design</td>
                <td>UI Design</td>
                <td>Journey Mapping</td>
                <td>Adobe XD</td>
              </tr>
              <tr>
                <td>Mobile Design</td>
                <td>Wireframing</td>
                <td>Personas & Scenarios</td>
                <td>Sketch</td>
              </tr>
              <tr>
                <td>User Experience Design</td>
                <td>Brand Identity</td>
                <td />
                <td>Adobe Photoshop</td>
              </tr>
              <tr>
                <td>Strategic Design</td>
                <td>User Flows</td>
                <td />
                <td>Pen & Paper</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='slider--container'>
        <h3>Certificates</h3>
        <div className='slider-holder'>
          <span id='slider-image-1' />
          <span id='slider-image-2' />
          <span id='slider-image-3' />
          <div className='image-holder'>
            <img src={me} className='slider-image' />
            <img src={me} className='slider-image' />
            <img src={me} className='slider-image' />
          </div>
          <div className='button-holder'>
            <a href='#slider-image-1' className='slider-change' />
            <a href='#slider-image-2' className='slider-change' />
            <a href='#slider-image-3' className='slider-change' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
