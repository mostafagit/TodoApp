import React , {useState,useRef, useEffect,Fragment} from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import MyContext from '../context/Context';



const GlobalState = (probs) => {

 
  const [getWriteTodo , setWriteTodo] = useState("")
  const [getTodo , setTodo] = useState([])
  const [editMode , setEditMode] =useState(false)
  const [checkId , setCheckId] =useState(null)
  const [getplaceholder , setPlaceholder] = useState(false)
  const [saveId , setSaveId] = useState("")
  const [userName , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const[changeInputstyle,setchangeInputstyle] = useState(true)



  const handelUsername = (e)=>{
    setUsername(e.target.value)

  }
  const handelpassword = (e)=>{
    setPassword(e.target.value)

  }




    const handelWriteTodo = (e)=>{
      setWriteTodo(e.target.value)
    }
    const handelSetTodo=()=>{
      const todos = [...getTodo]
      const Todo={
        id:uuidv4(),
        newTodo: getWriteTodo,
        complaited:false
      }
   if(getWriteTodo !=="" && getWriteTodo !==" " && getWriteTodo !== null && editMode === false){
        todos.unshift(Todo)
        setTodo(todos)
        setWriteTodo("")
        toast.success(` تسک "${Todo.newTodo}" با موفقیت ایجاد شد.`,{
          position:"bottom-right"
        })
      } 
    }


    const handelClearAll =()=>{
      if(getTodo.length>0){
        setTodo([])
        toast.error("همه تسک ها حذف شدند.",{
          position:"bottom-right"})
      }else{
        toast.info("تسکی برای حذف شدن وجود نداره.",{
          position:"bottom-right",
      })}
    }


    const handelEditBtn =(id)=>{
      setSaveId(id)
      setEditMode(!editMode)
      const todos =[...getTodo]
      const editTodo = todos.findIndex(i=> i.id === id)
      const edited = todos[editTodo].newTodo
      setCheckId(todos[editTodo].id)
      if(todos[editTodo].id === id   ){
        setWriteTodo("")
        setPlaceholder(edited)
        if(getWriteTodo !== "" && saveId ===  id ){
          todos[editTodo].newTodo =  getWriteTodo
          todos[editTodo].complaited = false
          setWriteTodo("")
         setPlaceholder("تسک جدید وارد کن ..." )
         toast.info(` تسک "${todos[editTodo].newTodo}" بروزسانی شد.`,{
           position:'bottom-right'
         })
        }
        if(editMode === true){
          setPlaceholder(false) 
        }      
          setTodo(todos)
      }
    }



    const handelDeleteBtn =(id)=>{
      const todos =[...getTodo]
      const selected =  todos.filter(i=>i.id !== id)
      const findName = todos.findIndex(i=>i.id === id)
      const name = todos[findName].newTodo
    setTodo(selected)
    toast.error(` تسک "${name}" با موفقیت حذف شد.`,{
      position:"bottom-right"
    })
    }


    const handelComplited =(id)=>{
      const todos =[...getTodo]
      const findTodo = todos.findIndex(i=> i.id === id)
      const todo = todos[findTodo]
      todo.complaited = !todo.complaited
      todos[findTodo] = todo
      setTodo(todos)
      
    }

    const checkLogin =()=>{
      if(userName && userName.length >= 5 && password && password.length >= 5){
        return true
      }else{
        return false
      }}

    


    const handelLogin =(e)=>{
      if(checkLogin()){
       localStorage.setItem("key","mostafa-jwt")
       setchangeInputstyle(true)
      }else{
        e.preventDefault()
        setchangeInputstyle(false)
      }
      }
     

    const handelLogout =()=>{
      localStorage.removeItem("key")
    }


    return ( <Fragment>
          <MyContext.Provider
      value={{
        writeTodo : getWriteTodo,
        placeHolder : getplaceholder,
        check : checkId ,
        editStyle: editMode,
        TodoList : getTodo,
        deleted : handelDeleteBtn,
        edited : handelEditBtn,
        complaitedTask : handelComplited,
        clearAll : handelClearAll,
        setTodo : handelSetTodo,
        SwriteTodo: handelWriteTodo,
        loginApp : handelLogin,
        logoutApp : handelLogout,
        usernameLogin: userName,
        passwordLogin:password,
        handelnameLogin:handelUsername,
        handelPasswordLogin : handelpassword,
        setuser: setUsername,
        setPass: setPassword,
        Inputstyle : changeInputstyle,
        setStyle: setchangeInputstyle,
      }}>

    {probs.children}

         </MyContext.Provider>
        </Fragment>
     );
}
 
export default GlobalState;