import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Flex } from 'rebass';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled(Card)({
  height: '100%',
});

const CardComponent = props => (
  <Flex justifyContent="center">
    <StyledCard style={{ background: props.bgColor ? props.bgColor : '' }}>
      <Image src={props.image} size="huge" />
      <Card.Content
        style={{
          margin: props.image ? '' : '30% auto',
          border: props.image ? 'auto' : 'none',
        }}
      >
        <Card.Header style={{ color: props.bgColor ? '#fffff6' : '' }}>
          {props.title}
        </Card.Header>
        <Card.Meta>
          <span>{props.meta}</span>
        </Card.Meta>
        <Card.Description style={{ color: props.bgColor ? '#fffff6' : '' }}>
          {props.description}
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
