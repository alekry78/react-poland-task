const initState = {
    todos:[]
}
export const addTodo = (state=initState,action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return {...state,todos:state.todos.concat(action.payload)};
        case 'DELETE_TODO':
            return {...state,todos:state.todos.filter(todo=> todo.id!==action.payload)};
        default: return state;
    }
}