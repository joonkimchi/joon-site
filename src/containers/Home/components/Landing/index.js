import React, { Component } from 'react'
import { Background, Container, Header } from './styles'

class Landing extends Component {
  render() {
    return (
      <Container>
        <Background />
        <Header>{'Here is some cool sh*t >:)'}</Header>
      </Container>
    )
  }
}

export default Landing
