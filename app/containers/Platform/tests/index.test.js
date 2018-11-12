import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import Platform from '../index';
import messages from '../messages';

describe('<Platform />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<Platform />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});
