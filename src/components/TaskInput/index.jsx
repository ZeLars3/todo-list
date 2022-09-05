import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Input, AddButton, Container } from './styled'

export class TaskInput extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, onChange, onAdd } = this.props

    return (
      <Container>
        <Input
          type="text"
          placeholder="Add a task"
          value={value}
          onChange={onChange}
        />
        <AddButton onClick={onAdd}>Add</AddButton>
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
