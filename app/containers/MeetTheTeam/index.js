/*
 * Meet the Team
 */
import React, { PureComponent } from 'react';
import Heading from './Heading';
import MemberGrid from './MemberGrid';

/* eslint-disable react/prefer-stateless-function */
export default class MeetTheTeam extends PureComponent {
  render() {
    return (
      <>
        <Heading />
        <MemberGrid />
      </>
    );
  }
}
