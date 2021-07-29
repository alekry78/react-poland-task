import React, {useState} from 'react';
import {connect} from "react-redux";
import {addTodo, deleteTodo, editTodo} from "../../actions/addTodo";
import {NavLink} from "react-router-dom";

const ToDo = ({todo,deleteTodo,idx,addTodo,editTodo}) => {
    const{
        id,
        name,
        time,
        done,
        desc,
        comments
    } = todo
    const [comment,setComment]=useState("")
    const [addComment,setAddComment]=useState(false)
    const [newComments,setNewComments]=useState(comments);
    const handleAddComment = () => {
        let handler = newComments;
        handler.push(comment);
        setNewComments(handler);
        setAddComment(false)
        setComment("");
        addTodo({
            id,
            name,
            desc,
            time,
            done,
            comments:newComments
        })
        deleteTodo(idx);
    }
    const handleFinish = () =>{
        addTodo({
            id,
            name,
            desc,
            time,
            done:true,
            comments
        })
        deleteTodo(idx);
    }
    const handleEdit = () =>{
        editTodo({
            id,
            name,
            desc,
            time,
            done,
            comments,
            key:idx
        })
    }
    return(
      <div className="todo" key={id}>
            <div className="todo-elements">
                <div className="todo-details">
                    {done ? <h1 className="todo-name-done">{name}</h1> :<h1 className="todo-name">{name}</h1>}
                    {done ? <h3 className="todo-description-done">{desc}</h3> :<h3 className="todo-description">{desc}</h3>}
                </div>
                <div className="todo-buttons">
                    <span className="todo-time">
                        {time > 60 ? `${Math.floor(time/60)}h${time%60}min` : `00h${time}min`}
                    </span>
                    <button className="todo-add-com" onClick={()=>setAddComment(true)}>Add comment<span className="lnr lnr-plus-circle"></span></button>
                    {done ? null : <button className="todo-finish" onClick={handleFinish}>Finish<span className="lnr lnr-checkmark-circle" /></button>}
                    <NavLink to={`/list/${id}/edit`}><button className="todo-edit" onClick={handleEdit}>Edit<span className="lnr lnr-pencil" /></button></NavLink>
                    <button className="todo-delete" onClick={() => deleteTodo(idx)}>Delete<span className="lnr lnr-cross-circle" /></button>
                </div>
            </div>
          {addComment ? <div className="todo-add-comment">
              <input type="text" value={comment} onChange={e=>setComment(e.target.value)}/>
              <span className="lnr lnr-checkmark-circle" onClick={()=>handleAddComment()} />
          </div> : null}
          <div className="todo-comment-section">
              {newComments.map((comment,i)=>{
                  return(
                      <div className="todo-comment" key={i}>
                          <span className="todo-comment-text">
                              {comment}
                          </span>
                      </div>
                  )
              })}
          </div>
      </div>
    )
};
const mapDispatchToProps = dispatch =>({
    deleteTodo: key => dispatch(deleteTodo(key)),
    addTodo: todo => dispatch(addTodo(todo)),
    editTodo: todo => dispatch(editTodo(todo))
})
export default connect(null,mapDispatchToProps)(ToDo)