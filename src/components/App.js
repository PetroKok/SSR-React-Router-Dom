import React, { Component } from 'react'
import { hydrate } from "react-dom"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//-----Componentssdsdfsdfasdfasdf
import Home from './Home/Home'
import About from './About/About'
import List from './List/List'
import NavBar from "./NavBar/NavBar";
import NotMatch from "./NotMatch/NotMatch";

export default class App extends Component
{
    render()
    {
        return(
            <div>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/list" component={List}/>
                    <Route component={NotMatch}/>
                </Switch>
            </div>
        );
    }
}

