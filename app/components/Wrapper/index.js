import React, { Component } from 'react';
import {
  Menu,
  Sidebar,
  Responsive,
  Segment,
  Container,
  Icon,
  Visibility,
  Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import history from '../../utils/history';

const logo = require('../../images/logo.png');

/* eslint-disable react/prefer-stateless-function, react/no-multi-comp */
// Container for PC with Menu and Footer
class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'Home',
      fixed: true,
    };
  }

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility once={false}>
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            style={{
              backgroundColor: '#0f1325',
              height: '14vh',
              padding: '3vh',
            }}
          >
            <Image style={{ marginLeft: '3vw', width: '20vh' }} src={logo} />
            <Menu.Menu
              position="right"
              widths={4}
              style={{ marginRight: '3vw' }}
            >
              <Menu.Item
                name="Home"
                style={{
                  color: 'white',
                  fontWeight: this.state.activeButton === 'Home' ? 'bold' : '',
                }}
                onClick={() => {
                  this.setState({ activeButton: 'Home' });
                  history.push('/');
                }}
              />
              <Menu.Item
                name="Meet the Team"
                style={{
                  color: 'white',
                  fontWeight: this.state.activeButton === 'Team' ? 'bold' : '',
                }}
                onClick={() => {
                  this.setState({ activeButton: 'Team' });
                  history.push('/team');
                }}
              />
              <Menu.Item
                name="About Us"
                style={{
                  color: 'white',
                  fontWeight: this.state.activeButton === 'Us' ? 'bold' : '',
                }}
                onClick={() => {
                  this.setState({ activeButton: 'Us' });
                  history.push('/about-us');
                }}
              />
            </Menu.Menu>
          </Menu>
        </Visibility>
        {/* Anything inside of Wrapper will be passed as children */}
        {children}
        <Footer />
      </Responsive>
    );
  }
}

// Checks the type of props it gets
DesktopContainer.propTypes = {
  children: PropTypes.node,
};

// Continer for mobile with Menu and Footer
class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpened: false,
      activeButton: 'Home',
    };
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    const { activeButton } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {/* Menu that appears when clicked on menu button */}
        <Sidebar
          as={Menu}
          animation="push"
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          inverted
          style={{ backgroundColor: '#0f1325' }}
        >
          <Menu.Item
            as="a"
            active={activeButton === 'Home'}
            style={{ color: 'white' }}
            onClick={() => {
              this.setState({ activeButton: 'Home' });
              history.push('/');
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            as="a"
            active={activeButton === 'Team'}
            style={{ color: 'white' }}
            onClick={() => {
              this.setState({ activeButton: 'Team' });
              history.push('/team');
            }}
          >
            Meet the Team
          </Menu.Item>
          <Menu.Item
            as="a"
            active={activeButton === 'Us'}
            style={{ color: 'white' }}
            onClick={() => {
              this.setState({ activeButton: 'Us' });
              history.push('/about-us');
            }}
          >
            About Us
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            textAlign="center"
            style={{
              minHeight: '5vh',
              padding: '1em 0em 0.1em 0em',
              backgroundColor: '#0f1325',
              border: 'none',
            }}
            vertical
          >
            {/* What is displayed when menu is hidden */}
            <Container>
              <Menu pointing secondary size="large" style={{ border: 'none' }}>
                {/* Menu icon */}
                <Menu.Item onClick={this.handleToggle}>
                  <Icon
                    name="sidebar"
                    style={{ color: 'white', marginBottom: '2vw' }}
                    size="large"
                  />
                </Menu.Item>
                {/* KES Logo */}
                <Menu.Item
                  style={{
                    marginLeft: '4.5vw',
                    marginBottom: 0,
                    border: 'none',
                  }}
                >
                  <Image src={logo} size="small" />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {/* Anything inside of Wrapper will be passed as children */}
          {children}
          <Footer />
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

export default class Wrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
      </>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.node,
};
