import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { StyledText, CardComponent } from '../../../components';

// Components with custom style
const StyledContainer = styled.div`
  min-height: 500px;
  padding: 5em 0 1em 0;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Phones */
  @media only screen and (max-width: 414px) and (max-height: 830px) {
    padding-top: 3em;
    min-height: 300px;
  }
`;

const LineDiv = styled.div`
  border-top: 1px solid #ccc;
  width: 30vw;
  height: 0;
`;

// OurServices starts here
const OurServices = () => (
  <StyledContainer vertical style={{ width: '100%' }}>
    {/* Section Title */}
    <Flex justifyContent="center" alignItems="center" w={['100%']} mb="3%">
      <LineDiv style={{ float: 'left' }} />
      <Box width={[0.5, 0.3]}>
        <StyledText size="2.5" header align="center" m="0">
          Our Services
        </StyledText>
      </Box>
      <LineDiv style={{ float: 'right' }} />
    </Flex>
    {/* Content */}
    <Flex width={[0.95, 0.6]} justifyContent="space-evenly">
      <CardComponent
        width={[0.3]}
        iconName="briefcase"
        textAlign="center"
        title="Advisory"
        description="Need help with your project? come talk to us!"
        bgColor="#111226"
      />
      <CardComponent
        width={[0.3]}
        iconName="calendar alternate"
        textAlign="center"
        title="Workshops & Events"
        description="From workshops and entrepreneur panels to socials and hackathons."
        bgColor="#111226"
      />
      <CardComponent
        width={[0.3]}
        iconName="users"
        textAlign="center"
        title="Entrepreneur Network"
        description="Join a bast network of students and young entrepreneurs"
        bgColor="#111226"
      />
    </Flex>
  </StyledContainer>
);

export default OurServices;
