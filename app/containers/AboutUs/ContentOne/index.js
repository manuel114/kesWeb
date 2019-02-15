import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { StyledText, CardComponent, CustomSlider } from '../../../components';

const manuelImage = require('../../../images/manuel.png');
const markImage = require('../../../images/mark.png');

const StyledContainer = styled.div`
  min-height: 700px;
  padding: 5em 0 1em 0;
  background-color: #f7f7f7;
  margin-top: 130px;
`;

const LineDiv = styled.div`
  border-top: 1px solid #ccc;
  width: 30vw;
  height: 0;
`;

const StyledTextBox = styled(Box)({});

const ContentOne = () => (
  <StyledContainer vertical style={{ width: '100%' }}>
    <Flex justifyContent="center" alignItems="center" w={['100%']} mb="3%">
      <LineDiv style={{ float: 'left' }} />
      <StyledText size="2.5" header align="center" m="0 1%">
        Greetings from the Presidents
      </StyledText>
      <LineDiv style={{ float: 'right' }} />
    </Flex>
    <Flex>
      <StyledTextBox
        width={[1, 0.7]}
        ml={['5%', '10%', '10%']}
        mr={['4%', 0]}
        bg="white"
        p={['4%', '2%']}
      >
        <StyledText size="1.2" align="left" mb="6%">
          For a successful career, academic skills are important, but not
          enough; with this in mind King&apos;s Entrepreneurs Society (KES) was
          founded. Our aim is to prepare our members for successful careers by
          helping them acquire the skills needed to improve their employability
          and bring their business ideas to life.
        </StyledText>
        <StyledText size="1.2" align="left" mb="6%">
          KES exists to create a supportive environment for entrepreneurs at
          King’s College London. Our society aims to be the first port of call
          for entrepreneurs primarily from our project system. With the project
          system, KES offers a consultancy service to startups, where we help
          startups outline goals and help in their achievement.
        </StyledText>
        <StyledText size="1.2" align="left">
          Over the year we also aim to create a network connecting entrepreneurs
          at King’s with each other and to corporate partners.
        </StyledText>
      </StyledTextBox>
      <CustomSlider
        cardsToShow="1"
        autoSlide="4000"
        infinite
        showArrows="false"
        width={[0, 0.3]}
        mr={['5%', '11%', '11%']}
        ml={['1%']}
      >
        <CardComponent
          image={manuelImage}
          title="Manuel Martinez"
          description="President | King's Entrepreneurs Society"
          mail="president@kingsentrepreneurs.com"
          linkedin="https://www.linkedin.com/in/manuel-martinez-chamorro/"
        />
        <CardComponent
          image={markImage}
          title="Mark Ng"
          description="President | King's Entrepreneurs Society"
          mail="president@kingsentrepreneurs.com"
          linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
        />
      </CustomSlider>
    </Flex>
  </StyledContainer>
);

export default ContentOne;
