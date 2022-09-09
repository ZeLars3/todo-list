import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {
  Task,
  StyledIconRemove,
  StyledIconUpate,
  ButtonContainer,
} from './styled'

export class TaskItem extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      isCompleted,
      completeTask,
      id,
      removeTask,
      text,
    } = this.props

    return (
      <Task $isCompleted={isCompleted}>
        {text}
        <ButtonContainer>
          <StyledIconUpate
            $isCompleted={isCompleted}
            onClick={completeTask.bind(null, id)}
          />
          <StyledIconRemove
            onClick={removeTask.bind(null, id)}
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
