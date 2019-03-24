import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// '*' imports every exported artifact from the file
import * as TodoActions from "./store/actions/todos";

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remover</button>
        </li>
      ))}
    </ul>
    <button onClick={() => addTodo("novo todo")}>Adicionar</button>
  </Fragment>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

/**
 * maps a component's action (dispatch) to redux
 * 'bindActionCreators' binds every exported action from a file
 * (in this case 'todos.js' - TodoActions) to redux dispatch (actions pool)
 *  */

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

/**
 * 'connect' is responsible for connecting (duh) the current component's
 * info with some reducer from the redux state
 *  */

// REMINDER: READ ABOUT HIGH ORDER COMPONENT SYNTAX TO UNDERSTAND BELLOW LINE
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

//  Each reducer represents a portion of the redux state

// STATE
/**
 * {
 *  todos: {
 *  loading: true/false,
 *  error: true
 * }
 * }
 */
