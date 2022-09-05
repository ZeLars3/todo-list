import { Component } from 'react'

import { Header, Title } from './styled'

export class Navbar extends Component {
  render() {
    return (
      <Header>
        <Title>Todo List</Title>
      </Header>
    )
  }
}
