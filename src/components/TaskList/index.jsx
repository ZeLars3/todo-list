import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { TaskItem } from '../TaskItem'
import { TasksTitle, TasksContainer } from './styled'

export class TaskList extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { tasks, completeTask, removeTask } = this.props
    
    return (
      <>
        <TasksTitle>Your Tasks</TasksTitle>
        <TasksContainer>
          {tasks.map(({ id, text, isCompleted }) => (
            <TaskItem
              completeTask={completeTask}
              removeTask={removeTask}
              id={id}
              key={id}
              text={text}
              isCompleted={isCompleted}
            />
          ))}
        </TasksContainer>
      </>
    )
  }
}

TaskList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  id: PropTypes.string,
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
}

TaskList.defaultProps = {
  tasks: [],
  id: '',
  text: '',
  isCompleted: false,
  removeTask: () => {},
  completeTask: () => {},
}
