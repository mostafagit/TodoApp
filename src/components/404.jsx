import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom';





const NotFound = () => {


    useEffect(()=>{
        localStorage.clear()
    },[])

    return (

        <section className="h-100 w-100">

        <div className=" h-100 not-found mx-auto w-100">

                <div>
                   <Link  className=" btn btn-primary btn-lg not-found-link d-block" to={"/"} role="button">Back to Login</Link>
                </div>
        </div>
        </section>


    );
}

export default NotFound;