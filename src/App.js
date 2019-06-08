import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import './App.scss';

const App = () => {
  let routes = (
    <Switch>
      <Route path='/homepage' exact component={HomePage} />
      {/* <Route path='/work' component={work} />
      <Route path='/certificates' component={Certificates} />
      <Route path='/contact' component={contact} /> */}
      <Route path='/' exact component={HomePage} />
      <Redirect to='/' />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default App;
