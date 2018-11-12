import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class ContactUs extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
