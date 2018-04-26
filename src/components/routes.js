import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contacts from './contact';
import Projects from './projects';
import Resume from './resume';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
};

export default Routes;
