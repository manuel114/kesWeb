import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Box, Flex, Button } from 'rebass';
import { StyledText } from '../../../components';
import {
  StyledHeaderContainer,
  StyledBGVideo,
  StyledOverlay,
  StyledCTA,
} from './styledComponents';

const backgroundVideo = require('../../../images/background.mp4');

// Heading begins here
const Heading = () => (
  <StyledHeaderContainer>
    <Box m="0" width={[1]}>
      <StyledBGVideo loop muted autoPlay>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledBGVideo>
      <StyledOverlay />
      <StyledCTA width={['90%', '80%', '60%']} fontSize={['1em', '2em']}>
        <StyledText size="1.5" align="center" color="white" mb="10px" header>
          King&apos;s Entrepreneurs Society
        </StyledText>
        <StyledText size="0.8" color="white">
          A society of King&apos;s College London, run exclusively for
          entrepreneurs.
        </StyledText>
        <Flex justifyContent="space-evenly" mb="5%">
          <Flex alignItems="center" p="2px 4px">
            <Icon
              name="calendar alternate outline"
              size="small"
              style={{ color: '#ee7467' }}
            />
            <StyledText size="0.7" color="white" noResize>
              Monthly Events
            </StyledText>
          </Flex>
          <Flex alignItems="center" p="2px 4px">
            <Icon
              name="users"
              size="small"
              style={{ color: '#ee7467', marginRight: 10 }}
            />
            <StyledText size="0.7" color="white" noResize>
              Networking
            </StyledText>
          </Flex>
          <Flex alignItems="center" p="2px 4px">
            <Icon name="dollar" size="small" style={{ color: '#ee7467' }} />
            <StyledText size="0.7" color="white" noResize>
              Free Membership
            </StyledText>
          </Flex>
        </Flex>
        <Button bg="#ee7467" fontSize={['0.7em', 2]}>
          Sign Up!
        </Button>
      </StyledCTA>
    </Box>
  </StyledHeaderContainer>
);

export default Heading;
