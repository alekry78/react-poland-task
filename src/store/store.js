import {createStore} from 'redux';
import {addTodo} from "../reducers/addTodo";
const store = createStore(addTodo,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store