import React, {Component} from 'react'

class Repos extends Component {

    showIssues() {
        if (this.props.issues === "LOADING") {
            return <h2>LOADING...</h2>

        } else if (this.props.count === 0) {
            return <h3>The user don't have repositories</h3>

        } else {
            return this.props.issues.reverse().map((issue, key) =>
                <li key={key} className="list-group-item">{key}<a href={issue.html_url}>{issue.name}</a></li>
            )
        }
    }

    render() {
        return (
            <div className="row">
                    <div className="mt-4">
                        {this.showIssues()}
                    </div>
            </div>
        );
    }
}
export default Repos;