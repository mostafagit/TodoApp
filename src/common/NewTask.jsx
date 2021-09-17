import React, { useContext, useEffect, useRef } from 'react'
import MyContext from '../context/Context';


const NewTask = () => {

const context = useContext(MyContext)
const {placeHolder,SwriteTodo,writeTodo,setTodo,clearAll,TodoList } = context

const inputFocus = useRef(null)


useEffect(() => {
  inputFocus.current.focus()

}, [TodoList])


    return ( 
     <section className="w-100 wrapper d-flex justify-content-center " style={{marginTop:"10rem"}}>

<form className="w-25 new-task-form"
onSubmit={e=>e.preventDefault()}>
  <div className="input-group ">

    <input type="text" className="new-task form-control rounded" placeholder={placeHolder ? placeHolder :"تسک جدید وارد کن ..." }
    ref={inputFocus}
    onChange={(e)=>SwriteTodo(e)}
    value={writeTodo}
    style={{ outline: "none !important"}}
    />

    <div className="input-group-prepend mt-1">

    <button className="btn btn-sm fa fa-plus-square border-0  bg-transparent text-success  "
    style={{ outline: "none !important"}}
    type="submit"
    title="Add"
    onClick={setTodo}
    ></button>

    <button className="btn btn-sm fa fa-times border-0  bg-transparent text-danger "
  title="Remove all"
  onClick={clearAll}></button>

    </div>
  </div>
  </form>
</section>)}
 
export default NewTask;