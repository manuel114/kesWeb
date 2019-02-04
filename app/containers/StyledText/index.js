import styled from 'styled-components';

const StyledText = styled.p`
  font-size: ${props => props.size};
  text-align: ${props => props.align};
  color: ${props => props.color};
  font-family: ${props => (props.header ? 'Montserrat' : 'Roboto')};
`;

StyledText.defaultProps = {
  size: '1em',
  align: 'center',
  color: 'black',
};

export default StyledText;
