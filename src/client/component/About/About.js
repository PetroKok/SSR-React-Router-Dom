import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadRepos,loadUser} from "../../actions/loadIssues";
import Profile from './Profile'
import UserGitHub from "./UserGitHub";

let USER;

class About extends Component {


    handleShow(e) {
        e.preventDefault();
        this.props.loadUser(USER);
    }
    sh(e)
    {
        e.preventDefault();
        console.log(this.props.user)
    }
    search()
    {
        return(
            <div className="row">
                <div className="md-2 mt-3 com-md-5">
                    <form className="form-inline form-group">
                        <input onChange={::this.onChangeInput} type="text" className="form-control"/>
                        <button onClick={::this.handleShow} className="btn btn-success ml-2">Confirm identity</button>
                        <button onClick={::this.sh} className="btn btn-success ml-2">SHOW</button>
                    </form>
                </div>
            </div>
        );
    }

    onChangeInput(e) {
        USER = e.target.value;
    }

    render() {
        return (
            <div className="container">
                {this.search()}
                <Profile>
                    this is the profile
                </Profile>
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