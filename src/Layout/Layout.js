import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import NotFound from '../components/404';
import AboutApp from '../components/AboutApp';

import Login from '../components/Login';
import MyApp from '../components/MyApp';
import SingUP from '../components/SingUP';


const islogin = () => !!localStorage.getItem("key")


const PublicRoute =({render,...rest})=>{
    return(
    <Route {...rest} render={(props)=>{
        if(islogin()){
        return  <Redirect to={"/"}/>}
        else{
            return  render(props)
        }  
    }}/>)  
}


const PrivateRoute =({render,...rest})=>{
    return(
    <Route {...rest} render={(props)=>{
        if(islogin()){
            return  render(props)
        }else{
            return  <Redirect to={"/login"}/>}   
    }}/>)  
}




const MainLayout = () => {

    

    return ( 

<Fragment>

<Switch>
    <PublicRoute path={"/login"} render={()=>
      <Switch>
      <Route path={"/singup"}  component={SingUP} />
      <Route path={"/login"}  component={Login} />
      </Switch>
    } />
    
    <Route path={"/singup"}  component={SingUP} />
    
    <PrivateRoute path={"/"} render={()=>
   <Switch>
        <Route path={"/about-app"} component={AboutApp} />
        <Route exact path={"/"} component={MyApp} />
        <Route  component={NotFound} />
   </Switch>

}

    />


</Switch>
</Fragment>


     );
}
 
export default MainLayout;