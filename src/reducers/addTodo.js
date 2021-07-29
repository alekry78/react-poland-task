import update from 'react-addons-update';
const initState = {
    todos:[],
    edit:{}
}
export const addTodo = (state=initState,action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return {...state,todos:state.todos.concat(action.payload)};
        case 'DELETE_TODO':
            return {...state,todos:state.todos.filter((todo,i)=> i!==action.payload)};
        case'EDIT_TODO':
            return {...state,edit:action.payload}
        default: return state;
    }
}