import { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Task,
  StyledIconRemove,
  StyledIconUpate,
  ButtonContainer,
} from './index'

export class TaskItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Task isCompleted={this.props.isCompleted}>
        {this.props.text}
        <ButtonContainer>
          <StyledIconUpate
            isCompleted={this.props.isCompleted}
            onClick={() =>
              this.props.completeTask(this.props.id)
            }
          />
          <StyledIconRemove
            onClick={() =>
              this.props.removeTask(this.props.id)
            }
          />
        </ButtonContainer>
      </Task>
    )
  }
}

TaskItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  id: PropTypes.string,
}

TaskItem.defaultProps = {
  text: '',
  isCompleted: false,
  id: '',
  removeTask: () => {},
  comleteTask: () => {},
}
