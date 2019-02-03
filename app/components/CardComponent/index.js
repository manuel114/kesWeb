import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled(Card)({
  height: '100%',
  margin: '0 auto !important',
});

const CardComponent = props => (
  <StyledCard>
    <Image src={props.image} size="huge" />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>
        <span>{props.meta}</span>
      </Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={`mailto:${props.mail}`}>
        <Icon name="mail" />
      </a>
      <a href={props.linkedin}>
        <Icon name="linkedin" />
      </a>
    </Card.Content>
  </StyledCard>
);

CardComponent.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  meta: PropTypes.string,
  description: PropTypes.string,
  mail: PropTypes.string,
  linkedin: PropTypes.string,
};

export default CardComponent;
