import styled from 'styled-components';

// styled component that changes the style depending on the props it gets
const StyledText = styled.p`
  font-size: ${props => props.size}em;
  text-align: ${props => props.align};
  color: ${props => props.color};
  font-family: ${props => (props.header ? 'Montserrat' : 'Roboto')};
  margin: ${props => props.m};
  margin-top: ${props => props.mt};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};

  /* Phones */
  @media only screen and (max-width: 414px) and (max-height: 830px) {
    font-size: ${props => (props.dontResize ? props.size : props.size * 0.7)}em;
  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: ${props => (props.dontResize ? props.size : props.size * 0.7)}em;
  }
`;

// Checks the type of props it gets
StyledText.defaultProps = {
  size: 1,
  align: 'center',
  color: 'black',
  dontResize: false,
};

export default StyledText;
