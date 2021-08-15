import logo from './logo.svg';
import './App.css';
import dataValue from './Data';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import InputText from './Components/InputText';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LandingPage from './landing/landingPage/LandingPage';
import CrmPage from './crm/crm-page/crm-page';

function App() {
  return (
    <Router>
      <div className="App s-app">
        <Switch>
          <Route path="/crm">
            <Header headerType="crm" title="Crm" />
          </Route>
          <Route path={['/', '/landing']}>
            <Header headerType="landing" title="Landing" />
          </Route>
        </Switch>
        <div className="container">
          <Switch>
            <Redirect exact from="/" to="/telephone-form/step/1" />
            <Route path="/crm">
              <CrmPage />
            </Route>
            <Route path='/telephone-form/step'>
              <LandingPage parentPath="landing" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
