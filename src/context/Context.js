import {createContext} from 'react';


const MyContext =  createContext({
    checkId: null,
    TodoList : [],
    handelWriteTodo : () => {},
    handelSetTodo : () => {},
    handelClearAll : () => {},
    handelEditBtn : () => {},
    handelDeleteBtn : () => {},
    handelComplited : () => {},

})

export default MyContext;