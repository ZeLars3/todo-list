import { TYPES } from 'store/boilerplates/types'

export const addTask = (id, text, isCompleted) => ({
  type: TYPES.ADD_TASK,
  payload: {
    text,
    id,
    isCompleted,
  },
})

export const removeTask = id => ({
  type: TYPES.REMOVE_TASK,
  payload: {
    id,
  },
})

export const completeTask = id => ({
  type: TYPES.TOGGLE_TASK,
  payload: {
    id,
  },
})

export const editTask = (id, text) => ({
  type: TYPES.EDIT_TASK,
  payload: {
    id,
    text,
  },
})
