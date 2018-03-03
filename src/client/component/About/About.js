import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadRepos, loadUser, resetRepos} from "../../actions/loadIssues";
import Repos from "./Repos";

let USER;

class About extends Component {

    componentDidMount() {
        USER = this.props.match.params.user;
        if (USER !== undefined) this.props.loadUser(USER);
    }

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
        if (this.props.user === "LOADING") {
            return "LOADING...";
        } else if (this.props.user.message === "Not Found") {
            return this.props.user.message;
        } else if (this.props.user.name === undefined) {
            return "Find user";
        } else {
            return (
                <div className="row mt-3">
                    <img src={this.props.user.avatar_url} className="img-thumbnail avatar mr-2 text-center"
                         alt={this.props.user.name}/>
                    <div className="col mt-3">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-primary max-width">FOLLOWERS <span
                                    className="badge badge-light">{this.props.user.followers}</span></button>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary max-width">FOLLOWING <span
                                    className="badge badge-light">{this.props.user.following}</span></button>
                            </div>
                            <div className="col">
                                <button onClick={::this.getRepos}
                                        className="btn btn-primary max-width">REPOSITORIES <span
                                    className="badge badge-light">{this.props.user.public_repos}</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    search() {
        return (
            <div className="row">
                <div className="md-2 mt-3 col-md col-sm col-xl mr-lg-2">
                    <div className="row">
                        <form className="form-inline form-group">
                            <input onChange={::this.onChangeInput} type="text" className="form-control mr-2"/>
                            <button onClick={::this.handleShow} className="btn btn-success">
                                <Link to={{pathname: `/about/${USER}`}}>Confirm identity</Link>
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
                <div className="col">
                    {this.search()}
                    {this.profile()}
                    <Repos issues={this.props.issues} count={this.props.user.public_repos}/>
                </div>
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