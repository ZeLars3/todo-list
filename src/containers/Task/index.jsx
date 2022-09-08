import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import {
  addTask,
  removeTask,
  completeTask,
  editTask,
} from 'store/actions/actionCreator'
import { TaskList } from 'components/TaskList'
import { TaskInput } from 'components/TaskInput'

import { NoTaskTitle } from './styled'

class Task extends PureComponent {
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

    const { addTask } = this.props

    addTask(uuidv4(), taskText, false)

    this.setState({
      taskText: '',
    })
  }

  render() {
    const { taskText } = this.state
    const { tasks, removeTask, completeTask, editTask } =
      this.props
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

const mapStateToProps = ({ tasks }) => {
  return {
    tasks,
  }
}

export default connect(mapStateToProps, {
  addTask,
  removeTask,
  completeTask,
  editTask,
})(Task)
