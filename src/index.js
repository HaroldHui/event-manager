import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router";
import './index.css';
import Home from './Home';
import AddEvent from './AddEvent';
import Events from './Events';
import Enrollments from './Enrollments';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

// ReactDOM.render(<Router>
//   <Route path="/" component={EventManager}>
//     <Route exact path="/" component={EventManager}></Route>
//     <Route path="EventUpdate" component={AddEvent}></Route>
//     <Route path="EventList" component={Events}></Route>
//     <Route path="EventEnrollment" component={Enrollments}></Route>
//   </Route>
// </Router>, document.getElementById('root'));


serviceWorker.unregister();
