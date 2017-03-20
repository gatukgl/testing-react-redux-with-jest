import React, { PropTypes } from 'react'
import style from './TodoItem.css'

const TodoItem = ({ text, complete }) => (
  <li className={complete ? style.complete : ''}>{text}</li>
)

TodoItem.PropTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool,
}

export default TodoItem
