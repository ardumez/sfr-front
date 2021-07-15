import logo from './logo.svg';
import './App.css';
import dataValue from './Data';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import InputText from './components/InputText';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import LandingPage from './landing/landingPage/LandingPage';
import CrmPage from './crm/crm-page/crm-page';

function App() {
  return (
    <Router>
      <div className="App s-app">
        <Switch>
          <Route exact path="/">
            <Header headerType="landing" title="Landing" />
          </Route>
          <Route path="/landing">
            <Header headerType="landing" title="Landing" />
          </Route>
          <Route path="/crm">
            <Header headerType="crm" title="Crm" />
          </Route>
        </Switch>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/landing">
              <LandingPage />
            </Route>
            <Route path="/crm">
              <CrmPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
