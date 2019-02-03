import React from 'react';
import { Icon, Divider } from 'semantic-ui-react';
import { Box, Flex } from 'rebass';
import StyledText from '../../StyledText';

const Footer = () => (
  <Flex
    justifyContent="center"
    alignItems="stretch"
    p="2%"
    flexDirection="column"
    bg="#005B9A"
    color="white"
  >
    <Flex alignItems="center" flexWrap="wrap" justifyContent="center">
      <Flex width={[1, 0.33]} mb={[3, 0]} justifyContent="center">
        <StyledText size="1.8" align="center" color="white" dontResize>
          Privasee
        </StyledText>
      </Flex>
      <Flex
        width={[1, 0.33]}
        mb={[3, 0]}
        justifyContent="center"
        style={{ textAlign: 'center' }}
      >
        <Box m="auto" width={[1, 0.25]} css={{ textAlign: 'center' }}>
          Product
        </Box>
        <Box m="auto" width={[1, 0.25]} css={{ textAlign: 'center' }}>
          Company
        </Box>
        <Box m="auto" width={[1, 0.25]} css={{ textAlign: 'center' }}>
          Support
        </Box>
      </Flex>
      <Flex
        width={[0.5, 0.33]}
        mb={[3, 0]}
        alignSelf="center"
        justifyContent="center"
        alignItems="center"
      >
        <Box width={[1, 0.15]} css={{ textAlign: 'center' }}>
          <Icon fitted name="facebook official" size="large" />
        </Box>
        <Box width={[1, 0.15]} css={{ textAlign: 'center' }}>
          <Icon fitted name="twitter" size="large" />
        </Box>
        <Box width={[1, 0.15]} css={{ textAlign: 'center' }}>
          <Icon fitted name="instagram" size="large" />
        </Box>
      </Flex>
    </Flex>
    <Divider style={{ width: '90%' }} />
    <Box m="auto" mb={[2, 0]} css={{ textAlign: 'center' }}>
      © 2018 Privasee Group ltd. <br /> All rights reserved
    </Box>
  </Flex>
);

export default Footer;
