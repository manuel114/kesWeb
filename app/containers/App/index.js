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

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/meet-the-team" component={MeetTheTeam} />
        <Route path="/platform" component={Platform} />
        <Route path="/contact-us" component={ContactUs} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
