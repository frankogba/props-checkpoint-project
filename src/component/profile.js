import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { fullName, bio, profession, handleName, children } = props;
  return (
    <div style={{border: "1px solid black",  color: "blue", padding: "10px"}}>
      <img src={children} alt="profile" style={{width: "100px"}}/>
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>View Name</button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Frank Ogba",
  bio: "",
  profession: "",
  handleName: () => {}
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Profile;
