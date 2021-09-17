import React from 'react'
import { Link } from 'react-router-dom';



const SingUP = () => {

   

    return ( 
        
 <main className="main-login App-background">
            <form action="">
                <div className="out-layer-login">
                    <div className="login-box">
                        <h4 className="login-text-h4"><span className="login-text">Sing up</span> Your Account</h4>
                        <div className="input-login">
                            <input className="inp1"   type="text" placeholder="Username" />
                            <input className="inp1" type="email" placeholder="Your Email"/>
                            <input className="inp1" type="password" placeholder="Password"/>
                        </div>
                        <div className="login-btn">
                            <Link className="btn1 btn text-white" to={"/"} >Sing Up</Link>
                            <Link className="btn1 btn text-white" to={"/login"} id="create">Login</Link>
                        </div>
                        <nav>
                            <div className="login-links d-flex justify-content-center gap-3 ">
                            <a href="#"><i className="fa fa-instagram text-danger"></i></a>
                            <a href="#"><i className="fa fa-facebook text-primary"></i></a>
                            <a href="https://www.linkedin.com/in/mostafa-esmaeili-0b237316b/" target="_blank" ><i className="fa fa-linkedin text-primary"></i></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </form>
    </main>

       

     );
}
 
export default SingUP;