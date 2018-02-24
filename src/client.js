import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { hydrate } from 'react-dom'

//-----Main component
import App from "./components/App";
//--------

class Main extends React.Component
{
    render()
    {
        return(
            <Router>
                <App {...this.props}/>
            </Router>
        );
    }
}

hydrate(<Main/>, document.getElementById('root'));
