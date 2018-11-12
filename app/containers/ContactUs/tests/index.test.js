import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import ContactUs from '../index';
import messages from '../messages';

describe('<ContactUs />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<ContactUs />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});