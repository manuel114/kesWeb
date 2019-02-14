/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AboutUs from 'containers/AboutUs/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Wrapper from '../../components/Wrapper';

import GlobalStyle from '../../global-styles';
import 'semantic-ui-css/semantic.min.css';

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <Wrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </Wrapper>
    </Suspense>
  );
}
