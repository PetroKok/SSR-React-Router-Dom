import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadRepos, loadUser, resetRepos} from "../../actions/loadIssues";
import Repos from "./Repos";

let USER;

class About extends Component {


    handleShow(e) {
        e.preventDefault();
        this.props.resetRepos();
        this.props.loadUser(USER);
    }

    onChangeInput(e) {
        USER = e.target.value;
    }

    getRepos(e) {
        e.preventDefault();
        this.props.loadRepos(USER);
    }

    profile() {
        if (this.props.user.message === "Not Found") {
            return this.props.user.message;
        } else if (this.props.user.name === undefined) {
            return "Find user";
        } else {
            return (
                <div className="row">
                    <div className="col-md col-sm col-xl mt-3">
                        <div className="row">
                            <img src={this.props.user.avatar_url} className="img-thumbnail avatar"
                                 alt={this.props.user.name}/>
                            <form className="form-group form-inline">
                                <button className="btn btn-primary ml-4 mt-4">FOLLOWERS <span
                                    className="badge badge-light">{this.props.user.followers}</span></button>

                                <button className="btn btn-primary ml-4 mt-4">FOLLOWING <span
                                    className="badge badge-light">{this.props.user.following}</span></button>

                                <button onClick={::this.getRepos}
                                        className="btn btn-primary ml-4 mt-4">REPOSITORIES<span
                                    className="badge badge-light">{this.props.user.public_repos}</span></button>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }

    search() {
        return (
            <div className="row">
                <div className="md-2 mt-3 col-md-5 col-sm-5 col-xl-5">
                    <div className="row">
                        <form className="form-inline form-group">
                            <input onChange={::this.onChangeInput} type="text" className="form-control"/>
                            <button onClick={::this.handleShow} className="btn btn-success ml-2">Confirm identity
                            </button>
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
                {this.profile()}
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