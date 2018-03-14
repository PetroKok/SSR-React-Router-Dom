import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {loadRepos, loadUser, resetRepos} from "../../actions/loadIssues";
//-------Components
import Repos from "./Repos";
import {Profile} from "./Profile";

//-----------

class About extends Component {

    constructor() {
        super();
        this.state = {
            linkToUser: null
        };

    }

    componentWillMount() {
        this.getPropsNow(this.props.match.params);
        console.log(this.props)
    }

    componentWillReceiveProps(nextProps){
        this.getPropsNow(nextProps.match.params);
    }

    getPropsNow(p) {
        if(this.state.linkToUser !== p.user ){
            this.setState({linkToUser: p.user});
            if (p.user !== undefined) this.props.loadUser(p.user);
        }
    }

    getInfo() {

        this.props.resetRepos();
        this.props.loadUser(this.state.linkToUser);
        console.log("SUBMIT:  ", this.state.linkToUser);
    }

    handleShow() {
        this.getInfo();
    }

    onChangeInput(e) {
        this.setState({linkToUser: e.target.value});
    }

    getRepos() {
        console.log(this.state.linkToUser);
        this.props.loadRepos(this.state.linkToUser);
    }

    render() {
        return (
            <div className="container">
                <div className="col">
                    <div className="row mr-lg-2 md-2 mt-3">
                        <div className="col input-group">
                            <input onChange={::this.onChangeInput} type="text" className="form-control mr-2"
                                   placeholder="Find someone on GitHub"/>
                            <div className="input-group-append">
                                <Link onClick={::this.handleShow} className="btn btn-success"
                                      to={{pathname: `/github/${this.state.linkToUser}`}}>
                                    OK
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path="/github/:user"
                       render={() => <Profile user={this.props.user} getRepos={::this.getRepos}/>}/>
                <Route path="/github/:user/:repos" render={() => <Repos issues={this.props.issues}/>}/>

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