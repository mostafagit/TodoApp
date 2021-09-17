import React, { useContext , useRef , useEffect }  from 'react'
import { Link } from 'react-router-dom';
import MyContext from '../context/Context';


const Login = () => {

    const context = useContext(MyContext)
    const { loginApp, usernameLogin, passwordLogin,handelnameLogin,handelPasswordLogin ,setuser,setPass,Inputstyle,setStyle} = context


    const inputFocus = useRef(null)
    useEffect(() => {
      inputFocus.current.focus()
      setuser("")
      setPass("")
    }, [])


    return ( 
        
 <main className="main-login App-background">
            <form onSubmit={e=>e.preventDefault()}>
                <div className="out-layer-login">
                    <div className="login-box">
                        <h4 className="login-text-h4"><span className="login-text">Login</span> Your Account</h4>
                        <div className="input-login">


                            <div style={{position:"relative"}}>
                            <input className={Inputstyle || usernameLogin.length>=5 ?"inp1" : "inp1 border-danger"}  ref={inputFocus} type="text" placeholder="User Name" name="usernameLogin" 
                            value={usernameLogin} onChange={e=>{
                                handelnameLogin(e);
                                setStyle(true)
                            }}/>
                            {!Inputstyle && usernameLogin.length < 5  ? <span className="text-danger input-gide" style={{fontSize:"0.7rem",position:"absolute"}}>حداقل 5 کارکتر</span>: null}
                            </div>
                            <div style={{position:"relative"}}>
                            <input className={Inputstyle || passwordLogin.length>=5 ? "inp1"  : "inp1 border-danger"}  type="Password" placeholder="Password" name="passwordLogin"
                            value={passwordLogin}
                            onChange={(e)=>handelPasswordLogin(e)}/>
                            {!Inputstyle && passwordLogin.length < 5 ? <span className="text-danger input-gide" style={{fontSize:"0.7rem",position:"absolute"}}>حداقل 5 کارکتر</span>: null}
                            </div>

                        </div>
                        <div className="login-btn">
                            <Link className="btn1 btn "  onClick={loginApp} type="submit" to={"/"}>Login</Link>
                        </div>
                        <nav>
                            <div className="login-links">
                                <a href="#" id="forget">Forget Password</a>
                                <Link to={"/singup"} id="create">Create Account</Link>
                              <div className="login-links d-flex justify-content-center gap-3">
                                <a href="#"><i className="fa fa-instagram text-danger"></i></a>
                                <a href="#"><i className="fa fa-facebook text-primary"></i></a>
                                <a href="https://www.linkedin.com/in/mostafa-esmaeili-0b237316b/" target="_blank"  rel="noreferrer" ><i className="fa fa-linkedin text-primary"></i></a>
                              </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </form>
    </main>

       

     );
}
 
export default Login ;