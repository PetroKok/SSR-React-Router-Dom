import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
//-----Styles--
import './component/css/bootstrap.min.css'
import './component/css/styles.css'
//-----Component--------
import Home from './component/Home/Home'
import About from './component/About/About'
import List from './component/List/List'
import NavBar from "./component/NavBar/NavBar";
import NotMatch from "./component/NotMatch/NotMatch";

export default class App extends Component {
    render() {
        return (
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

