import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Flex } from 'rebass';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledText from '../StyledText';

// Components with custom style
const StyledCard = styled(Card)({
  height: '100%',
  width: 'auto !important',
});

// CardComponent starts here
// Component that uses the Card from semantic-ui-react and can take props from Flex (rebass)
const CardComponent = props => (
  <Flex justifyContent="center" {...props}>
    <StyledCard style={{ background: props.bgColor ? props.bgColor : '' }}>
      <Image
        src={props.image}
        size="huge"
        style={{ display: props.iconName ? 'none' : '' }}
      />
      <Card.Content
        style={{
          margin: props.image ? '' : '30% auto',
          border: props.image ? 'auto' : 'none',
        }}
      >
        <Flex justifyContent="center">
          <Icon
            name={props.iconName}
            size="huge"
            style={{
              display: props.image ? 'none' : '',
              color: '#ee7467',
              marginBottom: 30,
            }}
          />
        </Flex>

        <Card.Header>
          <StyledText
            align={props.textAlign ? props.textAlign : 'left'}
            size="1"
            style={{ color: props.bgColor ? '#fffff6' : '' }}
          >
            {props.title}
          </StyledText>
        </Card.Header>
        <Card.Meta>
          <span>{props.meta}</span>
        </Card.Meta>
        <Card.Description style={{ color: props.bgColor ? '#fffff6' : '' }}>
          <StyledText
            align={props.textAlign ? props.textAlign : 'left'}
            size="1"
            style={{ color: props.bgColor ? '#fffff6' : '' }}
          >
            {props.description}
          </StyledText>
        </Card.Description>
      </Card.Content>
      <Card.Content extra style={{ display: props.mail ? '' : 'none' }}>
        <a href={`mailto:${props.mail}`}>
          <Icon name="mail" />
        </a>
        <a href={props.linkedin}>
          <Icon name="linkedin" />
        </a>
      </Card.Content>
    </StyledCard>
  </Flex>
);

// Checks the types of props
CardComponent.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  meta: PropTypes.string,
  description: PropTypes.string,
  mail: PropTypes.string,
  linkedin: PropTypes.string,
  bgColor: PropTypes.string,
};

export default CardComponent;
