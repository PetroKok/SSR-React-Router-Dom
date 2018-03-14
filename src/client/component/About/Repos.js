import React, {Component} from 'react'
import  Loader  from '../Loader/Loader'

class Repos extends Component {

    showIssues() {
        if (this.props.issues === "LOADING") {
            return (
                <Loader/>
                )

        } else if (this.props.issues.length === 0) {
            return <h3 className="text-white">The user don't have repositories</h3>

        } else {
            return this.props.issues.map((issue, key) =>
                <li key={key} className="list-group-item opacity-background"><a href={issue.html_url}
                                                                                className="text-white text-justify">{key + 1}. {issue.name}</a>
                </li>
            )
        }
    }

    render() {
        return (

            <div className="col">
                <div className="mt-4">
                    {this.showIssues()}
                </div>
            </div>
        );
    }
}

export default Repos;