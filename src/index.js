import React from 'react';
import {render} from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalState from "./GlobalState/GlobalState"



render(

<GlobalState>
 <BrowserRouter>
        <App/>
 </BrowserRouter>
</GlobalState>
,document.getElementById("root"))

