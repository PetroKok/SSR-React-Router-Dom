import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadRepos, loadUser} from "../../actions/loadIssues";
import Profile from './Profile'

let USER;

class About extends Component {


    handleShow(e) {
        e.preventDefault();
        this.props.loadUser(USER);
    }

    onChangeInput(e) {
        USER = e.target.value;
    }

    search() {
        return (
            <div className="row">
                <div className="md-2 mt-3 col-md-5">
                    <div className="row">
                        <form className="form-inline form-group">
                            <input onChange={::this.onChangeInput} type="text" className="form-control"/>
                            <button onClick={::this.handleShow} className="btn btn-success ml-2">Confirm identity</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                {this.search()}
                <Profile user={this.props.user}/>
                {/*<UserGitHub issues={this.props.issues}/>*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        issues: state.issues,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadRepos, loadUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(About);