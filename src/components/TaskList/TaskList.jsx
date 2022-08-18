import { Component } from 'react'
import PropTypes from 'prop-types';

import { TaskItem } from '../TaskItem'
import { TasksTitle, TasksContainer } from './components'

export class TaskList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <TasksTitle>Your Tasks</TasksTitle>
        <TasksContainer>
          {this.props.tasks.map(
            ({ id, text, isCompleted }) => (
              <TaskItem
                completeTask={this.props.completeTask}
                removeTask={this.props.removeTask}
                id={id}
                key={id}
                text={text}
                isCompleted={isCompleted}
              />
            ),
          )}
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

