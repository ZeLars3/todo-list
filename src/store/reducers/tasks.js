import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
} from 'constants'

const initialState = {
  tasks: [],
}

const tasks = (
  state = initialState.tasks,
  { id, text, isCompleted, type },
) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id,
          text,
          isCompleted,
        },
      ]
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== id)
    case TOGGLE_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted
        }
        return task
      })
    case EDIT_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          task.text = text
        }
        return task
      })
    default:
      return state
  }
}

export default tasks
