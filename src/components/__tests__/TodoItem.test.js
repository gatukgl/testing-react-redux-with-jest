import React from 'react'
import { shallow } from 'enzyme' // similar to render()
import toJson from 'enzyme-to-json'
import TodoItem from '../TodoItem'

// shallow rendered testing
describe('TodoItem', () => {
  let component
  beforeEach(() => {
    // render TodoItem with text
    component = shallow(<TodoItem text="Drink coffee" />)
  })

  it('renders correct structure', () => {
    // component.is() come from "ENZYME"
    expect(component.is('li')).toBe(true) // have <li> ???
  })

  it('has complete class if receiving complete prop', () => {
    // to override component's props
    component.setProps({ complete: true })
    // component.hasClass() come from "ENZYME"
    expect(component.hasClass('complete')).toBe(true)
  })
})

// Snapshot testing
describe('Snapshot summary', () => {
  // if we change TodoItem component UI - we need to update by using "u" a snapshot also
  it('matches its snapshot - not complete', () => {
    const component = shallow(<TodoItem text="Not complete" />)

    // we dont need to include toJson(component)
    // because when we use .toMatchSnapshot()
    // will automatically call .toJson() following .jestrc configuration
    // "snapshotSerializers": ["enzyme-to-json/serializer"]
    expect(component).toMatchSnapshot()
  })
  it('matches its snapshot - omplete', () => {
    const component = shallow(<TodoItem text="complete" complete />) // render TodoItem with Hello text
    expect(component).toMatchSnapshot()
  })
})
