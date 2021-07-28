import React from 'react';
import {connect} from "react-redux";
import {deleteTodo} from "../../actions/addTodo";

const ToDo = ({todo,deleteTodo}) => {
    const{
        id,
        name,
        timestamp,
        done,
        description,
        comments
    } = todo
    return(
      <div className="todo" key={id}>
            <div>
                <div>
                    <h1>{name}</h1>
                    <h3>{description}</h3>
                </div>
                <div>
                    <span>
                        {timestamp}
                    </span>
                    <button></button>
                    {done ? null : <button>Finish</button>}
                    <button onClick={() => deleteTodo(id)}>Delete</button>
                </div>
            </div>
          <div>
              {comments.map(comment=>{
                  return(
                      <>
                          <span>
                              {comment}
                          </span>
                          <button>Delete</button>
                      </>
                  )
              })}
          </div>
      </div>
    )
};
const mapDispatchToProps = dispatch =>({
    deleteTodo: key => dispatch(deleteTodo(key))
})
export default connect(null,mapDispatchToProps)(ToDo)