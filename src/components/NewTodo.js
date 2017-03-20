import React, { Component } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }
  changeHandler(event) {
    this.setState({ text: event.target.value })
  }

  clickHandler(event) {
    this.props.addTodo(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div className="new-todo">
        <input
          onChange={this.changeHandler}
          value={this.state.text} />
        <button
          onClick={this.clickHandler}
          className="btn btn-primary">
          Add
        </button>
      </div>
    )
  }
}

export default NewTodo

