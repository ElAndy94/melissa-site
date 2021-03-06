import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';
import './App.scss';

const App = () => {
  let routes = (
    <Switch>
      <Route path='/home' exact component={Home} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/' exact component={Home} />
      <Redirect to='/' />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default App;
