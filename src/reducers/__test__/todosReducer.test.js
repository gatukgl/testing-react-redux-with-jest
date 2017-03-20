import todosReducer from '../todosReducer'
import { ADD_TODO } from '../../actions/types'

describe('todosReducer', () => {
  it('returns correct initial state', () => {
    expect(todosReducer(undefined, {})).toEqual([])
  })

  it('return current state if no action matched', () => {
    const currentState = [
      { id: 1, text: 'Feed cat', complete: false }
    ]
    const nextState = todosReducer(currentState, {})
    expect(nextState).toBe(currentState) // compare pointers
    expect(nextState).toEqual(currentState) // compare values
  })

  it('adds todos when receiving ADD_TODO action', () => {
    const currentState = [
      { id: 1, text: 'Feed cat', complete: false }
    ]

    const action = {
      type: ADD_TODO,
      payload: { text: 'sleep' },
    }

    const nextState = todosReducer(currentState, action)
    const expectedState = [
      { id: 1, text: 'Feed cat', complete: false },
      { id: 2, text: 'sleep', complete: false },
    ]

    expect(nextState).toEqual(expectedState)
  })
})
