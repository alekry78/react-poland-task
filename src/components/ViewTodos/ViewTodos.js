import React from 'react';
import ToDo from "../helpers/ToDo";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const ViewTodos = ({todos}) => {
    return(
      <div className="view-todos-page">
          <div className="view-container">
              <nav className="view-todos-nav">
                  <h1 className="nav-header">simple todo app</h1>
                  <div className="nav-buttons">
                      <div className="nav-add-todo">
                          <span className="lnr lnr-plus-circle"></span>
                      <NavLink to="/"><span className="add-todo-button">Add ToDo</span></NavLink>
                      </div>
                      <div className="nav-view-todo">
                          <span className="lnr lnr-menu"></span>
                      <NavLink to="/list"><span className="todo-list-button">View ToDos</span></NavLink>
                      </div>
                  </div>
              </nav>
              <div className="todos-list">
                  {todos.map((todo,i)=>{
                      return(
                          <ToDo todo={todo} idx={i}/>
                      )
                  })}
              </div>
          </div>
      </div>
    )
};
const mapStateToProps = state => ({
    todos:state.todos
})
export default connect(mapStateToProps)(ViewTodos);