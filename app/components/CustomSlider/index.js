import React from 'react';
import { Box } from 'rebass';
import Slider from 'react-styled-carousel';
import PropTypes from 'prop-types';

const CustomSlider = props => (
  <Box {...props}>
    <Slider {...props} style={{ border: 'none' }}>
      {props.children}
    </Slider>
  </Box>
);

CustomSlider.propTypes = {
  children: PropTypes.object,
};

export default CustomSlider;
