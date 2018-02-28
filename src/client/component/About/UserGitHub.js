import React, {Component} from 'react'

class UserGitHub extends Component {
    showIssues() {
        console.log(this.props.issues);
        if (this.props.issues === "LOADING") {
            return <h2>Loading</h2>

        } else if (this.props.issues === "ERROR") {
            return <h3>Oops, the server is not response</h3>

        } else if (this.props.issues.length === 0) {
            return <h3>There is no one repository</h3>

        } else if (this.props.issues.message) {
            return <h3>{this.props.issues.message}</h3>;
        } else {
            return this.props.issues.map((issue, key) =>
                <li key={key} className="list-group-item"><a href={issue.html_url}>{issue.name}</a></li>
            )
        }
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.showIssues()}
                </ul>
            </div>
        );
    }
}

export default UserGitHub;