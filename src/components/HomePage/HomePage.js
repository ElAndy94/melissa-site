import React from 'react';

import './HomePage.scss';
import me from '../../assets/images/me.jpg';

function HomePage() {
  return (
    <div className='home__container'>
      <div className='content'>
        <img src={me} alt='Girl in a jacket' className='home--picture' />
        <h1>
          I'm a curious designer inspired to solve complex problems through
          designing engaging digital experiences.
        </h1>
        <p>
          Currently living in Manchester and working in the finance sector. On
          the side I am specialising into becoming a little UX star.
        </p>
      </div>
      <div>
        <h4>Skills:</h4>
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
  );
}

export default HomePage;
