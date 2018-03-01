import React, {Component} from 'react'

class UserGitHub extends Component {

    showIssues() {
        if (this.props.issues === "LOADING") {
            return <h2>Loading</h2>

        } else if (this.props.issues.message) {
            return <h3>THE USER IS {this.props.issues.message}</h3>

        } else if (this.props.issues.length === 0) {
            return <h3>The user don't have repositories</h3>

        } else {
            return this.props.issues.reverse().map((issue, key) =>
                <li key={key} className="list-group-item"><a href={issue.html_url}>{issue.name}</a></li>
            )
        }
    }

    getUser() {
        return (
            <div className="row mt-3">
                <img src="user" alt="avatar_url"/>
                <p className="text-justify ml-5">Followers</p>
                <p className="text-justify ml-5">Following</p>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.issues ? this.getUser() : "Find user"}
                <div className="row mt-3">
                    <ul className="list-group">
                        {this.showIssues()}
                    </ul>
                </div>
            </div>

        );
    }
}

export default UserGitHub;