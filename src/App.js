import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/HomePage/HomePage';
import './App.scss';

const App = () => {
  let routes = (
    <Switch>
      <Route path='/home' exact component={Home} />
      <Route path='/projects' exact component={Home} />
      <Route path='/aboutme' exact component={Home} />
      <Route path='/contact' exact component={Home} />
      <Route path='/' exact component={Home} />
      <Redirect to='/' />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default App;
