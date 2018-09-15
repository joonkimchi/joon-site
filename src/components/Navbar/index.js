/* eslint-disable react/jsx-curly-brace-presence */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import HamburgerMenu from './components/Hamburger'
import { Container, NavItem, NavItems, Wrapper, Mobile } from './styles'
// import theme from '../../theme'

// const logoBreakpoint = parseInt(theme.breakpoints.medium.floor, 10)

class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    const DesktopTabs = () => (
      <NavItems>
        <NavItem purple={'white'} to="/">
          Home/Projects
        </NavItem>
        <NavItem purple={'white'} to="/about">
          About Me
        </NavItem>
        <NavItem purple={'white'} to="/contact">
          Contact
        </NavItem>
      </NavItems>
    )
    return (
      <Wrapper>
        <Mobile>
          <HamburgerMenu purple={this.props.purple} />
        </Mobile>
        <Container backCol={'#92b4f2'}>
          <DesktopTabs />
        </Container>
      </Wrapper>
    )
  }
}

export default withRouter(NavigationBar)
