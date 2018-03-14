import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
//-----Styles--
import '../../public/css/bootstrap.min.css'
import '../../public/css/styles.css'
//-----Component--------
import Home from './component/Home/Home'
import About from './component/About/About'
import List from './component/List/List'
import NavBar from "./component/NavBar/NavBar";
import NotMatch from "./component/NotMatch/NotMatch";
import Test from "./component/Test/Test";

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/github/:user?" component={About}/>
                    <Route path="/list" component={List}/>
                    <Route path="/test" component={Test}/>
                    <Route component={NotMatch}/>
                </Switch>
            </div>
        );
    }
}

