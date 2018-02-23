import React from 'react'
import { hydrate } from "react-dom"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//-----Componentssdsdfsdfasdfasdf
import Home from './Home/Home'
import About from './About/About'
import List from './List/List'
import NavBar from "./NavBar/NavBar";
//-----
import './bootstrap.min.css'
//-----

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            info: ''
        };
    }

    static handleChange(e)
    {
        console.log(e);
    }

    render()
    {
        return(
            <div>
                <NavBar/>
                <Switch>
                    <Route path="/" exact render={(props) => <Home {...props} data={(e) => this.handleChange}/>}/>
                    <Route path="/about" component={About}/>
                    <Route path="/list" component={List}/>
                </Switch>
            </div>
        );
    }
}

export default App;