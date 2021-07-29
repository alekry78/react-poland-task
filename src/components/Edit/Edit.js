import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {addTodo, deleteTodo, editTodo} from "../../actions/addTodo";

const Edit = ({edit,addTodo,deleteTodo,editTodo}) => {
    const{
        id,
        name,
        desc,
        time,
        done,
        comments,
        key
    } = edit
    const [todo,setTodo]=useState({
        name:name,
        desc:desc,
        time:time,
        done:done,
        comments:comments
    })
    const handleSetTodo = (e) =>{
        const {name,value} = e.target;
        setTodo(prevState=>{
            return{
                ...prevState,
                [name]:value
            }
        })
    }
    const handleDone = (value) =>{
        console.log(todo.done)
        setTodo(prevState=>{
            return{
                ...prevState,
                done:value
            }
        })
    }
    const handleDeleteComment = (index) =>{
        setTodo(prevState=>{
            return{
                ...prevState,
                comments:comments.filter((el,i)=>i!==index)
            }
        })
    }
    const handleSaveEdit = () => {
        addTodo({
            id,
            name:todo.name,
            desc:todo.desc,
            time:todo.time,
            done:todo.done,
            comments:todo.comments,
        })
        deleteTodo(key);
        editTodo({});
    }
    return(
      <div className="edit-todo-view">
          <div className="edit-todo-container">
              <div className="edit-todo-app">
                    <div className="edit-todo-name">
                        <label>Task name:</label>
                        <input type="text" value={todo.name} name="name" onChange={e=>handleSetTodo(e)}/>
                    </div>
                    <div className="edit-todo-desc">
                      <label>Task desc:</label>
                      <input type="text" value={todo.desc} name="desc" onChange={e=>handleSetTodo(e)}/>
                    </div>
                    <div className="edit-todo-time">
                      <label>Task timestamp(in minutes):</label>
                      <input type="number" value={todo.time} name="time" onChange={e=>handleSetTodo(e)}/>
                    </div>
                  <div className="edit-todo-done">
                      <label>Task finished?({todo.done ? "Yes" : "No"})</label>
                      <div className="edit-todo-done-btns">
                          <button className="edit-todo-done-btn" style={todo.done ? {opacity:"1"} : {opacity:"0.5"}} onClick={()=>handleDone(true)}>Yes<span className="lnr lnr-checkmark-circle" /></button>

                          <button className="edit-todo-done-btn" style={todo.done ? {opacity:"0.5"} : {opacity:"1"}} onClick={()=>handleDone(false)}>No<span className="lnr lnr-cross-circle" /></button>
                      </div>
                  </div>
                  <div className="edit-todo-comment">
                      <h1 className="comment-header">
                          Comments:
                      </h1>
                      {todo.comments.map((com,i)=>{
                          return(
                              <div className="edit-comments">
                                  <h1 className="edit-comment-name">{com}</h1>
                                  <button className="edit-comment-button" onClick={()=>handleDeleteComment(i)} style={{cursor:"pointer"}}>Delete<span className="lnr lnr-cross-circle" /></button>
                              </div>
                          )
                      })}
                  </div>
                  <NavLink to="/list"><button style={{border:"1px solid green", color:"green",backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center",fontWeight:"600",borderRadius:"5px",margin:"5px"}} onClick={handleSaveEdit}>Save<span className="lnr lnr-pencil" /></button></NavLink>
              </div>
          </div>
      </div>
    )
};
const mapStateToProps = state =>({
    edit: state.edit
})
const mapDispatchToProps = dispatch =>({
    deleteTodo: key => dispatch(deleteTodo(key)),
    addTodo: todo => dispatch(addTodo(todo)),
    editTodo:todo =>dispatch(editTodo(todo))
})
export default connect(mapStateToProps,mapDispatchToProps)(Edit)