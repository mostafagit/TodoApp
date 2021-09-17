import React, {useContext} from 'react'
import Message from '../common/Message';
import NewTask from '../common/NewTask';
import Todos from '../common/Todos';
import MyContext from '../context/Context';
import Links from '../common/Links';




const MyApp = () => {
    const context = useContext(MyContext)
    const{TodoList} = context


    return ( 
        <section className="App-background">
        <Links />
         <NewTask/>
        {(TodoList.length <= 0) ? 
          <Message/>:
          <Todos/>
        }
        </section>


     );
}
 
export default MyApp;