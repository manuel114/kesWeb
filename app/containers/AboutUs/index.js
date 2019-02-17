/*
 * About Us
 *
 * This page explains what we do at KES, at the /about-us route
 *
 */
import React, { PureComponent } from 'react';
import PresidentialGreeting from './PresidentialGreeting';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends PureComponent {
  render() {
    return (
      <>
        <PresidentialGreeting />
      </>
    );
  }
}
