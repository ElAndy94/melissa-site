import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <main className='main'>
          <Switch>
            <Route path='/' exact component={HomePage} />
            {/* <Route path='/work' component={work} />
            <Route path='/certificates' component={Certificates} />
            <Route path='/contact' component={contact} /> */}
            <Redirect to='/' />
          </Switch>
        </main>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
