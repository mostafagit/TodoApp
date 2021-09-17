import React from 'react'
import { Link } from 'react-router-dom';


const AboutApp = () => {
    return (

        <section className="h-100 w-100 main-resume">

        <div className="d-flex justify-content-center align-items-center h-100  ">

            <div className="jumbotron p-5 rounded resume w-50 font-weight-bolder" >
                <h5 className="display-6">Dear user ,hi</h5>
                
                <p className="lead ">this responsive application made with React Js and some other libraries like Bootstrap and react-Toastify</p>
                <p className="lead mb-0">thank you for using my app. </p>
                <p className="lead mt-0">Best Regards, "Mostafa.es".</p>
                <a href="mailto:e.mostafa021@gmail.com?subject=about_todo_app" className=" mt-3  text-danger text-decoration-none"><h4>click for email to me!</h4></a>
                <hr className="my-4" />
                <Link className="btn btn-primary btn-lg" to={"/"} role="button">Back to App</Link>
            </div>

        </div>
        </section>


    );
}

export default AboutApp;