import { Component } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import {
  addTask,
  removeTask,
  completeTask,
  editTask,
} from '../../actions/actionCreator'
import { TaskList } from '../../components/TaskList/TaskList'
import { TaskInput } from '../../components/TaskInput/TaskInput'
import { NoTaskTitle } from './index'

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskText: '',
    }
  }

  handleInputChange = e => {
    this.setState({
      taskText: e.target.value,
    })
  }

  handleAddTask = () => {
    const { taskText } = this.state

    if (taskText.length > 3) {
      const { addTask } = this.props

      addTask(uuidv4(), taskText, false)

      this.setState({
        taskText: '',
      })
    }
  }

  render() {
    const { taskText } = this.state
    const { tasks, removeTask, completeTask, editTask } = this.props
    const isTasks = tasks && tasks.length > 0

    return (
      <>
        <TaskInput
          onAdd={this.handleAddTask}
          onChange={this.handleInputChange}
          value={taskText}
        />
        {isTasks ? (
          <TaskList
            tasks={tasks}
            removeTask={removeTask}
            completeTask={completeTask}
            editTask={editTask}
          />
        ) : (
          <NoTaskTitle>You have no tasks</NoTaskTitle>
        )}
      </>
    )
  }
}

export default connect(
  ({ tasks }) => ({
    tasks,
  }),
  { addTask, removeTask, completeTask, editTask },
)(Task)
