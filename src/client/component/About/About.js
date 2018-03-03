import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadRepos, loadUser, resetRepos} from "../../actions/loadIssues";
//-------Components
import Search from './Search';
import Repos from "./Repos";
import {Profile} from "./Profile";
//-----------
let USER;

class About extends Component {

    componentDidMount() {
        USER = this.props.match.params.user;
        if (USER !== undefined) this.props.loadUser(USER);
    }

    getInfo() {
        this.props.resetRepos();
        this.props.loadUser(USER);
    }

    handleShow(e) {
        e.preventDefault();
        this.getInfo();
    }

    onKeyPress(target) {
        if (target.charCode === 13) {
            this.getInfo();
        }
    }

    onChangeInput(e) {
        USER = e.target.value;
    }

    getRepos(e) {
        e.preventDefault();
        this.props.loadRepos(USER);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Search
                        onChange={::this.onChangeInput}
                        submit={::this.handleShow}
                        user={USER}
                        onKeyPress={::this.onKeyPress}
                    />
                </div>
                <Profile user={this.props.user} getRepos={::this.getRepos}/>
                <Repos issues={this.props.issues} count={this.props.user.public_repos}/>
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
    return bindActionCreators({loadRepos, loadUser, resetRepos}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(About);