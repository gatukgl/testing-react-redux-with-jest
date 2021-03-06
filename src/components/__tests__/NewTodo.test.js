import React from 'react'
import { shallow } from 'enzyme'
import NewTodo from '../NewTodo'

describe('NewTodo', () => {
  let component
  let props

  beforeEach(() => {
    // create stubbed function by jest.fn()
    props = { addTodo: jest.fn() }
    component = shallow(<NewTodo {...props} />)
  })

  it('renders correct structure', () => {
    expect(component.is('div')).toBe(true)
    expect(component.hasClass('new-todo')).toBe(true)
    expect(component.find('input').length).toBe(1)
    expect(component.find('button').length).toBe(1)
    expect(component.find('button').hasClass('btn')).toBe(true)
    expect(component.find('button').hasClass('btn-primary')).toBe(true)
  })

  it('change state when typing', () => {
    component.find('input').simulate('change', {
      target: {
        value: 'Hello',
      }
    })
    expect(component.state('text')).toBe('Hello')
  })

  it('calls props.addTodo when clicking Add button', () => {
    component.setState({ text: 'Hello' })
    component.find('button').simulate('click')
    expect(props.addTodo).toHaveBeenCalledWith('Hello')
  })
})
