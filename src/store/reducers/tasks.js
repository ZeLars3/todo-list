import { TYPES } from 'store/boilerplates/types'

const initialState = {
  tasks: [],
}

const tasks = (state = initialState.tasks, action) => {
  switch (action.type) {
    case TYPES.ADD_TASK:
      return [
        ...state,
        action.payload,
      ]
    case TYPES.REMOVE_TASK:
      return [...state].filter(task => task.id !== action.payload.id)
    case TYPES.TOGGLE_TASK:
      return [...state].map(task => {
        if (task.id === action.payload.id) {
          task.isCompleted = !task.isCompleted
        }
        return task
      })
    case TYPES.EDIT_TASK:
      return [...state].map(task => {
        if (task.id === action.payload.id) {
          task.text = action.payload.text
        }
        return task
      })
    default:
      return state
  }
}

export default tasks
