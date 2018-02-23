import React, { Component } from 'react'

class Home extends Component
{
    render()
    {
        this.props.data(1);
        return(
            <div>This is the class Home</div>
        );
    }
}

export default Home;