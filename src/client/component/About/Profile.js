import React from 'react'

export const Profile = (props) => {
    if (props.user === "LOADING") {
        return "LOADING...";
    } else if (props.user.message === "Not Found") {
        return props.user.message;
    } else if (props.user.name === undefined) {
        return "Find user";
    } else {
        return (
            <div className="row">
                {/*<div className="col-lg-12 col-md-12 col-sm-12 row mb-3">*/}
                    {/*<img src={props.user.avatar_url} className="img-thumbnail avatar mr-2 text-center"*/}
                         {/*alt={props.user.name}/>*/}
                {/*</div>*/}
                <div className="col row">
                    <button className="btn btn-primary max-width">FOLLOWERS <span
                        className="badge badge-light">{props.user.followers}</span></button>
                </div>
                <div className="col row">
                    <button className="btn btn-primary max-width">FOLLOWING <span
                        className="badge badge-light">{props.user.following}</span></button>
                </div>
                <div className="col row">
                    <button onClick={props.getRepos}
                            className="btn btn-primary max-width">REPOSITORIES <span
                        className="badge badge-light">{props.user.public_repos}</span></button>
                </div>
            </div>
        );
    }
};