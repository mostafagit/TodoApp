import React from 'react';
import { ToastContainer } from 'react-toastify';
import MainLayout from './Layout/Layout';



const App = () => {


     return (
     <main className="main-app d-flex flex-column align-items-center position-relative "> 
     <MainLayout/>
      <ToastContainer/>
     </main>
     )}
 
export default App;