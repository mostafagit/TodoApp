import React, { useContext, useEffect } from 'react'
import { Link ,withRouter } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import MyContext from '../context/Context';


const Links = (props) => {

  const context = useContext(MyContext)
  const { TodoList,logoutApp,usernameLogin } = context


  useEffect(() => {
    if(usernameLogin == ""){
      localStorage.clear()
      props.history.replace("/")
    }
 
  }, [])


  return (

    <Fragment>
     <div className="userlayout position-absolute ">
    <div className={"wellcoming"}>سلام <span className="text-success">"{usernameLogin} "</span> </div>

    </div> 
    
    <nav className="nay-p d-flex justify-content-start position-absolute">
   

      <button type="button" className={(TodoList.length<3 ? ("btn btn-success px-2 py-0"):("btn btn-primary px-2 py-0"))} >
      <span className="badge badge-light " style={{fontSize:"1.3rem"}}>{TodoList.length}</span>: تعداد
      </button>
      
      <Link className="btn btn-info mx-2" to={"/about-app"} >درباره برنامه</Link>
      <Link className="btn btn-danger " to={"/login"} onClick={logoutApp} >خروج</Link>
    </nav>
    </Fragment>
  );
}

export default withRouter(Links) ;