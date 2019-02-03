/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import ContentOne from './ContentOne';
import ContentTwo from './ContentTwo';
import ContentThree from './ContentThree';

const BlueDiv = styled.div`
  background-color: #005b9a;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends PureComponent {
  render() {
    return (
      <>
        <Heading
          text={
            <div>
              <strong>You</strong> should be in control
              <br />
              of <strong>your</strong> data,
              <br />
              don&apos;t <strong>you</strong> think?
            </div>
          }
        />
        <ContentOne />
        <BlueDiv>
          <ContentTwo />
        </BlueDiv>
        <ContentThree />
      </>
    );
  }
}
