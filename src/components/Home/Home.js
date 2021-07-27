import React, {useState} from 'react';
import Navigation from "../helpers/Navigation";

const Home = () => {
    const [todoName,setTodoName]=useState("");
    const [todoDesc,setTodoDesc]=useState("");
    const [todoTime,setTodoTime]=useState(0);
    const [showApprove,setShowApprove]=useState(false);
    return(
        <main className="home">
            <div className="container">
                <Navigation />
                <div className="todo-form">
                    <h1 className="todo-form-header">New task</h1>
                    <label  className="todo-form-label" >task name:</label>
                    <input type="text" className="todo-form-name" value={todoName} onChange={e=>setTodoName(e.target.value)}/>
                    <label  className="todo-form-label">task desc:</label>
                    <input type="text" className="todo-form-desc" value={todoDesc} onChange={e=>setTodoDesc(e.target.value)}/>
                    <label  className="todo-form-label">task timestamp(in minutes):</label>
                    <input type="number" className="todo-form-time" value={todoTime} onChange={e=>setTodoTime(e.target.value)}/>
                    <button className="add-task">Add task<span className="lnr lnr-plus-circle"></span></button>
                </div>
            </div>
        </main>
    )
};

export default Home