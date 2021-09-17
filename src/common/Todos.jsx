import React, { useContext } from 'react'
import MyContext from "../context/Context"


const Todos = () => {
    
    const Context = useContext(MyContext)
    const {deleted,edited,complaitedTask,TodoList,check,editStyle} = Context
    
    return (  

<div style={{marginTop:"7rem"}} className="newCard w-50 rtl h-50 overflow-auto mx-auto ">




{TodoList.map(i=>(


<div className="card w-100 mx-auto mb-1  px-2 " key={i.id}  >

     <div className="card-body  d-flex justify-content-between ">
     <p className={ i.complaited ? "card-text m-0 text-muted " :"card-text m-0"}> {i.complaited ?  <del> { i.newTodo}</del> : i.newTodo}</p>
      <div>

      <button   className={editStyle && i.id === check ? "btn btn-warning fa fa-pencil ml-1":"btn btn-outline-secondary fa fa-pencil ml-1" }
      onClick={()=>edited(i.id)  }
      ></button>

      <button className="btn btn-outline-danger fa fa-trash mx-1"
      onClick={()=>deleted(i.id)}></button>

      <button className="btn btn-outline-success  fa fa-check-square-o"
      onClick={()=>complaitedTask(i.id)}></button>

      </div>
     </div>
   </div>

))}
</div>)}
 
export default Todos;