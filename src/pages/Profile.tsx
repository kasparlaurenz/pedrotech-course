import React, { useContext } from 'react';
import { AppContext, AppContextTypes } from '../App';
import ChangeProfile from '../components/ChangeProfile';

const Profile = () => {
  const { username, value1 } = useContext(AppContext) as AppContextTypes;
  return (
    <div>
      <h1>
        Profile of {username} {value1}
      </h1>
      <ChangeProfile />
    </div>
  );
};

export default Profile;
