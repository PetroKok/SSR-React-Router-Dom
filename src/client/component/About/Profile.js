import React from 'react'

const Profile = (props) =>
{
  return(
      <div className="row">
          Profile, {props.children}
      </div>
  )
};
export default Profile;