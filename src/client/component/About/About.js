import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadIssues} from "../../actions/loadIssues";
import UserGitHub from "./UserGitHub";

let user;

class About extends Component {

    constructor() {
        super();
        this.state = {
            user: ''
        };

    }

    handleShow(e) {
        e.preventDefault();
        this.props.loadIssues(user);
    }

    onChangeInput(e) {
        user = e.target.value;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">

                    <form className="form-inline form-group md-2 mt-3">
                        <div className="col">
                            <input onChange={::this.onChangeInput} type="text" className="form-control"/>
                            <button onClick={::this.handleShow} className="btn btn-success ml-2">Confirm identity</button>
                        </div>
                    </form>

                </div>
                <div className="row">
                    <UserGitHub issues={this.props.issues} user={this.props.issues.owner}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        issues: state.issues
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadIssues}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(About);