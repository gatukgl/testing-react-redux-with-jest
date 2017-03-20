import { ADD_TODO } from './types'

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: { text }
  }
}

export { addTodo }
