import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import StyledText from '../../StyledText';

// Components with custom style
const ResponsiveFooter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #0f1226;
  padding: 5vh 8%;

  /* Phones */
  @media only screen and (max-width: 414px) and (max-height: 830px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Footer starts here
const Footer = () => (
  <ResponsiveFooter>
    <Flex flexDirection="column" color="white">
      <Box>
        <StyledText header size="1.8" color="white" align="left">
          Thank you for visiting
        </StyledText>
      </Box>
      <Box mt="2vw">
        King&apos;s Entrepreneurs Society is a society of{' '}
        <a
          href="https://www.kcl.ac.uk/index.aspx"
          style={{ color: 'white', textDecoration: 'underline' }}
        >
          King&apos;s College London
        </a>
        .
      </Box>
      <Box mt="1.5vw">
        © King&apos;s Entrepreneurs Society. Website by Ben Pugh and Manuel
        Martínez.
      </Box>
    </Flex>
    <Flex flexDirection="row" color="white" width={[1, 0.4]} mt={['6vw', 0]}>
      <Flex flexDirection="column" width={[0.3]}>
        <Box>Find Us On:</Box>
        <Box mt={['3vw', '2vw']}>Address:</Box>
        <Box mt={['11vw', '2.8vw']}>Mail:</Box>
      </Flex>
      <Flex flexDirection="column">
        <Flex justifyContent="flex-start">
          <Icon
            name="facebook"
            size="big"
            style={{ margin: '0px 10px 0px 0px' }}
          />
          <Icon name="twitter" size="big" />
          <Icon name="linkedin" size="big" />
        </Flex>
        <Box mt={['1.5vw']}>
          King&apos;s College London
          <br /> Strand, London <br /> WC2R 2LS
        </Box>
        <Box>
          <a
            href="mailto:general@kingsentrepreneurs.com"
            style={{ color: 'white', textDecoration: 'underline' }}
          >
            general@kingsentrepreneurs.com
          </a>
        </Box>
      </Flex>
    </Flex>
  </ResponsiveFooter>
);

export default Footer;
