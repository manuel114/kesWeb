/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MeetTheTeam from 'containers/MeetTheTeam/Loadable';
import Platform from 'containers/Platform/Loadable';
import ContactUs from 'containers/ContactUs/Loadable';

import Header from '../../components/Header';

import GlobalStyle from '../../global-styles';
import 'semantic-ui-css/semantic.min.css';

export default function App() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: '25vh' }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/meet-the-team" component={MeetTheTeam} />
          <Route path="/platform" component={Platform} />
          <Route path="/contact-us" component={ContactUs} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    </div>
  );
}
