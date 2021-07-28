import React from 'react';
import ToDo from "../helpers/ToDo";
import Navigation from "../helpers/Navigation";
import {connect} from "react-redux";

const ViewTodos = ({todos}) => {
    return(
      <div>
          <Navigation />
          {todos.map(todo=>{
              return(
                  <ToDo todo={todo}/>
              )
          })}
      </div>
    )
};
const mapStateToProps = state => ({
    todos:state.todos
})
export default connect(mapStateToProps)(ViewTodos);