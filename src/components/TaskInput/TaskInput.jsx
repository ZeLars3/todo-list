import { Component } from 'react'
import PropTypes from 'prop-types'

import { Input, AddButton, Container } from './components'

export class TaskInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Input
          type="text"
          placeholder="Add a task"
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <AddButton onClick={this.props.onAdd}>
          Add
        </AddButton>
      </Container>
    )
  }
}

TaskInput.propTypes = {
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  value: PropTypes.string,
}

TaskInput.defaultProps = {
  onChange: () => {},
  onAdd: () => {},
  value: '',
}
