import React, {Component} from 'react'
import queryStr from 'query-string'
import {Link} from 'react-router-dom'
let query;
class Test2 extends Component {

    constructor() {
        super();
        this.state = {
            query: []
        }
    }

    componentWillMount(){
        this.getQueryParams(this.props.match)
    }

    componentWillReceiveProps(nextProps){
        this.getQueryParams(nextProps);
    }

    getQueryParams(pr){
        query = queryStr.parse(pr.location.search);
        console.log(query);
        this.setState({ query: query });
    }

    render() {
        return (
            <div>
                <Link to="/test?user=olo">
                    <button className="btn btn-primary">olo</button>
                </Link>
                <Link to="/test?user=john">
                    <button className="btn btn-primary">john</button>
                </Link>

                <p className="text-white">{this.state.query.user}</p>
            </div>
        );
    }
}

export default Test;