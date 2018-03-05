import React from 'react'
import {Link} from 'react-router-dom'

export const Profile = (props) => {
    if (props.user === "LOADING") {
        return "LOADING...";
    } else if (props.user.message === "Not Found") {
        return props.user.message;
    } else if (props.user.name === undefined) {
        return "Find user";
    } else {
        return (
            <div className="col">
                <div className="text-center">
                        <img src={props.user.avatar_url} className="img-thumbnail avatar mt-2 text-center"
                             alt={props.user.name}/>
                    <h3>{props.user.login}</h3>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-primary max-width">FOLLOWERS <span
                            className="badge badge-light">{props.user.followers}</span></button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary max-width">FOLLOWING <span
                            className="badge badge-light">{props.user.following}</span></button>
                    </div>
                    <div className="col-md-4">
                        <Link onClick={props.getRepos} to={{ pathname: `/about/${props.user.login}/repos` }}
                                className="btn btn-primary max-width">REPOSITORIES <span
                            className="badge badge-light">{props.user.public_repos}</span></Link>
                    </div>
                </div>

            </div>
        );
    }
};