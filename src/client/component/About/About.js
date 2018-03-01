import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadIssues} from "../../actions/loadIssues";
import UserGitHub from "./UserGitHub";

let user;

class About extends Component {


    handleShow(e) {
        e.preventDefault();
        this.props.loadIssues(user);
    }

    onChangeInput(e) {
        user = e.target.value;
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="md-2 mt-3 com-md-5">
                        <form className="form-inline form-group">
                            <input onChange={::this.onChangeInput} type="text" className="form-control"/>
                            <button onClick={::this.handleShow} className="btn btn-success ml-2">Confirm identity
                            </button>
                        </form>
                    </div>
                </div>

                <UserGitHub issues={this.props.issues} user={this.props.issues.owner}/>

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