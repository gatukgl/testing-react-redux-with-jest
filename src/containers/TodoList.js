import React from 'react'
import { connect } from 'react-redux'
import { selectTodos } from '../selectors/todosSelectors'
import TodoList from '../components/TodoList'

export default connect(selectTodos)(TodoList)
