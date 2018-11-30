import React, { Component } from 'react';
import { Menu, Container, Grid, Image } from 'semantic-ui-react';
import history from '../../utils/history';

const logo = require('../../images/logo.png');

/* eslint-disable react/prefer-stateless-function */
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'Home',
    };
  }

  render() {
    return (
      <Menu
        fixed="top"
        style={{ backgroundColor: '#0f1325', height: '25vh', padding: '3vh' }}
        inverted
        widths={4}
      >
        <Grid divided="vertically">
          <Grid.Row centered>
            <Container>
              <Image src={logo} style={{ width: 211 }} centered />
            </Container>
          </Grid.Row>
          <Grid.Row centered>
            <Menu.Item
              name="Home"
              style={
                this.state.activeButton === 'Home'
                  ? { fontWeight: 'bold' }
                  : { fontWeight: '' }
              }
              onClick={() => {
                this.setState({ activeButton: 'Home' });
                history.push('/');
              }}
            />
            <Menu.Item
              name="Meet The Team"
              style={
                this.state.activeButton === 'Team'
                  ? { fontWeight: 'bold' }
                  : { fontWeight: '' }
              }
              onClick={() => {
                this.setState({ activeButton: 'MeetTheTeam' });
                history.push('/meet-the-team');
              }}
            />
            <Menu.Item
              name="Platform"
              style={
                this.state.activeButton === 'Platform'
                  ? { fontWeight: 'bold' }
                  : { fontWeight: '' }
              }
              onClick={() => {
                this.setState({ activeButton: 'Platform' });
                history.push('/platform');
              }}
            />
            <Menu.Item
              name="Contact"
              style={
                this.state.activeButton === 'Contact Us'
                  ? { fontWeight: 'bold' }
                  : { fontWeight: '' }
              }
              onClick={() => {
                this.setState({ activeButton: 'ContactUs' });
                history.push('/contact-us');
              }}
            />
          </Grid.Row>
        </Grid>
      </Menu>
    );
  }
}
