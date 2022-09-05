import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
} from '../../constants/index'

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted,
})

export const removeTask = id => ({
  type: REMOVE_TASK,
  id,
})

export const completeTask = id => ({
  type: TOGGLE_TASK,
  id,
})

export const editTask = (id, text) => ({
  type: EDIT_TASK,
  id,
  text,
})

