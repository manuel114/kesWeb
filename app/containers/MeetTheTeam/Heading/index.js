import React from 'react';
import { Box } from 'rebass';
import { StyledText } from '../../../components';
import {
  StyledHeaderContainer,
  StyledBGImage,
  StyledCTA,
} from './styledComponents';

const committeeFun = require('../../../images/Committee_fun.jpg');

const Heading = () => (
  <StyledHeaderContainer>
    <Box m="0" width={[1]}>
      <StyledBGImage src={committeeFun} />
      <StyledCTA width={['90%', '80%', '50%']} fontSize={['1em', '2em']}>
        <StyledText size="1.5" align="center" color="white" mb="10px" header>
          Meet the Team
        </StyledText>
      </StyledCTA>
    </Box>
  </StyledHeaderContainer>
);

export default Heading;
