/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import React, { PureComponent } from 'react';
import Heading from './Heading';
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends PureComponent {
  render() {
    return (
      <>
        <Heading />
      </>
    );
  }
}
