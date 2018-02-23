import React, { Component } from 'react'

class About extends Component
{
    constructor()
    {
        super();
        this.state = {
            name: "",
            position: 0
        };
        this.search = this.search.bind(this)
    }

    search(name)
    {
        this.setState({ name: name.target.value });
        console.log(name);
    }

    setName()
    {
       return( <h3>Hello, {this.state.name}! Glad to c u!</h3>);
    }

    componentDidMount()
    {
        setTimeout(function() { this.setState({position: 1}); }.bind(this), 3000);
    }

    render()
    {
        return(
            <div>
                <h2>Enter your name -></h2>
                <input onChange={this.search} type="text"/>
                {this.setName()}
                {this.state.position}
            </div>
        );
    }
}

export default About;