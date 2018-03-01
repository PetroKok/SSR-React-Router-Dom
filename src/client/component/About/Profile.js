import React from 'react'

const Profile = (props) => {

    return props.user.avatar_url ?
        <div className="row">
            <div className="col-md mt-3">
                <div className="row">
                    <img src={props.user.avatar_url} className="img-thumbnail avatar" height="50px" alt=""/>
                    <form className="form-group form-inline">
                        <button className="btn btn-primary ml-4 mt-4">FOLLOWERS <span
                            className="badge badge-light">{props.user.followers}</span></button>

                        <button className="btn btn-primary ml-4 mt-4">FOLLOWING <span
                            className="badge badge-light">{props.user.following}</span></button>

                        <button className="btn btn-primary ml-4 mt-4">REPOSITORIES <span
                            className="badge badge-light">{props.user.public_repos}</span></button>
                    </form>
                </div>
            </div>
        </div>
        : "Find user"

};

export default Profile;