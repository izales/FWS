import React from 'react';
import { Switch, Route } from "react-router-dom";
import Master from './modules/Master/Master';
import Projects from './modules/Projects/Projects';
import Imprint from './modules/Imprint/Imprint';
import ProjectsTwo from './modules/Projects/ProjectsTwo';
import ProjectsThree from './modules/Projects/ProjectsThree';
import NotFound from './modules/Layout/NotFound';
import Drohne from './modules/Projects/Drohne'
import Imagefilm from './modules/Projects/Imagefilm'
import Marketing from './modules/Projects/Marketing'
import Webdesign from './modules/Projects/Webdesign'
import Productfilm from './modules/Projects/Productfilm';
import Jagdfilm from './modules/Projects/Jagdfilm';

function Routes(props) {


  return (
    <Switch>
      <Route exact path="/" component={Master} />‚
      <Route path="/drohne" component={Drohne} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/webdesign" component={Webdesign} />
      <Route path="/imagefilm" component={Imagefilm} />
      <Route path="/productfilm" component={Productfilm} />
      <Route path="/jagdfilm" component={Jagdfilm} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects-two" component={ProjectsTwo} />
      <Route path="/projects-three" component={ProjectsThree} />
      <Route path="/imprint" component={Imprint} />
      <Route path="/portfolio-two" component={Master} />
      <Route path="/portfolio-three" component={Master} />
      <Route path="/solutions" component={Master} />
      <Route path="/Team" component={Master} />
      <Route path="/agency" component={Master} />
      <Route path="/contact-us" component={Master} />
      <Route path="" component={NotFound} />
    </Switch>
  );
}

export default Routes;