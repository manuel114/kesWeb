import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import MeetTheTeam from '../index';
import messages from '../messages';

describe('<MeetTheTeam />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<MeetTheTeam />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});
