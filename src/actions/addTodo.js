export const addTodo = todo =>({
    type:'ADD_TODO',
    payload:todo
})
export const deleteTodo = key =>({
    type:'DELETE_TODO',
    payload:key
})
export const addCommentAction = (key,comment) =>({
    type:'ADD_COMMENT',
    payload:{
        key,
        comment
    }
})
