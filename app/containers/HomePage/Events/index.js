import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import axios from 'axios';
import _ from 'lodash';
import { StyledText, CardComponent } from '../../../components';

// Components with custom style
const StyledContainer = styled.div`
  min-height: 700px;
  padding: 3em 0 10vh 0;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LineDiv = styled.div`
  border-top: 1px solid #ccc;
  width: 30vw;
  height: 0;
`;

// Events starts here
/* eslint-disable no-console, consistent-return */
const Events = () => {
  // Similar to this.state in constructor
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  // Similar to componentDidUpdate
  useEffect(
    () => {
      // Code here
    },
    [pastEvents, upcomingEvents],
  );

  // Similar to componentDidMount
  useEffect(async () => {
    // API call
    const newPastEvents = await axios
      .get(
        'https://www.eventbriteapi.com/v3/organizations/231512334091/events/?order_by=start_desc&status=ended&token=E4IMXW4G4DUQXJZWVNY3',
      )
      .catch(e => console.log(e));

    // API call
    const newUpcomingEvents = await axios
      .get(
        'https://www.eventbriteapi.com/v3/organizations/231512334091/events/?status=live&token=E4IMXW4G4DUQXJZWVNY3',
      )
      .catch(e => console.log(e));

    // Similar to this.setState
    setPastEvents(newPastEvents.data.events);
    setUpcomingEvents(newUpcomingEvents.data.events);
  }, []);

  // Returns a card with each upcomingEvent or a string if there are no events
  const UpcomingEventsList = () => {
    if (upcomingEvents[0] === undefined) {
      return (
        <StyledText size="1.5" color="black">
          No upcoming events right now... stay tuned for more!
        </StyledText>
      );
    }

    return _.map(upcomingEvents, (event, i) => {
      // Only 3 first events are shown
      if (i < 3) {
        return (
          <Box width={[0.9, 0.3]} p={[3]}>
            <CardComponent
              width={[1]}
              image={event.logo.url}
              textAlign="center"
              title={event.name.text}
              description={`${event.description.text
                .split(' ', 30) // Takes the first 30 words
                .join(' ')}...`} // Adds a space between each word and ... at the end
              bgColor="#111226"
              style={{ height: '105%' }}
            />
          </Box>
        );
      }
    });
  };

  // Returns a card with each pastEvent or a string if there are no events
  const PastEventList = () => {
    if (pastEvents[0] === undefined) {
      return (
        <StyledText size="1.5" color="black">
          No events yet
        </StyledText>
      );
    }
    return _.map(pastEvents, (event, i) => {
      // Only 6 first events are shown
      if (i < 6) {
        return (
          <Box width={[0.9, 0.3]} p={[3]}>
            <CardComponent
              width={[1]}
              image={event.logo.url}
              textAlign="center"
              title={event.name.text}
              description={`${event.description.text
                .split(' ', 30) // Takes the first 30 words
                .join(' ')}...`} // Adds a space between each word and ... at the end
              bgColor="#111226"
              style={{
                height: '105%',
              }}
            />
          </Box>
        );
      }
    });
  };

  return (
    <StyledContainer vertical style={{ width: '100%' }}>
      {/* Section Title */}
      <Flex justifyContent="center" alignItems="center" w={['100%']} mb="3%">
        <LineDiv style={{ float: 'left' }} />
        <Box width={[0.25]}>
          <StyledText size="2.5" header align="center" m="0">
            Events
          </StyledText>
        </Box>
        <LineDiv style={{ float: 'right' }} />
      </Flex>
      {/* Content */}
      <StyledText header size="2" style={{ textDecoration: 'underline' }}>
        Upcoming Events
      </StyledText>
      <Flex
        width={[1]}
        style={{ flexWrap: 'wrap' }}
        justifyContent="center"
        mb="2%"
      >
        <UpcomingEventsList />
      </Flex>
      <StyledText header size="2" style={{ textDecoration: 'underline' }}>
        Past Events
      </StyledText>
      <Flex width={[1]} style={{ flexWrap: 'wrap' }} justifyContent="center">
        <PastEventList />
      </Flex>
    </StyledContainer>
  );
};

export default Events;
