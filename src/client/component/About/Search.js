import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Search extends Component{
    render()
    {
        return(
            <div className="md-2 mt-3 col mr-lg-2">
                <div className="row">
                    <form className="form-inline form-group">
                        <input onChange={this.props.onChange} onKeyPress={this.props.onKeyPress} type="text" className="form-control mr-2"/>
                        <button onClick={this.props.submit} className="btn btn-success">
                            <Link to={{pathname: `/about/${this.props.user}`}}>Confirm identity</Link>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Search;