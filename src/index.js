import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import AppHookContext from './AppContext';
import AppHookEffect from './AppEffect';
import AppHookReducer from './AppReducer';
import AppHookState from './AppFun';
import AppClassState from './App';
import * as serviceWorker from './serviceWorker';
import Nav from './Nav';

const App = () => (
  <BrowserRouter>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={AppClassState}/>
        <Route path="/class/state" component={AppClassState}/>
        <Route path="/hook/state" component={AppHookState}/>
        <Route path="/hook/reducer" component={AppHookReducer}/>
        <Route path="/hook/context" component={AppHookContext}/>
        <Route path="/hook/effect" component={AppHookEffect}/>
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
