import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../../actions/addTodo";
import {NavLink} from "react-router-dom";
const Home = ({addTodo}) => {
    const [todo,setTodo]=useState({
        id:'_' + Math.random().toString(36).substr(2, 9),
        name:"",
        desc:"",
        time:0,
        done:false,
        comments:[]
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
    const handleSubmit = (e) =>{
        e.preventDefault()
        addTodo(todo)
        setTodo(
            {
            id:'_' + Math.random().toString(36).substr(2, 9),
            name:"",
            desc:"",
            time:0,
            done:false,
            comments:[]
        })
    }
    return(
        <main className="home">
            <div className="container">
                <div className="nav">
                    <h1 className="home-header">
                        Simple Todo App
                    </h1>
                    <div className="buttons-container">
                        <div className="add-todo">
                            <NavLink to="/"><span className="lnr lnr-plus-circle"></span></NavLink>
                            <span className="add-todo-button">Add ToDo</span>
                        </div>
                        <div className="view-todos">
                            <NavLink to="/list"><span className="lnr lnr-menu"></span></NavLink>
                            <span className="todo-list-button">View ToDos</span>
                        </div>
                    </div>
                </div>
                <div className="todo-form">
                    <h1 className="todo-form-header">New task</h1>
                    <label  className="todo-form-label" >task name:</label>
                    <input type="text" className="todo-form-name" name="name" value={todo.name} onChange={handleSetTodo}/>
                    <label  className="todo-form-label">task desc:</label>
                    <input type="text" className="todo-form-desc" name="desc" value={todo.desc} onChange={handleSetTodo}/>
                    <label  className="todo-form-label">task timestamp(in minutes):</label>
                    <input type="number" className="todo-form-time" name="time" value={todo.time} onChange={handleSetTodo}/>
                    <button className="add-task" onClick={e=>handleSubmit(e)}>Add task<span className="lnr lnr-plus-circle"></span></button>
                </div>
            </div>
        </main>
    )
};
const mapDispatchToProps = dispatch =>({
    addTodo : todo => dispatch(addTodo(todo))
})
export default connect(null,mapDispatchToProps)(Home)