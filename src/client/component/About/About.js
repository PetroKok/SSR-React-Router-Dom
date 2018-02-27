import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadIssues} from "../../actions/loadIssues";


class About extends Component {

    handleClick()
    {
        this.props.loadIssues();
    }
    render() {
        return (
            <div>
                <button onClick={::this.handleClick} className="btn btn-success btn-sm">Load issues</button>
                <ul>
                    {this.props.issues.map((issue, key) =>
                    <li key={key}>{issue.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        issues: state.issues
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadIssues}, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(About);