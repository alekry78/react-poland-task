import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
      <>
          <h1 className="home-header">
              Simple Todo App
          </h1>
          <div className="buttons-container">
              <div className="add-todo">
                  <span className="lnr lnr-plus-circle"></span>
                  <span className="add-todo-button">Add ToDo</span>
              </div>
              <div className="view-todos">
                  <NavLink to="/list"><span className="lnr lnr-menu"></span></NavLink>
                  <span className="todo-list-button">View ToDos</span>
              </div>
          </div>
      </>
    )
};

export default Navigation